"use client";

import { Icon } from "@iconify/react";
import { User2 } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import ExtraLinksCard from "./create/extra-links-card";

import type { DataDisplayProps } from "@/types";

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
        <div className='mx-auto flex flex-wrap items-center justify-center gap-2.5 px-2 pb-2'>
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
                if (key === "email") {
                  return (
                    <span
                      className='group bg-foreground/90 cursor-pointer rounded-full border border-white p-1.5 shadow-md hover:bg-black'
                      key={key}
                    >
                      <a href={`mailto:${value}`}>
                        <Icon
                          icon={propIcon}
                          className='text-background/90 size-5 group-hover:text-white'
                        />
                      </a>
                    </span>
                  );
                } else {
                  return (
                    <span
                      className='group bg-foreground/90 cursor-pointer rounded-full border border-white p-1.5 shadow-md hover:bg-black'
                      key={key}
                    >
                      <a href={value} target='_blank' rel='noopener noreferrer'>
                        <Icon
                          icon={propIcon}
                          className='text-background/90 size-5 group-hover:text-white'
                        />
                      </a>
                    </span>
                  );
                }
              }
              return null;
            }
          )}
        </div>
      )}
      <ul className='mb-10 space-y-2'>
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
