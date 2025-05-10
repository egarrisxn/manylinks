import { notFound } from "next/navigation";
import { catchError } from "@/lib/utils";
import client from "@/lib/db";
import Loading from "@/app/loading";
import DisplayData from "@/components/display-data";
import { BACKGROUND_OPTIONS } from "@/components/background-snippets";

import type { DisplayDataProps } from "@/types";

const getProfileData = async (
  username: string
): Promise<DisplayDataProps["account"] | null> => {
  try {
    const pagesCollection = client.db().collection("pages");
    const pageData = await pagesCollection.findOne({ username: username });

    if (!pageData) {
      return null;
    }

    const formattedData: DisplayDataProps["account"] = {
      image: pageData.profileUrl || "",
      name: pageData.name || "",
      username: pageData.username || "",
      description: pageData.description || "",
      background: pageData.background || "",
      email: pageData.email || "",
      github: pageData.github || "",
      linkedin: pageData.linkedin || "",
      youtube: pageData.youtube || "",
      bluesky: pageData.bluesky || "",
      twitter: pageData.twitter || "",
      spotify: pageData.spotify || "",
      discord: pageData.discord || "",
      instagram: pageData.instagram || "",
      threads: pageData.threads || "",
      peerlist: pageData.peerlist || "",
      mastodon: pageData.mastodon || "",
      facebook: pageData.facebook || "",
      tiktok: pageData.tiktok || "",
      ls:
        pageData.extraLinks.map(
          (link: { id: any; icon: any; label: any; url: any }) => ({
            id: link.id,
            icon: link.icon,
            label: link.label,
            url: link.url,
          })
        ) || [],
    };

    return formattedData;
  } catch (error) {
    catchError(error);
    return null;
  }
};

export default async function UsersProfilePage({
  params,
}: {
  params: Promise<{ username: string }>;
}) {
  const { username } = await params;
  const data = await getProfileData(username);

  if (!data) {
    notFound();
  }

  const selectedBgOption = data
    ? BACKGROUND_OPTIONS.find((option) => option.code === data.background)
    : null;

  const selectedBgComponent = selectedBgOption
    ? selectedBgOption.component
    : null;

  return (
    <>
      <div className='fixed top-0 left-0 z-[-10] size-full'>
        {selectedBgComponent}
      </div>
      <div className='hide_scrollbar p-2 pt-10'>
        {data ? <DisplayData account={data} /> : <Loading />}
      </div>
    </>
  );
}
