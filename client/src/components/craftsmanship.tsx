import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";

export default function Craftsmanship() {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handlePlayVideo = () => {
    if (videoRef.current) {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  const handleVideoEnded = () => {
    setIsPlaying(false);
  };

  const handleVideoPause = () => {
    setIsPlaying(false);
  };

  const features = [
    {
      icon: "fas fa-hammer",
      title: "Traditional Techniques",
      description: "Time-honored methods passed down through generations"
    },
    {
      icon: "fas fa-cog",
      title: "Modern Precision",
      description: "State-of-the-art tools for perfect finishing"
    },
    {
      icon: "fas fa-heart",
      title: "Passionate Craftsmanship",
      description: "Every piece made with love and attention to detail"
    }
  ];

  return (
    <section id="craftsmanship" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-playfair font-bold text-deep-black mb-4">Craftsmanship in Action</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Watch our skilled artisans at work, transforming raw materials into beautiful, functional furniture pieces with traditional techniques and modern precision.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative bg-black rounded-2xl overflow-hidden shadow-2xl">
            <video 
              ref={videoRef}
              className="w-full h-auto" 
              controls 
              poster="https://images.unsplash.com/photo-1604709177225-055f99402ea3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=675"
              onEnded={handleVideoEnded}
              onPause={handleVideoPause}
            >
              <source src="" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            
            {!isPlaying && (
              <div 
                className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 cursor-pointer video-overlay"
                onClick={handlePlayVideo}
              >
                <Button
                  size="lg"
                  className="w-20 h-20 bg-luxury-gold rounded-full hover:scale-110 transition-transform p-0"
                >
                  <i className="fas fa-play text-white text-2xl ml-1"></i>
                </Button>
              </div>
            )}
          </div>

          <div className="grid md:grid-cols-3 gap-8 mt-12">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-luxury-gold rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className={`${feature.icon} text-white text-xl`}></i>
                </div>
                <h3 className="text-lg font-semibold text-deep-black mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
