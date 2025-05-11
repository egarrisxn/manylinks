import Link from "next/link";
import { LucideArrowLeftSquare } from "lucide-react";
import { Button } from "./ui/button";

export default function GoBackButton() {
  return (
    <Button asChild size='lg' variant='fun'>
      <Link href='/'>
        <LucideArrowLeftSquare />
        Go Back
      </Link>
    </Button>
  );
}
