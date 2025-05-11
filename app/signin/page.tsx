import { redirect } from "next/navigation";
import { signIn, providerMap, auth } from "@/lib/auth";
import { Button } from "@/components/ui/button";
import BrandLogo from "@/components/brand-logo";
import GoBackButton from "@/components/go-back-button";
import GoogleIcon from "@/components/google-icon";
import TwitterIcon from "@/components/twitter-icon";
import GitHubIcon from "@/components/github-icon";

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
        <GoBackButton />
      </header>
      <div className='mx-auto flex h-[92vh] w-full flex-col items-center px-4'>
        <div className='mx-auto flex flex-col items-center justify-center gap-20 pt-36 pb-12'>
          <BrandLogo className='text-4xl 2xl:text-5xl' height={48} width={48} />
          <div className='w-full space-y-2.5 px-2 2xl:space-y-3 2xl:px-4'>
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
                  variant='fun'
                  size='lg'
                  className='h-12 w-full'
                >
                  {provider.id === "google" && <GoogleIcon />}
                  {provider.id === "twitter" && <TwitterIcon />}
                  {provider.id === "github" && <GitHubIcon />}
                  <span>Sign in with {provider.name}</span>
                </Button>
              </form>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
