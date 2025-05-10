"use client";

import { cn } from "@/lib/utils";
import { useData } from "@/providers/data-provider";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Button } from "./ui/button";
import { BACKGROUND_OPTIONS } from "./background-snippets";

export default function BackgroundSelectCard() {
  const { data, selectBackground } = useData();

  return (
    <Card className='mb-3 w-full border-none shadow-none'>
      <CardHeader>
        <CardTitle className='text-3xl'>Profile Background</CardTitle>
        <CardDescription>Customize your background theme here.</CardDescription>
      </CardHeader>
      <CardContent>
        <div className='mx-auto grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-3 xl:grid-cols-4'>
          {BACKGROUND_OPTIONS.map((background, index) => (
            <Button
              key={index}
              variant='outline'
              size='lg'
              className={cn("relative overflow-hidden border-white shadow-md", {
                "bg-accent text-accent-foreground": data.bg === background.code,
              })}
              onClick={() => {
                selectBackground(background.code);
              }}
            >
              {background.name}
            </Button>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
