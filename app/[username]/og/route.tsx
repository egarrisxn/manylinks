import { ImageResponse } from "next/og";
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
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          backgroundImage: "linear-gradient(to top, #dfe9f3 0%, white 100%)",
        }}
      >
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            padding: "0px 50px 50px 50px",
            width: "auto",
            maxWidth: 550,
            textAlign: "center",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              paddingBottom: "20px",
            }}
          >
            {pageData.profileUrl && (
              <img
                src={pageData.profileUrl}
                alt='Profile'
                style={{
                  borderRadius: "50%",
                  width: 100,
                  height: 100,
                  objectFit: "cover",
                  border: "2px solid black",
                }}
              />
            )}
          </div>
          <div
            style={{
              fontWeight: 1000,
              fontSize: 68,
              letterSpacing: -5,
              lineHeight: 1.1,
              paddingBottom: "20px",
            }}
          >
            {pageData.name}
          </div>
          <div
            style={{
              fontWeight: 700,
              fontSize: 20,
              letterSpacing: -1,
              lineHeight: 1.4,
            }}
          >
            {pageData.description || "Visit my ManyLinks page!"}
          </div>
        </div>
        <div
          style={{
            right: 40,
            top: 40,
            position: "absolute",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <div
            style={{
              fontWeight: 1000,
              fontSize: 24,
              letterSpacing: -2,
              lineHeight: 1,
            }}
          >
            Many
          </div>
          <img
            src='https://manylinks.vercel.app/icon.png'
            alt='ManyLinks Icon'
            style={{
              borderRadius: "50%",
              width: 24,
              height: 24,
              objectFit: "cover",
            }}
          />
          <div
            style={{
              fontWeight: 1000,
              fontSize: 24,
              letterSpacing: -2,
              lineHeight: 1,
            }}
          >
            Links
          </div>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
