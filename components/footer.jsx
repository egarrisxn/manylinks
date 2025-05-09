import Link from "next/link";
import Image from "next/image";
import GitHubIcon from "./github-icon";

export default function Footer() {
  return (
    <footer className='mt-8 border-t bg-white py-4'>
      <div className='mx-auto flex max-w-6xl flex-wrap items-center justify-between px-4'>
        <section className='mb-1 flex items-center md:mb-0'>
          <Image src='/icon.svg' alt='logo' height={32} width={32} />
          <span className='ml-1 text-lg font-bold'>ManyLinks</span>
        </section>
        <section className='order-3 mt-1 w-full text-center text-sm text-gray-500 md:order-2 md:mt-0 md:w-auto md:flex-1 md:text-center'>
          © {new Date().getFullYear()} ManyLinks. All rights reserved.
        </section>
        <section className='order-2 mb-1 flex items-center gap-4 md:order-3 md:mb-0'>
          <Link
            href='https://github.com/egarrisxn/manylinks'
            target='_blank'
            rel='noopener noreferrer'
            className='text-gray-700 hover:text-gray-500'
          >
            <GitHubIcon />
          </Link>
        </section>
      </div>
    </footer>
  );
}
