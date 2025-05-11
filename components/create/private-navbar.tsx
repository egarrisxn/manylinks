import BrandLogo from "../brand-logo";
import SignOutButton from "../signout-button";

export default function PrivateNavbar() {
  return (
    <header className='3xl:shadow-none h-[8vh] shadow-lg'>
      <div className='max-w-screen-3xl mx-auto flex w-full flex-row items-center justify-between p-4'>
        <BrandLogo />
        <SignOutButton />
      </div>
    </header>
  );
}
