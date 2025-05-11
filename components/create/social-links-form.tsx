"use client";

import React from "react";
import { useData } from "@/providers/data-provider";
import { socialLinks } from "@/lib/data";
import { SocialInput } from "../ui/social-input";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";

export default function SocialLinksForm() {
  const { data, updateSocialInfo } = useData();

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    updateSocialInfo(name, value);
  };

  return (
    <Card className='mb-3 w-full border-none shadow-none'>
      <CardHeader>
        <CardTitle className='flex'>
          <span className='to-primary bg-gradient-to-tl from-blue-900 bg-clip-text text-3xl font-bold text-transparent'>
            Social Links
          </span>
        </CardTitle>
        <CardDescription className='text-muted-foreground font-medium'>
          Add your social links here.
        </CardDescription>
      </CardHeader>
      <CardContent className='grid gap-4 md:grid-cols-2'>
        {socialLinks.map((link) => {
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
