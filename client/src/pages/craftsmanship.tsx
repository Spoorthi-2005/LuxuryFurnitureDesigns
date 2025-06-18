import { useState } from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import videoFile from "@assets/introo_1750163712016.mp4";

export default function Craftsmanship() {
  const [showVideo, setShowVideo] = useState(false); 

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
      description: "Time-honored methods passed down through generations of master craftsmen, preserving the authentic essence of Indian woodworking traditions. Our artisans use ancient joinery techniques like mortise and tenon, dovetail joints, and hand-carved details that ensure structural integrity and artistic beauty."
    },
    {
      icon: "fas fa-cog",
      title: "Contemporary Precision Engineering",
      description: "State-of-the-art precision tools and modern techniques ensure flawless execution and perfect finishing in every piece we create. CNC machines, laser cutting, and computerized design software work alongside traditional hand tools to achieve unmatched accuracy and consistency."
    },
    {
      icon: "fas fa-heart",
      title: "Passionate Artisanal Devotion",
      description: "Every piece is crafted with unwavering passion, meticulous attention to detail, and genuine love for the art of furniture making. Our master craftsmen treat each project as a personal masterpiece, investing their skills, experience, and artistic vision into every creation."
    },
    {
      icon: "fas fa-gem",
      title: "Premium Material Selection",
      description: "Only the finest quality wood including teak, rosewood, mahogany, and oak, along with premium fabrics, Italian leather, and imported hardware are selected to ensure exceptional durability and timeless aesthetic appeal. Each material is carefully inspected and tested for quality standards."
    },
    {
      icon: "fas fa-award",
      title: "Quality Assurance Excellence",
      description: "Rigorous quality control processes at every stage ensure that each piece meets our uncompromising standards of excellence. Multiple inspection points, stress testing, finish quality checks, and final approval by our master craftsmen guarantee perfection in every delivery."
    },
    {
      icon: "fas fa-leaf",
      title: "Sustainable Craftsmanship",
      description: "Environmentally conscious practices and responsible sourcing ensure our commitment to sustainability and ecological preservation. We use certified sustainable wood, eco-friendly finishes, waste reduction techniques, and support local forest conservation initiatives."
    },
    {
      icon: "fas fa-users",
      title: "Master Craftsmen Legacy",
      description: "Our team of 50+ master craftsmen brings decades of combined experience, with many having learned their trade from their fathers and grandfathers. This generational knowledge transfer ensures that traditional skills are preserved while being enhanced with modern innovations."
    },
    {
      icon: "fas fa-clock",
      title: "Time-Intensive Perfection",
      description: "Each piece undergoes a comprehensive creation process that can take weeks or months to complete. From initial wood seasoning to final polish application, every step is given the time required to achieve absolute perfection without compromise."
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
        {/* Craftsmanship Page - Artisan Tool Pattern */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-black"></div>
          <div className="absolute inset-0 opacity-[0.012]" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='120' height='120' viewBox='0 0 120 120' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' stroke='%23FFFFFF' stroke-width='0.8'%3E%3Cpath d='M60 10v20M50 30l20 0M45 45l30 0M40 60l40 0M45 75l30 0M50 90l20 0'/%3E%3Ccircle cx='30' cy='30' r='3'/%3E%3Ccircle cx='90' cy='90' r='3'/%3E%3Cpath d='M20 100l10-10M90 20l10 10'/%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '120px 120px'
          }}></div>
          <div className="absolute inset-0 bg-gradient-to-tl from-orange-900/[0.01] via-transparent to-red-900/[0.015]"></div>
        </div>

        {/* Craftsman Light Elements */}
        <div className="absolute top-1/6 right-1/5 w-72 h-72 bg-orange-500/[0.015] rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/6 left-1/5 w-72 h-72 bg-red-500/[0.02] rounded-full blur-3xl animate-pulse" style={{animationDelay: '8s'}}></div>

        {/* Hero Section */}
        <section className="py-20 bg-transparent relative z-10">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-6xl font-playfair font-bold mb-6 text-white">
                Craftsmanship in Action
              </h1>
              <p className="text-2xl text-gray-300 leading-relaxed">
                Witness the extraordinary artistry and meticulous precision of our master craftsmen. Premium materials transformed into exquisite furniture pieces that embody traditional techniques and contemporary innovation.
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

        {/* Local Video Modal */}
        {showVideo && (
          <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
            <div className="relative max-w-4xl w-full">
              <button
                onClick={handleCloseVideo}
                className="absolute -top-12 right-0 text-white text-2xl hover:text-white/70 transition-colors"
              >
                <i className="fas fa-times"></i>
              </button>
              <div className="aspect-video bg-black rounded-lg overflow-hidden">
                <video
                  width="100%"
                  height="100%"
                  controls
                  autoPlay
                  className="w-full h-full object-cover"
                >
                  <source src={videoFile} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
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