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
    <div className="min-h-screen bg-warm-beige text-foreground">
      <Header />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center">
        <div className="absolute inset-0">
          <img 
            src={heroImage} 
            alt="Luxury furniture showcase" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/80"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="text-6xl md:text-7xl font-playfair font-bold mb-6 text-gradient-brown animate-fade-in-up">
            Blackhorse Furnitures
          </h1>
          <p className="text-2xl md:text-3xl text-muted-foreground mb-8 max-w-4xl mx-auto leading-relaxed">
            Where traditional Indian craftsmanship meets contemporary elegance, creating extraordinary furniture pieces 
            that define luxury living and transform spaces into timeless sanctuaries.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link href="/collections">
              <Button className="bg-elegant-brown text-white px-12 py-6 text-lg font-bold hover:bg-primary transition-all duration-300 hover:scale-105 shadow-lg">
                Explore Collections <i className="fas fa-arrow-right ml-2"></i>
              </Button>
            </Link>
            <Link href="/story">
              <Button variant="outline" className="border-2 border-elegant-brown text-elegant-brown px-12 py-6 text-lg font-bold hover:bg-elegant-brown hover:text-white transition-all duration-300 shadow-lg">
                Our Story <i className="fas fa-book-open ml-2"></i>
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="py-20 bg-light-gray/30">
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
              <Card key={index} className="bg-white border-silver/30 hover-lift transition-all duration-500 group shadow-xl">
                <CardContent className="p-8 text-center">
                  <div className="w-20 h-20 bg-gradient-to-r from-elegant-brown to-primary rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <i className={`${service.icon} text-white text-2xl`}></i>
                  </div>
                  <h3 className="text-xl font-playfair font-bold text-elegant-brown mb-4">{service.title}</h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">{service.description}</p>
                  <Link href={service.link}>
                    <Button variant="ghost" className="text-elegant-brown border border-elegant-brown hover:bg-elegant-brown hover:text-white transition-all duration-300 shadow-md">
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
      <section className="py-20">
        <div className="container mx-auto px-4">
          <Card className="bg-white border-silver/20 overflow-hidden shadow-2xl">
            <CardContent className="p-0">
              <div className="grid lg:grid-cols-2 gap-0 items-center">
                <div className="p-12">
                  <h2 className="text-4xl font-playfair font-bold text-elegant-brown mb-6">Crafting Legacy Since Inception</h2>
                  <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                    Founded by visionary entrepreneurs Amar Chauhan and Diksha Shringi, Blackhorse Furnitures represents 
                    the perfect synthesis of traditional Indian woodworking heritage and contemporary design innovation. 
                    With over 15 years of specialized experience in the Indian furniture industry, our founders have 
                    established a reputation for creating exceptional pieces that transcend ordinary expectations.
                  </p>
                  <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                    Every piece we create tells a story of passion, precision, and unwavering commitment to excellence, 
                    ensuring that our furniture becomes a cherished part of your home for generations to come.
                  </p>
                  <Link href="/our-story">
                    <Button className="bg-luxury-gold text-foreground px-8 py-4 text-lg font-bold hover:bg-warm-gold transition-colors shadow-lg">
                      Discover Our Journey
                    </Button>
                  </Link>
                </div>
                <div className="relative">
                  <img 
                    src={founderImage} 
                    alt="Blackhorse Furnitures founders and team" 
                    className="w-full h-full object-cover min-h-[500px]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-luxury-gold/10 to-transparent"></div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Process Preview */}
      <section className="py-20 bg-light-gray/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-playfair font-bold mb-6 text-luxury-gold">Our Meticulous 6-Step Process</h2>
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
                  <div className="w-16 h-16 bg-luxury-gold rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <span className="text-foreground font-bold text-xl">{process.step}</span>
                  </div>
                  <div className="w-12 h-12 bg-gradient-to-r from-platinum to-silver rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
                    <i className={`${process.icon} text-foreground text-lg`}></i>
                  </div>
                  <h3 className="text-lg font-playfair font-bold text-luxury-gold">{process.title}</h3>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/process">
              <Button className="bg-luxury-gold text-foreground px-12 py-4 text-lg font-bold hover:bg-warm-gold transition-colors shadow-lg">
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
                  <div className="absolute inset-0 bg-gradient-to-t from-luxury-gold/10 to-transparent"></div>
                </div>
                <div className="p-12 lg:order-1">
                  <h2 className="text-4xl font-playfair font-bold text-luxury-gold mb-6">Craftsmanship in Action</h2>
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
                    <Button className="bg-luxury-gold text-foreground px-8 py-4 text-lg font-bold hover:bg-warm-gold transition-colors shadow-lg">
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
      <section className="py-20 bg-light-gray/30">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-5xl font-playfair font-bold mb-6 text-luxury-gold">Ready to Transform Your Space?</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let our expert designers create bespoke furniture solutions that perfectly complement your lifestyle 
            and aesthetic vision. Experience the Blackhorse difference today.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link href="/contact">
              <Button className="bg-luxury-gold text-foreground px-12 py-4 text-lg font-bold hover:bg-warm-gold transition-colors shadow-lg">
                Schedule Consultation
              </Button>
            </Link>
            <Link href="/collections">
              <Button variant="outline" className="border-2 border-luxury-gold text-luxury-gold px-12 py-4 text-lg font-bold hover:bg-luxury-gold hover:text-foreground transition-colors shadow-lg">
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
