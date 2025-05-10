"use client";

import { Icon } from "@iconify/react";
import { UserCircle2 } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import ExtraLinksCard from "./extra-links-card";
import type { DisplayDataProps } from "@/types";

export default function DisplayData({ acc }: DisplayDataProps) {
  const allSocialLinksAreEmpty =
    !acc.em &&
    !acc.gh &&
    !acc.li &&
    !acc.yo &&
    !acc.bl &&
    !acc.tw &&
    !acc.sp &&
    !acc.di &&
    !acc.ig &&
    !acc.th &&
    !acc.pe &&
    !acc.ma &&
    !acc.fa &&
    !acc.ti;

  const iconMap: Record<string, string> = {
    em: "iconoir:mail",
    gh: "iconoir:github",
    li: "iconoir:linkedin",
    yo: "iconoir:youtube",
    bl: "proicons:bluesky",
    tw: "iconoir:twitter",
    sp: "iconoir:spotify",
    di: "iconoir:discord",
    ig: "iconoir:instagram",
    th: "iconoir:threads",
    pe: "iconoir:peerlist",
    ma: "iconoir:mastodon",
    fa: "iconoir:facebook",
    ti: "iconoir:tiktok",
  };

  return (
    <div className='hide_scrollbar mx-auto size-full max-w-lg space-y-5 overflow-y-scroll p-2'>
      <div className='z-50 text-center'>
        {acc.image && (
          <Avatar className='mx-auto size-24 overflow-hidden rounded-full shadow-xl ring-3 ring-white'>
            <AvatarImage
              src={acc.image}
              alt={`${acc.name}'s profile picture`}
              className='size-full object-cover'
            />
            <AvatarFallback>
              <UserCircle2 className='text-foreground size-24' />
            </AvatarFallback>
          </Avatar>
        )}
        {acc.name && (
          <h1 className='text-foreground text-shadow-foreground/70 mt-5 text-2xl font-bold text-shadow-2xs'>
            {acc.name}
          </h1>
        )}
        {acc.description && (
          <p className='text-foreground mt-2.5 text-sm text-shadow-2xs'>
            {acc.description}
          </p>
        )}
      </div>
      {!allSocialLinksAreEmpty && (
        <div className='mx-auto flex flex-wrap items-center justify-center gap-2 px-2 pb-2'>
          {Object.entries(acc).map(
            ([key, value]: [string, string | undefined]) => {
              const excludedKeys = [
                "image",
                "name",
                "username",
                "description",
                "bg",
              ];
              if (key !== "ls" && value && !excludedKeys.includes(key)) {
                const propIcon = iconMap[key];
                if (key === "em") {
                  return (
                    <span
                      className='group bg-foreground/90 cursor-pointer rounded-full border-white p-1.5 shadow-md hover:bg-black'
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
                      className='group bg-foreground/90 cursor-pointer rounded-full border-white p-1.5 shadow-md hover:bg-black'
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
      <ul className='mt-1 space-y-3 2xl:space-y-4'>
        {acc.ls &&
          acc.ls.map((link, id) => (
            <ExtraLinksCard
              label={link.l}
              icon={link.i}
              url={link.u}
              key={id}
            />
          ))}
      </ul>
    </div>
  );
}
