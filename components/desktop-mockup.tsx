"use client";

import { memo, useState, useEffect } from "react";
import { isEmptyValues } from "@/lib/utils";
import { useData } from "@/providers/data-provider";
import { BACKGROUND_OPTIONS } from "./background-snippets";
import DisplayData from "./display-data";

const DesktopMockup = memo(() => {
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
      <div className='border-foreground bg-foreground relative mx-auto h-[300px] w-[470px] min-w-[470px] rounded-[15px] shadow-sm'>
        <div className='bg-foreground relative h-[300px] w-full overflow-hidden rounded-[10px]'>
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
      <div className='bg-foreground relative z-40 mx-auto h-[50px] w-40'>
        <div className='bg-background/40 absolute top-1 left-1/2 z-50 h-1 w-8 -translate-x-1/2 rounded-[40px]'></div>
      </div>
      <div className='bg-foreground z-40 mx-auto h-[20px] w-96 rounded-t-sm'></div>
    </div>
  );
});

DesktopMockup.displayName = "DesktopMockup";

export default DesktopMockup;
