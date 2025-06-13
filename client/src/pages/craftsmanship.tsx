import { useState, useRef } from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import craftVideo from "@assets/VID-20250604-WA0001_1749474302061.mp4";

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

  const craftmanshipFeatures = [
    {
      icon: "fas fa-hammer",
      title: "Traditional Indian Techniques",
      description: "Time-honored methods passed down through generations of master craftsmen, preserving the authentic essence of Indian woodworking traditions."
    },
    {
      icon: "fas fa-cog",
      title: "Contemporary Precision Engineering",
      description: "State-of-the-art precision tools and modern techniques ensure flawless execution and perfect finishing in every piece we create."
    },
    {
      icon: "fas fa-heart",
      title: "Passionate Artisanal Devotion",
      description: "Every piece is crafted with unwavering passion, meticulous attention to detail, and genuine love for the art of furniture making."
    },
    {
      icon: "fas fa-gem",
      title: "Premium Material Selection",
      description: "Only the finest quality wood, fabrics, and hardware are selected to ensure exceptional durability and timeless aesthetic appeal."
    },
    {
      icon: "fas fa-award",
      title: "Quality Assurance Excellence",
      description: "Rigorous quality control processes at every stage ensure that each piece meets our uncompromising standards of excellence."
    },
    {
      icon: "fas fa-leaf",
      title: "Sustainable Craftsmanship",
      description: "Environmentally conscious practices and responsible sourcing ensure our commitment to sustainability and ecological preservation."
    }
  ];

  const craftingStages = [
    {
      title: "Wood Selection & Preparation",
      description: "Carefully sourcing premium hardwood and preparing materials for the crafting process."
    },
    {
      title: "Precision Cutting & Shaping",
      description: "Using advanced tools to achieve exact measurements and smooth finishes."
    },
    {
      title: "Joint Construction & Assembly",
      description: "Creating strong, durable joints that ensure structural integrity for decades."
    },
    {
      title: "Surface Treatment & Refinement",
      description: "Multiple stages of sanding and preparation for the perfect finish."
    },
    {
      title: "Finishing & Protection",
      description: "Applying premium finishes that enhance beauty while providing protection."
    }
  ];

  return (
    <div className="min-h-screen bg-warm-cream text-foreground">
      <Header />
      <div className="pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-r from-elegant-brown/10 to-transparent">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-6xl font-playfair font-bold mb-6 text-gradient-brown">
                Craftsmanship in Action
              </h1>
              <p className="text-2xl text-muted-foreground leading-relaxed">
                Witness the extraordinary artistry and meticulous precision of our master craftsmen as they transform 
                premium materials into exquisite furniture pieces that embody the perfect fusion of traditional techniques and contemporary innovation.
              </p>
            </div>
          </div>
        </section>

        {/* Video Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="relative bg-black rounded-2xl overflow-hidden shadow-2xl">
                <video 
                  ref={videoRef}
                  className="w-full h-auto" 
                  controls 
                  poster="https://images.unsplash.com/photo-1604709177225-055f99402ea3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=675"
                  onEnded={handleVideoEnded}
                  onPause={handleVideoPause}
                  onPlay={() => setIsPlaying(true)}
                >
                  <source src={craftVideo} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                
                {!isPlaying && (
                  <div 
                    className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 cursor-pointer video-overlay"
                    onClick={handlePlayVideo}
                  >
                    <Button
                      size="lg"
                      className="w-24 h-24 bg-luxury-gold rounded-full hover:scale-110 transition-transform p-0 shadow-2xl"
                    >
                      <i className="fas fa-play text-black text-3xl ml-1"></i>
                    </Button>
                  </div>
                )}
              </div>

              <div className="text-center mt-8">
                <h3 className="text-2xl font-playfair font-bold text-luxury-gold mb-4">
                  Experience Our Artisanal Excellence
                </h3>
                <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                  This exclusive behind-the-scenes footage showcases our master craftsmen at work, 
                  demonstrating the precision, skill, and passion that goes into every piece we create.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Craftsmanship Features */}
        <section className="py-20 bg-gradient-to-r from-luxury-gold/10 to-transparent">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-playfair font-bold mb-6 text-luxury-gold">Excellence in Every Detail</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our commitment to craftsmanship excellence is reflected in every aspect of our furniture creation process.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {craftmanshipFeatures.map((feature, index) => (
                <Card key={index} className="bg-gray-800/30 border-gray-700 hover:shadow-xl transition-all duration-300 hover-lift">
                  <CardContent className="p-8 text-center">
                    <div className="w-20 h-20 bg-gradient-to-r from-luxury-gold to-yellow-400 rounded-full flex items-center justify-center mx-auto mb-6">
                      <i className={`${feature.icon} text-black text-2xl`}></i>
                    </div>
                    <h3 className="text-xl font-playfair font-bold text-luxury-gold mb-4">{feature.title}</h3>
                    <p className="text-gray-300 leading-relaxed">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Crafting Process */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-playfair font-bold mb-6 text-luxury-gold">The Art of Creation</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Every piece undergoes a meticulous transformation process that ensures exceptional quality and enduring beauty.
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="space-y-8">
                {craftingStages.map((stage, index) => (
                  <div key={index} className="flex items-center space-x-6 group">
                    <div className="w-16 h-16 bg-luxury-gold rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                      <span className="text-black font-bold text-xl">{index + 1}</span>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-playfair font-bold text-luxury-gold mb-2">{stage.title}</h3>
                      <p className="text-gray-300 text-lg">{stage.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 bg-gradient-to-r from-luxury-gold/20 to-transparent">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-playfair font-bold mb-6 text-luxury-gold">Experience Our Craftsmanship</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Ready to own a piece of this extraordinary craftsmanship? Let us create something exceptional for your space.
            </p>
            <Button className="bg-luxury-gold text-black px-12 py-4 text-lg font-bold hover:bg-yellow-400 transition-colors">
              Commission Your Piece
            </Button>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
}