import Link from "next/link";
import { Button } from "@/components/ui/button";
import ImageCarousel from "@/components/landing/image-carousel";

export default function LandingHero() {
  return (
    <>
      <div className='w-fit'>
        <div className='flex flex-col items-center text-center md:items-start md:text-start'>
          <h1 className='w-full max-w-md text-6xl font-bold md:text-7xl xl:max-w-xl xl:text-8xl'>
            One Page.
            <span className='to-primary bg-gradient-to-r from-[#D247BF] bg-clip-text px-2 text-transparent'>
              {" "}
              Many{" "}
            </span>
            Links.
          </h1>
          <h2 className='text-accent-foreground/70 my-6 w-full max-w-md px-4 text-xl md:text-2xl xl:max-w-xl xl:text-3xl'>
            Help your followers discover everything you do, with one simple
            link.
          </h2>
          <div className='mb-8 flex flex-row items-center gap-4 sm:mb-4'>
            <Link href='/signInButton'>
              <Button size='lg' className='border border-white shadow-lg'>
                Get Building
              </Button>
            </Link>
            <a
              href='https://github.com/egarrisxn/manylinks'
              target='_blank'
              rel='noopener noreferrer'
            >
              <Button
                size='lg'
                className='border border-white bg-[#D247BF] shadow-lg hover:bg-[#d247c0e0]'
              >
                Learn More
              </Button>
            </a>
          </div>
        </div>
      </div>
      <div className='group relative w-fit'>
        <div className='bg-primary/50 absolute top-2 left-1/2 mx-auto h-24 w-[90%] -translate-x-1/2 transform rounded-full blur-3xl lg:-top-8 lg:h-80'></div>
        <ImageCarousel />
      </div>
    </>
  );
}
