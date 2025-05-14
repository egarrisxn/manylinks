import { ImageResponse } from "@vercel/og";
import client from "@/lib/db";

export const runtime = "nodejs";

export async function GET(
  req: Request,
  { params }: { params: Promise<{ username: string }> }
) {
  const { username } = await params;

  const pagesCollection = client.db().collection("pages");
  const pageData = await pagesCollection.findOne({ username });

  if (!pageData) {
    return new Response("Not found", { status: 404 });
  }

  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          height: "100%",
          backgroundColor: "#f9f9f9",
          textAlign: "center",
          paddingTop: "125px",
          paddingBottom: "275px",
          paddingLeft: "300px",
          paddingRight: "300px",
          fontFamily: "system-ui, sans-serif",
          overflow: "hidden",
        }}
      >
        {pageData.profileUrl && (
          <img
            src={pageData.profileUrl}
            alt='Profile'
            style={{
              borderRadius: "50%",
              width: 120,
              height: 120,
              objectFit: "cover",
              border: "4px solid black",
            }}
          />
        )}
        <h1 style={{ fontSize: 36, marginTop: 20, fontWeight: 900 }}>
          {pageData.name}
        </h1>
        <p
          style={{
            fontSize: 24,
            marginTop: 32,
            fontWeight: 600,
            color: "#333",
          }}
        >
          {pageData.description || "Visit my ManyLinks page!"}
        </p>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
