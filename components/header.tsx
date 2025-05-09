import Link from "next/link";
import Image from "next/image";
import SignIn from "@/components/sign-in";

export default function Header() {
  return (
    <header className='mx-auto flex max-w-6xl items-center justify-between p-4 shadow-lg xl:shadow-none'>
      <Link href='/' className='flex flex-row items-center gap-0.5'>
        <Image src='/icon.svg' alt='logo' height={32} width={32} />
        <span className='text-lg font-extrabold tracking-tight'>ManyLinks</span>
      </Link>
      <SignIn />
    </header>
  );
}
