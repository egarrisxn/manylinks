"use client";

import { useRef, useState, useEffect } from "react";
import {
  DndContext,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import {
  SortableContext,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import {
  restrictToVerticalAxis,
  restrictToParentElement,
} from "@dnd-kit/modifiers";
import { Info } from "lucide-react";
import { useData } from "@/providers/data-provider";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Button } from "../ui/button";
import DragIcon from "./drag-icon";
import IconSelectCard from "./icon-select-card";
import SortableLinks from "./sortable-links";

import type { DragEndEvent } from "@dnd-kit/core";
import type { ExtraLinkProps } from "@/types";

export default function ExtraLinksForm() {
  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  const scrollDownRef = useRef<HTMLDivElement | null>(null);

  const [shouldScroll, setShouldScroll] = useState(false);
  const { data, addNewData, updateIndex } = useData();

  const addLinkDetailForm = () => {
    const newLink: ExtraLinkProps = {
      id: Date.now(),
      icon: "",
      label: "",
      url: "",
    };
    addNewData(newLink);
    setShouldScroll(true);
  };

  useEffect(() => {
    if (shouldScroll && scrollDownRef.current) {
      scrollDownRef.current.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "start",
      });
      setShouldScroll(false);
    }
  }, [shouldScroll]);

  function handleDragEnd(event: DragEndEvent) {
    const { active, over } = event;

    if (active.id !== over?.id) {
      const updatedItems = [...data.ls];
      const draggedItem = updatedItems.find((item) => item.id === active.id);
      const targetItem = updatedItems.find((item) => item.id === over?.id);

      const draggedIndex = updatedItems.indexOf(draggedItem!);
      const targetIndex = updatedItems.indexOf(targetItem!);

      if (draggedIndex !== -1 && targetIndex !== -1) {
        updatedItems.splice(draggedIndex, 1);
        updatedItems.splice(targetIndex, 0, draggedItem!);

        updateIndex(updatedItems);
      }
    }
  }

  return (
    <>
      <Card className='w-full border-none shadow-none'>
        <CardHeader>
          <CardTitle className='flex items-center justify-between'>
            <span className='to-primary bg-gradient-to-tl from-blue-900 bg-clip-text text-3xl font-bold text-transparent'>
              Extra Links
            </span>
            <IconSelectCard />
          </CardTitle>
          <CardDescription className='text-muted-foreground font-medium'>
            <div className='flex flex-col flex-wrap items-start sm:flex-row sm:items-center sm:gap-1'>
              <p>Enter additional link here.</p>
              <p className='flex flex-row items-center'>
                Use{" "}
                <span className='inline-flex items-center px-1'>
                  <Info className='size-3' />
                </span>{" "}
                to select an icon.
              </p>
              <p className='flex flex-row items-center'>
                Arrange links by using{" "}
                <span className='inline-flex items-center px-1'>
                  <DragIcon />
                </span>
                .
              </p>
            </div>
          </CardDescription>
        </CardHeader>
        <CardContent className='grid gap-4'>
          <DndContext
            sensors={sensors}
            collisionDetection={closestCenter}
            onDragEnd={handleDragEnd}
            modifiers={[restrictToVerticalAxis, restrictToParentElement]}
          >
            <SortableContext
              items={data.ls.map((link) => link.id)}
              strategy={verticalListSortingStrategy}
            >
              {data.ls.map((link, index) => {
                return <SortableLinks key={link.id} id={link} index={index} />;
              })}
            </SortableContext>
          </DndContext>
          <Button
            variant='ghost'
            className='w-full font-semibold shadow-md'
            onClick={addLinkDetailForm}
          >
            + Add Link
          </Button>
        </CardContent>
      </Card>
      <div ref={scrollDownRef}></div>
    </>
  );
}
