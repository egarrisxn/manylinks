export interface DataProps {
  image: string; // Image URL
  name: string; // Name
  username: string; // Username / URL Endpoint
  description: string; // Description
  background: string; // Background Color
  email: string; // Email
  github: string; // GitHub URL
  linkedin: string; // LinkedIn URL
  youtube: string; // YouTube URL
  bluesky: string; // Bluesky URL
  twitter: string; // Twitter URL
  spotify: string; // Spotify Url
  discord: string; // Discord URL
  instagram: string; // Instagram URL
  threads: string; // Threads URL
  peerlist: string; // Peerlist URL
  mastodon: string; // Mastadon URL
  facebook: string; // Facebook URL
  tiktok: string; // TikTok URL
  ls: ExtraLinkProps[]; // Array of extra links
}

export interface ExtraLinkProps {
  id: number;
  icon: string; // Icon
  label: string; // Label
  url: string; // URL
}

export interface DisplayDataProps {
  account: DataProps; // Account
}

export const socialLinksData = {
  email: "email",
  github: "github",
  linkedin: "linkedin",
  youtube: "youtube",
  bluesky: "bluesky",
  twitter: "twitter",
  spotify: "spotify",
  discord: "discord",
  instagram: "instagram",
  threads: "threads",
  peerlist: "peerlist",
  mastodon: "mastadon",
  facebook: "facebook",
  tiktok: "tiktok",
};

export interface SocialLinkProviderProps {
  name: string;
  icon: string;
  id: keyof typeof socialLinksData;
}
