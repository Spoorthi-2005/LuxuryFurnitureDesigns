import { useState, useEffect } from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import RotatingCarousel from "@/components/rotating-carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import bed1Image from "@assets/WhatsApp Image 2025-06-13 at 17.42.07_42a0a09c_1749820754155.jpg";
import bed2Image from "@assets/WhatsApp Image 2025-06-13 at 17.42.07_59a98bc1_1749820775528.jpg";
import bed3Image from "@assets/WhatsApp Image 2025-06-13 at 17.42.07_d1a6fdb1_1749924832204.jpg";
import bed4Image from "@assets/WhatsApp Image 2025-06-13 at 18.00.24_99040198_1749925916156.jpg";
import sofa1Image from "@assets/WhatsApp Image 2025-06-13 at 17.44.32_3966bed2_1749925461685.jpg";
import sofa2Image from "@assets/WhatsApp Image 2025-06-13 at 17.44.32_558cfe2f_1749925476189.jpg";
import sofa3Image from "@assets/WhatsApp Image 2025-06-13 at 17.46.30_e5dda6ca_1749925498313.jpg";
import sofa4Image from "@assets/WhatsApp Image 2025-06-13 at 17.53.10_93778160_1749925564575.jpg";
import sofa5Image from "@assets/WhatsApp Image 2025-06-13 at 18.00.24_13f5bd2d_1749925600218.jpg";
import sofa6Image from "@assets/WhatsApp Image 2025-06-13 at 18.00.24_923ac9ce_1749925690778.jpg";
import armchair1Image from "@assets/WhatsApp Image 2025-06-13 at 18.00.24_f39218d1_1749925944206.jpg";
import armchair2Image from "@assets/WhatsApp Image 2025-06-13 at 17.46.29_96be9a21_1749926026154.jpg";
import armchair3Image from "@assets/WhatsApp Image 2025-06-13 at 17.46.29_832ad829_1749926048525.jpg";
import armchair4Image from "@assets/WhatsApp Image 2025-06-13 at 18.00.23_4baba346_1749926150994.jpg";
import armchair5Image from "@assets/WhatsApp Image 2025-06-13 at 18.00.23_ec4ada1b_1749926171722.jpg";
import armchair6Image from "@assets/WhatsApp Image 2025-06-13 at 18.00.23_51df9eb3_1749926198325.jpg";
import armchair7Image from "@assets/WhatsApp Image 2025-06-13 at 18.00.23_6d9adf69_1749926242727.jpg";
import bench1Image from "@assets/WhatsApp Image 2025-06-13 at 17.35.01_3208808f_1750051896719.jpg";
import bench2Image from "@assets/WhatsApp Image 2025-06-13 at 17.33.24_a0ec5bfa_1750051914724.jpg";
import bench3Image from "@assets/WhatsApp Image 2025-06-13 at 17.42.07_bd458000_1750051930904.jpg";
import bench4Image from "@assets/WhatsApp Image 2025-06-13 at 17.56.10_7440dc07_1750052008318.jpg";
import bench5Image from "@assets/WhatsApp Image 2025-06-13 at 18.00.24_7f6e5a9a_1750052057626.jpg";
// Import dining furniture images
import diningTable1Image from '@assets/WhatsApp Image 2025-06-13 at 17.50.38_ad095622_1750052982237.jpg';
import diningTable2Image from '@assets/WhatsApp Image 2025-06-13 at 17.50.39_37b37c32_1750052994832.jpg';
import diningTable3Image from '@assets/WhatsApp Image 2025-06-13 at 17.50.39_9b0313bc_1750053012321.jpg';
import diningTable4Image from '@assets/WhatsApp Image 2025-06-13 at 17.50.39_40864f70_1750053029587.jpg';
import diningTable5Image from '@assets/WhatsApp Image 2025-06-13 at 17.50.39_3a325e8b_1750053048917.jpg';
import diningTable6Image from '@assets/WhatsApp Image 2025-06-13 at 18.00.25_4059b846_1750053121511.jpg';

export default function Collections() {
  const collections = [
    {
      id: 1,
      title: "Sofas",
      description: "Luxurious and comfortable sofas crafted with premium materials, offering exceptional seating solutions for modern living spaces.",
      images: [
        { src: sofa1Image, alt: "Contemporary grey sofa with luxurious fur throw and modern coffee table" },
        { src: sofa2Image, alt: "Elegant velvet sofa with decorative pillows and designer lighting" },
        { src: sofa3Image, alt: "Modern navy blue sectional sofa with crystal accents and marble tables" },
        { src: sofa4Image, alt: "Sophisticated brown leather sofa with geometric patterns and gold fixtures" },
        { src: sofa5Image, alt: "Classic green tufted chesterfield sofa with brass frame details" },
        { src: sofa6Image, alt: "Luxurious cream tufted sofa with elegant button detailing" }
      ]
    },
    {
      id: 2,
      title: "Arm Chairs",
      description: "Elegant arm chairs combining comfort and sophistication, perfect for creating intimate seating arrangements.",
      images: [
        { src: armchair1Image, alt: "Luxurious navy blue round armchair with golden brass frame and city view" },
        { src: armchair2Image, alt: "Sophisticated white leather armchair with marble console and crystal chandelier" },
        { src: armchair3Image, alt: "Elegant rose gold velvet armchair with brass accents and marble side table" },
        { src: armchair4Image, alt: "Classic beige wing-back armchair with ottoman in traditional wood paneled library" },
        { src: armchair5Image, alt: "Contemporary mustard yellow armchairs with sleek design and wooden slat backdrop" },
        { src: armchair6Image, alt: "Vintage olive green tufted armchair with decorative pillows and brass lamp" },
        { src: armchair7Image, alt: "Modern coral leather armchairs with tropical botanical wallpaper and stylish decor" }
      ]
    },
    {
      id: 3,
      title: "Beds",
      description: "Exquisite bed designs that transform your bedroom into a luxurious sanctuary of comfort and style.",
      images: [
        { src: bed1Image, alt: "Luxury master bedroom with upholstered headboard and elegant chandelier" },
        { src: bed2Image, alt: "Contemporary bedroom suite with golden accents and crystal lighting" },
        { src: bed3Image, alt: "Modern platform bed with integrated nightstands and ambient lighting" },
        { src: bed4Image, alt: "Sophisticated grey upholstered bed with wooden slat wall accent and modern styling" }
      ]
    },
    {
      id: 4,
      title: "Dining Tables and Chairs",
      description: "Sophisticated dining sets that create the perfect atmosphere for memorable dining experiences.",
      images: [
        { src: diningTable1Image, alt: "Luxury dining room with elegant dark wood table and upholstered chairs with golden accents" },
        { src: diningTable2Image, alt: "Modern round dining table with white leather chairs and sophisticated lighting" },
        { src: diningTable3Image, alt: "Contemporary marble dining table with beige chairs and decorative centerpiece" },
        { src: diningTable4Image, alt: "Classic formal dining room with dark wood table and cream upholstered chairs" },
        { src: diningTable5Image, alt: "Designer dining table with striking blue base and modern black chairs" },
        { src: diningTable6Image, alt: "Sleek oval dining table with contemporary black chairs in modern setting" }
      ]
    },
    {
      id: 5,
      title: "Consoles",
      description: "Stylish console tables that serve as functional art pieces, perfect for entryways and living spaces.",
      images: Array(4).fill("/api/placeholder/400/300").map((src, index) => ({
        src: `${src}?console=${index + 1}`,
        alt: `Designer console table ${index + 1}`
      }))
    },
    {
      id: 6,
      title: "Coffee Tables",
      description: "Statement coffee tables that anchor your living space with style and functionality.",
      images: Array(5).fill("/api/placeholder/400/300").map((src, index) => ({
        src: `${src}?coffee=${index + 1}`,
        alt: `Luxury coffee table ${index + 1}`
      }))
    },
    {
      id: 7,
      title: "Centre Tables",
      description: "Elegant centre tables designed to be the focal point of any sophisticated living room.",
      images: Array(4).fill("/api/placeholder/400/300").map((src, index) => ({
        src: `${src}?centre=${index + 1}`,
        alt: `Premium centre table ${index + 1}`
      }))
    },
    {
      id: 8,
      title: "Pouf and Benches",
      description: "Versatile seating solutions that combine comfort with contemporary design aesthetics.",
      images: [
        { src: bench1Image, alt: "Luxury bedroom with elegant white upholstered bench and golden accents" },
        { src: bench2Image, alt: "Modern grey bedroom with sophisticated bench seating and geometric patterns" },
        { src: bench3Image, alt: "Classic cream bedroom with tufted bench and traditional wood paneling" },
        { src: bench4Image, alt: "Contemporary bedroom with plush pink bench and crystal chandelier" },
        { src: bench5Image, alt: "Elegant beige bedroom suite with premium bench and luxury lighting" }
      ]
    }
  ];

  return (
    <div 
      className="min-h-screen relative overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 25%, #0f3460 50%, #533483 75%, #8b5a9f 100%)',
        backgroundSize: '400% 400%',
        animation: 'gradient-flow 20s ease infinite'
      }}
    >
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-amber-100/15 via-transparent to-slate-200/25"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 via-slate-700/40 to-slate-100/60"></div>
      </div>

      <Header />

      {/* Hero Section */}
      <section className="relative py-24 px-4 overflow-hidden">
        <div className="relative z-10 container mx-auto text-center">
          <h1 className="text-6xl md:text-8xl font-bold text-transparent bg-gradient-to-r from-gold via-yellow-300 to-gold bg-clip-text mb-8 animated-gradient">
            Our Collections
          </h1>
          <div className="w-32 h-2 bg-gradient-to-r from-transparent via-gold to-transparent mx-auto mb-8"></div>
          <p className="text-2xl md:text-3xl text-slate-100 max-w-4xl mx-auto leading-relaxed drop-shadow-xl">
            Discover our meticulously curated furniture collections, where luxury meets craftsmanship in perfect harmony.
          </p>
        </div>
      </section>

      {/* Collections Sections */}
      <div className="container mx-auto px-4 py-12 relative z-10">
        {collections.map((collection, index) => (
          <div key={collection.id} className="mb-20">
            <Card className="bg-gradient-to-br from-slate-900/95 via-slate-800/90 to-slate-700/95 border-gold/20 backdrop-blur-xl shadow-2xl overflow-hidden">
              <CardContent className="p-10 md:p-16">
                <div className="text-center mb-16">
                  <h2 className="text-5xl md:text-7xl font-bold text-transparent bg-gradient-to-r from-gold via-yellow-300 to-gold bg-clip-text mb-8 tracking-wide animated-gradient">
                    {collection.title}
                  </h2>
                  <div className="w-32 h-1.5 bg-gradient-to-r from-transparent via-gold to-transparent mx-auto mb-8"></div>
                  <p className="text-xl md:text-2xl text-gray-300 max-w-5xl mx-auto leading-relaxed font-light">
                    {collection.description}
                  </p>
                </div>
              
                {/* Image Display - Special treatment for Beds, Sofas, Arm Chairs, Pouf and Benches, and Dining Tables and Chairs with rotational carousel */}
                {collection.title === "Beds" || collection.title === "Sofas" || collection.title === "Arm Chairs" || collection.title === "Pouf and Benches" || collection.title === "Dining Tables and Chairs" ? (
                  <div className="mb-8 luxury-carousel-container">
                    <RotatingCarousel 
                      images={collection.images}
                      autoRotate={true}
                      rotationInterval={
                        collection.title === "Sofas" ? 3500 : 
                        collection.title === "Arm Chairs" ? 3000 :
                        collection.title === "Pouf and Benches" ? 3200 :
                        collection.title === "Dining Tables and Chairs" ? 3800 : 4000
                      }
                    />
                  </div>
                ) : (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                    {collection.images.map((image, imageIndex) => (
                      <Card 
                        key={imageIndex} 
                        className="overflow-hidden bg-slate-800/50 border-gold/10 hover:border-gold/30 transition-all duration-500 group shadow-xl"
                      >
                        <div className="relative overflow-hidden">
                          <img 
                            src={image.src}
                            alt={image.alt}
                            className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-110"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        </div>
                      </Card>
                    ))}
                  </div>
                )}
                
                {/* Collection Action Button */}
                <div className="text-center">
                  <Link href="/contact">
                    <Button 
                      variant="outline" 
                      className="bg-gradient-to-r from-elegant-brown to-glow-gold text-white border-2 border-amber-400 hover:bg-gradient-to-r hover:from-glow-gold hover:to-elegant-brown transition-all duration-500 px-8 py-3 font-semibold shadow-2xl hover:shadow-glow-gold/50 transform hover:scale-105 luxury-glow"
                    >
                      Explore {collection.title} Collection
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        ))}
      </div>

      {/* Call to Action */}
      <section className="py-20 relative z-10">
        <div className="container mx-auto px-4 text-center">
          <div className="backdrop-blur-lg bg-white/15 rounded-3xl p-12 shadow-2xl border border-amber-400/40 luxury-shine">
            <h2 className="text-4xl md:text-6xl font-bold text-transparent bg-gradient-to-r from-gold via-yellow-300 to-gold bg-clip-text mb-6 animated-gradient">
              Ready to Transform Your Space?
            </h2>
            <p className="text-xl text-slate-100 mb-8 max-w-3xl mx-auto drop-shadow-xl">
              Let our expert designers create bespoke solutions that perfectly complement your lifestyle and aesthetic preferences.
            </p>
            <Link href="/contact">
              <Button className="bg-gradient-to-r from-elegant-brown to-glow-gold text-white px-12 py-4 text-lg font-bold hover:from-glow-gold hover:to-elegant-brown transition-all duration-500 shadow-2xl hover:shadow-glow-gold/50 transform hover:scale-105 luxury-glow">
                Schedule Consultation <i className="fas fa-arrow-right ml-2"></i>
              </Button>
            </Link>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
}