import React from "react";
import { cn } from "@/lib/utils";
import { useData } from "@/providers/data-provider";
import { Button } from "@/components/ui/button";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { BACKGROUND_OPTIONS } from "@/components/backgrounds/background-snippets";

const BackgroundCard: React.FC = () => {
  const { data, selectBackground } = useData();
  return (
    <ScrollArea>
      <div className='flex space-x-4 pb-4'>
        {BACKGROUND_OPTIONS.map((background, index) => {
          return (
            <Button
              key={index}
              variant='neutral'
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
          );
        })}
      </div>
      <ScrollBar orientation='horizontal' />
    </ScrollArea>
  );
};

export default BackgroundCard;
