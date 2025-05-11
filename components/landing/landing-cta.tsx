import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function LandingCTA() {
  return (
    <>
      <h1 className='mx-auto mb-4 max-w-2xl px-6 text-center text-5xl font-bold'>
        Super Totally Free and 100%
        <span className='to-primary bg-gradient-to-r from-[#D247BF] bg-clip-text pl-2 text-transparent'>
          Open Source
        </span>{" "}
        for You
      </h1>
      <p className='text-muted-foreground mx-auto mb-4 max-w-xl px-16 text-center'>
        Blah blah blah filler words need to be here yadda yadda bam! Here we
        gooooo! Singing and dancing and yeah.
      </p>
      <div className='mx-auto mt-4 mb-20 flex items-center justify-center'>
        <Link href='/signInButton'>
          <Button size='lg' className='border border-white shadow-lg'>
            Let&apos;s Begin
          </Button>
        </Link>
      </div>
    </>
  );
}
