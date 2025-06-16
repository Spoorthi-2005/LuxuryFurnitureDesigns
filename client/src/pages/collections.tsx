import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Header from "@/components/header";
import Footer from "@/components/footer";
import RotatingCarousel from "@/components/rotating-carousel";
import { Link } from "wouter";

// Import all collection images
import bedImage1 from "@assets/WhatsApp Image 2025-06-13 at 16.29.47_37877b1c_1750056061341.jpg";
import bedImage2 from "@assets/WhatsApp Image 2025-06-13 at 16.29.47_593f7c9b_1750056874168.jpg";
import bedImage3 from "@assets/WhatsApp Image 2025-06-13 at 16.29.47_8d285b60_1750056034362.jpg";
import bedImage4 from "@assets/WhatsApp Image 2025-06-13 at 16.29.47_9e6edafe_1750056017054.jpg";
import bedImage5 from "@assets/WhatsApp Image 2025-06-13 at 16.29.47_c71c5951_1750056003015.jpg";

import sofaImage1 from "@assets/WhatsApp Image 2025-06-13 at 17.33.24_a0ec5bfa_1750051914724.jpg";
import sofaImage2 from "@assets/WhatsApp Image 2025-06-13 at 17.35.01_3208808f_1750051896719.jpg";
import sofaImage3 from "@assets/WhatsApp Image 2025-06-13 at 17.42.07_098edf8f_1749924786711.jpg";
import sofaImage4 from "@assets/WhatsApp Image 2025-06-13 at 17.42.07_42a0a09c_1749820754155.jpg";
import sofaImage5 from "@assets/WhatsApp Image 2025-06-13 at 17.42.07_59a98bc1_1749820775528.jpg";

import chairImage1 from "@assets/WhatsApp Image 2025-06-13 at 17.44.32_3966bed2_1749925461685.jpg";
import chairImage2 from "@assets/WhatsApp Image 2025-06-13 at 17.44.32_558cfe2f_1749925476189.jpg";
import chairImage3 from "@assets/WhatsApp Image 2025-06-13 at 17.44.32_bad0d9e3_1750053485982.jpg";
import chairImage4 from "@assets/WhatsApp Image 2025-06-13 at 17.46.29_832ad829_1749926048525.jpg";
import chairImage5 from "@assets/WhatsApp Image 2025-06-13 at 17.46.29_96be9a21_1749926026154.jpg";

import tableImage1 from "@assets/WhatsApp Image 2025-06-13 at 17.46.30_0a42d700_1750055042784.jpg";
import tableImage2 from "@assets/WhatsApp Image 2025-06-13 at 17.46.30_789b8cef_1750054732586.jpg";
import tableImage3 from "@assets/WhatsApp Image 2025-06-13 at 17.46.30_e32dcc23_1750053498355.jpg";
import tableImage4 from "@assets/WhatsApp Image 2025-06-13 at 17.46.30_e5dda6ca_1749925498313.jpg";
import tableImage5 from "@assets/WhatsApp Image 2025-06-13 at 17.50.38_ad095622_1750052982237.jpg";

import coffeeImage1 from "@assets/WhatsApp Image 2025-06-13 at 17.50.39_37b37c32_1750052994832.jpg";
import coffeeImage2 from "@assets/WhatsApp Image 2025-06-13 at 17.50.39_3a325e8b_1750053048917.jpg";
import coffeeImage3 from "@assets/WhatsApp Image 2025-06-13 at 17.50.39_40864f70_1750053029587.jpg";
import coffeeImage4 from "@assets/WhatsApp Image 2025-06-13 at 17.50.39_9b0313bc_1750053012321.jpg";
import coffeeImage5 from "@assets/WhatsApp Image 2025-06-13 at 17.53.09_d76b07b5_1750055071634.jpg";

import centreImage1 from "@assets/WhatsApp Image 2025-06-13 at 17.53.10_1f9b6f05_1750054139202.jpg";
import centreImage2 from "@assets/WhatsApp Image 2025-06-13 at 17.53.10_93778160_1749925564575.jpg";
import centreImage3 from "@assets/WhatsApp Image 2025-06-13 at 17.53.10_d0678884_1750055089890.jpg";
import centreImage4 from "@assets/WhatsApp Image 2025-06-13 at 17.56.10_7440dc07_1750052008318.jpg";
import centreImage5 from "@assets/WhatsApp Image 2025-06-13 at 18.00.23_4baba346_1749926150994.jpg";

import bench1Image from "@assets/WhatsApp Image 2025-06-13 at 18.00.23_51df9eb3_1749926198325.jpg";
import bench2Image from "@assets/WhatsApp Image 2025-06-13 at 18.00.23_6d9adf69_1749926242727.jpg";
import bench3Image from "@assets/WhatsApp Image 2025-06-13 at 18.00.23_ec4ada1b_1749926171722.jpg";
import bench4Image from "@assets/WhatsApp Image 2025-06-13 at 18.00.24_13f5bd2d_1749925600218.jpg";
import bench5Image from "@assets/WhatsApp Image 2025-06-13 at 18.00.24_4e1199b0_1750054472778.jpg";

export default function Collections() {
  const collections = [
    {
      id: "beds",
      title: "Beds",
      description: "Luxurious sleeping sanctuaries crafted with premium materials and sophisticated design elements for ultimate comfort and elegance.",
      images: [
        { src: bedImage1, alt: "Elegant luxury bedroom with premium bedding and sophisticated lighting" },
        { src: bedImage2, alt: "Modern bedroom suite featuring contemporary design and plush furnishings" },
        { src: bedImage3, alt: "Sophisticated bedroom interior with premium bed frame and luxury decor" },
        { src: bedImage4, alt: "Luxury bedroom with ornate headboard and elegant bedside furniture" },
        { src: bedImage5, alt: "Contemporary bedroom design with sleek lines and premium materials" }
      ]
    },
    {
      id: "sofas",
      title: "Sofas",
      description: "Handcrafted seating solutions that combine exceptional comfort with timeless elegance, perfect for sophisticated living spaces.",
      images: [
        { src: sofaImage1, alt: "Luxurious living room with premium sectional sofa and elegant decor" },
        { src: sofaImage2, alt: "Modern sofa arrangement in sophisticated interior setting" },
        { src: sofaImage3, alt: "Contemporary living space featuring designer sofa and premium furnishings" },
        { src: sofaImage4, alt: "Elegant sofa set with plush cushions and refined styling" },
        { src: sofaImage5, alt: "Sophisticated seating arrangement with luxury sofa and accent pieces" }
      ]
    },
    {
      id: "armchairs",
      title: "Arm Chairs",
      description: "Statement seating pieces that embody comfort and style, meticulously crafted to enhance any interior with sophistication.",
      images: [
        { src: chairImage1, alt: "Elegant armchair in luxurious interior setting with premium materials" },
        { src: chairImage2, alt: "Designer armchair featuring sophisticated upholstery and refined details" },
        { src: chairImage3, alt: "Contemporary armchair with modern design and premium comfort" },
        { src: chairImage4, alt: "Luxury armchair showcasing exceptional craftsmanship and style" },
        { src: chairImage5, alt: "Sophisticated seating solution with elegant armchair design" }
      ]
    },
    {
      id: "dining",
      title: "Dining Tables and Chairs",
      description: "Exquisite dining ensembles that transform meals into memorable experiences through exceptional craftsmanship and elegant design.",
      images: [
        { src: tableImage1, alt: "Elegant dining room with premium table and sophisticated chair arrangement" },
        { src: tableImage2, alt: "Luxury dining set featuring modern design and quality craftsmanship" },
        { src: tableImage3, alt: "Contemporary dining space with designer table and premium seating" },
        { src: tableImage4, alt: "Sophisticated dining ensemble with refined table and elegant chairs" },
        { src: tableImage5, alt: "Premium dining furniture showcasing exceptional style and comfort" }
      ]
    },
    {
      id: "coffee",
      title: "Coffee Tables",
      description: "Functional art pieces that serve as stunning centerpieces while providing practical elegance for modern living spaces.",
      images: [
        { src: coffeeImage1, alt: "Elegant coffee table in luxurious living room setting" },
        { src: coffeeImage2, alt: "Designer coffee table featuring contemporary design and premium materials" },
        { src: coffeeImage3, alt: "Modern coffee table showcasing sophisticated style and functionality" },
        { src: coffeeImage4, alt: "Luxury coffee table with refined details and elegant proportions" },
        { src: coffeeImage5, alt: "Contemporary coffee table design enhancing sophisticated interior" }
      ]
    },
    {
      id: "centre",
      title: "Centre Tables",
      description: "Distinctive focal points that combine artistic design with practical functionality, elevating any space with sophisticated presence.",
      images: [
        { src: centreImage1, alt: "Sophisticated centre table in elegant interior design setting" },
        { src: centreImage2, alt: "Designer centre table featuring premium materials and refined styling" },
        { src: centreImage3, alt: "Contemporary centre table showcasing modern elegance and functionality" },
        { src: centreImage4, alt: "Luxury centre table with exceptional craftsmanship and sophisticated design" },
        { src: centreImage5, alt: "Premium centre table enhancing sophisticated living space arrangement" }
      ]
    },
    {
      id: "benches",
      title: "Pouf and Benches",
      description: "Versatile seating and accent pieces that add both functionality and style, perfect for creating flexible and elegant interiors.",
      images: [
        { src: bench1Image, alt: "Elegant bench in sophisticated bedroom with luxury furnishings" },
        { src: bench2Image, alt: "Designer pouf and bench arrangement in premium interior setting" },
        { src: bench3Image, alt: "Contemporary bench design featuring refined materials and styling" },
        { src: bench4Image, alt: "Luxury bench showcasing exceptional comfort and elegant design" },
        { src: bench5Image, alt: "Sophisticated seating solution with premium bench and pouf designs" }
      ]
    }
  ];

  return (
    <div className="min-h-screen relative overflow-hidden luxury-platinum-secondary">
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

      {/* Collections Masonry Layout */}
      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {collections.map((collection, index) => (
            <div 
              key={collection.id} 
              className={`${index % 2 === 0 ? 'lg:mb-16' : 'lg:mt-16'} ${index % 3 === 0 ? 'lg:scale-105' : ''} transition-all duration-700 hover:scale-102`}
            >
              <Card className="bg-gradient-to-br from-slate-900/95 via-slate-800/90 to-slate-700/95 border-gold/20 backdrop-blur-xl shadow-2xl overflow-hidden hover:shadow-gold/20 hover:shadow-3xl">
                <CardContent className="p-8 md:p-12">
                  <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-5xl font-bold text-transparent bg-gradient-to-r from-gold via-yellow-300 to-gold bg-clip-text mb-6 tracking-wide animated-gradient">
                      {collection.title}
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-transparent via-gold to-transparent mx-auto mb-6"></div>
                    <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed font-light">
                      {collection.description}
                    </p>
                  </div>

                  {/* Image Display - Carousel for special collections, grid for others */}
                  {collection.title === "Beds" || collection.title === "Sofas" || collection.title === "Arm Chairs" || collection.title === "Pouf and Benches" || collection.title === "Dining Tables and Chairs" || collection.title === "Coffee Tables" || collection.title === "Centre Tables" ? (
                    <div className="mb-8 luxury-carousel-container">
                      <RotatingCarousel 
                        images={collection.images}
                        autoRotate={true}
                        rotationInterval={
                          collection.title === "Sofas" ? 3500 : 
                          collection.title === "Arm Chairs" ? 3000 :
                          collection.title === "Pouf and Benches" ? 3200 :
                          collection.title === "Dining Tables and Chairs" ? 3800 :
                          collection.title === "Coffee Tables" ? 3600 :
                          collection.title === "Centre Tables" ? 3400 : 4000
                        }
                      />
                    </div>
                  ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
                      {collection.images.map((image, imageIndex) => (
                        <Card 
                          key={imageIndex} 
                          className="overflow-hidden bg-slate-900/60 border-gold/20 hover:border-gold/50 transition-all duration-600 group shadow-2xl hover:shadow-gold/30 hover:shadow-2xl"
                        >
                          <div className="relative overflow-hidden">
                            <img 
                              src={image.src}
                              alt={image.alt}
                              className="w-full h-96 object-cover object-center transition-all duration-800 group-hover:scale-105 group-hover:brightness-110 group-hover:contrast-115"
                              style={{
                                filter: 'contrast(1.1) brightness(1.05) saturate(1.15)'
                              }}
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-600"></div>
                            <div className="absolute inset-0 bg-gradient-to-r from-gold/5 via-transparent to-gold/5 opacity-0 group-hover:opacity-100 transition-opacity duration-600"></div>
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