import GoBackButton from "@/components/go-back-button";

export default function NotFound() {
  return (
    <section className='mx-auto flex max-h-screen min-h-[85vh] w-full flex-col items-center justify-center px-2'>
      <h1 className='text-8xl font-black text-blue-500'>
        4<span className='text-pink-500'>0</span>4
      </h1>
      <p className='text-foreground/80 mt-1 mb-6 text-2xl font-semibold'>
        Page Not Found.
      </p>
      <GoBackButton />
    </section>
  );
}
