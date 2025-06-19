import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import Header from "@/components/header";
import Footer from "@/components/footer";
import SimpleImageRotator from "@/components/simple-image-rotator";
import VirtualRoomDesigner from "@/components/virtual-room-designer";
import ARPreviewModal from "@/components/ar-preview-modal";
import { Link } from "wouter";
import { LuxuryParticles, LuxuryCursorTrail, LuxuryCard, ShimmerText, LuxuryButton } from "@/components/luxury-effects";
import { PremiumParallax, LuxuryTilt, MagneticButton, LuxuryReveal, FloatingOrbs, GlassMorphCard, ScrollProgress } from "@/components/premium-interactions";
import { SEOHead, BreadcrumbStructuredData } from "@/components/seo-optimizer";
import { SkipToContent, useKeyboardNavigation, useReducedMotion } from "@/components/accessibility-enhancer";
import { AdvancedSearch, ViewModeToggle, QuickViewModal, WishlistButton, ShareButton } from "@/components/modern-enhancements";
import { Camera, Eye, Move3D, Palette, Sparkles, Zap, Grid, List, Filter } from "lucide-react";

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

// Import dining table images (your specific luxury dining collection)
import diningImage1 from "@assets/IMG-20250613-WA0060_1750074999071.jpg";
import diningImage2 from "@assets/IMG-20250613-WA0063_1750075014558.jpg";
import diningImage3 from "@assets/IMG-20250613-WA0065_1750075036744.jpg";
import diningImage4 from "@assets/IMG-20250613-WA0072_1750075059985.jpg";

// Import coffee table images (your specific luxury coffee table collection)
import coffeeImage1 from "@assets/IMG-20250613-WA0055_1750075185902.jpg";
import coffeeImage2 from "@assets/img13_1750075197306.png";
import coffeeImage3 from "@assets/IMG-20250613-WA0066_1750075214024.jpg";
import coffeeImage4 from "@assets/IMG-20250613-WA0085_1750075237878.jpg";
import coffeeImage5 from "@assets/IMG-20250613-WA0091_1750075251165.jpg";

// Import center table images (your specific luxury centre table collection)
import centreImage1 from "@assets/IMG-20250613-WA0067_1750075360352.jpg";
import centreImage2 from "@assets/IMG-20250613-WA0083_1750075377871.jpg";
import centreImage3 from "@assets/IMG-20250613-WA0075_1750075398163.jpg";
import centreImage4 from "@assets/IMG-20250613-WA0103_1750075427226.jpg";

// Import bench and pouf images (your specific luxury bedroom bench collection)
import benchImage1 from "@assets/IMG-20250613-WA0038_1750075553412.jpg";
import benchImage2 from "@assets/IMG-20250613-WA0039_1750075593138.jpg";
import benchImage3 from "@assets/IMG-20250613-WA0041_1750075606070.jpg";
import benchImage4 from "@assets/IMG-20250613-WA0074_1750075628284.jpg";

export default function Collections() {
  useKeyboardNavigation();
  const prefersReducedMotion = useReducedMotion();
  
  const [isVirtualDesignerOpen, setIsVirtualDesignerOpen] = useState(false);
  const [isARPreviewOpen, setIsARPreviewOpen] = useState(false);
  const [selectedCollection, setSelectedCollection] = useState<any>(null);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [filterCategory, setFilterCategory] = useState<string>('all');

  const breadcrumbItems = [
    { name: 'Home', url: '/' },
    { name: 'Collections', url: '/collections' }
  ];
  const collections = [
    {
      id: "beds",
      title: "Beds",
      description: "Luxurious sleeping sanctuaries crafted with premium materials and sophisticated design elements for ultimate comfort and elegance. Our bed collection features solid wood construction, premium upholstery, and custom sizing options to create the perfect bedroom centerpiece. Each bed is designed with meticulous attention to detail, incorporating ergonomic principles and luxury aesthetics.",
      images: [
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
      description: "Handcrafted seating solutions that combine exceptional comfort with timeless elegance, perfect for sophisticated living spaces. Our sofa collection showcases premium fabrics, innovative cushioning systems, and durable hardwood frames that ensure both comfort and longevity. Available in various configurations including sectionals, loveseats, and modular designs.",
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
      description: "Statement seating pieces that embody comfort and style, meticulously crafted to enhance any interior with sophistication. Our armchair collection features ergonomic design, premium upholstery options, and distinctive silhouettes that serve as focal points in any room. Each piece combines traditional craftsmanship with contemporary aesthetics.",
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
      description: "Exquisite dining ensembles that transform meals into memorable experiences through exceptional craftsmanship and elegant design. Our dining collection includes solid wood tables with various base designs, matching chairs with premium upholstery, and coordinated accessories that create cohesive dining environments perfect for entertaining.",
      images: [
        { src: diningImage1, alt: "Contemporary dining table with blue sculptural base and quilted chairs" },
        { src: diningImage2, alt: "Luxury dark wood dining table with tufted brown chairs and gold accents" },
        { src: diningImage3, alt: "Elegant round black glass dining table with white quilted swivel chairs" },
        { src: diningImage4, alt: "Modern dining set with geometric gold base and cream upholstered chairs" }
      ]
    },
    {
      id: "coffee",
      title: "Coffee Tables",
      description: "Functional art pieces that serve as stunning centerpieces while providing practical elegance for modern living spaces.",
      images: [
        { src: coffeeImage1, alt: "Luxurious dark wood coffee tables with gold accents in sophisticated living room" },
        { src: coffeeImage2, alt: "Elegant round coffee table set with marble top and rich wood finish" },
        { src: coffeeImage3, alt: "Modern living room featuring geometric gold coffee table with black glass top" },
        { src: coffeeImage4, alt: "Contemporary marble coffee tables with gold metal frame and sleek design" },
        { src: coffeeImage5, alt: "Premium white marble coffee table set with luxurious gold cylindrical base" }
      ]
    },
    {
      id: "centre",
      title: "Centre Tables",
      description: "Distinctive focal points that combine artistic design with practical functionality, elevating any space with sophisticated presence.",
      images: [
        { src: centreImage1, alt: "Elegant black glass centre table with decorative accessories in luxury living room" },
        { src: centreImage2, alt: "Round centre table with gold geometric base and black glass top" },
        { src: centreImage3, alt: "Sophisticated side table with gold vertical slat design and black glass shelves" },
        { src: centreImage4, alt: "Luxury centre table with curved gold metal base and white marble top" }
      ]
    },
    {
      id: "benches",
      title: "Pouf and Benches",
      description: "Versatile seating and accent pieces that add both functionality and style, perfect for creating flexible and elegant interiors.",
      images: [
        { src: benchImage1, alt: "Elegant grey upholstered bench at foot of luxury bed with geometric pattern rug" },
        { src: benchImage2, alt: "Modern white leather bench with gold legs in sophisticated bedroom setting" },
        { src: benchImage3, alt: "Luxury cream bench with tufted detailing in opulent bedroom with art deco styling" },
        { src: benchImage4, alt: "Premium pink velvet bench with gold frame beneath crystal chandelier" }
      ]
    }
  ];

  const filteredCollections = filterCategory === 'all' 
    ? collections 
    : collections.filter(collection => collection.id === filterCategory);

  return (
    <div className="min-h-screen relative overflow-hidden bg-black text-white">
      {/* SEO and Accessibility */}
      <SEOHead 
        title="Collections"
        description="Explore our premium furniture collections including luxury beds, sofas, dining sets, and custom furniture. Handcrafted with traditional techniques and modern design."
        keywords="furniture collections, luxury beds, premium sofas, dining furniture, custom furniture, handcrafted furniture"
      />
      <BreadcrumbStructuredData items={breadcrumbItems} />
      <SkipToContent />
      
      {/* Luxury Effects */}
      {!prefersReducedMotion && (
        <>
          <LuxuryParticles />
          <LuxuryCursorTrail />
        </>
      )}
      <ScrollProgress />
      <FloatingOrbs />
      
      {/* Collections Page - Hexagonal Pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-black"></div>
        <div className="absolute inset-0 opacity-[0.015]" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' stroke='%23FFFFFF' stroke-width='1'%3E%3Cpath d='M30 5l20 12v26L30 55 10 43V17z'/%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '60px 60px'
        }}></div>
        <div className="absolute inset-0 bg-gradient-to-tr from-purple-900/[0.02] via-transparent to-blue-900/[0.02]"></div>
      </div>

      {/* Geometric Light Elements */}
      <div className="absolute top-1/3 left-1/5 w-72 h-72 bg-purple-500/[0.02] rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/3 right-1/5 w-72 h-72 bg-blue-500/[0.02] rounded-full blur-3xl animate-pulse" style={{animationDelay: '4s'}}></div>

      <Header />

      {/* Hero Section */}
      <section className="relative py-24 px-4 overflow-hidden">
        <div className="relative z-10 container mx-auto text-center">
          <ShimmerText className="text-6xl md:text-8xl font-bold mb-8">
            Our Collections
          </ShimmerText>
          <div className="w-32 h-2 bg-gradient-to-r from-transparent via-gold to-transparent mx-auto mb-8"></div>
          <p className="text-2xl md:text-3xl text-soft-brown max-w-4xl mx-auto leading-relaxed drop-shadow-xl">
            Discover our meticulously curated furniture collections, where luxury meets craftsmanship in perfect harmony.
          </p>
        </div>
      </section>

      {/* Enhanced Search and Filter Section */}
      <section id="main-content" className="py-12 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between mb-8">
            <div className="flex-1 max-w-2xl">
              <AdvancedSearch />
            </div>
            
            <div className="flex items-center gap-4">
              {/* Category Filter */}
              <select 
                value={filterCategory}
                onChange={(e) => setFilterCategory(e.target.value)}
                className="modern-input text-white px-4 py-2 rounded-lg"
                aria-label="Filter by category"
              >
                <option value="all">All Categories</option>
                <option value="beds">Beds</option>
                <option value="sofas">Sofas</option>
                <option value="armchairs">Arm Chairs</option>
                <option value="dining">Dining Sets</option>
                <option value="coffee">Coffee Tables</option>
                <option value="centre">Centre Tables</option>
                <option value="benches">Benches & Poufs</option>
              </select>
              
              {/* View Mode Toggle */}
              <ViewModeToggle mode={viewMode} onModeChange={setViewMode} />
            </div>
          </div>
        </div>
      </section>

      {/* Collections Linear Layout */}
      <div className="container mx-auto px-4 py-12 relative z-10">
        {filteredCollections.map((collection, index) => (
          <div key={collection.id} className="mb-20">
            <Card className="bg-black/50 border-white/10 backdrop-blur-xl shadow-2xl overflow-hidden">
              <CardContent className="p-8 md:p-12">
                <div className="text-center mb-12">
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 tracking-wide">
                    {collection.title}
                  </h2>
                  <div className="w-20 h-px bg-gradient-to-r from-transparent via-white/50 to-transparent mx-auto mb-6"></div>
                  <p className="text-gray-300 max-w-4xl mx-auto leading-relaxed">
                    {collection.description}
                  </p>
                </div>
              
                {/* Clean Image Container */}
                <div className="mb-8 relative group">
                  {/* Minimal Image Container */}
                  <div className="relative overflow-hidden rounded-lg shadow-2xl border border-white/20 bg-black/80">
                    {/* Premium inner border effect */}
                    <div className="absolute inset-1 rounded-3xl border border-gold/10"></div>
                    
                    {collection.id === "beds" || collection.id === "sofas" || collection.id === "armchairs" || collection.id === "dining" || collection.id === "coffee" || collection.id === "centre" || collection.id === "benches" ? (
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
                
                {/* Enhanced Collection Actions */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <Link href="/contact">
                    <Button 
                      variant="outline" 
                      className="bg-gradient-to-r from-elegant-brown to-glow-gold text-white border-2 border-amber-400 hover:bg-gradient-to-r hover:from-glow-gold hover:to-elegant-brown transition-all duration-500 px-8 py-3 text-base font-semibold shadow-2xl hover:shadow-glow-gold/50 transform hover:scale-105 luxury-glow"
                    >
                      Explore {collection.title}
                    </Button>
                  </Link>
                  
                  {/* Virtual Design Features */}
                  <div className="flex gap-2">
                    <Button
                      onClick={() => {
                        setSelectedCollection(collection);
                        setIsVirtualDesignerOpen(true);
                      }}
                      variant="outline"
                      size="sm"
                      className="bg-black/20 backdrop-blur-sm border-gold/30 text-gold hover:bg-gold/10 transition-all duration-300"
                    >
                      <Move3D className="w-4 h-4 mr-2" />
                      3D Design
                    </Button>
                    
                    <Button
                      onClick={() => {
                        setSelectedCollection(collection);
                        setIsARPreviewOpen(true);
                      }}
                      variant="outline"
                      size="sm"
                      className="bg-black/20 backdrop-blur-sm border-purple-400/30 text-purple-300 hover:bg-purple-400/10 transition-all duration-300"
                    >
                      <Camera className="w-4 h-4 mr-2" />
                      AR View
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        ))}
      </div>

      {/* AI-Powered Design Features Section */}
      <section className="py-16 relative z-10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-purple-500/10 text-purple-300 border-purple-400/30">
              <Sparkles className="w-4 h-4 mr-2" />
              AI-Powered Design Technology
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-transparent bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text mb-4">
              Experience the Future of Interior Design
            </h2>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto">
              Visualize furniture in your space with cutting-edge AR technology and design custom rooms with our 3D tools
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-black/30 backdrop-blur-sm rounded-2xl p-6 border border-purple-400/20 hover:border-purple-400/40 transition-all duration-300">
              <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center mb-4">
                <Camera className="w-6 h-6 text-purple-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">AR Visualization</h3>
              <p className="text-slate-400 text-sm">
                See how our furniture looks in your actual space using augmented reality before making a purchase
              </p>
            </div>

            <div className="bg-black/30 backdrop-blur-sm rounded-2xl p-6 border border-gold/20 hover:border-gold/40 transition-all duration-300">
              <div className="w-12 h-12 bg-gold/20 rounded-xl flex items-center justify-center mb-4">
                <Move3D className="w-6 h-6 text-gold" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">3D Room Designer</h3>
              <p className="text-slate-400 text-sm">
                Create and customize your perfect room layout with our advanced drag-and-drop 3D design tools
              </p>
            </div>

            <div className="bg-black/30 backdrop-blur-sm rounded-2xl p-6 border border-blue-400/20 hover:border-blue-400/40 transition-all duration-300">
              <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center mb-4">
                <Zap className="w-6 h-6 text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Instant Recommendations</h3>
              <p className="text-slate-400 text-sm">
                Get AI-powered furniture suggestions based on your style preferences and room dimensions
              </p>
            </div>
          </div>

          <div className="text-center">
            <Button
              onClick={() => setIsVirtualDesignerOpen(true)}
              className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-8 py-3 text-lg font-semibold shadow-2xl hover:shadow-purple-500/50 transform hover:scale-105 transition-all duration-300"
            >
              <Palette className="w-5 h-5 mr-2" />
              Launch Virtual Designer
            </Button>
          </div>
        </div>
      </section>

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

      {/* Virtual Design Modals */}
      <Dialog open={isVirtualDesignerOpen} onOpenChange={setIsVirtualDesignerOpen}>
        <DialogContent className="max-w-7xl max-h-[95vh] overflow-hidden p-0">
          <DialogHeader className="p-6 pb-0">
            <DialogTitle className="flex items-center gap-2">
              <Move3D className="w-6 h-6 text-gold" />
              Virtual Room Designer
              {selectedCollection && (
                <Badge variant="secondary" className="ml-2">
                  {selectedCollection.title} Collection
                </Badge>
              )}
            </DialogTitle>
          </DialogHeader>
          <div className="h-[80vh]">
            <VirtualRoomDesigner />
          </div>
        </DialogContent>
      </Dialog>

      <ARPreviewModal 
        isOpen={isARPreviewOpen}
        onClose={() => setIsARPreviewOpen(false)}
        roomData={selectedCollection}
      />
    </div>
  );
}