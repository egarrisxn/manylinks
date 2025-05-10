import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <section className='fixed top-[50%] left-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%]'>
      <div className='mx-auto flex max-w-sm flex-col items-center justify-center text-center'>
        <h1 className='text-3xl font-black md:text-4xl lg:text-6xl'>404</h1>
        <p className='text-foreground-80 mt-2 font-medium md:text-lg lg:text-2xl'>
          Page Not Found.
        </p>
        <div className='mt-4 flex w-full shrink-0 items-center justify-center gap-x-3 sm:w-auto'>
          <Button size='sm' asChild>
            <Link href='/'>Go Back</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
