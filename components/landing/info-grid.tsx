import { Users2, Store, ChartBar, Globe, QrCode, Plug } from "lucide-react";
import { InfoGridItem } from "./info-grid-item";

const cardItems: {
  Icon: React.ElementType;
  title: string;
  description: string;
}[] = [
  {
    Icon: Users2,
    title: "Connect everything all in one place",
    description:
      "No more juggling multiple links. Put your socials, shop, videos, and more into one smart hub.",
  },
  {
    Icon: Store,
    title: "Monetize with absolutely zero friction",
    description:
      "Add links to products, tips, or services so your audience can support or buy from you instantly.",
  },
  {
    Icon: Globe,
    title: "Fully yours and fully customizable",
    description:
      "Choose layouts, themes, and styles that fit your personality or brand. Your page, your rules!",
  },
  {
    Icon: ChartBar,
    title: "See what actually works, in real time",
    description:
      "Track clicks, views, and behaviors with built-in insights designed for growth. *Coming Soon*",
  },
  {
    Icon: QrCode,
    title: "Share anywhere and anytime, even offline",
    description:
      "Create QR codes to share at events, on packaging, or wherever your audience is. *Coming Soon*",
  },
  {
    Icon: Plug,
    title: "Works with all the best tools out there",
    description:
      "Embed YouTube videos, collect emails, link up your store or podcast. It all just works! *Coming Soon*",
  },
];

export default function InfoGrid() {
  return (
    <div className='grid grid-cols-1 gap-4 p-4 md:grid-cols-2 lg:grid-cols-3'>
      {cardItems.map((item, index) => (
        <InfoGridItem
          key={index}
          Icon={item.Icon}
          title={item.title}
          description={item.description}
        />
      ))}
    </div>
  );
}
