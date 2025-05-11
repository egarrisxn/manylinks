import PublicNavbar from "@/components/landing/public-navbar";
import LandingHero from "@/components/landing/landing-hero";
import ItemGrid from "@/components/landing/info-grid";
import ImageGrid from "@/components/landing/image-grid";
import LandingCTA from "@/components/landing/landing-cta";
import PublicFooter from "@/components/landing/public-footer";

export default function LandingPage() {
  return (
    <>
      <section className='h-[8vh]'>
        <PublicNavbar />
      </section>
      <main className='mx-auto flex min-h-[92vh] w-full flex-col'>
        <section className='mx-auto flex w-full max-w-5xl flex-col items-center justify-center gap-10 px-6 pt-32 md:flex-row md:justify-between md:gap-0 2xl:px-0'>
          <LandingHero />
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
          <LandingCTA />
        </section>
      </main>
      <PublicFooter />
    </>
  );
}
