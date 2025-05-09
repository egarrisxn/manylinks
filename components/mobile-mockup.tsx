"use client";

import { memo, useState, useEffect } from "react";
import { cn, isEmptyValues } from "@/lib/utils";
import { useData } from "@/providers/data-provider";
import { BACKGROUND_OPTIONS } from "./background-snippets";
import DisplayData from "./display-data";

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
    <div className='border-foreground bg-foreground relative z-50 mx-auto h-[700px] w-[350px] min-w-[350px] rounded-[40px] border-[15px] shadow-sm'>
      <div className='bg-foreground absolute top-0 left-1/2 z-50 h-[15px] w-[150px] translate-x-[-50%] rounded-b-[1rem]'>
        <div className='bg-background/40 mx-auto size-2 rounded-full'></div>
      </div>
      <div
        className={cn(
          "relative size-full overflow-hidden rounded-[30px] break-words",
          { "bg-white text-black": !data.bg }
        )}
      >
        {isEmpty ? (
          <div className='z-20 flex size-full items-center justify-center bg-white text-sm text-black'>
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
