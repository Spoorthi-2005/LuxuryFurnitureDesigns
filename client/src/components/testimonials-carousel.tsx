import { useState, useEffect } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const testimonials = [
  {
    id: 1,
    name: "Rajesh Sharma",
    position: "CEO, Sharma Industries",
    content: "Blackhorse Furnitures transformed our corporate office with exceptional craftsmanship. The attention to detail and quality is unmatched. Our clients are always impressed with the elegant furniture pieces.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face"
  },
  {
    id: 2,
    name: "Priya Malhotra",
    position: "Interior Designer",
    content: "Working with Blackhorse has been a dream. Their ability to bring custom designs to life while maintaining premium quality standards makes them my go-to choice for all luxury projects.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1494790108755-2616c55100fc?w=100&h=100&fit=crop&crop=face"
  },
  {
    id: 3,
    name: "Vikram Singh",
    position: "Homeowner",
    content: "The bedroom suite we ordered exceeded all expectations. The craftsmanship, materials, and finishing are absolutely perfect. It's been two years and the furniture still looks brand new.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face"
  },
  {
    id: 4,
    name: "Anita Gupta",
    position: "Restaurant Owner",
    content: "Our restaurant's dining area was completely transformed with Blackhorse's custom furniture. The elegant design and durability have impressed our customers and enhanced our dining experience.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face"
  }
];

export default function TestimonialsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="relative">
      <Card className="bg-card border-champagne/40 shadow-xl">
        <CardContent className="p-8">
          <div className="text-center">
            <div className="flex justify-center mb-4">
              {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                <i key={i} className="fas fa-star text-glow-gold text-xl mx-1"></i>
              ))}
            </div>
            <blockquote className="text-lg text-soft-brown mb-6 italic leading-relaxed">
              "{testimonials[currentIndex].content}"
            </blockquote>
            <div className="flex items-center justify-center space-x-4">
              <img 
                src={testimonials[currentIndex].image} 
                alt={testimonials[currentIndex].name}
                className="w-16 h-16 rounded-full border-2 border-glow-gold"
              />
              <div>
                <h4 className="font-playfair font-bold text-elegant-brown text-lg">
                  {testimonials[currentIndex].name}
                </h4>
                <p className="text-soft-brown text-sm">{testimonials[currentIndex].position}</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
      
      <div className="flex justify-center mt-6 space-x-4">
        <Button 
          onClick={prevTestimonial}
          variant="outline"
          size="sm"
          className="border-elegant-brown text-elegant-brown hover:bg-elegant-brown hover:text-white"
        >
          <i className="fas fa-chevron-left"></i>
        </Button>
        <div className="flex space-x-2 items-center">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentIndex ? 'bg-glow-gold' : 'bg-champagne'
              }`}
            />
          ))}
        </div>
        <Button 
          onClick={nextTestimonial}
          variant="outline"
          size="sm"
          className="border-elegant-brown text-elegant-brown hover:bg-elegant-brown hover:text-white"
        >
          <i className="fas fa-chevron-right"></i>
        </Button>
      </div>
    </div>
  );
}