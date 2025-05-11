export default function PrivateFooter() {
  return (
    <footer className='hidden h-[4vh] lg:block'>
      <p className='text-muted-foreground mx-auto flex flex-row items-center justify-center pt-2 text-center text-sm tracking-tight'>
        © {new Date().getFullYear()} ManyLinks. All rights reserved.
      </p>
    </footer>
  );
}
