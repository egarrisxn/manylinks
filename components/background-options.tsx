"use client";

import { cn } from "@/lib/utils";
import { useData } from "@/providers/data-provider";
import { Button } from "./ui/button";
import { BACKGROUND_OPTIONS } from "./background-snippets";

export default function BackgroundOptions() {
  const { data, selectBackground } = useData();

  return (
    <div className='mx-auto grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-3 xl:grid-cols-4'>
      {BACKGROUND_OPTIONS.map((background, index) => (
        <Button
          key={index}
          variant='outline'
          size='lg'
          className={cn("relative overflow-hidden border-white shadow-md", {
            "bg-accent text-accent-foreground":
              data.background === background.code,
          })}
          onClick={() => {
            selectBackground(background.code);
          }}
        >
          {background.name}
        </Button>
      ))}
    </div>
  );
}
