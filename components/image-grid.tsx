import { imageUrls } from "@/lib/site";

interface ImageGridProps {
  images: string[];
}

function ImageCard({ images }: ImageGridProps) {
  return (
    <div className='grid grid-cols-1 gap-4 p-4 sm:grid-cols-2 lg:grid-cols-4'>
      {images.map((image, index) => (
        <div key={index} className='flex items-center justify-center'>
          <img
            src={image}
            alt={`image-${index}`}
            className='h-auto w-full rounded-[2.2rem] transition-transform duration-300 hover:scale-105'
          />
        </div>
      ))}
    </div>
  );
}

export default function ImageGrid() {
  return <ImageCard images={imageUrls} />;
}
