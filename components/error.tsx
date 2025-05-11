import GoBackButton from "@/components/go-back-button";

export default function Error() {
  return (
    <section className='mx-auto flex max-h-screen min-h-[85vh] w-full flex-col items-center justify-center px-2'>
      <h1 className='text-6xl font-black text-blue-500'>
        O<span className='text-pink-500'>O</span>P
        <span className='text-pink-500'>S</span>!
      </h1>
      <p className='text-foreground/80 mt-1 mb-6 text-3xl font-semibold'>
        Page Error.
      </p>
      <GoBackButton />
    </section>
  );
}
