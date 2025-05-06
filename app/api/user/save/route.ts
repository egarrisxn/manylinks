import { NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import client from "@/lib/db";
import { DataProps } from "@/types";

export async function POST(req: Request) {
  const session = await auth();

  if (!session?.user?.id) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }

  try {
    const userId = session.user.id;
    const userData: DataProps = await req.json();
    const pagesCollection = client.db().collection("pages");

    const documentToSave = {
      userId: userId,
      profileUrl: userData.i,
      name: userData.n,
      username: userData.u,
      description: userData.d,
      email: userData.e,
      github: userData.gh,
      linkedin: userData.l,
      youtube: userData.y,
      bluesky: userData.bl,
      twitter: userData.t,
      instagram: userData.ig,
      telegram: userData.tg,
      whatsapp: userData.w,
      facebook: userData.f,
      background: userData.bg,
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
