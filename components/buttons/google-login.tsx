import { signIn } from "@/lib/auth";
import { Button } from "../ui/button";

export default function GoogleLogin() {
  return (
    <form
      action={async () => {
        "use server";
        await signIn("google", { redirectTo: "/create" });
      }}
    >
      <Button type='submit' size='sm'>
        Google
      </Button>
    </form>
  );
}
