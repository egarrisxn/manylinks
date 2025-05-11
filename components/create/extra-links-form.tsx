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
import { useData } from "@/providers/data-provider";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Button } from "../ui/button";
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
          <CardTitle className='flex items-center justify-between text-3xl'>
            Extra Links
            <IconSelectCard />
          </CardTitle>
          <CardDescription>Enter additional link here.</CardDescription>
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
            variant='outline'
            className='border-white shadow-md'
            onClick={addLinkDetailForm}
          >
            +
          </Button>
        </CardContent>
      </Card>
      <div ref={scrollDownRef}></div>
    </>
  );
}
