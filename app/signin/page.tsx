import { redirect } from "next/navigation";
import { signIn, providerMap, auth } from "@/lib/auth";
import { Button } from "@/components/ui/button";
import BrandLogo from "@/components/brand-logo";
import BackButton from "@/components/back-button";
import GitHubIcon from "@/components/github-icon";
import GoogleIcon from "@/components/google-icon";

export default async function SignInPage({
  searchParams,
}: {
  searchParams: Promise<{ callbackUrl?: string }>;
}) {
  const params = await searchParams;
  const callbackUrl = params?.callbackUrl ?? "";
  const redirectToUrl = callbackUrl || "/create";

  const session = await auth();

  if (session) {
    redirect("/create");
  }

  return (
    <>
      <header className='mx-auto flex h-[8vh] max-w-6xl items-center justify-start p-4'>
        <BackButton />
      </header>
      <div className='mx-auto flex h-[92vh] w-full flex-col items-center gap-60 px-4 pt-32 sm:px-0'>
        <BrandLogo className='text-4xl' height={48} width={48} />

        <section className='space-y-4'>
          {Object.values(providerMap).map((provider) => (
            <form
              key={provider.id}
              action={async () => {
                "use server";
                try {
                  await signIn(provider.id, {
                    redirectTo: redirectToUrl,
                  });
                } catch (error) {
                  throw error;
                }
              }}
            >
              <Button
                type='submit'
                size='lg'
                className='h-12 border border-white shadow-lg'
              >
                {provider.id === "github" && <GitHubIcon />}
                {provider.id === "google" && <GoogleIcon />}
                <span>Sign in with {provider.name}</span>
              </Button>
            </form>
          ))}
        </section>
      </div>
    </>
  );
}
