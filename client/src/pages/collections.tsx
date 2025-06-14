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
      images: Array(6).fill("/api/placeholder/400/300").map((src, index) => ({
        src: `${src}?dining=${index + 1}`,
        alt: `Dining table and chairs set ${index + 1}`
      }))
    },
    {
      id: 5,
      title: "Consoles",
      description: "Elegant console tables that serve as functional art pieces, perfect for entryways and living spaces.",
      images: Array(6).fill("/api/placeholder/400/300").map((src, index) => ({
        src: `${src}?console=${index + 1}`,
        alt: `Luxury console table ${index + 1}`
      }))
    },
    {
      id: 6,
      title: "Coffee Tables",
      description: "Stunning coffee tables that become the centerpiece of your living room with their exceptional design.",
      images: Array(6).fill("/api/placeholder/400/300").map((src, index) => ({
        src: `${src}?coffee=${index + 1}`,
        alt: `Designer coffee table ${index + 1}`
      }))
    },
    {
      id: 7,
      title: "Centre Tables",
      description: "Beautifully crafted centre tables that add elegance and functionality to any living space.",
      images: Array(6).fill("/api/placeholder/400/300").map((src, index) => ({
        src: `${src}?centre=${index + 1}`,
        alt: `Elegant centre table ${index + 1}`
      }))
    },
    {
      id: 8,
      title: "Pouf and Benches",
      description: "Versatile poufs and benches that provide additional seating while enhancing your interior design.",
      images: Array(6).fill("/api/placeholder/400/300").map((src, index) => ({
        src: `${src}?pouf=${index + 1}`,
        alt: `Luxury pouf and bench ${index + 1}`
      }))
    }
  ];

  return (
    <div className="min-h-screen text-foreground">
      <Header />
      <div className="pt-20">
        {/* Hero Section */}
        <section className="py-20 glass-elegant">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-6xl font-playfair font-bold mb-6 text-gradient-brown">
                Luxury Furniture Collections
              </h1>
              <p className="text-2xl text-dark-elegant leading-relaxed">
                Discover our expertly curated collections of premium furniture, each piece representing 
                the pinnacle of craftsmanship and contemporary design excellence.
              </p>
            </div>
          </div>
        </section>

        {/* Collections Sections */}
        {collections.map((collection, index) => (
          <section 
            key={collection.id} 
            className={`py-16 ${index % 2 === 0 ? 'bg-light-grey' : 'bg-white'}`}
          >
            <div className="container mx-auto px-4">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-playfair font-bold mb-4 text-dark-elegant">
                  {collection.title}
                </h2>
                <p className="text-lg text-medium-grey max-w-3xl mx-auto leading-relaxed">
                  {collection.description}
                </p>
              </div>
              
              {/* Image Display - Special treatment for Beds, Sofas, and Arm Chairs with rotational carousel */}
              {collection.title === "Beds" || collection.title === "Sofas" || collection.title === "Arm Chairs" ? (
                <div className="mb-8 luxury-carousel-container">
                  <RotatingCarousel 
                    images={collection.images}
                    autoRotate={true}
                    rotationInterval={
                      collection.title === "Sofas" ? 3500 : 
                      collection.title === "Arm Chairs" ? 3000 : 4000
                    }
                  />
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                  {collection.images.map((image, imageIndex) => (
                    <Card 
                      key={imageIndex} 
                      className="overflow-hidden hover-lift transition-all duration-500 group shadow-lg premium-card"
                    >
                      <div className="relative overflow-hidden">
                        <img 
                          src={image.src}
                          alt={image.alt}
                          className="w-full h-64 object-cover transition-all duration-700 group-hover:scale-110 image-luxury"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-luxury-gold/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                      </div>
                      <CardContent className="p-4">
                        <p className="text-sm text-medium-grey font-medium">
                          {image.alt}
                        </p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              )}
              
              {/* Collection Action Button */}
              <div className="text-center">
                <Link href="/contact">
                  <Button 
                    variant="outline" 
                    className="text-dark-elegant border-2 border-dark-elegant hover:bg-dark-elegant hover:text-white transition-all duration-300 px-8 py-3 font-semibold"
                  >
                    Explore {collection.title} Collection
                  </Button>
                </Link>
              </div>
            </div>
          </section>
        ))}

        {/* Call to Action */}
        <section className="py-20 bg-dark-elegant">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-playfair font-bold mb-6 text-white">
              Ready to Transform Your Space?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Let our expert designers create bespoke solutions that perfectly complement your lifestyle and aesthetic preferences.
            </p>
            <Link href="/contact">
              <Button className="bg-white text-dark-elegant px-12 py-4 text-lg font-bold hover:bg-gray-100 transition-colors">
                Schedule Consultation
              </Button>
            </Link>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
}