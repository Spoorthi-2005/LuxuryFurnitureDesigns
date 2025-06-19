import { useState, useEffect, useCallback } from 'react';
import { useIntersectionObserver } from '@/hooks/use-intersection-observer';

// Lazy loading hook for images
export function useLazyImage(src: string, threshold = 0.1) {
  const [imageSrc, setImageSrc] = useState<string | undefined>();
  const [imageRef, isVisible] = useIntersectionObserver({ threshold });

  useEffect(() => {
    if (isVisible && src) {
      setImageSrc(src);
    }
  }, [isVisible, src]);

  return [imageRef, imageSrc] as const;
}

// Performance monitoring component
interface PerformanceMetrics {
  loadTime: number;
  renderTime: number;
  interactionTime: number;
}

export function PerformanceMonitor() {
  const [metrics, setMetrics] = useState<PerformanceMetrics | null>(null);

  useEffect(() => {
    const observer = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      
      entries.forEach((entry) => {
        if (entry.entryType === 'navigation') {
          const navEntry = entry as PerformanceNavigationTiming;
          setMetrics({
            loadTime: navEntry.loadEventEnd - navEntry.loadEventStart,
            renderTime: navEntry.domContentLoadedEventEnd - navEntry.domContentLoadedEventStart,
            interactionTime: navEntry.responseEnd - navEntry.requestStart
          });
        }
      });
    });

    observer.observe({ entryTypes: ['navigation'] });

    return () => observer.disconnect();
  }, []);

  // Only show in development
  if (process.env.NODE_ENV !== 'development' || !metrics) return null;

  return (
    <div className="fixed top-4 left-4 bg-black/80 text-white p-2 rounded text-xs z-50">
      <div>Load: {metrics.loadTime.toFixed(2)}ms</div>
      <div>Render: {metrics.renderTime.toFixed(2)}ms</div>
      <div>Interaction: {metrics.interactionTime.toFixed(2)}ms</div>
    </div>
  );
}

// Optimized image component with lazy loading
interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  placeholder?: string;
  quality?: number;
  sizes?: string;
}

export function OptimizedImage({ 
  src, 
  alt, 
  className = '', 
  placeholder = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjY2NjIi8+PC9zdmc+',
  quality = 85,
  sizes = '100vw'
}: OptimizedImageProps) {
  const [imageRef, imageSrc] = useLazyImage(src);
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  const handleLoad = useCallback(() => {
    setIsLoaded(true);
  }, []);

  const handleError = useCallback(() => {
    setHasError(true);
  }, []);

  return (
    <div ref={imageRef} className={`relative overflow-hidden ${className}`}>
      {!isLoaded && !hasError && (
        <img
          src={placeholder}
          alt=""
          className="absolute inset-0 w-full h-full object-cover filter blur-sm"
          aria-hidden="true"
        />
      )}
      
      {imageSrc && (
        <img
          src={imageSrc}
          alt={alt}
          className={`w-full h-full object-cover transition-opacity duration-500 ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          onLoad={handleLoad}
          onError={handleError}
          loading="lazy"
          decoding="async"
          sizes={sizes}
        />
      )}
      
      {hasError && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-200 text-gray-500">
          <span>Failed to load image</span>
        </div>
      )}
    </div>
  );
}

// Preload critical resources
export function usePreloadCriticalResources() {
  useEffect(() => {
    // Preload critical CSS
    const criticalCSS = document.createElement('link');
    criticalCSS.rel = 'preload';
    criticalCSS.as = 'style';
    criticalCSS.href = '/styles/critical.css';
    document.head.appendChild(criticalCSS);

    // Preload hero image
    const heroImage = new Image();
    heroImage.src = '/assets/img35_1749474302052.png';

    // Preload critical fonts
    const font = document.createElement('link');
    font.rel = 'preload';
    font.as = 'font';
    font.type = 'font/woff2';
    font.href = '/fonts/playfair-display.woff2';
    font.crossOrigin = 'anonymous';
    document.head.appendChild(font);

    return () => {
      document.head.removeChild(criticalCSS);
      document.head.removeChild(font);
    };
  }, []);
}

// Bundle size analyzer (development only)
export function BundleAnalyzer() {
  const [bundleSize, setBundleSize] = useState<number | null>(null);

  useEffect(() => {
    if (process.env.NODE_ENV === 'development') {
      // Estimate bundle size
      const estimateSize = () => {
        const scripts = Array.from(document.querySelectorAll('script[src]'));
        let totalSize = 0;
        
        scripts.forEach(script => {
          const src = script.getAttribute('src');
          if (src && src.includes('js')) {
            // Rough estimation based on script tags
            totalSize += 250; // KB estimation
          }
        });
        
        setBundleSize(totalSize);
      };

      setTimeout(estimateSize, 1000);
    }
  }, []);

  if (process.env.NODE_ENV !== 'development' || !bundleSize) return null;

  return (
    <div className="fixed bottom-4 left-4 bg-blue-600/80 text-white p-2 rounded text-xs z-50">
      Est. Bundle: {bundleSize}KB
    </div>
  );
}