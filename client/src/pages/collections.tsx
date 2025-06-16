import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Header from "@/components/header";
import Footer from "@/components/footer";
import SimpleImageRotator from "@/components/simple-image-rotator";
import { Link } from "wouter";

// Import bed/bedroom images (your specific luxury bed collection)
import bedImage1 from "@assets/IMG-20250613-WA0038_1750069478869.jpg";
import bedImage2 from "@assets/img5_1750069489466.png";
import bedImage3 from "@assets/img27_1750069505780.png";
import bedImage4 from "@assets/IMG-20250613-WA0041_1750069532482.jpg";
import bedImage5 from "@assets/IMG-20250613-WA0042_1750069552770.jpg";
import bedImage6 from "@assets/IMG-20250613-WA0097_1750069572598.jpg";

// Import sofa images (your specific luxury sofa collection)
import sofaImage1 from "@assets/IMG-20250613-WA0044_1750074551763.jpg";
import sofaImage2 from "@assets/IMG-20250613-WA0045_1750074570055.jpg";
import sofaImage3 from "@assets/IMG-20250613-WA0051_1750074586521.jpg";
import sofaImage4 from "@assets/IMG-20250613-WA0057_1750074600000.jpg";
import sofaImage5 from "@assets/IMG-20250613-WA0067_1750074632032.jpg";

// Import armchair images (your specific luxury armchair collection)
import chairImage1 from "@assets/IMG-20250613-WA0052_1750074773597.jpg";
import chairImage2 from "@assets/IMG-20250613-WA0077_1750074805978.jpg";
import chairImage3 from "@assets/IMG-20250613-WA0054_1750074817619.jpg";
import chairImage4 from "@assets/IMG-20250613-WA0076_1750074840325.jpg";
import chairImage5 from "@assets/IMG-20250613-WA0078_1750074861484.jpg";

// Import dining table and chair images (restaurant and commercial dining)
import diningImage1 from "@assets/WhatsApp Image 2025-06-13 at 17.50.39_37b37c32_1750052994832.jpg";
import diningImage2 from "@assets/WhatsApp Image 2025-06-13 at 16.29.47_37877b1c_1750056061341.jpg";
import diningImage3 from "@assets/WhatsApp Image 2025-06-13 at 16.29.47_593f7c9b_1750056874168.jpg";
import diningImage4 from "@assets/WhatsApp Image 2025-06-13 at 16.29.47_8d285b60_1750056034362.jpg";
import diningImage5 from "@assets/WhatsApp Image 2025-06-13 at 16.29.47_9e6edafe_1750056017054.jpg";

// Import coffee table images
import coffeeImage1 from "@assets/WhatsApp Image 2025-06-13 at 17.53.10_1f9b6f05_1750054139202.jpg";
import coffeeImage2 from "@assets/WhatsApp Image 2025-06-13 at 17.50.39_3a325e8b_1750053048917.jpg";
import coffeeImage3 from "@assets/WhatsApp Image 2025-06-13 at 17.50.39_40864f70_1750053029587.jpg";
import coffeeImage4 from "@assets/WhatsApp Image 2025-06-13 at 17.50.39_9b0313bc_1750053012321.jpg";
import coffeeImage5 from "@assets/WhatsApp Image 2025-06-13 at 17.53.09_d76b07b5_1750055071634.jpg";

// Import center table images
import centreImage1 from "@assets/WhatsApp Image 2025-06-13 at 17.53.10_93778160_1749925564575.jpg";
import centreImage2 from "@assets/WhatsApp Image 2025-06-13 at 17.53.10_d0678884_1750055089890.jpg";
import centreImage3 from "@assets/WhatsApp Image 2025-06-13 at 17.56.10_7440dc07_1750052008318.jpg";
import centreImage4 from "@assets/WhatsApp Image 2025-06-13 at 18.00.23_4baba346_1749926150994.jpg";
import centreImage5 from "@assets/WhatsApp Image 2025-06-13 at 17.50.38_ad095622_1750052982237.jpg";

// Import bench and pouf images
import benchImage1 from "@assets/WhatsApp Image 2025-06-13 at 18.00.24_13f5bd2d_1749925600218.jpg";
import benchImage2 from "@assets/WhatsApp Image 2025-06-13 at 18.00.24_4e1199b0_1750054472778.jpg";
import benchImage3 from "@assets/WhatsApp Image 2025-06-13 at 18.00.24_7f6e5a9a_1750052057626.jpg";
import benchImage4 from "@assets/WhatsApp Image 2025-06-13 at 18.00.24_923ac9ce_1749925690778.jpg";
import benchImage5 from "@assets/WhatsApp Image 2025-06-13 at 18.00.24_99040198_1749925916156.jpg";

export default function Collections() {
  const collections = [
    {
      id: "beds",
      title: "Beds",
      description: "Luxurious sleeping sanctuaries crafted with premium materials and sophisticated design elements for ultimate comfort and elegance.",
      images: [
        { src: bedImage1, alt: "Luxury bedroom with premium grey upholstered bed and sophisticated lighting" },
        { src: bedImage2, alt: "Contemporary black bed with crystal chandeliers and modern design" },
        { src: bedImage3, alt: "Elegant quilted headboard bed with gold accents and premium materials" },
        { src: bedImage4, alt: "Art deco inspired bed with curved headboard and luxury finishes" },
        { src: bedImage5, alt: "Modern platform bed with textured headboard and premium upholstery" },
        { src: bedImage6, alt: "Minimalist bed design with clean lines and sophisticated styling" }
      ]
    },
    {
      id: "sofas",
      title: "Sofas",
      description: "Handcrafted seating solutions that combine exceptional comfort with timeless elegance, perfect for sophisticated living spaces.",
      images: [
        { src: sofaImage1, alt: "Luxury taupe sofa with quilted detailing and designer throw pillows in sophisticated interior" },
        { src: sofaImage2, alt: "Contemporary grey sofa with plush fur throws and modern styling" },
        { src: sofaImage3, alt: "Elegant white sofa with gold accent frame in luxury living room" },
        { src: sofaImage4, alt: "Premium navy blue sofa with metallic coffee table and designer decor" },
        { src: sofaImage5, alt: "Modern sectional sofa with striped accents and glass coffee table" }
      ]
    },
    {
      id: "armchairs",
      title: "Arm Chairs",
      description: "Statement seating pieces that embody comfort and style, meticulously crafted to enhance any interior with sophistication.",
      images: [
        { src: chairImage1, alt: "Elegant white armchair with gold accents and luxury console in sophisticated interior" },
        { src: chairImage2, alt: "Luxury olive green tufted armchair with premium fabric and elegant styling" },
        { src: chairImage3, alt: "Premium rose gold armchair with quilted detailing and metallic frame" },
        { src: chairImage4, alt: "Contemporary mustard yellow armchairs with modern design and gold legs" },
        { src: chairImage5, alt: "Sophisticated grey velvet armchair with curved design and premium upholstery" }
      ]
    },
    {
      id: "dining",
      title: "Dining Tables and Chairs",
      description: "Exquisite dining ensembles that transform meals into memorable experiences through exceptional craftsmanship and elegant design.",
      images: [
        { src: diningImage1, alt: "Luxury round dining table with quilted chairs and gold accents" },
        { src: diningImage2, alt: "Restaurant dining area with premium furniture and sophisticated ambiance" },
        { src: diningImage3, alt: "Commercial dining space with elegant table and chair arrangements" },
        { src: diningImage4, alt: "Professional restaurant interior with premium dining furniture" }
      ]
    },
    {
      id: "coffee",
      title: "Coffee Tables",
      description: "Functional art pieces that serve as stunning centerpieces while providing practical elegance for modern living spaces.",
      images: [
        { src: coffeeImage1, alt: "Modern black coffee table with white sofa and luxury interior design" },
        { src: coffeeImage2, alt: "Designer coffee table featuring contemporary style and premium materials" },
        { src: coffeeImage3, alt: "Sophisticated coffee table showcasing elegant functionality and design" },
        { src: coffeeImage4, alt: "Luxury coffee table with refined details and modern proportions" }
      ]
    },
    {
      id: "centre",
      title: "Centre Tables",
      description: "Distinctive focal points that combine artistic design with practical functionality, elevating any space with sophisticated presence.",
      images: [
        { src: centreImage1, alt: "Elegant centre table in sophisticated interior design setting" },
        { src: centreImage2, alt: "Designer centre table featuring premium materials and refined styling" },
        { src: centreImage3, alt: "Contemporary centre table showcasing modern elegance and functionality" },
        { src: centreImage4, alt: "Luxury centre table with exceptional craftsmanship and sophisticated design" }
      ]
    },
    {
      id: "benches",
      title: "Pouf and Benches",
      description: "Versatile seating and accent pieces that add both functionality and style, perfect for creating flexible and elegant interiors.",
      images: [
        { src: benchImage1, alt: "Elegant bench in sophisticated bedroom with luxury furnishings" },
        { src: benchImage2, alt: "Designer pouf and bench arrangement in premium interior setting" },
        { src: benchImage3, alt: "Contemporary bench design featuring refined materials and styling" },
        { src: benchImage4, alt: "Luxury bench showcasing exceptional comfort and elegant design" }
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

      {/* Collections Linear Layout */}
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
              
                {/* Bed Collection with 3D Rotation, Others with Grid */}
                <div className="mb-12 luxury-carousel-container relative group">
                  {/* Sophisticated background gradient layers */}
                  <div className="absolute inset-0 bg-gradient-to-r from-gold/8 via-amber-200/3 to-gold/8 rounded-3xl blur-sm"></div>
                  <div className="absolute inset-0 bg-gradient-to-b from-slate-800/20 via-transparent to-slate-900/30 rounded-3xl"></div>
                  
                  {/* Main carousel container with enhanced styling */}
                  <div className="relative overflow-hidden rounded-3xl shadow-2xl border-2 border-gold/15 bg-gradient-to-br from-slate-900/40 via-slate-800/50 to-slate-700/60 backdrop-blur-xl">
                    {/* Premium inner border effect */}
                    <div className="absolute inset-1 rounded-3xl border border-gold/10"></div>
                    
                    {collection.id === "beds" || collection.id === "sofas" || collection.id === "armchairs" ? (
                      <div className="p-8">
                        <SimpleImageRotator 
                          images={collection.images}
                          rotationInterval={3000}
                        />
                      </div>
                    ) : (
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-8">
                        {collection.images.map((image, imageIndex) => (
                          <div key={imageIndex} className="relative group">
                            <img
                              src={image.src}
                              alt={image.alt}
                              className="w-full h-64 object-cover rounded-lg shadow-lg transition-transform duration-300 group-hover:scale-105 border border-gold/20"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                  
                  {/* Opulence-style premium overlay effects */}
                  <div className="absolute top-0 left-0 w-full h-full pointer-events-none rounded-3xl overflow-hidden">
                    {/* Top and bottom gold accent lines */}
                    <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-gold to-transparent opacity-70 group-hover:opacity-100 transition-opacity duration-700"></div>
                    <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-gold to-transparent opacity-70 group-hover:opacity-100 transition-opacity duration-700"></div>
                    
                    {/* Side accent lines */}
                    <div className="absolute top-0 left-0 w-0.5 h-full bg-gradient-to-b from-transparent via-gold/60 to-transparent opacity-50 group-hover:opacity-80 transition-opacity duration-700"></div>
                    <div className="absolute top-0 right-0 w-0.5 h-full bg-gradient-to-b from-transparent via-gold/60 to-transparent opacity-50 group-hover:opacity-80 transition-opacity duration-700"></div>
                    
                    {/* Corner highlight effects */}
                    <div className="absolute top-0 left-0 w-8 h-8 bg-gradient-to-br from-gold/20 to-transparent rounded-tl-3xl"></div>
                    <div className="absolute top-0 right-0 w-8 h-8 bg-gradient-to-bl from-gold/20 to-transparent rounded-tr-3xl"></div>
                    <div className="absolute bottom-0 left-0 w-8 h-8 bg-gradient-to-tr from-gold/20 to-transparent rounded-bl-3xl"></div>
                    <div className="absolute bottom-0 right-0 w-8 h-8 bg-gradient-to-tl from-gold/20 to-transparent rounded-br-3xl"></div>
                    
                    {/* Luxury shimmer effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/2 to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-pulse transition-opacity duration-1000"></div>
                  </div>
                  
                  {/* Premium shadow effects */}
                  <div className="absolute -inset-4 bg-gradient-to-r from-gold/5 via-transparent to-gold/5 rounded-3xl blur-xl opacity-60 group-hover:opacity-100 transition-opacity duration-700 -z-10"></div>
                </div>
                
                {/* Collection Action Button */}
                <div className="text-center">
                  <Link href="/contact">
                    <Button 
                      variant="outline" 
                      className="bg-gradient-to-r from-elegant-brown to-glow-gold text-white border-2 border-amber-400 hover:bg-gradient-to-r hover:from-glow-gold hover:to-elegant-brown transition-all duration-500 px-12 py-4 text-lg font-semibold shadow-2xl hover:shadow-glow-gold/50 transform hover:scale-105 luxury-glow"
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