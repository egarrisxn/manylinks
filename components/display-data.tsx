"use client";

import { Icon } from "@iconify/react";
import { ImageIcon } from "lucide-react";
import ExtraLinksCard from "@/components/extra-links-card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import type { DisplayDataProps } from "@/types";

export default function DisplayData({ acc }: DisplayDataProps) {
  const allSocialLinksAreEmpty =
    !acc.e &&
    !acc.l &&
    !acc.gh &&
    !acc.y &&
    !acc.bl &&
    !acc.t &&
    !acc.ig &&
    !acc.w &&
    !acc.tg &&
    !acc.f;

  const iconMap: Record<string, string> = {
    e: "tabler:mail",
    l: "tabler:brand-linkedin",
    gh: "tabler:brand-github",
    y: "tabler:brand-youtube",
    bl: "tabler:brand-bluesky",
    t: "tabler:brand-twitter",
    ig: "tabler:brand-instagram",
    w: "tabler:brand-whatsapp",
    tg: "tabler:brand-telegram",
    f: "tabler:brand-facebook",
  };

  return (
    <div className='hide_scrollbar mx-auto size-full max-w-lg space-y-8 overflow-y-scroll p-2'>
      <div className='z-50 text-center'>
        {acc.i && (
          <Avatar className='ring-ring mx-auto size-20 overflow-hidden rounded-full ring-3'>
            <AvatarImage
              src={acc.i}
              alt={`${acc.n}'s profile picture`}
              className='size-full object-cover'
            />
            <AvatarFallback>
              <ImageIcon className='text-foreground size-8' />
            </AvatarFallback>
          </Avatar>
        )}
        {acc.n && (
          <h1 className='text-foreground/90 text-shadow-foreground/50 font-heading mt-4 text-2xl text-shadow-2xs'>
            {acc.n}
          </h1>
        )}
        {acc.d && (
          <p className='text-foreground/80 text-shadow-foreground/50 font-base mt-2 text-sm text-shadow-2xs'>
            {acc.d}
          </p>
        )}
      </div>
      {!allSocialLinksAreEmpty && (
        <div className='flex flex-wrap items-center justify-center'>
          {Object.entries(acc).map(
            ([key, value]: [string, string | undefined]) => {
              const excludedKeys = ["i", "n", "d", "bg"];

              if (key !== "ls" && value && !excludedKeys.includes(key)) {
                const propIcon = iconMap[key];
                if (key === "e") {
                  // Handle email link generation
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
                } else if (key === "w") {
                  // Handle WhatsApp link generation
                  const whatsappValue: string = value.startsWith(
                    "https://wa.me/"
                  )
                    ? value // If it already starts with the correct prefix
                    : `https://wa.me/${value}`;

                  return (
                    <span className='p-1' key={key}>
                      <a
                        href={whatsappValue}
                        target='_blank'
                        rel='noopener noreferrer'
                      >
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
