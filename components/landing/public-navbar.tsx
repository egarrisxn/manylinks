import { auth } from "@/lib/auth";
import BrandLogo from "../brand-logo";
import SignInButton from "../signin-button";
import SignOutButton from "../signout-button";

export default async function LandingNavbar() {
  const session = await auth();

  return (
    <header className='mx-auto flex max-w-6xl items-center justify-between p-4 shadow-lg xl:shadow-none'>
      <BrandLogo />

      {session ? <SignOutButton /> : <SignInButton />}
    </header>
  );
}
