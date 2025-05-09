import Image from "next/image";
import GitHubIcon from "./github-icon";

export default function Footer() {
  return (
    <footer className='mx-auto grid w-full grid-cols-1 items-center justify-evenly gap-4 p-4 sm:flex-row md:grid-cols-3 md:gap-0'>
      <div className='order-2 mx-auto flex items-center justify-center md:order-1'>
        <p className='text-muted-foreground text-center text-sm tracking-tight'>
          © 2025 ManyLinks. All Rights Reserved.
        </p>
      </div>

      <div className='mx-auto hidden items-center justify-center md:order-2 md:flex'>
        <a
          href='https://github.com/egarrisxn/manylinks'
          target='_blank'
          rel='noopener noreferrer'
          className='text-[#D247BF] hover:text-[#d247c0e0]'
        >
          <GitHubIcon />
        </a>
      </div>

      <div className='order-1 mx-auto flex flex-row items-center justify-center gap-0.5 md:order-3'>
        <Image
          src='/icon.svg'
          alt='logo'
          height={24}
          width={24}
          className='size-6'
        />
        <span className='font-extrabold tracking-tight'>ManyLinks</span>
      </div>
    </footer>
  );
}
