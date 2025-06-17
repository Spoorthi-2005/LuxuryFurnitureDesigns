import { useState } from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function Craftsmanship() {
  const [showVideo, setShowVideo] = useState(false);
  // YouTube video ID extracted from https://youtu.be/3ewXDG1TG8c?si=WxaqlgpeIJKprN8t
  const youtubeVideoId = "3ewXDG1TG8c"; 

  const handleWatchVideo = () => {
    setShowVideo(true);
  };

  const handleCloseVideo = () => {
    setShowVideo(false);
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
    <div className="min-h-screen bg-black text-white">
      <Header />
      <div className="pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-black">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-6xl font-playfair font-bold mb-6 text-white">
                Craftsmanship in Action
              </h1>
              <p className="text-2xl text-gray-300 leading-relaxed">
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
              <div className="relative bg-card rounded-2xl overflow-hidden shadow-xl">
                <div 
                  className="relative bg-cover bg-center h-96"
                  style={{
                    backgroundImage: "url('https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=675')"
                  }}
                >
                  <div className="absolute inset-0 bg-elegant-brown/60 flex items-center justify-center">
                    <div className="text-center">
                      <Button
                        size="lg"
                        onClick={handleWatchVideo}
                        className="w-24 h-24 bg-elegant-brown rounded-full hover:scale-110 transition-transform p-0 shadow-xl mb-6"
                      >
                        <i className="fas fa-play text-white text-3xl ml-1"></i>
                      </Button>
                      <div>
                        <h3 className="text-2xl font-playfair font-bold text-white mb-4">
                          Watch Our Craftsmanship Video
                        </h3>
                        <p className="text-lg text-light-cream max-w-2xl mx-auto">
                          Click to watch our exclusive behind-the-scenes footage showcasing master craftsmen at work
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="text-center mt-8">
                <h3 className="text-2xl font-playfair font-bold text-elegant-brown mb-4">
                  Experience Our Artisanal Excellence
                </h3>
                <p className="text-lg text-soft-brown max-w-3xl mx-auto">
                  This exclusive behind-the-scenes footage showcases our master craftsmen at work, 
                  demonstrating the precision, skill, and passion that goes into every piece we create.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* YouTube Video Modal */}
        {showVideo && (
          <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
            <div className="relative max-w-4xl w-full">
              <button
                onClick={handleCloseVideo}
                className="absolute -top-12 right-0 text-white text-2xl hover:text-elegant-brown transition-colors"
              >
                <i className="fas fa-times"></i>
              </button>
              <div className="aspect-video bg-black rounded-lg overflow-hidden">
                <iframe
                  width="100%"
                  height="100%"
                  src={`https://www.youtube.com/embed/${youtubeVideoId}?autoplay=1&rel=0&modestbranding=1`}
                  title="Craftsmanship Video"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        )}

        {/* Craftsmanship Features */}
        <section className="py-20 bg-section">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-playfair font-bold mb-6 text-elegant-brown">Excellence in Every Detail</h2>
              <p className="text-xl text-soft-brown max-w-3xl mx-auto">
                Our commitment to craftsmanship excellence is reflected in every aspect of our furniture creation process.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {craftmanshipFeatures.map((feature, index) => (
                <Card key={index} className="bg-card border-champagne/40 hover:shadow-xl transition-all duration-300 hover-lift">
                  <CardContent className="p-8 text-center">
                    <div className="w-20 h-20 bg-elegant-brown rounded-full flex items-center justify-center mx-auto mb-6">
                      <i className={`${feature.icon} text-white text-2xl`}></i>
                    </div>
                    <h3 className="text-xl font-playfair font-bold text-elegant-brown mb-4">{feature.title}</h3>
                    <p className="text-soft-brown leading-relaxed">{feature.description}</p>
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
              <h2 className="text-4xl font-playfair font-bold mb-6 text-elegant-brown">The Art of Creation</h2>
              <p className="text-xl text-soft-brown max-w-3xl mx-auto">
                Every piece undergoes a meticulous transformation process that ensures exceptional quality and enduring beauty.
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="space-y-8">
                {craftingStages.map((stage, index) => (
                  <div key={index} className="flex items-center space-x-6 group">
                    <div className="w-16 h-16 bg-elegant-brown rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                      <span className="text-white font-bold text-xl">{index + 1}</span>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-playfair font-bold text-elegant-brown mb-2">{stage.title}</h3>
                      <p className="text-soft-brown text-lg">{stage.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 bg-section">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-playfair font-bold mb-6 text-elegant-brown">Experience Our Craftsmanship</h2>
            <p className="text-xl text-soft-brown mb-8 max-w-2xl mx-auto">
              Ready to own a piece of this extraordinary craftsmanship? Let us create something exceptional for your space.
            </p>
            <Button className="bg-elegant-brown text-white px-12 py-4 text-lg font-bold hover:bg-soft-brown transition-colors">
              Commission Your Piece
            </Button>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
}