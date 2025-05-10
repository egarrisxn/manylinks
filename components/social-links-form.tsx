"use client";

import React from "react";
import { useData } from "@/providers/data-provider";
import { SocialInput } from "./ui/social-input";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import type { SocialLinkProviderProps } from "@/types";

type InputChangeEvent = React.ChangeEvent<HTMLInputElement>;

const socialLinksProvider: SocialLinkProviderProps[] = [
  { name: "email", icon: "iconoir:mail", id: "em" },
  { name: "github", icon: "iconoir:github", id: "gh" },
  { name: "linkedin", icon: "iconoir:linkedin", id: "li" },
  { name: "youtube", icon: "iconoir:youtube", id: "yo" },
  { name: "bluesky", icon: "proicons:bluesky", id: "bl" },
  { name: "twitter", icon: "iconoir:twitter", id: "tw" },
  { name: "spotify", icon: "iconoir:spotify", id: "sp" },
  { name: "discord", icon: "iconoir:discord", id: "di" },
  { name: "instagram", icon: "iconoir:instagram", id: "ig" },
  { name: "threads", icon: "iconoir:threads", id: "th" },
  { name: "peerlist", icon: "iconoir:peerlist", id: "pe" },
  { name: "mastodon", icon: "iconoir:mastodon", id: "ma" },
  { name: "facebook", icon: "iconoir:facebook", id: "fa" },
  { name: "tiktok", icon: "iconoir:tiktok", id: "ti" },
];

export default function SocialLinksForm() {
  const { data, updateSocialInfo } = useData();

  const handleInputChange = (event: InputChangeEvent) => {
    const { name, value } = event.target;
    updateSocialInfo(name, value);
  };

  return (
    <Card className='mb-3 w-full border-none shadow-none'>
      <CardHeader>
        <CardTitle className='text-3xl'>Social Links</CardTitle>
        <CardDescription>Enter your social links here.</CardDescription>
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
