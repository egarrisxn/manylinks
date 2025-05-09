import Link from "next/link";
import Image from "next/image";
import GitHubLogin from "./github-login";
import GoogleLogin from "./google-login";

export default function Header() {
  return (
    <header className='border-b bg-white py-2'>
      <div className='mx-auto flex max-w-6xl flex-wrap items-center justify-between px-4'>
        <Link href='/' className='flex items-center'>
          <Image src='/icon.svg' alt='logo' height={32} width={32} />
          <span className='ml-1 text-lg font-bold'>ManyLinks</span>
        </Link>
        <div className='flex flex-row items-center gap-3'>
          <span>Login:</span>
          <GoogleLogin />
          <GitHubLogin />
        </div>
      </div>
    </header>
  );
}
