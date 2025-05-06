import Link from "next/link";
import { Button } from "@/components/ui/button";
import ThemeSelector from "@/components/buttons/theme-selector";

export default function LandingPage() {
  return (
    <>
      <header className='absolute top-0 mx-auto flex w-full flex-row items-center justify-between px-4 py-2'>
        <ThemeSelector />
        <Button asChild size='xs'>
          <Link href='/signin'>Sign In</Link>
        </Button>
      </header>
      <div className='container mx-auto grid min-h-screen w-full place-items-center px-4'>
        <h1 className='text-4xl font-bold'>Many Links</h1>
      </div>
    </>
  );
}
