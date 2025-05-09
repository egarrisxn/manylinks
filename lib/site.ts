// Internal API Requests
export const BASE_URL =
  process.env.NODE_ENV === "development"
    ? "http://localhost:3000"
    : "https://manylinks.vercel.app";

// SEO & Metadata
export const SITE_URL =
  process.env.NODE_ENV === "development"
    ? "http://localhost:3000"
    : (process?.env?.NEXT_PUBLIC_SITE_URL ??
      process?.env?.NEXT_PUBLIC_VERCEL_URL ??
      "https://manylinks.vercel.app");

export const SITE_DATA: {
  title: string;
  description: string;
  url: string;
  og: string;
  alt: string;
  handle: string;
  locale: string;
} = {
  title: "ManyLinks",
  description: "One Page. Many Links!",
  url: SITE_URL,
  og: `${SITE_URL}/og.png`,
  alt: "The display image for Manylinks, which includes a 3-colored icon and basic white text for a logo.",
  handle: "@eg__xo",
  locale: "en_US",
};

export const imageUrls: string[] = [
  "/images/1.png",
  "/images/2.png",
  "/images/3.png",
  "/images/4.png",
];
