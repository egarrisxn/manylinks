"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { CheckIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { BASE_COLORS } from "@/lib/theme";
import { useThemeConfig } from "@/hooks/use-theme-config";
import { Button } from "../ui/button";
import { Label } from "../ui/label";
import { Skeleton } from "../ui/skeleton";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

export default function ThemeSelector() {
  const { activeTheme, setActiveTheme } = useThemeConfig();
  const [mounted, setMounted] = useState(false);
  const { setTheme, resolvedTheme: theme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger className='px-0'>Theme</NavigationMenuTrigger>
          <NavigationMenuContent>
            <div className='bg-background z-10 w-60 px-2 pt-1 pb-3'>
              <div className='w-full'>
                <div className='flex flex-1 flex-col gap-2 md:gap-4'>
                  <div className='space-y-1.5'>
                    <Label className='text-xs'>Style</Label>
                    <div className='flex flex-col gap-1.5'>
                      {BASE_COLORS.map((color) =>
                        mounted ? (
                          <Button
                            variant={"outline"}
                            size='sm'
                            key={color.name}
                            onClick={() => setActiveTheme(color.name)}
                            className={cn(
                              "justify-start",
                              activeTheme === color.name &&
                                "border-primary border-2"
                            )}
                            style={
                              {
                                "--theme-primary": `${
                                  color?.activeColor[
                                    theme === "dark" ? "dark" : "light"
                                  ]
                                }`,
                              } as React.CSSProperties
                            }
                          >
                            <span
                              className={cn(
                                "mr-0.5 flex size-4.5 shrink-0 -translate-x-1 items-center justify-center rounded-full bg-[var(--theme-primary)]"
                              )}
                            >
                              {activeTheme === color.name && (
                                <CheckIcon className='text-primary-foreground size-4' />
                              )}
                            </span>
                            {color.label}
                          </Button>
                        ) : (
                          <Skeleton className='h-8 w-full' key={color.name} />
                        )
                      )}
                    </div>
                  </div>
                  <div className='space-y-1.5'>
                    <Label className='text-xs'>Mode</Label>
                    <div className='grid grid-cols-1 text-xs'>
                      {mounted ? (
                        <>
                          <Button
                            variant={"outline"}
                            size='sm'
                            onClick={() =>
                              setTheme(theme === "dark" ? "light" : "dark")
                            }
                            className={cn(
                              "justify-start",
                              theme !== "dark" &&
                                "border-primary dark:border-primary border-2"
                            )}
                          >
                            <span
                              className={cn(
                                "bg-background mr-0.5 flex size-4.5 shrink-0 -translate-x-1 items-center justify-center rounded-full"
                              )}
                            ></span>
                            Light/Dark
                          </Button>
                        </>
                      ) : (
                        <>
                          <Skeleton className='h-8 w-full' />
                        </>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}
