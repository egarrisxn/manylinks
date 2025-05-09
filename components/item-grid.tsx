"use client";

import React from "react";
import { Users2, Store, ChartBar, Globe, QrCode, Plug } from "lucide-react";

interface Item {
  Icon: React.ElementType;
  title: string;
  description: string;
}

const items: Item[] = [
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
    Icon: ChartBar,
    title: "See what actually works, in real time",
    description:
      "Track clicks, views, and audience behavior with built-in insights designed for growth.",
  },
  {
    Icon: Globe,
    title: "Fully yours and fully customizable",
    description:
      "Choose layouts, themes, and styles that fit your personality or brand. Your page, your rules!",
  },
  {
    Icon: QrCode,
    title: "Share anywhere and anytime, even offline",
    description:
      "Create QR codes for your page to share it at events, on packaging, or wherever your audience is.",
  },
  {
    Icon: Plug,
    title: "Works with all the best tools out there",
    description:
      "Embed YouTube videos, collect emails, link up your store or podcast. It all just works!",
  },
];

interface ItemGridProps {
  Icon: React.ElementType;
  title: string;
  description: string;
}

const ItemCard = ({ Icon, title, description }: ItemGridProps) => {
  return (
    <div className='flex flex-col items-center rounded-lg border bg-white p-4 shadow-md'>
      <div className='mt-4 mb-4'>
        <Icon className='h-16 w-14 text-blue-500' />
      </div>
      <h2 className='mb-2 text-center text-xl font-semibold'>{title}</h2>
      <p className='text-center'>{description}</p>
    </div>
  );
};

export default function ItemGrid() {
  return (
    <div className='grid grid-cols-1 gap-4 p-4 md:grid-cols-2 lg:grid-cols-3'>
      {items.map((item, index) => (
        <ItemCard
          key={index}
          Icon={item.Icon}
          title={item.title}
          description={item.description}
        />
      ))}
    </div>
  );
}
