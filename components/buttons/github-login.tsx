import { signIn } from "@/lib/auth";
import { Button } from "../ui/button";

export default function GitHubLogin() {
  return (
    <form
      action={async () => {
        "use server";
        await signIn("github", { redirectTo: "/create" });
      }}
    >
      <Button type='submit' size='xs'>
        GitHub
      </Button>
    </form>
  );
}
