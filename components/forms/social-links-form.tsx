"use client";

import React from "react";
import { useData } from "@/providers/data-provider";
import { SocialInput } from "@/components/ui/social-input";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import type { SocialLinkProviderProps } from "@/types";

const socialLinksProvider: SocialLinkProviderProps[] = [
  { name: "email", icon: "tabler:mail", id: "e" },
  { name: "github", icon: "tabler:brand-github", id: "gh" },
  { name: "linkedin", icon: "tabler:brand-linkedin", id: "l" },
  { name: "youtube", icon: "tabler:brand-youtube", id: "y" },
  { name: "bluesky", icon: "tabler:brand-bluesky", id: "bl" },
  { name: "twitter", icon: "tabler:brand-twitter", id: "t" },
  { name: "instagram", icon: "tabler:brand-instagram", id: "ig" },
  { name: "whatsapp", icon: "tabler:brand-whatsapp", id: "w" },
  { name: "telegram", icon: "tabler:brand-telegram", id: "tg" },
  { name: "facebook", icon: "tabler:brand-facebook", id: "f" },
];

type InputChangeEvent = React.ChangeEvent<HTMLInputElement>;

export default function SocialLinksForm() {
  const { data, updateSocialInfo } = useData();

  const handleInputChange = (event: InputChangeEvent) => {
    const { name, value } = event.target;
    updateSocialInfo(name, value);
  };

  return (
    <Card className='w-full'>
      <CardHeader className='space-y-1'>
        <CardTitle className='text-2xl'>Social Links</CardTitle>
        <CardDescription>Enter your social media links here.</CardDescription>
      </CardHeader>
      <CardContent className='grid gap-4 md:grid-cols-2'>
        {socialLinksProvider.map((link) => {
          return (
            <SocialInput
              key={link.name}
              id={link.name}
              name={link.id}
              icon={link.icon}
              placeholder={`${link.name}.com/janedoe`}
              value={data[link.id]}
              onChange={handleInputChange}
            />
          );
        })}
      </CardContent>
    </Card>
  );
}
