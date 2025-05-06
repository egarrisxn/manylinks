import ThemeSelector from "@/components/buttons/theme-selector";
import GitHubLogin from "@/components/buttons/github-login";
import GoogleLogin from "@/components/buttons/google-login";

export default function LandingPage() {
  return (
    <>
      <header className='absolute top-2 left-4'>
        <ThemeSelector />
      </header>
      <div className='container mx-auto grid min-h-screen w-full place-items-center px-4'>
        <h1 className='text-4xl font-bold'>Many Links</h1>
        <section className='flex flex-row items-center justify-center gap-2'>
          <GoogleLogin />
          <GitHubLogin />
        </section>
      </div>
    </>
  );
}
