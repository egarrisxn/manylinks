export interface DataProps {
  i: string; // Image URL
  n: string; // Name
  u: string; // Username / URL Endpoint
  d: string; // Description
  e: string; // Email
  gh: string; // GitHub URL
  l: string; // LinkedIn URL
  y: string; // YouTube URL
  bl: string; // Bluesky URL
  t: string; // Twitter URL
  ig: string; // Instagram URL
  w: string; // WhatsApp URL
  tg: string; // Telegram URL
  f: string; // Facebook URL
  bg: string; // Background Color
  ls: ExtraLinkProps[]; // Array of extra links
}

export interface ExtraLinkProps {
  id: number;
  i: string; // Icon identifier
  l: string; // Label
  u: string; // URL
}

export interface DisplayDataProps {
  acc: DataProps; // Account
}

export const socialLinksData = {
  e: "email",
  gh: "github",
  l: "linkedin",
  y: "youtube",
  bl: "bluesky",
  t: "twitter",
  ig: "instagram",
  w: "whatsapp",
  tg: "telegram",
  f: "facebook",
};

export interface SocialLinkProviderProps {
  name: string;
  icon: string;
  id: keyof typeof socialLinksData;
}
