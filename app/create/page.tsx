import ExtraLinksForm from "@/components/forms/extra-links-form";
import ProfileForm from "@/components/forms/profile-form";
import SocialLinksForm from "@/components/forms/social-links-form";
import PreviewPage from "@/components/buttons/preview-page";
import SamplePage from "@/components/buttons/sample-page";
import PublishPage from "@/components/buttons/publish-page";
import BackgroundShell from "@/components/backgrounds/background-shell";
import MobileMockup from "@/components/mobile-mockup";
import ThemeSelector from "@/components/buttons/theme-selector";
import SignOut from "@/components/buttons/sign-out";

export default function CreatePage() {
  return (
    <>
      <header className='absolute top-0 mx-auto flex w-full flex-row items-center justify-between px-4 py-2'>
        <ThemeSelector />
        <SignOut />
      </header>
      <div className='relative grid min-h-screen px-2 md:container lg:grid-cols-3 lg:px-0'>
        <section className='flex h-screen flex-col items-center justify-center gap-6 px-2 py-6 lg:col-span-2 lg:px-20'>
          <div className='hide_scrollbar flex w-full flex-col gap-5 overflow-y-auto px-4 pt-[5vh] pb-[10vh] lg:pt-0 lg:pb-0'>
            <ProfileForm />
            <SocialLinksForm />
            <ExtraLinksForm />
            <BackgroundShell />
            <div className='grid w-full grid-cols-2 items-center justify-center gap-2 px-1 py-2 md:gap-4'>
              <SamplePage />
              <PublishPage />
            </div>
          </div>
        </section>

        <section className='hidden items-center justify-end lg:flex'>
          <MobileMockup />
        </section>

        <div className='lg:hidden'>
          <PreviewPage />
        </div>
      </div>
    </>
  );
}
