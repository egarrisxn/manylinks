import { notFound } from "next/navigation";
import client from "@/lib/db";
import { BACKGROUND_OPTIONS } from "@/components/backgrounds/background-snippets";
import ThemeSelector from "@/components/buttons/theme-selector";
import DisplayData from "@/components/display-data";
import DataLoading from "../loading";
import { DisplayDataProps } from "@/types";

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
      i: pageData.profileUrl || "",
      n: pageData.name || "",
      u: pageData.username || "",
      d: pageData.description || "",
      e: pageData.email || "",
      gh: pageData.github || "",
      l: pageData.linkedin || "",
      y: pageData.youtube || "",
      bl: pageData.bluesky || "",
      t: pageData.twitter || "",
      ig: pageData.instagram || "",
      w: pageData.whatsapp || "",
      tg: pageData.telegram || "",
      f: pageData.facebook || "",
      bg: pageData.background || "",
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
      <header className='absolute top-0 z-10 mx-auto flex w-full items-start justify-start px-4 py-2'>
        <ThemeSelector />
      </header>
      <div className='flex-1 pt-[4vh]'>
        <div className='fixed top-0 left-0 z-[-10] size-full'>
          {data.bg &&
            BACKGROUND_OPTIONS.find((option) => option.code === data.bg)
              ?.component}
        </div>
        <div className='p-2 pt-10'>
          {data ? <DisplayData acc={data} /> : <DataLoading />}
        </div>
      </div>
      <footer className='absolute bottom-0 z-10 mx-auto flex w-full items-center justify-center p-4 text-sm'>
        <a
          href='https://manylinks.vercel.app/'
          target='_blank'
          className='text-muted-freground hover:text-foreground underline-offset-2 hover:underline'
        >
          Made with ManyLinks
        </a>
      </footer>
    </>
  );
}
