import { useState, useEffect } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const testimonials = [
  {
    id: 1,
    name: "Viswas Sethi",
    position: "Business Owner",
    content: "Blackhorse Furnitures delivered beyond my expectations. The craftsmanship is extraordinary and every piece reflects true luxury. Their attention to detail and commitment to quality is unparalleled in the industry.",
    rating: 5
  },
  {
    id: 2,
    name: "Vikram Yadav",
    position: "Residential Client", 
    content: "Working with Blackhorse has been an absolute pleasure. Their ability to transform concepts into stunning reality while maintaining the highest standards makes them my preferred choice for all premium projects.",
    rating: 5
  },
  {
    id: 3,
    name: "Rakesh Vasal",
    position: "Hotel Owner",
    content: "The furniture collection for our luxury hotel exceeded all expectations. Blackhorse's combination of traditional Indian craftsmanship with contemporary design has created pieces that our guests admire constantly.",
    rating: 5
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
      <Card className="bg-black/50 border-white/20 shadow-xl">
        <CardContent className="p-8">
          <div className="text-center">
            <div className="flex justify-center mb-4">
              {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                <i key={i} className="fas fa-star text-gold text-xl mx-1"></i>
              ))}
            </div>
            <blockquote className="text-lg text-white mb-6 italic leading-relaxed">
              "{testimonials[currentIndex].content}"
            </blockquote>
            <div className="text-center">
              <h4 className="font-playfair font-bold text-white text-xl mb-2">
                {testimonials[currentIndex].name}
              </h4>
              <p className="text-gray-300 text-sm">{testimonials[currentIndex].position}</p>
            </div>
          </div>
        </CardContent>
      </Card>
      
      <div className="flex justify-center mt-6 space-x-4">
        <Button 
          onClick={prevTestimonial}
          variant="outline"
          size="sm"
          className="border-white/50 text-white hover:bg-white hover:text-black"
        >
          <i className="fas fa-chevron-left"></i>
        </Button>
        <div className="flex space-x-2 items-center">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentIndex ? 'bg-gold' : 'bg-white/40'
              }`}
            />
          ))}
        </div>
        <Button 
          onClick={nextTestimonial}
          variant="outline"
          size="sm"
          className="border-white/50 text-white hover:bg-white hover:text-black"
        >
          <i className="fas fa-chevron-right"></i>
        </Button>
      </div>
    </div>
  );
}