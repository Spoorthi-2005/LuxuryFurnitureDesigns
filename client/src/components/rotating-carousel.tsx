import { useState, useEffect } from "react";

interface CarouselImage {
  src: string;
  alt: string;
}

interface RotatingCarouselProps {
  images: CarouselImage[];
  autoRotate?: boolean;
  rotationInterval?: number;
}

export default function RotatingCarousel({ 
  images, 
  autoRotate = true, 
  rotationInterval = 4000 
}: RotatingCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!autoRotate || images.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, rotationInterval);

    return () => clearInterval(interval);
  }, [autoRotate, rotationInterval, images.length]);

  const getItemClass = (index: number) => {
    const totalImages = images.length;
    const diff = (index - currentIndex + totalImages) % totalImages;
    
    if (diff === 0) return "active";
    if (diff === 1 || diff === totalImages - 1) return diff === 1 ? "next" : "prev";
    return "hidden";
  };

  if (images.length === 0) return null;

  return (
    <div className="luxury-carousel-container">
      <div className="rotating-carousel">
        {images.map((image, index) => (
          <div
            key={index}
            className={`carousel-item ${getItemClass(index)}`}
          >
            <img
              src={image.src}
              alt={image.alt}
              className="image-luxury image-glossy-enhanced"
            />
          </div>
        ))}
      </div>
      
      {/* Navigation dots */}
      <div className="flex justify-center mt-6 space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentIndex 
                ? 'bg-luxury-gold shadow-lg scale-110' 
                : 'bg-glass-white hover:bg-soft-brown'
            }`}
            aria-label={`Go to image ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}