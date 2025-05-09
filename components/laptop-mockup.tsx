"use client";

import { memo, useState, useEffect } from "react";
import { cn, isEmptyValues } from "@/lib/utils";
import { useData } from "@/providers/data-provider";
import { BACKGROUND_OPTIONS } from "./background-snippets";
import DisplayData from "./display-data";

const LaptopMockup = memo(() => {
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
    <div>
      <div className='border-foreground bg-foreground relative mx-auto h-[280px] w-[400px] min-w-[400px] rounded-[25px] shadow-sm'>
        <div className='bg-foreground h-[280px] w-full overflow-hidden rounded-[15px]'>
          <div className='absolute inset-0 m-4 overflow-hidden rounded-md bg-white text-black'>
            {isEmpty ? (
              <div className='z-20 flex size-full items-center justify-center bg-white text-sm text-black'>
                No information.
              </div>
            ) : (
              <>
                {!isEmpty && selectedBgComponent}
                <div className='h-full p-4'>
                  <DisplayData acc={data} />
                </div>
              </>
            )}
          </div>
        </div>
      </div>
      <div className='bg-foreground relative mx-auto h-[20px] w-[450px] min-w-[450px] rounded-t-sm rounded-b-xl'>
        <div className='bg-background/40 absolute top-0 left-1/2 h-2 w-4 -translate-x-1/2 rounded-b-xl'></div>
      </div>
    </div>
  );
});

LaptopMockup.displayName = "LaptopMockup";

export default LaptopMockup;
