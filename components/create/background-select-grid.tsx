"use client";

import { cn } from "@/lib/utils";
import { useData } from "@/providers/data-provider";
import { Button } from "../ui/button";
import { BACKGROUND_OPTIONS } from "../background-options";

export default function BackgroundSelectGrid() {
  const { data, selectBackground } = useData();

  <span className='to-primary bg-gradient-to-tl from-blue-900 bg-clip-text text-3xl font-bold text-transparent'></span>;

  return (
    <div className='mx-auto grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-3 xl:grid-cols-4'>
      {BACKGROUND_OPTIONS.map((background, index) => (
        <Button
          key={index}
          variant='ghost'
          size='lg'
          className={cn(
            "relative overflow-hidden border border-white shadow-md",
            {
              "to-primary bg-gradient-to-tl from-blue-950 text-white hover:text-white":
                data.background === background.code,
            }
          )}
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
