import ThemeSelector from "@/components/buttons/theme-selector";
import GitHubLogin from "@/components/buttons/github-login";
import GoogleLogin from "@/components/buttons/google-login";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function LoginPage() {
  return (
    <>
      <header className='absolute top-0 z-10 mx-auto flex w-full items-start justify-start px-4 py-2'>
        <ThemeSelector />
      </header>
      <div className='container mx-auto grid min-h-screen w-full place-items-center px-4'>
        <Card className='w-full max-w-96'>
          <CardHeader>
            <CardTitle>
              <h1 className='mx-auto text-center text-4xl'>Login</h1>
            </CardTitle>
          </CardHeader>
          <CardContent className='mx-auto mb-6 flex flex-row gap-2'>
            <GitHubLogin />
            <GoogleLogin />
          </CardContent>
          <CardFooter>
            <p className='mx-auto text-center text-sm'>Manylinks 2025</p>
          </CardFooter>
        </Card>
      </div>
    </>
  );
}
