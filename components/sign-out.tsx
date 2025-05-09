import { LogOut } from "lucide-react";
import { signOut } from "@/lib/auth";
import { Button } from "./ui/button";

export default function SignOut() {
  return (
    <form
      action={async () => {
        "use server";
        await signOut({ redirectTo: "/" });
      }}
    >
      <Button>
        <LogOut />
        <span className='hidden sm:block'>Sign Out</span>
      </Button>
    </form>
  );
}
