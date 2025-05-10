import { NextResponse } from "next/server";
import { auth } from "@/lib/auth";
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
      background: userData.bg,
      email: userData.em,
      github: userData.gh,
      linkedin: userData.li,
      youtube: userData.yo,
      bluesky: userData.bl,
      twitter: userData.tw,
      spotify: userData.sp,
      discord: userData.di,
      instagram: userData.ig,
      threads: userData.th,
      peerlist: userData.pe,
      mastodon: userData.ma,
      facebook: userData.fa,
      tiktok: userData.ti,
      extraLinks: userData.ls.map((link) => ({
        id: link.id,
        icon: link.i,
        label: link.l,
        url: link.u,
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
    console.error("Error saving data:", error);
    return NextResponse.json(
      { message: "Failed to save data" },
      { status: 500 }
    );
  }
}
