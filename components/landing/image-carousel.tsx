import { ImageCarouselItem } from "./image-carousel-item";

const imageUrls: string[] = [
  "/images/1.png",
  "/images/2.png",
  "/images/3.png",
  "/images/4.png",
];

export default function ImageCarousel() {
  return <ImageCarouselItem images={imageUrls} />;
}
