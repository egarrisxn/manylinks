import { notFound } from "next/navigation";
import { catchError } from "@/lib/utils";
import client from "@/lib/db";
import DataDisplay from "@/components/data-display";
import { BACKGROUND_OPTIONS } from "@/components/background-options";

import type { Metadata } from "next";
import type { DataDisplayProps } from "@/types";

async function getProfileData(
  username: string
): Promise<DataDisplayProps["account"] | null> {
  try {
    const pagesCollection = client.db().collection("pages");
    const pageData = await pagesCollection.findOne({ username });

    if (!pageData) return null;

    return {
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
      ls: Array.isArray(pageData.extraLinks)
        ? pageData.extraLinks.map((link: any) => ({
            id: link.id,
            icon: link.icon,
            label: link.label,
            url: link.url,
          }))
        : [],
    };
  } catch (error) {
    catchError(error);
    return null;
  }
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ username: string }>;
}): Promise<Metadata> {
  const { username } = await params;
  const data = await getProfileData(username);

  if (!data) return {};

  return {
    title: `${data.name} | ManyLinks`,
    description: data.description,
    openGraph: {
      title: `${data.name} | ManyLinks`,
      description: data.description,
      images: [`/og/${username}`],
    },
    twitter: {
      card: "summary_large_image",
      title: `${data.name} | ManyLinks`,
      description: data.description,
      images: [`/og/${username}`],
    },
  };
}

export default async function UsernamePage({
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
        <DataDisplay account={data} />
      </div>
    </>
  );
}
