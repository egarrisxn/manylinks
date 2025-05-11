"use client";

import { MonitorSmartphone } from "lucide-react";
import { useData } from "@/providers/data-provider";
import { Button } from "../ui/button";

export default function SampleDataButton() {
  const { showSample } = useData();

  return (
    <Button variant='fun' className='w-full' onClick={showSample}>
      <MonitorSmartphone className='mr-0.5' />
      Sample Data
    </Button>
  );
}
