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
    <Card className='border-muted-foreground/10 mb-2 w-full border-2 shadow-md'>
      <CardHeader className='space-y-0.5'>
        <CardTitle className='flex items-center justify-between text-2xl'>
          Background
        </CardTitle>
        <CardDescription>
          Customize your background theme from here.
        </CardDescription>
      </CardHeader>
      <CardContent className='pb-3'>
        <div className='mx-auto grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-3 xl:grid-cols-4'>
          {BACKGROUND_OPTIONS.map((background, index) => (
            <Button
              key={index}
              variant='outline'
              size='lg'
              className={cn("relative overflow-hidden", {
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
