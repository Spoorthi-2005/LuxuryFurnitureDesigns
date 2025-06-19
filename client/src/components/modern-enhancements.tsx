import { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Star, Heart, Share2, Search, Filter, Grid, List } from 'lucide-react';

// Enhanced search with filters
export function AdvancedSearch() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filters, setFilters] = useState({
    category: '',
    priceRange: '',
    material: '',
    style: ''
  });
  const [suggestions, setSuggestions] = useState<string[]>([]);

  const searchSuggestions = [
    'Luxury Beds', 'Modern Sofas', 'Dining Tables', 'Coffee Tables',
    'Bedroom Furniture', 'Living Room Sets', 'Custom Cabinets'
  ];

  useEffect(() => {
    if (searchTerm) {
      const filtered = searchSuggestions.filter(item =>
        item.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setSuggestions(filtered);
    } else {
      setSuggestions([]);
    }
  }, [searchTerm]);

  return (
    <div className="relative">
      <div className="flex gap-2 bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/60 w-5 h-5" />
          <input
            type="text"
            placeholder="Search furniture collections..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-3 bg-black/30 border border-white/20 rounded-lg text-white placeholder-white/60 focus:border-gold focus:outline-none"
          />
          
          {suggestions.length > 0 && (
            <div className="absolute top-full left-0 right-0 mt-2 bg-black/90 backdrop-blur-xl border border-white/20 rounded-lg z-50">
              {suggestions.map((suggestion, index) => (
                <button
                  key={index}
                  onClick={() => setSearchTerm(suggestion)}
                  className="w-full text-left px-4 py-2 text-white hover:bg-white/10 first:rounded-t-lg last:rounded-b-lg"
                >
                  {suggestion}
                </button>
              ))}
            </div>
          )}
        </div>
        
        <Button variant="outline" className="bg-gold/20 border-gold text-gold hover:bg-gold hover:text-black">
          <Filter className="w-4 h-4 mr-2" />
          Filters
        </Button>
      </div>
    </div>
  );
}

// Wishlist functionality
export function WishlistButton({ itemId, itemName }: { itemId: string; itemName: string }) {
  const [isWishlisted, setIsWishlisted] = useState(false);

  useEffect(() => {
    const wishlist = JSON.parse(localStorage.getItem('furniture-wishlist') || '[]');
    setIsWishlisted(wishlist.includes(itemId));
  }, [itemId]);

  const toggleWishlist = () => {
    const wishlist = JSON.parse(localStorage.getItem('furniture-wishlist') || '[]');
    
    if (isWishlisted) {
      const updated = wishlist.filter((id: string) => id !== itemId);
      localStorage.setItem('furniture-wishlist', JSON.stringify(updated));
      setIsWishlisted(false);
    } else {
      wishlist.push(itemId);
      localStorage.setItem('furniture-wishlist', JSON.stringify(wishlist));
      setIsWishlisted(true);
    }
  };

  return (
    <Button
      onClick={toggleWishlist}
      variant="ghost"
      size="sm"
      className={`${isWishlisted ? 'text-red-500' : 'text-white/60'} hover:text-red-500`}
      aria-label={`${isWishlisted ? 'Remove from' : 'Add to'} wishlist`}
    >
      <Heart className={`w-5 h-5 ${isWishlisted ? 'fill-current' : ''}`} />
    </Button>
  );
}

// Social sharing component
export function ShareButton({ url, title }: { url: string; title: string }) {
  const shareData = {
    title: title,
    url: url,
    text: `Check out this beautiful furniture from Blackhorse Furnitures: ${title}`
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share(shareData);
      } catch (err) {
        console.log('Sharing cancelled');
      }
    } else {
      // Fallback to copying URL
      await navigator.clipboard.writeText(url);
      // Show toast notification
    }
  };

  return (
    <Button
      onClick={handleShare}
      variant="ghost"
      size="sm"
      className="text-white/60 hover:text-white"
      aria-label="Share this item"
    >
      <Share2 className="w-5 h-5" />
    </Button>
  );
}

// Quick view modal for products
export function QuickViewModal({ item, children }: { 
  item: {
    id: string;
    title: string;
    description: string;
    images: { src: string; alt: string }[];
    features?: string[];
  };
  children: React.ReactNode;
}) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  return (
    <Dialog>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto bg-black/95 border-white/20">
        <DialogHeader>
          <DialogTitle className="text-white text-2xl">{item.title}</DialogTitle>
        </DialogHeader>
        
        <div className="grid md:grid-cols-2 gap-6">
          {/* Image Gallery */}
          <div className="space-y-4">
            <div className="aspect-square rounded-lg overflow-hidden">
              <img
                src={item.images[currentImageIndex]?.src}
                alt={item.images[currentImageIndex]?.alt}
                className="w-full h-full object-cover"
              />
            </div>
            
            {item.images.length > 1 && (
              <div className="flex gap-2 overflow-x-auto">
                {item.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden border-2 ${
                      index === currentImageIndex ? 'border-gold' : 'border-white/20'
                    }`}
                  >
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>
          
          {/* Product Details */}
          <div className="space-y-4">
            <p className="text-gray-300">{item.description}</p>
            
            {item.features && (
              <div>
                <h4 className="text-white font-semibold mb-2">Features:</h4>
                <ul className="space-y-1">
                  {item.features.map((feature, index) => (
                    <li key={index} className="text-gray-300 flex items-center">
                      <Star className="w-4 h-4 text-gold mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            )}
            
            <div className="flex gap-3 pt-4">
              <Button className="flex-1 bg-gold hover:bg-gold/90 text-black font-semibold">
                Contact for Quote
              </Button>
              <WishlistButton itemId={item.id} itemName={item.title} />
              <ShareButton url={window.location.href} title={item.title} />
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

// View mode toggle (grid/list)
export function ViewModeToggle({ 
  mode, 
  onModeChange 
}: { 
  mode: 'grid' | 'list'; 
  onModeChange: (mode: 'grid' | 'list') => void; 
}) {
  return (
    <div className="flex gap-1 bg-black/30 rounded-lg p-1">
      <Button
        onClick={() => onModeChange('grid')}
        variant={mode === 'grid' ? 'default' : 'ghost'}
        size="sm"
        className={mode === 'grid' ? 'bg-gold text-black' : 'text-white'}
      >
        <Grid className="w-4 h-4" />
      </Button>
      <Button
        onClick={() => onModeChange('list')}
        variant={mode === 'list' ? 'default' : 'ghost'}
        size="sm"
        className={mode === 'list' ? 'bg-gold text-black' : 'text-white'}
      >
        <List className="w-4 h-4" />
      </Button>
    </div>
  );
}

// Progressive image loading with blur effect
export function ProgressiveImage({ 
  src, 
  alt, 
  className = '',
  placeholder = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjY2NjIi8+PC9zdmc+'
}: {
  src: string;
  alt: string;
  className?: string;
  placeholder?: string;
}) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const img = imgRef.current;
    if (!img) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          img.src = src;
          observer.unobserve(img);
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(img);
    return () => observer.disconnect();
  }, [src]);

  return (
    <div className={`relative overflow-hidden ${className}`}>
      <img
        ref={imgRef}
        src={placeholder}
        alt={alt}
        className={`w-full h-full object-cover transition-all duration-500 ${
          isLoaded ? 'filter-none' : 'filter blur-sm'
        }`}
        onLoad={() => setIsLoaded(true)}
        onError={() => setHasError(true)}
        loading="lazy"
      />
      
      {hasError && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-800 text-white">
          <span>Image unavailable</span>
        </div>
      )}
    </div>
  );
}

// Interactive image zoom
export function ZoomableImage({ src, alt }: { src: string; alt: string }) {
  const [isZoomed, setIsZoomed] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: ((e.clientX - rect.left) / rect.width) * 100,
      y: ((e.clientY - rect.top) / rect.height) * 100
    });
  };

  return (
    <div
      className="relative overflow-hidden cursor-zoom-in group"
      onMouseEnter={() => setIsZoomed(true)}
      onMouseLeave={() => setIsZoomed(false)}
      onMouseMove={handleMouseMove}
    >
      <img
        src={src}
        alt={alt}
        className={`w-full h-full object-cover transition-transform duration-300 ${
          isZoomed ? 'scale-150' : 'scale-100'
        }`}
        style={isZoomed ? {
          transformOrigin: `${mousePosition.x}% ${mousePosition.y}%`
        } : {}}
      />
      
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
    </div>
  );
}

// Comparison tool for furniture items
export function ComparisonTool() {
  const [compareItems, setCompareItems] = useState<string[]>([]);

  const addToCompare = (itemId: string) => {
    if (compareItems.length < 3 && !compareItems.includes(itemId)) {
      setCompareItems([...compareItems, itemId]);
    }
  };

  const removeFromCompare = (itemId: string) => {
    setCompareItems(compareItems.filter(id => id !== itemId));
  };

  return (
    <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50">
      {compareItems.length > 0 && (
        <Card className="bg-black/90 border-white/20 text-white">
          <CardContent className="p-4">
            <div className="flex items-center gap-4">
              <span className="text-sm">Compare ({compareItems.length}/3)</span>
              <Button
                size="sm"
                className="bg-gold hover:bg-gold/90 text-black"
                disabled={compareItems.length < 2}
              >
                Compare Now
              </Button>
              <Button
                size="sm"
                variant="ghost"
                onClick={() => setCompareItems([])}
                className="text-white/60 hover:text-white"
              >
                Clear
              </Button>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}