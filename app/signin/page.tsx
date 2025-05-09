import Image from "next/image";
import { signIn, providerMap } from "@/lib/auth";
import { Button } from "@/components/ui/button";
import GitHubIcon from "@/components/github-icon";
import GoogleIcon from "@/components/google-icon";

interface SignInPageProps {
  searchParams: Promise<{ callbackUrl?: string }>;
}

export default async function SignInPage({ searchParams }: SignInPageProps) {
  const awaitedSearchParams = await searchParams;
  const callbackUrl = awaitedSearchParams?.callbackUrl ?? "";
  const redirectToUrl = callbackUrl || "/create";

  return (
    <div className='mx-auto flex min-h-screen w-full flex-col items-center gap-60 px-4 pt-48 sm:px-0'>
      <section className='rounded-full shadow-xl ring-3 ring-white'>
        <Image src='/icon.svg' alt='logo' height={120} width={120} />
      </section>

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
              className='h-11 border border-white shadow-xl'
            >
              {provider.id === "github" && <GitHubIcon />}
              {provider.id === "google" && <GoogleIcon />}
              <span>Sign in with {provider.name}</span>
            </Button>
          </form>
        ))}
      </section>
    </div>
  );
}
// import Image from "next/image";
// import { signIn, providerMap } from "@/lib/auth";
// import { Button } from "@/components/ui/button";
// import GitHubIcon from "@/components/github-icon";
// import GoogleIcon from "@/components/google-icon";

// export default async function SignInPage(props: {
//   searchParams: { callbackUrl?: string };
// }) {
//   const awaitedSearchParams = await Promise.resolve(props.searchParams);
//   const callbackUrl = awaitedSearchParams?.callbackUrl ?? "";
//   const redirectToUrl = callbackUrl || "/create";

//   return (
//     <div className='mx-auto flex min-h-screen w-full flex-col items-center gap-60 px-4 pt-48 sm:px-0'>
//       <section className='rounded-full shadow-xl ring-3 ring-white'>
//         <Image src='/icon.svg' alt='logo' height={120} width={120} />
//       </section>

//       <section className='space-y-4'>
//         {Object.values(providerMap).map((provider) => (
//           <form
//             key={provider.id}
//             action={async () => {
//               "use server";
//               try {
//                 await signIn(provider.id, {
//                   redirectTo: redirectToUrl,
//                 });
//               } catch (error) {
//                 throw error;
//               }
//             }}
//           >
//             <Button
//               type='submit'
//               size='lg'
//               className='h-11 border border-white shadow-xl'
//             >
//               {provider.id === "github" && <GitHubIcon />}
//               {provider.id === "google" && <GoogleIcon />}
//               <span>Sign in with {provider.name}</span>
//             </Button>
//           </form>
//         ))}
//       </section>
//     </div>
//   );
// }
