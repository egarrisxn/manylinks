"use client";

import { Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useData } from "@/providers/data-provider";

export default function SamplePage() {
  const { showSample } = useData();
  return (
    <Button className='w-full' onClick={showSample}>
      <Play className='mr-1' />
      Sample Page
    </Button>
  );
}
