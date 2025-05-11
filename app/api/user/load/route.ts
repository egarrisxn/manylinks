import { NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import client from "@/lib/db";

export async function GET() {
  const session = await auth();

  if (!session?.user?.id) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }

  try {
    const pagesCollection = client.db().collection("pages");
    const page = await pagesCollection.findOne({ userId: session.user.id });

    if (!page) {
      return NextResponse.json({ message: "No data found" }, { status: 404 });
    }

    return NextResponse.json(page);
  } catch (error) {
    return NextResponse.json(
      { message: "Failed to load data" },
      { status: 500 }
    );
  }
}
