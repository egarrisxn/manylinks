"use client";

import { Icon } from "@iconify/react";
import { User2 } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import ExtraLinksCard from "./create/extra-links-card";

import type { DataDisplayProps } from "@/types";

//! Version 1
export default function DataDisplay({ account }: DataDisplayProps) {
  const allSocialLinksAreEmpty =
    !account.email &&
    !account.github &&
    !account.linkedin &&
    !account.youtube &&
    !account.bluesky &&
    !account.twitter &&
    !account.spotify &&
    !account.discord &&
    !account.instagram &&
    !account.threads &&
    !account.peerlist &&
    !account.mastodon &&
    !account.facebook &&
    !account.tiktok;

  const iconMap: Record<string, string> = {
    email: "iconoir:mail",
    github: "iconoir:github",
    linkedin: "iconoir:linkedin",
    youtube: "iconoir:youtube",
    bluesky: "proicons:bluesky",
    twitter: "iconoir:twitter",
    spotify: "iconoir:spotify",
    discord: "iconoir:discord",
    instagram: "iconoir:instagram",
    threads: "iconoir:threads",
    peerlist: "iconoir:peerlist",
    mastodon: "iconoir:mastodon",
    facebook: "iconoir:facebook",
    tiktok: "iconoir:tiktok",
  };

  return (
    <div className='hide_scrollbar mx-auto size-full max-w-lg space-y-6 overflow-y-scroll p-2'>
      <div className='z-50 text-center'>
        {account.image && (
          <Avatar className='mx-auto size-24 overflow-hidden rounded-full border-2 border-white shadow-lg'>
            <AvatarImage
              src={account.image}
              alt={`${account.name}'s profile picture`}
              className='size-full object-cover'
            />
            <AvatarFallback>
              <User2 className='text-foreground size-24' />
            </AvatarFallback>
          </Avatar>
        )}
        {account.name && (
          <h1 className='text-foreground mt-5 text-2xl font-bold'>
            {account.name}
          </h1>
        )}
        {account.description && (
          <p className='text-foreground mt-2 text-sm font-medium'>
            {account.description}
          </p>
        )}
      </div>

      {!allSocialLinksAreEmpty && (
        <div className='mx-auto flex flex-wrap items-center justify-center gap-2 px-2 pb-2'>
          {Object.entries(account).map(
            ([key, value]: [string, string | undefined]) => {
              const excludedKeys = [
                "image",
                "name",
                "username",
                "description",
                "background",
              ];
              if (key !== "ls" && value && !excludedKeys.includes(key)) {
                const propIcon = iconMap[key];
                return (
                  <a
                    href={key === "email" ? `mailto:${value}` : value}
                    target={key === "email" ? "_self" : "_blank"}
                    rel='noopener noreferrer'
                    key={key}
                  >
                    <button className='flex size-[32px] items-center justify-center rounded-full border border-[#8F9092] bg-gradient-to-t from-[#D8D9DB] via-white to-[#FDFDFD] text-sm font-semibold text-[#606060] shadow-sm transition-all duration-200 ease-in-out outline-none hover:text-black hover:shadow-[0_4px_3px_1px_#FCFCFC,0_6px_8px_#D6D7D9,0_-4px_4px_#CECFD1,0_-6px_4px_#FEFEFE,inset_0_0_3px_3px_#CECFD1] focus-visible:shadow-[0_4px_3px_1px_#FCFCFC,0_6px_8px_#D6D7D9,0_-4px_4px_#CECFD1,0_-6px_4px_#FEFEFE,inset_0_0_5px_3px_#999,inset_0_0_30px_#aaa] active:shadow-[0_4px_3px_1px_#FCFCFC,0_6px_8px_#D6D7D9,0_-4px_4px_#CECFD1,0_-6px_4px_#FEFEFE,inset_0_0_5px_3px_#999,inset_0_0_30px_#aaa]'>
                      <Icon icon={propIcon} className='size-4' />
                    </button>
                  </a>
                );
              }
              return null;
            }
          )}
        </div>
      )}

      <ul className='mb-10 space-y-3'>
        {account.ls &&
          account.ls.map((link, id) => (
            <ExtraLinksCard
              label={link.label}
              icon={link.icon}
              url={link.url}
              key={id}
            />
          ))}
      </ul>
    </div>
  );
}
