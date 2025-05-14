export function ImageGridItem({ images }: { images: string[] }) {
  return (
    <div className='grid grid-cols-1 gap-4 px-12 py-4 sm:grid-cols-2 sm:px-4 lg:grid-cols-4 lg:gap-0'>
      {images.map((image, index) => (
        <div key={index} className='flex items-center justify-center'>
          <img
            src={image}
            alt={`image-${index}`}
            className={`rounded-[2.2rem] sm:transition-transform sm:duration-300 sm:hover:scale-105 sm:hover:rotate-0 ${
              index % 2 === 0 ? "-rotate-5" : "rotate-5"
            }`}
            style={{ height: "450px", width: "250px", objectFit: "cover" }}
          />
        </div>
      ))}
    </div>
  );
}
