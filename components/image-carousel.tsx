"use client";

import React, { useCallback, useEffect, useState } from "react";

const ImageCarouselCard = ({ images }: { images: string[] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const goToNext = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  }, [images.length]);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        goToNext();
        setIsAnimating(false);
      }, 1000);
    }, 3000);

    return () => clearInterval(interval);
  }, [goToNext]);

  return (
    <div
      className='relative mx-auto'
      style={{ height: "515px", width: "270px" }}
    >
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`Slide ${index}`}
          className={`absolute rounded-[2.2rem] transition-opacity duration-1000 ${
            currentIndex === index ? "opacity-100" : "opacity-0"
          } ${isAnimating ? "z-10" : "z-0"}`}
          style={{ height: "515px", width: "270px", objectFit: "cover" }}
        />
      ))}
    </div>
  );
};

export default function ImageCarousel() {
  const imageUrls: string[] = [
    "/images/1.png",
    "/images/2.png",
    "/images/3.png",
    "/images/4.png",
  ];

  return <ImageCarouselCard images={imageUrls} />;
}
