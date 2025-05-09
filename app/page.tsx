import Link from "next/link";
import Image from "next/image";
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
                One Page. Many Links.
              </h1>
              <h2 className='my-6 w-full max-w-md text-xl text-gray-500 md:text-2xl xl:max-w-xl xl:text-3xl'>
                Help your followers discover everything you do, with one simple
                link.
              </h2>
              <div className='flex flex-row items-center gap-1'>
                <GitHubLogin />
                <GoogleLogin />
              </div>
            </div>
          </div>
          <div className='w-fit'>
            <ImageCarousel />
          </div>
        </section>
        <section className='mx-auto mt-20 max-w-3xl text-center md:mt-32'>
          <h1 className='mb-4 text-5xl font-bold'>
            Your all-in-one link hub, built for creators like you
          </h1>
          <p>
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
          <p>
            Whether you are a creator, entrepreneur, or brand, connect your
            audience to everything you offer with a sleek micro-site that iss
            always up to date.
          </p>
        </section>
        <section className='mt-4 mb-12'>
          <ImageGrid />
        </section>
      </div>
      <footer className='mt-8 py-4'>
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
            <p className='text-center text-sm tracking-tight text-zinc-700'>
              © {new Date().getFullYear()} ManyLinks. All Rights Reserved.
            </p>
          </section>

          <section>
            <Link
              href='https://github.com/egarrisxn/manylinks'
              target='_blank'
              rel='noopener noreferrer'
              className='text-zinc-700 hover:text-zinc-900'
            >
              <GitHubIcon />
            </Link>
          </section>
        </div>
      </footer>
    </>
  );
}
