import Link from "next/link";
import { LucideArrowLeftSquare } from "lucide-react";
import { Button } from "./ui/button";

export default function BackButton() {
  return (
    <Button asChild size='lg' className='border border-white shadow-lg'>
      <Link href='/'>
        <LucideArrowLeftSquare />
        Back
      </Link>
    </Button>
  );
}
