import GitHubLogin from "@/components/buttons/github-login";
import GoogleLogin from "@/components/buttons/google-login";

export default function LandingPage() {
  return (
    <>
      <header className='absolute top-4 right-4'>
        <section className='flex flex-row items-center gap-3'>
          <span>Login:</span>
          <GoogleLogin />
          <GitHubLogin />
        </section>
      </header>
      <div className='container mx-auto grid min-h-screen w-full place-items-center px-4'>
        <h1 className='text-4xl font-bold'>Many Links</h1>
      </div>
    </>
  );
}
