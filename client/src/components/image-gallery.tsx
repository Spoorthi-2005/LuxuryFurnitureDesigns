import { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface ImageGalleryProps {
  images: {
    src: string;
    title: string;
    category: string;
  }[];
}

export default function ImageGallery({ images }: ImageGalleryProps) {
  const [selectedImage, setSelectedImage] = useState(0);
  const [filter, setFilter] = useState('All');

  const categories = ['All', ...Array.from(new Set(images.map(img => img.category)))];
  const filteredImages = filter === 'All' ? images : images.filter(img => img.category === filter);

  const nextImage = () => {
    setSelectedImage((prev) => (prev + 1) % filteredImages.length);
  };

  const prevImage = () => {
    setSelectedImage((prev) => (prev - 1 + filteredImages.length) % filteredImages.length);
  };

  return (
    <div className="space-y-8">
      {/* Category Filter */}
      <div className="flex flex-wrap justify-center gap-3">
        {categories.map((category) => (
          <Button
            key={category}
            onClick={() => {
              setFilter(category);
              setSelectedImage(0);
            }}
            variant={filter === category ? "default" : "outline"}
            className={`transition-all duration-300 ${
              filter === category 
                ? 'bg-glow-gold text-white' 
                : 'border-elegant-brown text-elegant-brown hover:bg-elegant-brown hover:text-white'
            }`}
          >
            {category}
          </Button>
        ))}
      </div>

      {/* Main Image Display */}
      <Card className="bg-card border-champagne/40 overflow-hidden shadow-xl">
        <CardContent className="p-0">
          <div className="relative">
            <img 
              src={filteredImages[selectedImage]?.src} 
              alt={filteredImages[selectedImage]?.title}
              className="w-full h-96 lg:h-[500px] object-cover transition-all duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-elegant-brown/20 to-transparent"></div>
            
            {/* Navigation Buttons */}
            <Button
              onClick={prevImage}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 rounded-full bg-glow-gold/80 text-white hover:bg-glow-gold transition-all"
            >
              <i className="fas fa-chevron-left"></i>
            </Button>
            <Button
              onClick={nextImage}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 rounded-full bg-glow-gold/80 text-white hover:bg-glow-gold transition-all"
            >
              <i className="fas fa-chevron-right"></i>
            </Button>

            {/* Image Info */}
            <div className="absolute bottom-4 left-4 right-4">
              <div className="bg-card/90 backdrop-blur-sm rounded-lg p-4 border border-champagne/30">
                <h3 className="text-xl font-playfair font-bold text-elegant-brown">
                  {filteredImages[selectedImage]?.title}
                </h3>
                <p className="text-soft-brown">{filteredImages[selectedImage]?.category}</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Thumbnail Gallery */}
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {filteredImages.map((image, index) => (
          <Card 
            key={index} 
            className={`cursor-pointer transition-all duration-300 hover:shadow-lg ${
              index === selectedImage ? 'ring-2 ring-glow-gold' : ''
            }`}
            onClick={() => setSelectedImage(index)}
          >
            <CardContent className="p-0">
              <img 
                src={image.src} 
                alt={image.title}
                className="w-full h-24 object-cover rounded-lg"
              />
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}