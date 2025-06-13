import Header from "@/components/header";
import Footer from "@/components/footer";
import { Card, CardContent } from "@/components/ui/card";
import designingImage from "@assets/image_1749473635504.png";
import carpentryImage from "@assets/WhatsApp Image 2025-06-09 at 13.13.31_21d3a583_1749473653273.jpg";
import foamingImage from "@assets/WhatsApp Image 2025-06-09 at 13.07.01_2a278a20_1749473665532.jpg";
import upholsteryImage from "@assets/WhatsApp Image 2025-06-09 at 12.00.39_8ba48a52_1749473681038.jpg";
import polishingImage from "@assets/WhatsApp Image 2025-06-09 at 11.55.15_1041ad24_1749793175676.jpg";
import deliveryImage from "@assets/IMG-20250606-WA0034_1749474302060.jpg";

export default function Process() {
  const processSteps = [
    {
      id: 1,
      title: "Conceptual Designing & Planning",
      description: "Our distinguished design consultants collaborate intimately with clients to conceptualize extraordinary furniture pieces that harmoniously blend personal vision with spatial requirements. Through meticulous planning sessions, we transform abstract ideas into tangible design blueprints that capture the essence of luxury living.",
      image: designingImage,
      alt: "Professional design consultation with material samples and color palettes",
      icon: "fas fa-drafting-compass"
    },
    {
      id: 2,
      title: "Masterful Carpentry & Construction",
      description: "Our seasoned craftsmen employ time-honored woodworking techniques combined with state-of-the-art precision tools to meticulously shape and construct the foundational framework. Each joint, curve, and surface is crafted with unwavering attention to detail, ensuring structural integrity and aesthetic perfection.",
      image: carpentryImage,
      alt: "Skilled carpenter working with precision tools in workshop",
      icon: "fas fa-hammer"
    },
    {
      id: 3,
      title: "Premium Foaming & Comfort Engineering",
      description: "Utilizing only the finest quality foam materials, our specialists precisely cut, shape, and engineer comfort layers that provide optimal support and luxurious seating experience. Each foam component is carefully selected and positioned to ensure maximum durability and comfort for years of enjoyment.",
      image: foamingImage,
      alt: "Industrial foam cutting and shaping process",
      icon: "fas fa-cube"
    },
    {
      id: 4,
      title: "Exquisite Upholstery & Fabric Application",
      description: "Our master upholsterers demonstrate exceptional artistry in applying premium fabrics and materials with meticulous precision. Every stitch, seam, and fabric placement is executed with surgical accuracy, ensuring flawless finish, perfect fit, and enduring beauty that stands the test of time.",
      image: upholsteryImage,
      alt: "Professional upholstery work with premium materials",
      icon: "fas fa-cut"
    },
    {
      id: 5,
      title: "Lustrous Polishing & Surface Refinement",
      description: "The culminating surface treatment process reveals the inherent beauty of natural wood grains while providing superior protection against environmental factors. Our specialized polishing techniques create a mirror-like finish that enhances the furniture's aesthetic appeal and ensures longevity.",
      image: polishingImage,
      alt: "Furniture polishing and finishing with lustrous results",
      icon: "fas fa-gem"
    },
    {
      id: 6,
      title: "Curated Piece Delivery & Installation",
      description: "Our professionally trained delivery specialists ensure your furniture arrives in pristine condition through careful handling and transportation. We provide comprehensive installation services, positioning each piece perfectly within your space while conducting thorough quality inspections.",
      image: deliveryImage,
      alt: "Professional furniture delivery and installation service",
      icon: "fas fa-truck"
    }
  ];

  return (
    <div className="min-h-screen text-foreground">
      <Header />
      <div className="pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-section">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-6xl font-playfair font-bold mb-6 text-gradient-brown">
                Our Meticulous Craftsmanship Process
              </h1>
              <p className="text-2xl text-soft-brown leading-relaxed">
                Witness the extraordinary journey from conceptual design to finished masterpiece through our time-honored 
                six-step process that ensures every piece meets the highest standards of quality and artisanal excellence.
              </p>
            </div>
          </div>
        </section>

        {/* Process Steps */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="space-y-16">
              {processSteps.map((step, index) => (
                <Card key={step.id} className="bg-card border-champagne/40 overflow-hidden hover:shadow-2xl transition-all duration-500">
                  <CardContent className="p-0">
                    <div className={`grid lg:grid-cols-2 gap-0 items-center ${index % 2 === 1 ? 'lg:grid-cols-2' : ''}`}>
                      <div className={`relative overflow-hidden ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                        <img 
                          src={step.image} 
                          alt={step.alt} 
                          className="w-full h-96 lg:h-full object-cover transition-transform duration-300 hover:scale-105"
                        />
                        <div className="absolute top-6 left-6 w-16 h-16 bg-glow-gold rounded-full flex items-center justify-center">
                          <span className="text-white font-bold text-2xl">{step.id}</span>
                        </div>
                      </div>
                      <div className={`p-12 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                        <div className="flex items-center mb-6">
                          <div className="w-12 h-12 bg-glow-gold rounded-full flex items-center justify-center mr-4">
                            <i className={`${step.icon} text-white text-lg`}></i>
                          </div>
                          <h3 className="text-3xl font-playfair font-bold text-elegant-brown">{step.title}</h3>
                        </div>
                        <p className="text-lg text-soft-brown leading-relaxed">{step.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Process Timeline */}
        <section className="py-20 bg-section">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-playfair font-bold mb-6 text-elegant-brown">Journey to Perfection</h2>
              <p className="text-xl text-soft-brown max-w-3xl mx-auto">
                Each step in our process is carefully orchestrated to ensure the highest quality standards and customer satisfaction.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-8">
              {processSteps.map((step) => (
                <div key={step.id} className="text-center group">
                  <div className="w-20 h-20 bg-glow-gold rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <i className={`${step.icon} text-white text-2xl`}></i>
                  </div>
                  <h4 className="text-lg font-semibold text-elegant-brown mb-2">{step.title.split(' &')[0]}</h4>
                  <div className="w-8 h-1 bg-elegant-brown mx-auto"></div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
}