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
  { name: "email", icon: "iconoir:mail", id: "email" },
  { name: "github", icon: "iconoir:github", id: "github" },
  { name: "linkedin", icon: "iconoir:linkedin", id: "linkedin" },
  { name: "youtube", icon: "iconoir:youtube", id: "youtube" },
  { name: "bluesky", icon: "proicons:bluesky", id: "bluesky" },
  { name: "twitter", icon: "iconoir:twitter", id: "twitter" },
  { name: "spotify", icon: "iconoir:spotify", id: "spotify" },
  { name: "discord", icon: "iconoir:discord", id: "discord" },
  { name: "instagram", icon: "iconoir:instagram", id: "instagram" },
  { name: "threads", icon: "iconoir:threads", id: "threads" },
  { name: "peerlist", icon: "iconoir:peerlist", id: "peerlist" },
  { name: "mastodon", icon: "iconoir:mastodon", id: "mastodon" },
  { name: "facebook", icon: "iconoir:facebook", id: "facebook" },
  { name: "tiktok", icon: "iconoir:tiktok", id: "tiktok" },
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
