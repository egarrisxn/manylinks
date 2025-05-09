export interface DataProps {
  image: string; // Image URL
  name: string; // Name
  username: string; // Username / URL Endpoint
  description: string; // Description
  bg: string; // Background Color
  em: string; // Email
  gh: string; // GitHub URL
  li: string; // LinkedIn URL
  yo: string; // YouTube URL
  bl: string; // Bluesky URL
  tw: string; // Twitter URL
  ig: string; // Instagram URL
  fa: string; // Facebook URL
  di: string; // Discord URL
  th: string; // Threads URL
  pe: string; // Peerlist URL
  ma: string; // Mastadon URL
  ti: string; // TikTok URL
  sp: string; // Spotify Url

  ls: ExtraLinkProps[]; // Array of extra links
}

export interface ExtraLinkProps {
  id: number;
  i: string; // Icon
  l: string; // Label
  u: string; // URL
}

export interface DisplayDataProps {
  acc: DataProps; // Account
}

export const socialLinksData = {
  em: "email",
  gh: "github",
  li: "linkedin",
  yo: "youtube",
  bl: "bluesky",
  tw: "twitter",
  ig: "instagram",
  fa: "facebook",
  di: "discord",
  th: "threads",
  pe: "peerlist",
  ma: "mastadon",
  ti: "tiktok",
  sp: "spotify",
};

export interface SocialLinkProviderProps {
  name: string;
  icon: string;
  id: keyof typeof socialLinksData;
}
