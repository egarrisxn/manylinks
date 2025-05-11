export function ImageGridItem({ images }: { images: string[] }) {
  return (
    <div className='grid grid-cols-1 gap-4 p-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-0'>
      {images.map((image, index) => (
        <div key={index} className='flex items-center justify-center'>
          <img
            src={image}
            alt={`image-${index}`}
            className={`size-full rounded-[2.2rem] transition-transform duration-300 hover:scale-105 hover:rotate-0 ${
              index % 2 === 0 ? "-rotate-5" : "rotate-5"
            }`}
          />
        </div>
      ))}
    </div>
  );
}
