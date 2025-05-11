import { LogOut } from "lucide-react";
import { signOut } from "@/lib/auth";
import { Button } from "./ui/button";

export default function SignOutButton() {
  return (
    <form
      action={async () => {
        "use server";
        await signOut({ redirectTo: "/" });
      }}
    >
      <Button size='lg' variant='fun'>
        <LogOut />
        Sign Out
      </Button>
    </form>
  );
}
