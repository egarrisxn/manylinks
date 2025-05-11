import BrandLogo from "../brand-logo";
import GitHubIcon from "../github-icon";

export default function LandingFooter() {
  return (
    <footer className='mx-auto grid w-full grid-cols-1 items-center justify-evenly gap-4 px-4 py-6 sm:flex-row md:grid-cols-3 md:gap-0'>
      <BrandLogo
        className='mx-auto justify-center text-sm'
        height={16}
        width={16}
      />

      <p className='text-muted-foreground mx-auto flex items-center justify-center text-center text-sm tracking-tighter'>
        © 2025 ManyLinks. All Rights Reserved.
      </p>

      <a
        href='https://github.com/egarrisxn/manylinks'
        target='_blank'
        rel='noopener noreferrer'
        className='mx-auto hidden size-5 items-center justify-center text-[#D247BF] hover:text-[#d247c0e0] md:flex'
      >
        <GitHubIcon />
      </a>
    </footer>
  );
}
