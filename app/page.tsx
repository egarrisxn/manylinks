import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import GoogleLogin from "@/components/google-login";
import GitHubLogin from "@/components/github-login";
import ImageCarousel from "@/components/image-carousel";
import ItemGrid from "@/components/item-grid";
import ImageGrid from "@/components/image-grid";
import GitHubIcon from "@/components/github-icon";

export default function LandingPage() {
  return (
    <>
      <header className='py-4 shadow-lg xl:shadow-none'>
        <div className='mx-auto flex max-w-6xl items-center justify-between px-4'>
          <Link href='/' className='flex flex-row items-center gap-1'>
            <Image src='/icon.svg' alt='logo' height={32} width={32} />
            <span className='text-lg font-bold'>ManyLinks</span>
          </Link>
          <div className='flex flex-row items-center gap-1'>
            <GitHubLogin />
            <GoogleLogin />
          </div>
        </div>
      </header>
      <div className='mx-auto flex min-h-screen max-w-5xl flex-col p-6'>
        <section className='mx-auto flex w-full flex-col items-center justify-center gap-10 pt-32 md:flex-row md:justify-between md:gap-0'>
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
              <h2 className='text-accent-foreground/70 my-6 w-full max-w-md text-xl md:text-2xl xl:max-w-xl xl:text-3xl'>
                Help your followers discover everything you do, with one simple
                link.
              </h2>
              <div className='flex flex-row items-center gap-1'>
                <GitHubLogin />
                <GoogleLogin />
              </div>
            </div>
          </div>
          <div className='group relative w-fit'>
            <div className='bg-primary/50 absolute top-2 left-1/2 mx-auto h-24 w-[90%] -translate-x-1/2 transform rounded-full blur-3xl lg:-top-8 lg:h-80'></div>
            <ImageCarousel />
          </div>
        </section>
        <section className='mx-auto mt-20 max-w-3xl text-center md:mt-32'>
          <h1 className='mb-4 text-5xl font-bold'>
            Your all-in-one link hub, built for creators like you
          </h1>
          <p className='text-muted-foreground'>
            Share more than just a link. Combine your profiles, content, store,
            and projects in one stylish, customizable page. No coding required!
          </p>
        </section>
        <section className='mt-4'>
          <ItemGrid />
        </section>
        <section className='mx-auto mt-20 flex max-w-3xl flex-col items-center justify-center text-center'>
          <h1 className='mb-4 text-5xl font-bold'>
            Make your first impression unforgettable
          </h1>
          <p className='text-muted-foreground'>
            Whether you are a creator, entrepreneur, or brand, connect your
            audience to everything you offer with a sleek micro-site that iss
            always up to date.
          </p>
        </section>
        <section className='group relative mt-4 mb-12'>
          <ImageGrid />
          <div className='from-background/0 via-background/50 to-background absolute bottom-0 left-0 h-20 w-full rounded-lg bg-gradient-to-b md:h-28'></div>
        </section>
        <section className='mx-auto mt-20 flex w-full max-w-lg flex-col items-center justify-center text-center'>
          <h1 className='mb-4 text-5xl font-bold'>
            Totally Free and 100%
            <span className='to-primary bg-gradient-to-r from-[#D247BF] bg-clip-text pl-2 text-transparent'>
              Open Source
            </span>
          </h1>
          <p className='text-muted-foreground w-full max-w-md'>
            Blah blah blah filler words need to be here yadda yadda bam! Here we
            gooooo! Singing and dancing and yeah.
          </p>
          <div className='mt-4 mb-20'>
            <Button asChild>
              <Link href='/create' target='_blank'>
                Lets begin!
              </Link>
            </Button>
          </div>
        </section>
      </div>
      <footer className='py-4'>
        <div className='mx-auto flex max-w-6xl items-center justify-between px-4'>
          <section className='flex flex-row items-center gap-1'>
            <Image
              src='/icon.svg'
              alt='logo'
              height={24}
              width={24}
              className='size-6'
            />
            <span className='hidden font-bold lg:block'>ManyLinks</span>
          </section>
          <section>
            <p className='text-muted-foreground text-center text-sm tracking-tight'>
              © {new Date().getFullYear()} ManyLinks. All Rights Reserved.
            </p>
          </section>

          <section>
            <Link
              href='https://github.com/egarrisxn/manylinks'
              target='_blank'
              rel='noopener noreferrer'
              className='text-muted-foreground hover:text-accent-foreground'
            >
              <GitHubIcon />
            </Link>
          </section>
        </div>
      </footer>
    </>
  );
}
