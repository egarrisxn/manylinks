import Link from "next/link";
import Image from "next/image";

export default function UsersProfileLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <main className='flex-1'>{children}</main>
      <Link
        href='/'
        className='gap-0.3 fixed inset-x-0 bottom-0 mx-auto flex w-full flex-row items-center justify-center py-2 text-xs font-black tracking-tighter backdrop-blur-sm'
      >
        <span>MANY</span>
        <Image src='/icon.svg' alt='logo' height={16} width={16} />
        <span>LINKS</span>
      </Link>
    </>
  );
}
