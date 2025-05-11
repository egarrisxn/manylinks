export interface DataProps {
  image: string;
  name: string;
  username: string;
  description: string;
  background: string;
  email: string;
  github: string;
  linkedin: string;
  youtube: string;
  bluesky: string;
  twitter: string;
  spotify: string;
  discord: string;
  instagram: string;
  threads: string;
  peerlist: string;
  mastodon: string;
  facebook: string;
  tiktok: string;
  ls: ExtraLinkProps[];
}

export interface ExtraLinkProps {
  id: number;
  icon: string;
  label: string;
  url: string;
}

export interface DataDisplayProps {
  account: DataProps;
}

export const socialData = {
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

export interface SocialLinksProps {
  name: string;
  icon: string;
  id: keyof typeof socialData;
}

export interface DataContextType {
  data: DataProps;
  isLoaded: boolean;
  addNewData: (userData: ExtraLinkProps) => void;
  updateIndex: (updatedIndex: ExtraLinkProps[]) => void;
  updateProfileInfo: (name: string, value: string) => void;
  updateSocialInfo: (name: string, value: string) => void;
  updateAdditionalInfo: (updatedIndex: ExtraLinkProps[]) => void;
  showSample: () => void;
  selectBackground: (bgcode: string) => void;
  savePageData: () => Promise<boolean | { error: string }>;
  loadPageData: () => Promise<void>;
}
