import Link from "next/link";
import { LogIn } from "lucide-react";
import { Button } from "./ui/button";

export default function SignIn() {
  return (
    <Link href='/signin' className='flex flex-row items-center gap-1'>
      <Button size='lg' className='border border-white shadow-lg'>
        <LogIn />
        Sign In
      </Button>
    </Link>
  );
}
