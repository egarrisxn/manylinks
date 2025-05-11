"use client";

import { memo, useState, useEffect, JSX } from "react";
import { cn, isEmptyValues } from "@/lib/utils";
import { useData } from "@/providers/data-provider";
import { BACKGROUND_OPTIONS } from "../background-options";
import DataDisplay from "../data-display";

const variantStyles: Record<
  "mobile" | "laptop" | "desktop",
  {
    container: string;
    screenWrapper: string;
    screenInner: string;
    extra?: JSX.Element;
  }
> = {
  mobile: {
    container: "h-[700px] w-[350px] min-w-[350px] rounded-[40px] ",
    screenWrapper: "rounded-[30px]",
    screenInner: "pt-6",
    extra: (
      <div className='bg-foreground absolute top-0 left-1/2 z-50 h-[15px] w-[150px] -translate-x-1/2 rounded-b-[1rem]'>
        <div className='bg-background/40 mx-auto size-2 rounded-full'></div>
      </div>
    ),
  },
  laptop: {
    container: " h-[280px] w-[400px] min-w-[400px] rounded-[25px]",
    screenWrapper: "rounded-[20px]",
    screenInner: "pt-1",
    extra: (
      <div className='bg-foreground relative mx-auto h-[25px] w-[450px] rounded-t-[5px] rounded-b-[20px]'>
        <div className='bg-background/40 absolute top-0 left-1/2 h-[5px] w-[15px] -translate-x-1/2 rounded-b-xl'></div>
      </div>
    ),
  },
  desktop: {
    container: "h-[300px] w-[470px] min-w-[470px] rounded-[15px]",
    screenWrapper: "rounded-[10px]",
    screenInner: " pt-2",
    extra: (
      <>
        <div className='bg-foreground relative z-40 mx-auto h-[45px] w-40'>
          <div className='bg-background/40 absolute top-1 left-1/2 z-50 h-[5px] w-[30px] -translate-x-1/2 rounded-[40px]'></div>
        </div>
        <div className='bg-foreground z-40 mx-auto h-[25px] w-[340px] rounded-t-[10px]'></div>
      </>
    ),
  },
};

const IFrameMockup = memo(
  ({ variant = "mobile" }: { variant?: "mobile" | "laptop" | "desktop" }) => {
    const { data } = useData();
    const [isEmpty, setIsEmpty] = useState(false);

    useEffect(() => {
      setIsEmpty(isEmptyValues(data));
    }, [data]);

    const selectedBgOption = data
      ? BACKGROUND_OPTIONS.find((option) => option.code === data.background)
      : null;

    const selectedBgComponent = selectedBgOption?.component || null;
    const styles = variantStyles[variant];

    return (
      <div className='flex flex-col items-center justify-center'>
        <div
          className={cn(
            styles.container,
            "bg-foreground border-foreground relative z-50 border-[15px] shadow-sm"
          )}
        >
          {variant === "mobile" && styles.extra}

          <div
            className={cn(
              styles.screenWrapper,
              "relative size-full overflow-hidden break-words",
              { "bg-white text-black": !data?.background }
            )}
          >
            {isEmpty ? (
              <div className='z-20 flex size-full items-center justify-center bg-white text-sm text-black'>
                No information.
              </div>
            ) : (
              <>
                {selectedBgComponent}
                <div className={cn(styles.screenInner, "h-full px-2")}>
                  <DataDisplay account={data} />
                </div>
              </>
            )}
          </div>
        </div>
        {variant !== "mobile" && styles.extra}
      </div>
    );
  }
);

IFrameMockup.displayName = "IFrameMockup";

export default IFrameMockup;
