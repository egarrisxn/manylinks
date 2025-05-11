import { NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { catchError } from "@/lib/utils";
import client from "@/lib/db";

import type { DataProps } from "@/types";

const rateLimitStore = new Map<string, { count: number; lastReset: number }>();
const RATE_LIMIT = 20;
const WINDOW = 1000 * 60 * 10;

export async function POST(req: Request) {
  const session = await auth();
  const ip = req.headers.get("x-forwarded-for") || "unknown";

  if (!session?.user?.id) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }

  // Rate limiting (in-memory)
  const now = Date.now();
  const rate = rateLimitStore.get(ip);
  if (rate) {
    if (now - rate.lastReset > WINDOW) {
      rateLimitStore.set(ip, { count: 1, lastReset: now });
    } else {
      if (rate.count >= RATE_LIMIT) {
        return NextResponse.json(
          { message: "Too many requests, slow down." },
          { status: 429 }
        );
      }
      rate.count += 1;
    }
  } else {
    rateLimitStore.set(ip, { count: 1, lastReset: now });
  }

  try {
    const userId = session.user.id;
    const userData: DataProps = await req.json();
    const pagesCollection = client.db().collection("pages");

    // 1. Require username
    if (!userData.username || typeof userData.username !== "string") {
      return NextResponse.json(
        { message: "Username is required." },
        { status: 400 }
      );
    }

    // 2. Enforce extraLinks limit
    if (userData.ls.length > 50) {
      return NextResponse.json(
        { message: "You can only have up to 50 extra links." },
        { status: 400 }
      );
    }

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

    await pagesCollection.updateOne(
      { userId },
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
  } catch (error: any) {
    // Handle MongoDB duplicate key error
    if (error?.code === 11000 && error?.keyPattern?.username) {
      return NextResponse.json(
        { message: "Username already taken." },
        { status: 409 }
      );
    }

    catchError(error);
    return NextResponse.json(
      { message: "Failed to save data" },
      { status: 500 }
    );
  }
}

// import { NextResponse } from "next/server";
// import { auth } from "@/lib/auth";
// import { catchError } from "@/lib/utils";
// import client from "@/lib/db";

// import type { DataProps } from "@/types";

// export async function POST(req: Request) {
//   const session = await auth();

//   if (!session?.user?.id) {
//     return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
//   }

//   try {
//     const userId = session.user.id;
//     const userData: DataProps = await req.json();
//     const pagesCollection = client.db().collection("pages");

//     const existingPage = await pagesCollection.findOne({ userId });
//     const usernameChanged = existingPage?.username !== userData.username;

//     if (usernameChanged && userData.username) {
//       const conflictingPage = await pagesCollection.findOne({
//         username: userData.username,
//       });
//       if (conflictingPage && conflictingPage.userId !== userId) {
//         return NextResponse.json(
//           { message: "Username already taken." },
//           { status: 409 }
//         );
//       }
//     }

//     const documentToSave = {
//       userId: userId,
//       profileUrl: userData.image,
//       name: userData.name,
//       username: userData.username,
//       description: userData.description,
//       background: userData.background,
//       email: userData.email,
//       github: userData.github,
//       linkedin: userData.linkedin,
//       youtube: userData.youtube,
//       bluesky: userData.bluesky,
//       twitter: userData.twitter,
//       spotify: userData.spotify,
//       discord: userData.discord,
//       instagram: userData.instagram,
//       threads: userData.threads,
//       peerlist: userData.peerlist,
//       mastodon: userData.mastodon,
//       facebook: userData.facebook,
//       tiktok: userData.tiktok,
//       extraLinks: userData.ls.map((link) => ({
//         id: link.id,
//         icon: link.icon,
//         label: link.label,
//         url: link.url,
//       })),
//       updatedAt: new Date(),
//     };

//     const result = await pagesCollection.updateOne(
//       { userId: userId },
//       {
//         $set: documentToSave,
//         $setOnInsert: {
//           createdAt: new Date(),
//         },
//       },
//       { upsert: true }
//     );

//     return NextResponse.json(
//       { message: "Data saved successfully!" },
//       { status: 200 }
//     );
//   } catch (error) {
//     catchError(error);
//     return NextResponse.json(
//       { message: "Failed to save data" },
//       { status: 500 }
//     );
//   }
// }
