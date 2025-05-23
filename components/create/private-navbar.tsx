import BrandLogo from "../brand-logo";
import SignOutButton from "../signout-button";

export default function PrivateNavbar() {
  return (
    <header className='max-w-screen-3xl mx-auto flex h-[8vh] w-full flex-row items-center justify-between p-4'>
      <BrandLogo />
      <SignOutButton />
    </header>
  );
}
