import { useState, useEffect, useRef } from "react";

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
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (!autoRotate || images.length <= 1 || isHovered) return;

    intervalRef.current = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        setIsTransitioning(false);
      }, 150);
    }, rotationInterval);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [autoRotate, rotationInterval, images.length, isHovered]);

  const handlePrevious = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
      setIsTransitioning(false);
    }, 150);
  };

  const handleNext = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      setIsTransitioning(false);
    }, 150);
  };

  const handleDotClick = (index: number) => {
    if (isTransitioning || index === currentIndex) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentIndex(index);
      setIsTransitioning(false);
    }, 150);
  };

  const getRotationAngle = (index: number) => {
    const totalImages = images.length;
    const angleStep = 360 / totalImages;
    const baseAngle = (index - currentIndex) * angleStep;
    return baseAngle;
  };

  const getItemStyle = (index: number) => {
    const totalImages = images.length;
    const diff = (index - currentIndex + totalImages) % totalImages;
    
    if (diff === 0) {
      // Active item - center stage
      return {
        transform: 'translateX(0) translateZ(0) scale(1)',
        opacity: 1,
        zIndex: 10,
        transition: isTransitioning 
          ? 'all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)' 
          : 'all 0.8s cubic-bezier(0.23, 1, 0.320, 1)'
      };
    } else if (diff === 1 || diff === totalImages - 1) {
      // Adjacent items with 3D rotation
      const isNext = diff === 1;
      return {
        transform: `translateX(${isNext ? '60%' : '-60%'}) rotateY(${isNext ? '-25deg' : '25deg'}) scale(0.85)`,
        opacity: 0.7,
        zIndex: 5,
        transition: isTransitioning 
          ? 'all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)' 
          : 'all 0.8s cubic-bezier(0.23, 1, 0.320, 1)'
      };
    } else if (diff === 2 || diff === totalImages - 2) {
      // Far items with more rotation
      const isFarNext = diff === 2;
      return {
        transform: `translateX(${isFarNext ? '100%' : '-100%'}) rotateY(${isFarNext ? '-45deg' : '45deg'}) scale(0.7)`,
        opacity: 0.4,
        zIndex: 2,
        transition: isTransitioning 
          ? 'all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)' 
          : 'all 0.8s cubic-bezier(0.23, 1, 0.320, 1)'
      };
    } else {
      // Hidden items
      return {
        transform: 'translateX(150%) rotateY(-60deg) scale(0.5)',
        opacity: 0,
        zIndex: 1,
        transition: isTransitioning 
          ? 'all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)' 
          : 'all 0.8s cubic-bezier(0.23, 1, 0.320, 1)'
      };
    }
  };

  if (images.length === 0) return <div>No images available</div>;

  return (
    <div 
      className="luxury-360-carousel-container"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Debug info */}
      <div style={{ position: 'absolute', top: '10px', left: '10px', color: 'white', zIndex: 100, fontSize: '12px' }}>
        Images: {images.length}, Current: {currentIndex}
      </div>
      
      {/* 3D Rotating Carousel */}
      <div className="rotating-3d-carousel">
        <div className="carousel-stage">
          {images.map((image, index) => (
            <div
              key={index}
              className={`carousel-3d-item ${index === currentIndex ? 'active' : ''}`}
              style={getItemStyle(index)}
              onClick={() => handleDotClick(index)}
            >
              <div className="image-container-3d">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="carousel-image-full"
                  loading="lazy"
                  onError={(e) => console.error('Image failed to load:', image.src, e)}
                  onLoad={() => console.log('Image loaded:', image.src)}
                />
                {/* Luxury overlay effects */}
                <div className="image-overlay-luxury"></div>
                {index === currentIndex && (
                  <div className="active-glow-effect"></div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Controls */}
      <div className="carousel-controls">
        <button
          onClick={handlePrevious}
          disabled={isTransitioning}
          className="nav-button nav-prev"
          aria-label="Previous image"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>

        <button
          onClick={handleNext}
          disabled={isTransitioning}
          className="nav-button nav-next"
          aria-label="Next image"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>
      
      {/* Enhanced Navigation Dots */}
      <div className="carousel-dots-container">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => handleDotClick(index)}
            disabled={isTransitioning}
            className={`carousel-dot ${index === currentIndex ? 'active' : ''}`}
            aria-label={`View image ${index + 1}`}
          >
            <span className="dot-inner"></span>
          </button>
        ))}
      </div>

      {/* Progress Indicator */}
      <div className="carousel-progress">
        <div 
          className="progress-bar"
          style={{
            transform: `scaleX(${((currentIndex + 1) / images.length)})`,
            transition: 'transform 0.3s ease'
          }}
        ></div>
      </div>
    </div>
  );
}