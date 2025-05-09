"use client";

import { Icon } from "@iconify/react";
import { UserCircle2 } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import ExtraLinksCard from "./extra-links-card";
import type { DisplayDataProps } from "@/types";

export default function DisplayData({ acc }: DisplayDataProps) {
  const allSocialLinksAreEmpty =
    !acc.em &&
    !acc.li &&
    !acc.gh &&
    !acc.yo &&
    !acc.bl &&
    !acc.tw &&
    !acc.ig &&
    !acc.fa &&
    !acc.di &&
    !acc.th &&
    !acc.pe &&
    !acc.ma &&
    !acc.ti &&
    !acc.sp;

  const iconMap: Record<string, string> = {
    em: "iconoir:mail",
    li: "iconoir:linkedin",
    gh: "iconoir:github",
    yo: "iconoir:youtube",
    bl: "proicons:bluesky",
    tw: "iconoir:twitter",
    ig: "iconoir:instagram",
    fa: "iconoir:facebook",
    di: "iconoir:discord",
    th: "iconoir:threads",
    pe: "iconoir:peerlist",
    ma: "iconoir:mastodon",
    ti: "iconoir:tiktok",
    sp: "iconoir:spotify",
  };

  return (
    <div className='hide_scrollbar mx-auto size-full max-w-lg space-y-8 overflow-y-scroll p-2'>
      <div className='z-50 text-center'>
        {acc.image && (
          <Avatar className='ring-ring mx-auto size-20 overflow-hidden rounded-full ring-3'>
            <AvatarImage
              src={acc.image}
              alt={`${acc.name}'s profile picture`}
              className='size-full object-cover'
            />
            <AvatarFallback>
              <UserCircle2 className='text-foreground size-20' />
            </AvatarFallback>
          </Avatar>
        )}
        {acc.name && (
          <h1 className='text-foreground text-shadow-foreground/70 mt-4 text-2xl font-bold text-shadow-2xs'>
            {acc.name}
          </h1>
        )}
        {acc.description && (
          <p className='text-foreground/90 mt-2 text-sm text-shadow-2xs'>
            {acc.description}
          </p>
        )}
      </div>
      {!allSocialLinksAreEmpty && (
        <div className='flex flex-wrap items-center justify-center'>
          {Object.entries(acc).map(
            ([key, value]: [string, string | undefined]) => {
              const excludedKeys = [
                "image",
                "name",
                "description",
                "background",
              ];

              if (key !== "ls" && value && !excludedKeys.includes(key)) {
                const propIcon = iconMap[key];
                if (key === "em") {
                  return (
                    <span className='p-1' key={key}>
                      <a href={`mailto:${value}`}>
                        <Icon
                          icon={propIcon}
                          className='text-foreground/80 hover:text-foreground/100 size-6'
                        />
                      </a>
                    </span>
                  );
                } else {
                  return (
                    <span className='p-1' key={key}>
                      <a href={value} target='_blank' rel='noopener noreferrer'>
                        <Icon
                          icon={propIcon}
                          className='text-foreground/80 hover:text-foreground/100 size-6'
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
      <ul className='space-y-2'>
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
