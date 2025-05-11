import Link from "next/link";
import { LogIn } from "lucide-react";
import { Button } from "./ui/button";

export default function SignInButton() {
  return (
    <Button asChild size='lg' variant='fun'>
      <Link href='/signin'>
        <LogIn />
        Sign In
      </Link>
    </Button>
  );
}
