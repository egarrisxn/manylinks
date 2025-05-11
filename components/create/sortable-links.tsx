"use client";

import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { useData } from "@/providers/data-provider";
import { Card } from "../ui/card";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import DragIcon from "./drag-icon";

import type { ExtraLinkProps } from "@/types";

export default function SortableLinks({
  id,
  index,
}: {
  id: ExtraLinkProps;
  index: number;
}) {
  const uniqueID = id.id;

  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id: uniqueID });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  const { data, updateAdditionalInfo } = useData();

  return (
    <div ref={setNodeRef} style={style} key={uniqueID}>
      <Card className='relative border-2 p-4 shadow-none'>
        <div className='space-y-4'>
          <div className='grid gap-2 md:grid-cols-2'>
            <div className='grid gap-2'>
              <Label htmlFor={`link-icon-${uniqueID}`}>Icon Key</Label>
              <Input
                id={`link-icon-${uniqueID}`}
                name='i'
                type='text'
                placeholder='tabler:world-www'
                value={id.icon}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  const newLinks = [...data.ls];
                  newLinks[index].icon = e.target.value;
                  updateAdditionalInfo(newLinks);
                }}
              />
            </div>
            <div className='grid gap-2'>
              <Label htmlFor={`link-name-${uniqueID}`}>Label</Label>
              <Input
                id={`link-name-${uniqueID}`}
                name='l'
                type='text'
                placeholder='Website'
                value={id.label}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  const newLinks = [...data.ls];
                  newLinks[index].label = e.target.value;
                  updateAdditionalInfo(newLinks);
                }}
              />
            </div>
          </div>
          <div className='grid gap-2'>
            <Label htmlFor={`link-name-${uniqueID}`}>Destination URL</Label>
            <Input
              id={`link-url-${uniqueID}`}
              name='u'
              type='url'
              placeholder='https://example.com'
              value={id.url}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                const newLinks = [...data.ls];
                newLinks[index].url = e.target.value;
                updateAdditionalInfo(newLinks);
              }}
            />
          </div>
        </div>
        <button
          className='bg-muted absolute -top-2 right-5'
          {...attributes}
          {...listeners}
        >
          <DragIcon />
        </button>
      </Card>
    </div>
  );
}
