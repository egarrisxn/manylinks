import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function LandingCTA() {
  return (
    <>
      <h1 className='mx-auto mb-4 max-w-2xl px-6 text-center text-5xl font-bold'>
        100%
        <span className='to-primary bg-gradient-to-r from-[#D247BF] bg-clip-text pl-2 text-transparent'>
          Open Source
        </span>{" "}
        & totally free to use
      </h1>
      <p className='text-muted-foreground mx-auto mb-4 max-w-xl px-16 text-center'>
        Built with love, made to share, and yours to enjoy. It is simple,
        straightforward, and read for action!
      </p>
      <div className='mx-auto mt-4 mb-20 flex items-center justify-center'>
        <Link href='/signin'>
          <Button size='lg' variant='fun'>
            Let&apos;s Begin
          </Button>
        </Link>
      </div>
    </>
  );
}
