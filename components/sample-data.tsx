"use client";

import { MonitorSmartphone } from "lucide-react";
import { useData } from "@/providers/data-provider";
import { Button } from "./ui/button";

export default function SamplePage() {
  const { showSample } = useData();

  return (
    <Button
      className='w-full border border-white shadow-md'
      onClick={showSample}
    >
      <MonitorSmartphone className='mr-0.5' />
      Sample Data
    </Button>
  );
}
