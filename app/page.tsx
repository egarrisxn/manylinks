import ThemeSelector from "@/components/buttons/theme-selector";
import GitHubLogin from "@/components/buttons/github-login";
import GoogleLogin from "@/components/buttons/google-login";

export default function LandingPage() {
  return (
    <>
      <header className='absolute top-0 mx-auto flex w-full flex-row items-center justify-between px-4 py-2'>
        <ThemeSelector />

        <div className='flex flex-row items-center gap-2'>
          <p className='pr-1 text-sm'>Login With:</p>
          <GoogleLogin />
          <GitHubLogin />
        </div>
      </header>
      <div className='container mx-auto grid min-h-screen w-full place-items-center px-4'>
        <h1 className='text-4xl font-bold'>Many Links</h1>
      </div>
    </>
  );
}
