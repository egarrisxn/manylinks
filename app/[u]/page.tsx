import { notFound } from "next/navigation";
import client from "@/lib/db";
import { BACKGROUND_OPTIONS } from "@/components/background-snippets";
import DisplayData from "@/components/display-data";
import LoadingPage from "../loading";

import type { DisplayDataProps } from "@/types";

const getProfileData = async (
  u: string
): Promise<DisplayDataProps["acc"] | null> => {
  try {
    const pagesCollection = client.db().collection("pages");
    const pageData = await pagesCollection.findOne({ username: u });

    if (!pageData) {
      return null;
    }

    const formattedData: DisplayDataProps["acc"] = {
      image: pageData.profileUrl || "",
      name: pageData.name || "",
      username: pageData.username || "",
      description: pageData.description || "",
      bg: pageData.bg || "",
      em: pageData.email || "",
      gh: pageData.github || "",
      li: pageData.linkedin || "",
      yo: pageData.youtube || "",
      bl: pageData.bluesky || "",
      tw: pageData.twitter || "",
      ig: pageData.instagram || "",
      fa: pageData.facebook || "",
      di: pageData.discord || "",
      th: pageData.threads || "",
      pe: pageData.peerlist || "",
      ma: pageData.mastodon || "",
      ti: pageData.tiktok || "",
      sp: pageData.spotify || "",
      ls:
        pageData.extraLinks.map(
          (link: { id: any; icon: any; label: any; url: any }) => ({
            id: link.id,
            i: link.icon,
            l: link.label,
            u: link.url,
          })
        ) || [],
    };

    return formattedData;
  } catch (error) {
    console.error("Error fetching user link data:", error);
    return null;
  }
};

export default async function UsersProfilePage({
  params,
}: {
  params: Promise<{ u: string }>;
}) {
  const { u } = await params;
  const data = await getProfileData(u);

  if (!data) {
    notFound();
  }

  return (
    <>
      <div className='flex-1 pt-[10vh]'>
        <div className='fixed top-0 left-0 z-[-10] size-full'>
          {data.bg &&
            BACKGROUND_OPTIONS.find((option) => option.code === data.bg)
              ?.component}
        </div>
        <div className='p-2 pt-10'>
          {data ? <DisplayData acc={data} /> : <LoadingPage />}
        </div>
      </div>
      <footer className='absolute bottom-0 z-10 mx-auto flex w-full items-center justify-center py-2 text-sm'>
        <a
          href='https://manylinks.vercel.app/'
          target='_blank'
          className='text-zinc-700 hover:text-zinc-900'
        >
          Made with ManyLinks
        </a>
      </footer>
    </>
  );
}
