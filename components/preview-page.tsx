"use client";

import { useState, useEffect } from "react";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { useData } from "@/providers/data-provider";
import { isEmptyValues } from "@/lib/utils";
import { Button } from "./ui/button";
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerTitle,
  DrawerTrigger,
} from "./ui/drawer";
import DisplayData from "./display-data";
import { BACKGROUND_OPTIONS } from "./background-snippets";

export default function PreviewPage() {
  const { data } = useData();
  const [isEmpty, setIsEmpty] = useState<boolean>(false);

  useEffect(() => {
    setIsEmpty(isEmptyValues(data));
  }, [data]);

  const selectedBgOption = data
    ? BACKGROUND_OPTIONS.find((option) => option.code === data.background)
    : null;

  const selectedBgComponent = selectedBgOption
    ? selectedBgOption.component
    : null;

  return (
    <div className='fixed inset-x-0 bottom-0 z-10 flex items-center justify-center p-4 backdrop-blur-xs'>
      <Drawer>
        <DrawerTrigger asChild>
          <Button className='w-full max-w-[350px] overflow-y-auto rounded-sm tracking-wide'>
            Preview page
          </Button>
        </DrawerTrigger>
        <DrawerContent className='h-[75%] pb-2'>
          <VisuallyHidden asChild>
            <DrawerTitle id='page-preview-title'>Page Preview</DrawerTitle>
          </VisuallyHidden>
          <VisuallyHidden>
            <DrawerDescription id='page-preview-description'>
              Preview your new page.
            </DrawerDescription>
          </VisuallyHidden>
          {isEmpty ? (
            <div className='text-muted-foreground flex h-[90%] w-full items-center justify-center text-sm'>
              No information.
            </div>
          ) : (
            <>
              {!isEmpty && selectedBgComponent}
              <div className='h-full px-2 pt-10'>
                <DisplayData account={data} />
              </div>
            </>
          )}
        </DrawerContent>
      </Drawer>
    </div>
  );
}
