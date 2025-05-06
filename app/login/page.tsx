import ThemeSelector from "@/components/buttons/theme-selector";
import GitHubLogin from "@/components/buttons/github-login";
import GoogleLogin from "@/components/buttons/google-login";

export default function LoginPage() {
  return (
    <>
      <header className='absolute top-0 z-10 mx-auto flex w-full items-start justify-start px-4 py-2'>
        <ThemeSelector />
      </header>
      <div className='container mx-auto mt-40 grid min-h-screen w-full max-w-4xl px-4'>
        <div className='mx-auto w-full max-w-96 space-y-6'>
          <h1 className='text-center text-4xl'>Login</h1>
          <section className='flex flex-row items-center justify-center gap-2'>
            <GoogleLogin />
            <GitHubLogin />
          </section>
        </div>
      </div>
    </>
  );
}
