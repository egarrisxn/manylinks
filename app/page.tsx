import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import SignIn from "@/components/sign-in";
import ImageCarousel from "@/components/image-carousel";
import ItemGrid from "@/components/item-grid";
import ImageGrid from "@/components/image-grid";
import GitHubIcon from "@/components/github-icon";

export default function LandingPage() {
  return (
    <>
      <header className='mx-auto flex max-w-6xl items-center justify-between p-4 shadow-lg xl:shadow-none'>
        <Link href='/' className='flex flex-row items-center gap-0.5'>
          <Image src='/icon.svg' alt='logo' height={32} width={32} />
          <span className='text-lg font-extrabold tracking-tight'>
            ManyLinks
          </span>
        </Link>
        <SignIn />
      </header>

      <div className='mx-auto flex min-h-screen w-full flex-col'>
        <section className='mx-auto flex w-full max-w-5xl flex-col items-center justify-center gap-10 px-6 pt-32 md:flex-row md:justify-between md:gap-0 2xl:px-0'>
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
                <Link href='/signin'>
                  <Button size='lg' className='border border-white shadow-xl'>
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
                    className='border border-white bg-[#D247BF] shadow-xl hover:bg-[#d247c0e0]'
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
        </section>

        <section className='mx-auto mt-32 w-full max-w-5xl px-6 2xl:px-0'>
          <h1 className='mx-auto mb-4 max-w-3xl text-center text-5xl font-bold'>
            Your all-in-one link hub, built for creators like you
          </h1>
          <p className='text-muted-foreground mx-auto mb-8 max-w-2xl px-4 text-center sm:mb-4'>
            Share more than just a link. Combine your profiles, content, store,
            and projects in one stylish, customizable page. No coding required!
          </p>
          <ItemGrid />
        </section>

        <section className='mx-auto mt-32 w-full max-w-5xl px-6 2xl:px-0'>
          <h1 className='mx-auto mb-4 max-w-3xl text-center text-5xl font-bold'>
            Make your first impression unforgettable
          </h1>
          <p className='text-muted-foreground mx-auto mb-8 max-w-2xl px-4 text-center sm:mb-4'>
            Whether you are a creator, entrepreneur, or brand, connect your
            audience to everything you offer with a sleek micro-site that iss
            always up to date.
          </p>
          <div className='group relative mt-4 mb-12'>
            <ImageGrid />
            <div className='from-background/0 via-background/50 to-background absolute bottom-0 left-0 h-20 w-full rounded-lg bg-gradient-to-b md:h-28'></div>
          </div>
        </section>

        <section className='mx-auto mt-32 flex w-full flex-col items-center justify-center bg-zinc-50 pt-24'>
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
            <Link href='/signin'>
              <Button size='lg' className='border border-white shadow-xl'>
                Let&apos;s Begin
              </Button>
            </Link>
          </div>
        </section>
      </div>

      <footer className='mx-auto grid w-full grid-cols-1 items-center justify-evenly gap-4 p-4 sm:flex-row md:grid-cols-3 md:gap-0'>
        <div className='mx-auto flex flex-row items-center justify-center gap-0.5'>
          <Image
            src='/icon.svg'
            alt='logo'
            height={24}
            width={24}
            className='size-6'
          />
          <span className='font-extrabold tracking-tight'>ManyLinks</span>
        </div>
        <div className='mx-auto flex items-center justify-center'>
          <p className='text-muted-foreground text-center text-sm tracking-tight'>
            © 2025 ManyLinks. All Rights Reserved.
          </p>
        </div>
        <div className='mx-auto hidden items-center justify-center md:flex'>
          <a
            href='https://github.com/egarrisxn/manylinks'
            target='_blank'
            rel='noopener noreferrer'
            className='text-[#D247BF] hover:text-[#d247c0e0]'
          >
            <GitHubIcon />
          </a>
        </div>
      </footer>
    </>
  );
}
