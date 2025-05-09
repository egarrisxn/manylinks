import { signIn } from "@/lib/auth";
import { Button } from "./ui/button";
import GitHubLineIcon from "./github-icon";

export default function GitHubLogin() {
  return (
    <form
      action={async () => {
        "use server";
        await signIn("github", { redirectTo: "/create" });
      }}
    >
      <Button type='submit'>
        <GitHubLineIcon />
        <span className='block sm:hidden'>Login</span>
        <span className='hidden md:block'>GitHub Login</span>
      </Button>
    </form>
  );
}
