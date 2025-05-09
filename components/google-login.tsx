import { signIn } from "@/lib/auth";
import { Button } from "./ui/button";
import GoogleLineIcon from "./google-icon";

export default function GoogleLogin() {
  return (
    <form
      action={async () => {
        "use server";
        await signIn("google", { redirectTo: "/create" });
      }}
    >
      <Button type='submit'>
        <GoogleLineIcon />
        <span className='block sm:hidden'>Login</span>
        <span className='hidden md:block'>Google Login</span>
      </Button>
    </form>
  );
}
