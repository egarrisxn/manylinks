export default function Loading() {
  const letters = ["L", "O", "A", "D", "I", "N", "G"];
  const colors = [
    "text-blue-500",
    "text-pink-500",
    "text-yellow-500",
    "text-black",
  ];

  return (
    <section className='mx-auto flex max-h-screen min-h-[85vh] w-full flex-col items-center justify-center px-2'>
      <p className='text-5xl font-black'>
        {letters.map((letter, i) => (
          <span key={i} className={colors[i % colors.length]}>
            {letter}
          </span>
        ))}
      </p>
    </section>
  );
}
