import { useState, useEffect } from "react";

interface ImageRotatorProps {
  images: { src: string; alt: string }[];
  rotationInterval?: number;
}

export default function SimpleImageRotator({ 
  images, 
  rotationInterval = 3000 
}: ImageRotatorProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (images.length <= 1 || isHovered) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, rotationInterval);

    return () => clearInterval(interval);
  }, [images.length, rotationInterval, isHovered]);

  if (images.length === 0) return null;

  return (
    <div 
      className="relative w-full h-[500px] lg:h-[600px] overflow-hidden rounded-xl bg-gradient-to-br from-black via-gray-900 to-black"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Minimal Background Texture */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23FFFFFF' fill-opacity='0.1'%3E%3Cpath d='M20 20l10-10v20l-10-10zm-10 10l10-10h-20l10 10z'/%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      {/* Enhanced Furniture Image Display */}
      <div className="relative w-full h-full p-3 group">
        <div className="relative w-full h-full rounded-lg overflow-hidden shadow-2xl">
          {/* Premium Spotlight Border */}
          <div className="absolute -inset-1 bg-gradient-to-r from-white/20 via-white/5 to-white/20 rounded-xl blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
          
          {/* Main Image Container */}
          <div className="relative w-full h-full rounded-lg overflow-hidden bg-black/20">
            <img
              src={images[currentIndex].src}
              alt={images[currentIndex].alt}
              className="w-full h-full object-contain transition-all duration-1000 ease-in-out group-hover:scale-[1.02] group-hover:brightness-110"
              style={{
                filter: 'contrast(1.15) saturate(1.2) brightness(1.1)',
              }}
            />
            
            {/* Removed white overlays for cleaner appearance */}
            
            {/* Furniture Focus Overlay */}
            <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-black/5"></div>
            
            {/* Premium Label */}
            <div className="absolute bottom-4 left-4 bg-black/60 backdrop-blur-sm text-white px-3 py-1.5 rounded-full text-xs font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              HANDCRAFTED FURNITURE
            </div>
            
            {/* Image Counter with Style */}
            <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-sm text-white px-3 py-1.5 rounded-full text-sm font-medium">
              {currentIndex + 1} / {images.length}
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Navigation Dots */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-3 bg-black/60 backdrop-blur-sm px-4 py-2 rounded-full">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`relative transition-all duration-500 ${
              index === currentIndex 
                ? 'w-4 h-4' 
                : 'w-3 h-3 hover:w-3.5 hover:h-3.5'
            }`}
            aria-label={`Go to image ${index + 1}`}
          >
            <div className={`w-full h-full rounded-full transition-all duration-500 ${
              index === currentIndex 
                ? 'bg-amber-500 shadow-lg' 
                : 'bg-gray-400 hover:bg-gray-300'
            }`} />
          </button>
        ))}
      </div>

      {/* Luxury Progress Bar */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-slate-800 via-slate-700 to-slate-800">
        <div 
          className="h-full bg-gradient-to-r from-amber-400 via-gold to-amber-600 transition-all duration-500 shadow-lg shadow-gold/30"
          style={{ width: `${((currentIndex + 1) / images.length) * 100}%` }}
        />
      </div>

      {/* Corner Accents */}
      <div className="absolute top-4 left-4 w-3 h-3 border-l-2 border-t-2 border-gold/40"></div>
      <div className="absolute top-4 right-4 w-3 h-3 border-r-2 border-t-2 border-gold/40"></div>
      <div className="absolute bottom-8 left-4 w-3 h-3 border-l-2 border-b-2 border-gold/40"></div>
      <div className="absolute bottom-8 right-4 w-3 h-3 border-r-2 border-b-2 border-gold/40"></div>
    </div>
  );
}