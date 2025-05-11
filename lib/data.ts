import { catchError } from "./utils";

import type { DataProps, SocialLinksProps } from "@/types";

export const initialData: DataProps = {
  name: "",
  image: "",
  username: "",
  description: "",
  background: "",
  email: "",
  github: "",
  linkedin: "",
  youtube: "",
  bluesky: "",
  twitter: "",
  spotify: "",
  discord: "",
  instagram: "",
  threads: "",
  peerlist: "",
  mastodon: "",
  facebook: "",
  tiktok: "",
  ls: [],
};

export const sampleData: DataProps = {
  name: "Jane Doe",
  image: "https://manylinks.vercel.app/user.png",
  username: "janedoe",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent egestas ullamcorper vulputate. Curabitur finibus lorem et dolor lobortis facilisis.",
  background: "#4F4F4F",
  email: "jan_doe@email.com",
  github: "https://github.com/jane_d0e",
  linkedin: "https://linkedin.com/in/jane-d0e",
  youtube: "https://youtube.com/@jane_d0e",
  bluesky: "https://bsky.app/profile/jane_d0e.bsky.social",
  twitter: "https://twitter.com/jane_d0e",
  spotify: "https://spotify.com/jae_d0e",
  discord: "https://discord.com/channels/@jane_d0e",
  instagram: "https://instagram.com/jane__d0e",
  threads: "https://threads.com/@jane_d0e",
  peerlist: "https://peerlist.io/jan_d0e",
  mastodon: "https://mastodon.social/@jane_d0e",
  facebook: "https://facebook.com/janed0e",
  tiktok: "https://tiktok.com/jae_d0e",
  ls: [
    {
      id: 1,
      icon: "tabler:world-www",
      label: "Website",
      url: "https://manylinks.vercel.app",
    },
    {
      id: 2,
      icon: "tabler:user-edit",
      label: "Blog",
      url: "https://manylinks.vercel.app",
    },
    {
      id: 3,
      icon: "tabler:image-in-picture",
      label: "Portfolio",
      url: "https://manylinks.vercel.app",
    },
  ],
};

export const saveUserData = async (data: DataProps) => {
  try {
    const response = await fetch("/api/user/save", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      const errorData = await response.json();
      return { error: errorData?.message || "Failed to save data." };
    }

    return { success: true };
  } catch (error: unknown) {
    catchError(error);
    return { error: "An unexpected error occurred." };
  }
};

export const loadUserData = async () => {
  try {
    const response = await fetch("/api/user/load");

    if (!response.ok) {
      throw new Error("Failed to load user data");
    }

    return await response.json();
  } catch (error: unknown) {
    catchError(error);
    return null;
  }
};

export const socialLinks: SocialLinksProps[] = [
  { name: "email", icon: "iconoir:mail", id: "email" },
  { name: "github", icon: "iconoir:github", id: "github" },
  { name: "linkedin", icon: "iconoir:linkedin", id: "linkedin" },
  { name: "youtube", icon: "iconoir:youtube", id: "youtube" },
  { name: "bluesky", icon: "proicons:bluesky", id: "bluesky" },
  { name: "twitter", icon: "iconoir:twitter", id: "twitter" },
  { name: "spotify", icon: "iconoir:spotify", id: "spotify" },
  { name: "discord", icon: "iconoir:discord", id: "discord" },
  { name: "instagram", icon: "iconoir:instagram", id: "instagram" },
  { name: "threads", icon: "iconoir:threads", id: "threads" },
  { name: "peerlist", icon: "iconoir:peerlist", id: "peerlist" },
  { name: "mastodon", icon: "iconoir:mastodon", id: "mastodon" },
  { name: "facebook", icon: "iconoir:facebook", id: "facebook" },
  { name: "tiktok", icon: "iconoir:tiktok", id: "tiktok" },
];
