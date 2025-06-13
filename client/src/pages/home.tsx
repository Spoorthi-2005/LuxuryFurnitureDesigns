import { Link } from "wouter";
import Header from "@/components/header";
import Footer from "@/components/footer";
import FloatingContact from "@/components/floating-contact";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import AnimatedCounter from "@/components/animated-counter";
import TestimonialsCarousel from "@/components/testimonials-carousel";
import LuxuryFeatures from "@/components/luxury-features";
import AIChatAssistant from "@/components/ai-chat-assistant";
import heroImage from "@assets/img35_1749474302052.png";
import founderImage from "@assets/WhatsApp Image 2025-06-02 at 18.04.55_ae1d9bc2_1749473393971.jpg";
import workshopImage from "@assets/IMG-20250606-WA0034_1749474302060.jpg";
import luxuryBedroom from "@assets/WhatsApp Image 2025-06-09 at 11.14.28_edf5b472_1749800699879.jpg";
import craftsmanshipImage from "@assets/IMG-20250604-WA0023_1749793593319.jpg";

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
    <div className="min-h-screen text-foreground">
      <Header />
      
      {/* Enhanced Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Sophisticated Dark-to-Light Gradient Background */}
        <div className="absolute inset-0">
          {/* Primary Gradient Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700"></div>
          
          {/* Smooth Transition to Light */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-600/20 to-slate-100/90"></div>
          
          {/* Decorative Geometric Elements */}
          <div className="absolute top-16 left-16 w-32 h-32 bg-gradient-to-br from-amber-400/30 to-amber-600/20 rounded-full blur-2xl animate-pulse"></div>
          <div className="absolute top-1/3 right-20 w-24 h-24 bg-gradient-to-br from-slate-400/30 to-slate-600/20 rounded-full blur-lg floating"></div>
          <div className="absolute bottom-1/3 left-1/4 w-40 h-40 bg-gradient-to-br from-amber-300/20 to-amber-500/15 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-16 w-28 h-28 bg-gradient-to-br from-amber-500/25 to-amber-700/15 rounded-full blur-xl floating"></div>
          
          {/* Luxury Texture Pattern */}
          <div className="absolute inset-0 opacity-10" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='120' height='120' viewBox='0 0 120 120' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23D4AF37' fill-opacity='0.15'%3E%3Cpath d='M60 60l30-30v60l-30-30zm-30 30l30-30h-60l30 30z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '120px 120px'
          }}></div>
          
          {/* Elegant Furniture Image Overlay */}
          <img 
            src={heroImage} 
            alt="Luxury furniture showcase" 
            className="absolute inset-0 w-full h-full object-cover opacity-12 mix-blend-soft-light"
          />
          
          {/* Multi-layered Gradient System */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-100/70 via-slate-200/30 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-amber-100/15 via-transparent to-slate-200/25"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 via-slate-700/40 to-slate-100/60"></div>
        </div>
        
        {/* Floating Decorative Elements */}
        <div className="absolute top-20 left-1/4 text-amber-400/70 floating" style={{animationDelay: '1s'}}>
          <i className="fas fa-chess-knight text-4xl drop-shadow-2xl filter drop-shadow-[0_0_10px_rgba(245,158,11,0.5)]"></i>
        </div>
        <div className="absolute top-1/2 right-1/4 text-slate-300/60 floating" style={{animationDelay: '2s'}}>
          <i className="fas fa-crown text-3xl drop-shadow-2xl filter drop-shadow-[0_0_8px_rgba(203,213,225,0.7)]"></i>
        </div>
        <div className="absolute bottom-1/3 left-1/6 text-amber-500/80 floating" style={{animationDelay: '0.5s'}}>
          <i className="fas fa-gem text-3xl drop-shadow-2xl filter drop-shadow-[0_0_12px_rgba(245,158,11,0.6)]"></i>
        </div>
        
        <div className="relative z-10 container mx-auto px-4 text-center">
          {/* Enhanced Title with Shimmer Effect */}
          <h1 className="text-6xl md:text-7xl font-playfair font-bold mb-6 animated-gradient drop-shadow-2xl transform hover:scale-105 transition-transform duration-500">
            Blackhorse Furnitures
          </h1>
          
          {/* Enhanced Description with Luxury Styling */}
          <div className="max-w-4xl mx-auto mb-8">
            <div className="backdrop-blur-lg bg-white/15 rounded-3xl p-8 shadow-2xl border border-amber-400/40 luxury-shine">
              <p className="text-2xl md:text-3xl text-slate-100 leading-relaxed font-medium drop-shadow-xl">
                Where traditional Indian craftsmanship meets contemporary elegance, creating extraordinary furniture pieces 
                that define luxury living and transform spaces into timeless sanctuaries.
              </p>
            </div>
          </div>
          
          {/* Enhanced Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link href="/collections">
              <Button className="bg-gradient-to-r from-elegant-brown to-glow-gold text-white px-12 py-6 text-lg font-bold hover:from-glow-gold hover:to-elegant-brown transition-all duration-500 shadow-2xl hover:shadow-glow-gold/50 transform hover:scale-105 luxury-glow">
                Explore Collections <i className="fas fa-arrow-right ml-2"></i>
              </Button>
            </Link>
            <Link href="/story">
              <Button variant="outline" className="border-2 border-amber-400 text-amber-400 px-12 py-6 text-lg font-bold hover:bg-amber-400 hover:text-slate-900 transition-all duration-500 shadow-2xl bg-slate-800/30 backdrop-blur-sm hover:shadow-amber-400/50 transform hover:scale-105">
                Our Story <i className="fas fa-book-open ml-2"></i>
              </Button>
            </Link>
          </div>
          
          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-amber-400/80 animate-bounce">
            <i className="fas fa-chevron-down text-2xl drop-shadow-2xl filter drop-shadow-[0_0_8px_rgba(245,158,11,0.6)]"></i>
          </div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="py-20 bg-section">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-playfair font-bold mb-6 text-elegant-brown">Excellence in Every Detail</h2>
            <p className="text-xl text-soft-brown max-w-3xl mx-auto">
              Discover our comprehensive range of premium furniture solutions, each crafted with meticulous attention 
              to detail and an unwavering commitment to quality that defines luxury living.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredServices.map((service, index) => (
              <Card key={index} className="bg-card border-champagne/40 hover-lift transition-all duration-500 group shadow-xl">
                <CardContent className="p-8 text-center">
                  <div className="w-24 h-24 bg-elegant-brown rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-all duration-300 shadow-xl">
                    <div className="w-16 h-16 bg-cover bg-center rounded-xl shadow-inner" style={{
                      backgroundImage: index === 0 ? "url('https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=200')" :
                                      index === 1 ? "url('https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=200')" :
                                      index === 2 ? "url('https://images.unsplash.com/photo-1631049035182-249067d7618e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=200')" :
                                      "url('https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=200')"
                    }}>
                      <div className="w-full h-full bg-elegant-brown/30 rounded-xl flex items-center justify-center">
                        <i className={`${service.icon} text-white text-xl drop-shadow-lg`}></i>
                      </div>
                    </div>
                  </div>
                  <h3 className="text-xl font-playfair font-bold text-elegant-brown mb-4">{service.title}</h3>
                  <p className="text-soft-brown mb-6 leading-relaxed">{service.description}</p>
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
          <Card className="bg-card border-champagne/40 overflow-hidden shadow-xl">
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
                    <Button className="bg-elegant-brown text-white px-8 py-4 text-lg font-bold hover:bg-soft-brown transition-all duration-300 shadow-lg">
                      Discover Our Journey
                    </Button>
                  </Link>
                </div>
                <div className="relative">
                  <img 
                    src={founderImage} 
                    alt="Blackhorse Furnitures founders and team" 
                    className="w-full h-full object-cover min-h-[500px] rounded-r-lg image-luxury image-glossy"
                  />
                  <div className="absolute inset-0 bg-transparent-brown"></div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Process Preview */}
      <section className="py-20 bg-section">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-playfair font-bold mb-6 text-elegant-brown">Our Meticulous 6-Step Process</h2>
            <p className="text-xl text-soft-brown max-w-3xl mx-auto">
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
              <Card key={process.step} className="bg-card border-champagne/40 hover-lift transition-all text-center shadow-xl">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-elegant-brown rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <span className="text-white font-bold text-xl">{process.step}</span>
                  </div>
                  <div className="w-12 h-12 bg-glow-gold rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
                    <i className={`${process.icon} text-elegant-brown text-lg`}></i>
                  </div>
                  <h3 className="text-lg font-playfair font-bold text-elegant-brown">{process.title}</h3>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/process">
              <Button className="bg-elegant-brown text-white px-12 py-4 text-lg font-bold hover:bg-soft-brown transition-all duration-300 shadow-lg">
                View Complete Process
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Animated Statistics */}
      <section className="py-20 bg-gradient-to-r from-glow-gold/10 to-transparent">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-playfair font-bold mb-6 text-elegant-brown">Our Legacy in Numbers</h2>
            <p className="text-xl text-soft-brown max-w-3xl mx-auto">
              Decades of excellence reflected in satisfied customers, completed projects, and recognition in the luxury furniture industry.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="premium-card hover-3d transition-all shadow-xl luxury-shine">
              <CardContent className="p-8 text-center">
                <div className="w-20 h-20 bg-glow-gold rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg luxury-glow">
                  <i className="fas fa-users text-white text-2xl"></i>
                </div>
                <div className="text-4xl font-playfair font-bold text-elegant-brown mb-2 text-shimmer">
                  <AnimatedCounter end={200} suffix="+" />
                </div>
                <p className="text-soft-brown font-medium">Happy Customers</p>
              </CardContent>
            </Card>

            <Card className="premium-card hover-3d transition-all shadow-xl luxury-shine">
              <CardContent className="p-8 text-center">
                <div className="w-20 h-20 bg-glow-gold rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg luxury-glow">
                  <i className="fas fa-project-diagram text-white text-2xl"></i>
                </div>
                <div className="text-4xl font-playfair font-bold text-elegant-brown mb-2 text-shimmer">
                  <AnimatedCounter end={700} suffix="+" />
                </div>
                <p className="text-soft-brown font-medium">Projects Completed</p>
              </CardContent>
            </Card>

            <Card className="premium-card hover-3d transition-all shadow-xl luxury-shine">
              <CardContent className="p-8 text-center">
                <div className="w-20 h-20 bg-glow-gold rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg luxury-glow">
                  <i className="fas fa-calendar text-white text-2xl"></i>
                </div>
                <div className="text-4xl font-playfair font-bold text-elegant-brown mb-2 text-shimmer">
                  <AnimatedCounter end={15} suffix="+" />
                </div>
                <p className="text-soft-brown font-medium">Years of Excellence</p>
              </CardContent>
            </Card>

            <Card className="premium-card hover-3d transition-all shadow-xl luxury-shine">
              <CardContent className="p-8 text-center">
                <div className="w-20 h-20 bg-glow-gold rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg luxury-glow">
                  <i className="fas fa-award text-white text-2xl"></i>
                </div>
                <div className="text-4xl font-playfair font-bold text-elegant-brown mb-2 text-shimmer">
                  <AnimatedCounter end={98} suffix="%" />
                </div>
                <p className="text-soft-brown font-medium">Client Satisfaction</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-section">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-playfair font-bold mb-6 text-elegant-brown">What Our Clients Say</h2>
            <p className="text-xl text-soft-brown max-w-3xl mx-auto">
              Discover why discerning customers choose Blackhorse Furnitures for their most important spaces.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <TestimonialsCarousel />
          </div>
        </div>
      </section>

      {/* Luxury Features Showcase */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-playfair font-bold mb-6 text-elegant-brown">Why Choose Blackhorse</h2>
            <p className="text-xl text-soft-brown max-w-3xl mx-auto">
              Experience the difference that sets us apart in the luxury furniture industry.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="premium-card hover-3d transition-all shadow-xl group luxury-shine">
              <CardContent className="p-8 text-center">
                <div className="w-20 h-20 bg-glow-gold rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl luxury-glow">
                  <i className="fas fa-gem text-white text-2xl"></i>
                </div>
                <h3 className="text-xl font-playfair font-bold text-elegant-brown mb-4">Premium Materials</h3>
                <p className="text-soft-brown leading-relaxed">Only the finest woods, metals, and fabrics sourced from trusted suppliers worldwide for exceptional quality and durability.</p>
              </CardContent>
            </Card>

            <Card className="premium-card hover-3d transition-all shadow-xl group luxury-shine">
              <CardContent className="p-8 text-center">
                <div className="w-20 h-20 bg-glow-gold rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl luxury-glow">
                  <i className="fas fa-tools text-white text-2xl"></i>
                </div>
                <h3 className="text-xl font-playfair font-bold text-elegant-brown mb-4">Master Craftsmen</h3>
                <p className="text-soft-brown leading-relaxed">Skilled artisans with decades of experience creating furniture masterpieces that combine traditional techniques with modern innovation.</p>
              </CardContent>
            </Card>

            <Card className="premium-card hover-3d transition-all shadow-xl group luxury-shine">
              <CardContent className="p-8 text-center">
                <div className="w-20 h-20 bg-glow-gold rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl luxury-glow">
                  <i className="fas fa-palette text-white text-2xl"></i>
                </div>
                <h3 className="text-xl font-playfair font-bold text-elegant-brown mb-4">Custom Design</h3>
                <p className="text-soft-brown leading-relaxed">Bespoke solutions tailored to your unique vision and space requirements with personalized design consultations.</p>
              </CardContent>
            </Card>

            <Card className="premium-card hover-3d transition-all shadow-xl group luxury-shine">
              <CardContent className="p-8 text-center">
                <div className="w-20 h-20 bg-glow-gold rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl luxury-glow">
                  <i className="fas fa-shield-alt text-white text-2xl"></i>
                </div>
                <h3 className="text-xl font-playfair font-bold text-elegant-brown mb-4">Lifetime Warranty</h3>
                <p className="text-soft-brown leading-relaxed">Comprehensive warranty coverage ensuring your furniture investment is protected for generations with quality guarantees.</p>
              </CardContent>
            </Card>

            <Card className="premium-card hover-3d transition-all shadow-xl group luxury-shine">
              <CardContent className="p-8 text-center">
                <div className="w-20 h-20 bg-glow-gold rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl luxury-glow">
                  <i className="fas fa-shipping-fast text-white text-2xl"></i>
                </div>
                <h3 className="text-xl font-playfair font-bold text-elegant-brown mb-4">White Glove Delivery</h3>
                <p className="text-soft-brown leading-relaxed">Professional installation and setup service with care, precision, and complete room styling for perfect presentation.</p>
              </CardContent>
            </Card>

            <Card className="premium-card hover-3d transition-all shadow-xl group luxury-shine">
              <CardContent className="p-8 text-center">
                <div className="w-20 h-20 bg-glow-gold rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl luxury-glow">
                  <i className="fas fa-headset text-white text-2xl"></i>
                </div>
                <h3 className="text-xl font-playfair font-bold text-elegant-brown mb-4">24/7 Support</h3>
                <p className="text-soft-brown leading-relaxed">Dedicated customer service team available round the clock for assistance with all your furniture needs and queries.</p>
              </CardContent>
            </Card>
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
                    src={craftsmanshipImage} 
                    alt="Blackhorse Furnitures workshop with skilled craftsmen" 
                    className="w-full h-full object-cover min-h-[500px] image-luxury image-glossy"
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

      {/* Luxury Bedroom Showcase */}
      <section className="py-20 bg-section">
        <div className="container mx-auto px-4">
          <Card className="premium-card hover-3d overflow-hidden shadow-2xl">
            <CardContent className="p-0">
              <div className="grid lg:grid-cols-2 gap-0 items-center">
                <div className="relative">
                  <img 
                    src={luxuryBedroom} 
                    alt="Luxury bedroom furniture delivery and installation" 
                    className="w-full h-full object-cover min-h-[500px] image-luxury image-glossy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent to-elegant-brown/20"></div>
                </div>
                <div className="p-12">
                  <h2 className="text-4xl font-playfair font-bold text-elegant-brown mb-6 animated-gradient">Curated Piece Delivery & Installation</h2>
                  <p className="text-lg text-soft-brown mb-6 leading-relaxed floating">
                    Experience seamless delivery and professional installation of your custom furniture pieces. 
                    Our specialized team ensures every detail is perfect, from placement to final adjustments, 
                    creating the luxurious ambiance you've envisioned.
                  </p>
                  <div className="space-y-4 mb-8">
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-glow-gold rounded-full luxury-glow"></div>
                      <span className="text-soft-brown">White-glove delivery service</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-glow-gold rounded-full luxury-glow"></div>
                      <span className="text-soft-brown">Professional assembly and installation</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-glow-gold rounded-full luxury-glow"></div>
                      <span className="text-soft-brown">Room styling and arrangement</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-glow-gold rounded-full luxury-glow"></div>
                      <span className="text-soft-brown">Final quality inspection</span>
                    </div>
                  </div>
                  <Button className="glossy-btn px-8 py-4 text-lg font-bold text-white">
                    Schedule Delivery
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Luxury Features Component */}
      <LuxuryFeatures />

      {/* Call to Action */}
      <section className="py-20 bg-champagne/30">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-5xl font-playfair font-bold mb-6 text-elegant-brown animated-gradient">Ready to Transform Your Space?</h2>
          <p className="text-xl text-soft-brown mb-8 max-w-2xl mx-auto floating">
            Let our expert designers create bespoke furniture solutions that perfectly complement your lifestyle 
            and aesthetic vision. Experience the Blackhorse difference today.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link href="/contact">
              <Button className="glossy-btn px-12 py-4 text-lg font-bold text-white shadow-xl">
                Schedule Consultation
              </Button>
            </Link>
            <Link href="/collections">
              <Button variant="outline" className="glass-morphism border-2 border-elegant-brown text-elegant-brown px-12 py-4 text-lg font-bold hover:bg-elegant-brown hover:text-white transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 transform">
                Browse Collections
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <FloatingContact />
      <AIChatAssistant />
      <Footer />
    </div>
  );
}
