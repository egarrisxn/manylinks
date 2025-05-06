"use client";

import { memo, useState, useEffect } from "react";
import { cn, isEmptyValues } from "@/lib/utils";
import { useData } from "@/providers/data-provider";
import { BACKGROUND_OPTIONS } from "@/components/backgrounds/background-snippets";
import DisplayData from "@/components/display-data";

const MobileMockup = memo(() => {
  const { data } = useData();

  const [isEmpty, setIsEmpty] = useState<boolean>(false);

  useEffect(() => {
    setIsEmpty(isEmptyValues(data));
  }, [data]);

  const selectedBgOption = data
    ? BACKGROUND_OPTIONS.find((option) => option.code === data.bg)
    : null;

  const selectedBgComponent = selectedBgOption
    ? selectedBgOption.component
    : null;

  return (
    <div className='border-foreground bg-foreground shadow-base relative z-50 mx-auto h-[700px] w-[350px] min-w-[350px] rounded-[42px] border-[14px]'>
      <div className='bg-foreground absolute top-0 left-1/2 z-50 h-[18px] w-[148px] translate-x-[-50%] rounded-b-[1rem]'></div>
      <div className='bg-foreground absolute top-[124px] left-[-17px] z-50 h-[46px] w-[4px] rounded-l-lg'></div>
      <div className='bg-foreground absolute top-[178px] left-[-17px] z-50 h-[46px] w-[4px] rounded-l-lg'></div>
      <div className='bg-foreground absolute top-[142px] right-[-17px] z-50 h-[64px] w-[4px] rounded-r-lg'></div>
      <div
        className={cn(
          "relative size-full overflow-hidden rounded-[32px] break-words",
          { "bg-white text-black dark:bg-black dark:text-white": !data.bg }
        )}
      >
        {isEmpty ? (
          <div className='z-20 flex size-full items-center justify-center bg-white text-sm text-black dark:bg-black dark:text-white'>
            No information.
          </div>
        ) : (
          <>
            {!isEmpty && selectedBgComponent}
            <div className='h-full px-2 pt-10'>
              <DisplayData acc={data} />
            </div>
          </>
        )}
      </div>
    </div>
  );
});

// added display due to eslint error
MobileMockup.displayName = "MobileMockup";

export default MobileMockup;
