import Link from "next/link";
import Image from "next/image";
import SignOut from "@/components/sign-out";
import ProfileForm from "@/components/profile-form";
import SocialLinksForm from "@/components/social-links-form";
import ExtraLinksForm from "@/components/extra-links-form";
import BackgroundCard from "@/components/background-card";
import SampleData from "@/components/sample-data";
import PublishPage from "@/components/publish-page";
import MobileMockup from "@/components/mobile-mockup";
import DesktopMockup from "@/components/desktop-mockup";
import LaptopMockup from "@/components/laptop-mockup";
import PreviewPage from "@/components/preview-page";

export default function CreatePage() {
  return (
    <>
      <header className='3xl:shadow-none py-4 shadow-lg'>
        <div className='max-w-screen-3xl mx-auto flex items-center justify-between px-4'>
          <Link href='/'>
            <Image src='/icon.svg' alt='Logo' width={32} height={32} />
          </Link>
          <SignOut />
        </div>
      </header>

      <div className='lg:max-w-screen-3xl mx-auto grid grid-cols-1 px-2 lg:min-h-[88vh] lg:w-full lg:grid-cols-2 lg:px-0 2xl:grid-cols-12 2xl:px-4'>
        <section className='3xl:px-2 mx-auto flex min-h-[88vh] w-full flex-col items-center justify-center px-2 py-3 lg:h-[88vh] 2xl:col-span-5'>
          <div className='hide_scrollbar flex w-full flex-col gap-5 overflow-y-auto px-4 pt-[5vh] pb-[10vh] lg:pt-0 lg:pb-0'>
            <ProfileForm />
            <SocialLinksForm />
            <ExtraLinksForm />
            <BackgroundCard />
            <div className='grid w-full grid-cols-2 items-center justify-center gap-2 px-1 py-2 pt-2 md:gap-4'>
              <SampleData />
              <PublishPage />
            </div>
          </div>
        </section>
        <section className='mx-auto hidden flex-col items-center justify-center px-2 py-3 lg:flex lg:h-[88vh] lg:w-full 2xl:col-span-7'>
          <div className='hide_scrollbar flex w-full flex-col gap-6 overflow-y-auto px-4 lg:pt-0 lg:pb-0 2xl:flex-row 2xl:items-center 2xl:justify-center'>
            <div className='flex flex-col gap-6'>
              <LaptopMockup />
              <DesktopMockup />
            </div>
            <div className='flex'>
              <MobileMockup />
            </div>
          </div>
        </section>
        <section className='lg:hidden'>
          <PreviewPage />
        </section>
      </div>

      <footer className='hidden pt-2 lg:block'>
        <p className='mx-auto flex w-full flex-row items-center justify-center px-4 text-center text-sm text-gray-700'>
          © {new Date().getFullYear()} ManyLinks. All rights reserved.
        </p>
      </footer>
    </>
  );
}
