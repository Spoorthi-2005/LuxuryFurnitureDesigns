import { Link } from "wouter";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import heroImage from "@assets/img35_1749474302052.png";
import founderImage from "@assets/WhatsApp Image 2025-06-02 at 18.04.55_ae1d9bc2_1749473393971.jpg";
import workshopImage from "@assets/IMG-20250606-WA0034_1749474302060.jpg";

export default function Home() {
  const featuredServices = [
    {
      icon: "fas fa-couch",
      title: "Luxurious Living Rooms",
      description: "Elegant furniture pieces that transform your living space into a sophisticated sanctuary of comfort and style.",
      link: "/collections"
    },
    {
      icon: "fas fa-utensils",
      title: "Premium Kitchen Solutions",
      description: "Bespoke kitchen designs that seamlessly blend functionality with aesthetic excellence for the modern home.",
      link: "/collections"
    },
    {
      icon: "fas fa-bed",
      title: "Bedroom Collections",
      description: "Meticulously crafted bedroom furniture that creates peaceful retreats for rest and rejuvenation.",
      link: "/collections"
    },
    {
      icon: "fas fa-tools",
      title: "Custom Craftsmanship",
      description: "Witness our master artisans at work, creating extraordinary pieces through traditional techniques and modern precision.",
      link: "/craftsmanship"
    }
  ];

  return (
    <div className="min-h-screen bg-warm-cream text-foreground">
      <Header />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-luxury-pearl via-warm-cream to-light-cream">
        <div className="absolute inset-0">
          <img 
            src={heroImage} 
            alt="Luxury furniture showcase" 
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent-brown via-glass-white/50 to-transparent-brown"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="text-6xl md:text-7xl font-playfair font-bold mb-6 bg-gradient-to-r from-elegant-brown via-glow-gold to-elegant-brown bg-clip-text text-transparent animate-fade-in-up drop-shadow-lg">
            Blackhorse Furnitures
          </h1>
          <p className="text-2xl md:text-3xl text-elegant-brown mb-8 max-w-4xl mx-auto leading-relaxed backdrop-blur-sm bg-glass-white/30 rounded-2xl p-6 shadow-lg">
            Where traditional Indian craftsmanship meets contemporary elegance, creating extraordinary furniture pieces 
            that define luxury living and transform spaces into timeless sanctuaries.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link href="/collections">
              <Button className="bg-gradient-to-r from-elegant-brown to-glow-gold text-white px-12 py-6 text-lg font-bold hover:scale-105 transition-all duration-300 shadow-xl backdrop-blur-sm">
                Explore Collections <i className="fas fa-arrow-right ml-2"></i>
              </Button>
            </Link>
            <Link href="/story">
              <Button variant="outline" className="border-2 border-elegant-brown text-elegant-brown px-12 py-6 text-lg font-bold hover:bg-elegant-brown hover:text-white transition-all duration-300 shadow-xl backdrop-blur-sm bg-glass-white/50">
                Our Story <i className="fas fa-book-open ml-2"></i>
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="py-20 bg-light-cream/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-playfair font-bold mb-6 text-elegant-brown">Excellence in Every Detail</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Discover our comprehensive range of premium furniture solutions, each crafted with meticulous attention 
              to detail and an unwavering commitment to quality that defines luxury living.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredServices.map((service, index) => (
              <Card key={index} className="backdrop-blur-lg bg-glass-white border-glow-gold/30 hover-lift transition-all duration-500 group shadow-2xl transform hover:-translate-y-2">
                <CardContent className="p-8 text-center">
                  <div className="w-24 h-24 bg-gradient-to-br from-elegant-brown via-glow-gold to-champagne rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-2xl">
                    <div className="w-16 h-16 bg-cover bg-center rounded-xl shadow-inner" style={{
                      backgroundImage: index === 0 ? "url('https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=200')" :
                                      index === 1 ? "url('https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=200')" :
                                      index === 2 ? "url('https://images.unsplash.com/photo-1631049035182-249067d7618e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=200')" :
                                      "url('https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=200')"
                    }}>
                      <div className="w-full h-full bg-elegant-brown/20 rounded-xl flex items-center justify-center">
                        <i className={`${service.icon} text-white text-xl drop-shadow-lg`}></i>
                      </div>
                    </div>
                  </div>
                  <h3 className="text-xl font-playfair font-bold text-elegant-brown mb-4">{service.title}</h3>
                  <p className="text-soft-brown mb-6 leading-relaxed">{service.description}</p>
                  <Link href={service.link}>
                    <Button variant="ghost" className="text-elegant-brown border border-elegant-brown hover:bg-elegant-brown hover:text-white transition-all duration-300 shadow-lg backdrop-blur-sm">
                      Learn More
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-20 bg-gradient-to-br from-glass-white via-luxury-pearl to-light-cream">
        <div className="container mx-auto px-4">
          <Card className="backdrop-blur-lg bg-glass-white border-glow-gold/20 overflow-hidden shadow-2xl">
            <CardContent className="p-0">
              <div className="grid lg:grid-cols-2 gap-0 items-center">
                <div className="p-12">
                  <h2 className="text-4xl font-playfair font-bold text-elegant-brown mb-6">Crafting Legacy Since Inception</h2>
                  <p className="text-lg text-soft-brown mb-6 leading-relaxed">
                    Founded by visionary entrepreneurs Amar Chauhan and Diksha Shringi, Blackhorse Furnitures represents 
                    the perfect synthesis of traditional Indian woodworking heritage and contemporary design innovation. 
                    With over 15 years of specialized experience in the Indian furniture industry, our founders have 
                    established a reputation for creating exceptional pieces that transcend ordinary expectations.
                  </p>
                  <p className="text-lg text-soft-brown mb-8 leading-relaxed">
                    Every piece we create tells a story of passion, precision, and unwavering commitment to excellence, 
                    ensuring that our furniture becomes a cherished part of your home for generations to come.
                  </p>
                  <Link href="/story">
                    <Button className="bg-gradient-to-r from-elegant-brown to-glow-gold text-white px-8 py-4 text-lg font-bold hover:scale-105 transition-all duration-300 shadow-xl">
                      Discover Our Journey
                    </Button>
                  </Link>
                </div>
                <div className="relative">
                  <img 
                    src={founderImage} 
                    alt="Blackhorse Furnitures founders and team" 
                    className="w-full h-full object-cover min-h-[500px] rounded-r-lg"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-transparent-brown/30 to-transparent"></div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Process Preview */}
      <section className="py-20 bg-luxury-pearl/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-playfair font-bold mb-6 text-elegant-brown">Our Meticulous 6-Step Process</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From conceptual design to final delivery, every piece undergoes our time-honored process that ensures 
              exceptional quality and customer satisfaction at every stage.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { step: 1, title: "Design Consultation", icon: "fas fa-drafting-compass" },
              { step: 2, title: "Precision Carpentry", icon: "fas fa-hammer" },
              { step: 3, title: "Premium Foaming", icon: "fas fa-cube" },
              { step: 4, title: "Expert Upholstery", icon: "fas fa-cut" },
              { step: 5, title: "Lustrous Polishing", icon: "fas fa-gem" },
              { step: 6, title: "Curated Piece", icon: "fas fa-truck" }
            ].map((process) => (
              <Card key={process.step} className="bg-white border-silver/30 hover-lift transition-all text-center shadow-xl">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-elegant-brown rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <span className="text-white font-bold text-xl">{process.step}</span>
                  </div>
                  <div className="w-12 h-12 bg-gradient-to-r from-platinum to-silver rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
                    <i className={`${process.icon} text-foreground text-lg`}></i>
                  </div>
                  <h3 className="text-lg font-playfair font-bold text-elegant-brown">{process.title}</h3>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/process">
              <Button className="bg-elegant-brown text-white px-12 py-4 text-lg font-bold hover:bg-primary transition-colors shadow-lg">
                View Complete Process
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Workshop Preview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <Card className="bg-white border-silver/20 overflow-hidden shadow-2xl">
            <CardContent className="p-0">
              <div className="grid lg:grid-cols-2 gap-0 items-center">
                <div className="relative lg:order-2">
                  <img 
                    src={workshopImage} 
                    alt="Blackhorse Furnitures workshop with skilled craftsmen" 
                    className="w-full h-full object-cover min-h-[500px]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-elegant-brown/10 to-transparent"></div>
                </div>
                <div className="p-12 lg:order-1">
                  <h2 className="text-4xl font-playfair font-bold text-elegant-brown mb-6">Craftsmanship in Action</h2>
                  <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                    Step into our workshop where master craftsmen bring designs to life through skilled hands and 
                    time-honored techniques. Our state-of-the-art facility combines traditional woodworking methods 
                    with modern precision tools to create furniture pieces that represent the highest standards of quality.
                  </p>
                  <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                    Watch our artisans transform premium materials into extraordinary furniture through our exclusive 
                    video documentation that showcases the artistry and dedication behind every piece.
                  </p>
                  <Link href="/craftsmanship">
                    <Button className="bg-elegant-brown text-white px-8 py-4 text-lg font-bold hover:bg-primary transition-colors shadow-lg">
                      Watch Craftsmanship Video
                    </Button>
                  </Link>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-champagne/30">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-5xl font-playfair font-bold mb-6 text-elegant-brown">Ready to Transform Your Space?</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let our expert designers create bespoke furniture solutions that perfectly complement your lifestyle 
            and aesthetic vision. Experience the Blackhorse difference today.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link href="/contact">
              <Button className="bg-elegant-brown text-white px-12 py-4 text-lg font-bold hover:bg-primary transition-colors shadow-lg">
                Schedule Consultation
              </Button>
            </Link>
            <Link href="/collections">
              <Button variant="outline" className="border-2 border-elegant-brown text-elegant-brown px-12 py-4 text-lg font-bold hover:bg-elegant-brown hover:text-white transition-colors shadow-lg">
                Browse Collections
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
