import { useState, useEffect, useRef, useCallback } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { X, Menu, Search, Phone, MessageCircle, Heart, Share2 } from 'lucide-react';

// Mobile navigation drawer
export function MobileNavDrawer({ isOpen, onClose, children }: {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <>
      {/* Backdrop */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={onClose}
          aria-hidden="true"
        />
      )}
      
      {/* Drawer */}
      <div className={`
        fixed top-0 left-0 h-full w-80 bg-black/95 backdrop-blur-xl 
        transform transition-transform duration-300 z-50 lg:hidden
        border-r border-white/10
        ${isOpen ? 'translate-x-0' : '-translate-x-full'}
      `}>
        <div className="flex items-center justify-between p-6 border-b border-white/10">
          <h2 className="text-xl font-bold text-gold">Menu</h2>
          <Button 
            variant="ghost" 
            size="sm" 
            onClick={onClose}
            className="text-white hover:text-gold"
          >
            <X className="w-6 h-6" />
          </Button>
        </div>
        
        <div className="p-6">
          {children}
        </div>
      </div>
    </>
  );
}

// Touch gesture handler for mobile interactions
export function useTouchGestures(onSwipeLeft?: () => void, onSwipeRight?: () => void) {
  const touchStartX = useRef<number>(0);
  const touchStartY = useRef<number>(0);
  const minSwipeDistance = 50;

  const handleTouchStart = useCallback((e: TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    touchStartY.current = e.touches[0].clientY;
  }, []);

  const handleTouchEnd = useCallback((e: TouchEvent) => {
    if (!touchStartX.current || !touchStartY.current) return;

    const touchEndX = e.changedTouches[0].clientX;
    const touchEndY = e.changedTouches[0].clientY;
    
    const deltaX = touchStartX.current - touchEndX;
    const deltaY = touchStartY.current - touchEndY;

    // Check if horizontal swipe (ignore if too much vertical movement)
    if (Math.abs(deltaX) > Math.abs(deltaY) && Math.abs(deltaX) > minSwipeDistance) {
      if (deltaX > 0 && onSwipeLeft) {
        onSwipeLeft();
      } else if (deltaX < 0 && onSwipeRight) {
        onSwipeRight();
      }
    }

    touchStartX.current = 0;
    touchStartY.current = 0;
  }, [onSwipeLeft, onSwipeRight, minSwipeDistance]);

  useEffect(() => {
    document.addEventListener('touchstart', handleTouchStart);
    document.addEventListener('touchend', handleTouchEnd);

    return () => {
      document.removeEventListener('touchstart', handleTouchStart);
      document.removeEventListener('touchend', handleTouchEnd);
    };
  }, [handleTouchStart, handleTouchEnd]);
}

// Mobile-optimized image gallery
export function MobileImageGallery({ images }: {
  images: { src: string; alt: string }[];
}) {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  useTouchGestures(
    () => setCurrentIndex((prev) => (prev + 1) % images.length),
    () => setCurrentIndex((prev) => (prev - 1 + images.length) % images.length)
  );

  return (
    <div className="relative w-full h-80 overflow-hidden rounded-lg">
      <img
        src={images[currentIndex]?.src}
        alt={images[currentIndex]?.alt}
        className="w-full h-full object-cover"
      />
      
      {/* Navigation dots */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-all ${
              index === currentIndex ? 'bg-white' : 'bg-white/50'
            }`}
            aria-label={`Go to image ${index + 1}`}
          />
        ))}
      </div>
      
      {/* Swipe indicator */}
      <div className="absolute top-4 right-4 bg-black/50 text-white px-2 py-1 rounded text-xs">
        Swipe to browse
      </div>
    </div>
  );
}

// Mobile floating action button
export function MobileFloatingActions() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50 lg:hidden">
      {/* Expanded actions */}
      {isExpanded && (
        <div className="absolute bottom-16 right-0 space-y-3 animate-in slide-in-from-bottom-2">
          <Button
            size="sm"
            className="w-12 h-12 rounded-full bg-green-600 hover:bg-green-700 shadow-lg"
            onClick={() => window.open('https://wa.me/919718978337', '_blank')}
          >
            <MessageCircle className="w-5 h-5" />
          </Button>
          
          <Button
            size="sm"
            className="w-12 h-12 rounded-full bg-blue-600 hover:bg-blue-700 shadow-lg"
            onClick={() => window.open('tel:+919718978337', '_self')}
          >
            <Phone className="w-5 h-5" />
          </Button>
          
          <Button
            size="sm"
            className="w-12 h-12 rounded-full bg-red-600 hover:bg-red-700 shadow-lg"
          >
            <Heart className="w-5 h-5" />
          </Button>
        </div>
      )}
      
      {/* Main action button */}
      <Button
        size="lg"
        onClick={() => setIsExpanded(!isExpanded)}
        className={`w-14 h-14 rounded-full bg-gold hover:bg-gold/90 text-black shadow-2xl transform transition-all ${
          isExpanded ? 'rotate-45' : 'rotate-0'
        }`}
      >
        {isExpanded ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </Button>
    </div>
  );
}

// Mobile search overlay
export function MobileSearchOverlay({ isOpen, onClose }: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const [searchTerm, setSearchTerm] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/95 z-50 lg:hidden">
      <div className="p-6">
        <div className="flex items-center gap-4 mb-6">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/60 w-5 h-5" />
            <input
              ref={inputRef}
              type="text"
              placeholder="Search furniture..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/60 focus:border-gold focus:outline-none"
            />
          </div>
          <Button
            variant="ghost"
            onClick={onClose}
            className="text-white hover:text-gold"
          >
            Cancel
          </Button>
        </div>
        
        {/* Search suggestions */}
        <div className="space-y-2">
          {['Luxury Beds', 'Modern Sofas', 'Dining Tables', 'Coffee Tables'].map((suggestion) => (
            <button
              key={suggestion}
              onClick={() => setSearchTerm(suggestion)}
              className="block w-full text-left p-3 text-white hover:bg-white/10 rounded-lg"
            >
              {suggestion}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

// Mobile-optimized card layout
export function MobileCard({ children, className = '' }: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <Card className={`
      bg-black/50 border-white/10 backdrop-blur-xl
      hover:border-white/20 transition-all duration-300
      touch-manipulation
      ${className}
    `}>
      {children}
    </Card>
  );
}

// Pull-to-refresh component
export function PullToRefresh({ onRefresh }: { onRefresh: () => Promise<void> }) {
  const [isPulling, setIsPulling] = useState(false);
  const [pullDistance, setPullDistance] = useState(0);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const startY = useRef(0);
  const pullThreshold = 80;

  const handleTouchStart = useCallback((e: TouchEvent) => {
    if (window.scrollY === 0) {
      startY.current = e.touches[0].clientY;
    }
  }, []);

  const handleTouchMove = useCallback((e: TouchEvent) => {
    if (window.scrollY === 0 && startY.current > 0) {
      const currentY = e.touches[0].clientY;
      const distance = Math.max(0, currentY - startY.current);
      
      if (distance > 0) {
        e.preventDefault();
        setPullDistance(distance);
        setIsPulling(distance > pullThreshold);
      }
    }
  }, [pullThreshold]);

  const handleTouchEnd = useCallback(async () => {
    if (isPulling && pullDistance > pullThreshold) {
      setIsRefreshing(true);
      try {
        await onRefresh();
      } finally {
        setIsRefreshing(false);
      }
    }
    
    setIsPulling(false);
    setPullDistance(0);
    startY.current = 0;
  }, [isPulling, pullDistance, pullThreshold, onRefresh]);

  useEffect(() => {
    document.addEventListener('touchstart', handleTouchStart, { passive: false });
    document.addEventListener('touchmove', handleTouchMove, { passive: false });
    document.addEventListener('touchend', handleTouchEnd);

    return () => {
      document.removeEventListener('touchstart', handleTouchStart);
      document.removeEventListener('touchmove', handleTouchMove);
      document.removeEventListener('touchend', handleTouchEnd);
    };
  }, [handleTouchStart, handleTouchMove, handleTouchEnd]);

  return (
    <div 
      className={`
        fixed top-0 left-0 right-0 z-30 flex items-center justify-center
        transform transition-transform duration-200 lg:hidden
        ${pullDistance > 0 ? 'translate-y-0' : '-translate-y-full'}
      `}
      style={{ 
        height: Math.min(pullDistance, 100),
        background: `linear-gradient(to bottom, rgba(212, 175, 55, ${Math.min(pullDistance / 100, 0.8)}), transparent)`
      }}
    >
      <div className="text-white text-sm font-medium">
        {isRefreshing ? (
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
            Refreshing...
          </div>
        ) : isPulling ? (
          'Release to refresh'
        ) : (
          'Pull down to refresh'
        )}
      </div>
    </div>
  );
}

// Mobile viewport height fix for iOS
export function useMobileViewportFix() {
  useEffect(() => {
    const setViewportHeight = () => {
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    };

    setViewportHeight();
    window.addEventListener('resize', setViewportHeight);

    return () => window.removeEventListener('resize', setViewportHeight);
  }, []);
}

// Mobile-optimized infinite scroll
export function useInfiniteScroll(callback: () => void, hasMore: boolean) {
  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + document.documentElement.scrollTop
        >= document.documentElement.offsetHeight - 1000
        && hasMore
      ) {
        callback();
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [callback, hasMore]);
}