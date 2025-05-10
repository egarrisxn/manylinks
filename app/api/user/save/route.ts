import { NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { catchError } from "@/lib/utils";
import client from "@/lib/db";

import type { DataProps } from "@/types";

export async function POST(req: Request) {
  const session = await auth();

  if (!session?.user?.id) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }

  try {
    const userId = session.user.id;
    const userData: DataProps = await req.json();
    const pagesCollection = client.db().collection("pages");

    const existingPage = await pagesCollection.findOne({ userId });
    const usernameChanged = existingPage?.username !== userData.username;

    if (usernameChanged && userData.username) {
      const conflictingPage = await pagesCollection.findOne({
        username: userData.username,
      });
      if (conflictingPage && conflictingPage.userId !== userId) {
        return NextResponse.json(
          { message: "Username already taken." },
          { status: 409 }
        );
      }
    }

    const documentToSave = {
      userId: userId,
      profileUrl: userData.image,
      name: userData.name,
      username: userData.username,
      description: userData.description,
      background: userData.background,
      email: userData.email,
      github: userData.github,
      linkedin: userData.linkedin,
      youtube: userData.youtube,
      bluesky: userData.bluesky,
      twitter: userData.twitter,
      spotify: userData.spotify,
      discord: userData.discord,
      instagram: userData.instagram,
      threads: userData.threads,
      peerlist: userData.peerlist,
      mastodon: userData.mastodon,
      facebook: userData.facebook,
      tiktok: userData.tiktok,
      extraLinks: userData.ls.map((link) => ({
        id: link.id,
        icon: link.icon,
        label: link.label,
        url: link.url,
      })),
      updatedAt: new Date(),
    };

    const result = await pagesCollection.updateOne(
      { userId: userId },
      {
        $set: documentToSave,
        $setOnInsert: {
          createdAt: new Date(),
        },
      },
      { upsert: true }
    );

    return NextResponse.json(
      { message: "Data saved successfully!" },
      { status: 200 }
    );
  } catch (error) {
    catchError(error);
    return NextResponse.json(
      { message: "Failed to save data" },
      { status: 500 }
    );
  }
}
