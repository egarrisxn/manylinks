import Link from "next/link";
import { LogIn } from "lucide-react";
import { Button } from "./ui/button";

export default function SignInButton() {
  return (
    <Button asChild size='lg' className='border border-white shadow-lg'>
      <Link href='/signin'>
        <LogIn />
        Sign In
      </Link>
    </Button>
  );
}
