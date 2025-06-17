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
import { LuxuryParticles, LuxuryCursorTrail, LuxuryCard, ShimmerText, LuxuryButton } from "@/components/luxury-effects";
import { OpulentFloatingMenu, LuxuryStatusBar, AchievementBadges, LuxuryImageViewer } from "@/components/opulent-features";
import { PremiumParallax, LuxuryTilt, GlassMorphCard, LuxuryReveal } from "@/components/premium-interactions";
import heroImage from "@assets/img35_1749474302052.png";
import founderImage from "@assets/WhatsApp Image 2025-06-02 at 18.04.55_ae1d9bc2_1749473393971.jpg";
import workshopImage from "@assets/IMG-20250606-WA0034_1749474302060.jpg";
import luxuryBedroom from "@assets/IMG-20250613-WA0074_1750143716268.jpg";
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
    <div className="min-h-screen bg-black text-white">
      {/* Luxury Effects */}
      <LuxuryParticles />
      <LuxuryCursorTrail />
      <LuxuryStatusBar />
      <OpulentFloatingMenu />
      
      <Header />
      
      {/* Spectacular Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Dynamic Background System */}
        <div className="absolute inset-0">
          {/* Base Black Canvas */}
          <div className="absolute inset-0 bg-black"></div>
          
          {/* Cinematic Furniture Showcase */}
          <div className="absolute inset-0">
            <img 
              src={heroImage} 
              alt="Luxury furniture showcase" 
              className="w-full h-full object-cover opacity-15 mix-blend-overlay"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/50"></div>
          </div>
          
          {/* Premium Light Orchestra */}
          <div className="absolute top-1/4 left-1/5 w-96 h-96 bg-gradient-radial from-gold/10 via-gold/5 to-transparent rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/5 w-80 h-80 bg-gradient-radial from-white/8 via-white/3 to-transparent rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
          <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-gradient-radial from-amber-500/8 via-amber-300/4 to-transparent rounded-full blur-2xl animate-pulse" style={{animationDelay: '4s'}}></div>
          
          {/* Geometric Elegance Pattern */}
          <div className="absolute inset-0 opacity-[0.02]" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='200' height='200' viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' stroke='%23D4AF37' stroke-width='0.5'%3E%3Cpath d='M0 100h200M100 0v200M50 50l100 100M150 50l-100 100'/%3E%3Ccircle cx='100' cy='100' r='80'/%3E%3Ccircle cx='100' cy='100' r='40'/%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '200px 200px'
          }}></div>
        </div>
        
        {/* Luxury Floating Ornaments */}
        <div className="absolute top-16 left-16 text-gold/40 floating" style={{animationDelay: '1s'}}>
          <i className="fas fa-crown text-5xl drop-shadow-2xl filter drop-shadow-[0_0_15px_rgba(212,175,55,0.6)]"></i>
        </div>
        <div className="absolute top-20 right-20 text-white/30 floating" style={{animationDelay: '3s'}}>
          <i className="fas fa-gem text-4xl drop-shadow-2xl filter drop-shadow-[0_0_12px_rgba(255,255,255,0.4)]"></i>
        </div>
        <div className="absolute bottom-20 left-20 text-gold/50 floating" style={{animationDelay: '0.5s'}}>
          <i className="fas fa-chess-rook text-4xl drop-shadow-2xl filter drop-shadow-[0_0_10px_rgba(212,175,55,0.5)]"></i>
        </div>
        <div className="absolute bottom-16 right-16 text-amber-400/40 floating" style={{animationDelay: '2.5s'}}>
          <i className="fas fa-star text-3xl drop-shadow-2xl filter drop-shadow-[0_0_8px_rgba(245,158,11,0.6)]"></i>
        </div>
        
        <div className="relative z-10 container mx-auto px-4 text-center">
          {/* Magnificent Brand Title */}
          <div className="mb-8">
            <h1 className="text-7xl md:text-8xl lg:text-9xl font-playfair font-bold mb-4 tracking-wider">
              <span className="bg-gradient-to-r from-gold via-amber-300 to-gold bg-clip-text text-transparent drop-shadow-2xl animate-pulse">
                Blackhorse
              </span>
            </h1>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-playfair font-medium text-white/90 tracking-widest drop-shadow-xl">
              F U R N I T U R E S
            </h2>
            <div className="mt-4 w-40 h-1 bg-gradient-to-r from-transparent via-gold to-transparent mx-auto"></div>
          </div>
          
          {/* Captivating Description */}
          <div className="max-w-5xl mx-auto mb-12">
            <div className="relative group">
              {/* Glowing Frame Effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-gold/20 via-white/10 to-gold/20 rounded-3xl blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              
              {/* Content Container */}
              <div className="relative backdrop-blur-xl bg-black/40 rounded-3xl p-10 md:p-12 shadow-2xl border border-white/20">
                <p className="text-2xl md:text-3xl lg:text-4xl text-white leading-relaxed font-light tracking-wide">
                  Where traditional Indian craftsmanship meets
                  <span className="block mt-2 font-medium bg-gradient-to-r from-amber-200 via-white to-amber-200 bg-clip-text text-transparent">
                    contemporary elegance
                  </span>
                </p>
                <div className="mt-6 text-lg md:text-xl text-gray-300 font-light">
                  Creating extraordinary furniture pieces that define luxury living
                </div>
              </div>
            </div>
          </div>
          
          {/* Premium Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-8 justify-center items-center mb-16">
            <Link href="/collections">
              <Button className="group relative bg-gradient-to-r from-gold to-amber-400 text-black px-14 py-6 text-xl font-bold rounded-full shadow-2xl hover:shadow-gold/50 transform hover:scale-105 transition-all duration-500 overflow-hidden">
                <span className="absolute inset-0 bg-gradient-to-r from-amber-300 to-gold opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
                <span className="relative flex items-center">
                  Explore Collections 
                  <i className="fas fa-arrow-right ml-3 group-hover:translate-x-1 transition-transform duration-300"></i>
                </span>
              </Button>
            </Link>
            
            <Link href="/story">
              <Button variant="outline" className="group border-2 border-white/50 text-white px-14 py-6 text-xl font-bold rounded-full hover:bg-white hover:text-black transition-all duration-500 shadow-2xl backdrop-blur-sm hover:shadow-white/30 transform hover:scale-105">
                <span className="flex items-center">
                  Our Story 
                  <i className="fas fa-book-open ml-3 group-hover:rotate-12 transition-transform duration-300"></i>
                </span>
              </Button>
            </Link>
          </div>
          
          {/* Trust Indicators */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-white/70">
            <div className="flex items-center space-x-2">
              <i className="fas fa-award text-gold text-lg"></i>
              <span className="text-sm font-medium">20+ Years Excellence</span>
            </div>
            <div className="hidden sm:block w-px h-6 bg-white/30"></div>
            <div className="flex items-center space-x-2">
              <i className="fas fa-users text-gold text-lg"></i>
              <span className="text-sm font-medium">200+ Happy Clients</span>
            </div>
            <div className="hidden sm:block w-px h-6 bg-white/30"></div>
            <div className="flex items-center space-x-2">
              <i className="fas fa-shield-alt text-gold text-lg"></i>
              <span className="text-sm font-medium">3 Years Warranty</span>
            </div>
          </div>
          
          {/* Elegant Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center">
            <div className="animate-bounce">
              <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
                <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
              </div>
              <p className="text-white/50 text-xs mt-2 tracking-widest">SCROLL</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="py-20 bg-section">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-playfair font-bold mb-6 text-gradient-brown">Excellence in Every Detail</h2>
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
                  <Link href="/our-story">
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
            <h2 className="text-4xl font-playfair font-bold mb-6 text-gradient-brown">Our Meticulous 6-Step Process</h2>
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
            <h2 className="text-4xl font-playfair font-bold mb-6 text-gradient-brown">Our Legacy in Numbers</h2>
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
            <h2 className="text-4xl font-playfair font-bold mb-6 text-gradient-brown">What Our Clients Say</h2>
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
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-playfair font-bold mb-6 text-white">Why Choose Blackhorse</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience the difference that sets us apart in the luxury furniture industry.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-slate-800 border-gold/30 hover:border-gold/50 transition-all shadow-xl group">
              <CardContent className="p-8 text-center">
                <div className="w-20 h-20 bg-gold rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl">
                  <i className="fas fa-gem text-slate-900 text-2xl"></i>
                </div>
                <h3 className="text-xl font-playfair font-bold text-gold mb-4">Premium Materials</h3>
                <p className="text-white leading-relaxed">Only the finest woods, metals, and fabrics sourced from trusted suppliers worldwide for exceptional quality and durability.</p>
              </CardContent>
            </Card>

            <Card className="bg-slate-800 border-gold/30 hover:border-gold/50 transition-all shadow-xl group">
              <CardContent className="p-8 text-center">
                <div className="w-20 h-20 bg-gold rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl">
                  <i className="fas fa-tools text-slate-900 text-2xl"></i>
                </div>
                <h3 className="text-xl font-playfair font-bold text-gold mb-4">Master Craftsmen</h3>
                <p className="text-white leading-relaxed">Skilled artisans with decades of experience creating furniture masterpieces that combine traditional techniques with modern innovation.</p>
              </CardContent>
            </Card>

            <Card className="bg-slate-800 border-gold/30 hover:border-gold/50 transition-all shadow-xl group">
              <CardContent className="p-8 text-center">
                <div className="w-20 h-20 bg-gold rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl">
                  <i className="fas fa-palette text-slate-900 text-2xl"></i>
                </div>
                <h3 className="text-xl font-playfair font-bold text-gold mb-4">Custom Design</h3>
                <p className="text-white leading-relaxed">Bespoke solutions tailored to your unique vision and space requirements with personalized design consultations.</p>
              </CardContent>
            </Card>

            <Card className="bg-slate-800 border-gold/30 hover:border-gold/50 transition-all shadow-xl group">
              <CardContent className="p-8 text-center">
                <div className="w-20 h-20 bg-gold rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl">
                  <i className="fas fa-shield-alt text-slate-900 text-2xl"></i>
                </div>
                <h3 className="text-xl font-playfair font-bold text-gold mb-4">3 Years Warranty</h3>
                <p className="text-white leading-relaxed">Comprehensive 3-year warranty coverage ensuring your furniture investment is protected with quality guarantees and expert support.</p>
              </CardContent>
            </Card>

            <Card className="bg-slate-800 border-gold/30 hover:border-gold/50 transition-all shadow-xl group">
              <CardContent className="p-8 text-center">
                <div className="w-20 h-20 bg-gold rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl">
                  <i className="fas fa-shipping-fast text-slate-900 text-2xl"></i>
                </div>
                <h3 className="text-xl font-playfair font-bold text-gold mb-4">White Glove Delivery</h3>
                <p className="text-white leading-relaxed">Professional installation and setup service with care, precision, and complete room styling for perfect presentation.</p>
              </CardContent>
            </Card>

            <Card className="bg-slate-800 border-gold/30 hover:border-gold/50 transition-all shadow-xl group">
              <CardContent className="p-8 text-center">
                <div className="w-20 h-20 bg-gold rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl">
                  <i className="fas fa-headset text-slate-900 text-2xl"></i>
                </div>
                <h3 className="text-xl font-playfair font-bold text-gold mb-4">24/7 Support</h3>
                <p className="text-white leading-relaxed">Dedicated customer service team available round the clock for assistance with all your furniture needs and queries.</p>
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
                  <h2 className="text-4xl font-playfair font-bold text-white mb-6">Craftsmanship in Action</h2>
                  <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                    Step into our workshop where master craftsmen bring designs to life through skilled hands and 
                    time-honored techniques. Our state-of-the-art facility combines traditional woodworking methods 
                    with modern precision tools to create furniture pieces that represent the highest standards of quality.
                  </p>
                  <p className="text-lg text-gray-300 mb-8 leading-relaxed">
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
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <Card className="bg-black/50 border-white/20 overflow-hidden shadow-2xl">
            <CardContent className="p-0">
              <div className="grid lg:grid-cols-2 gap-0 items-center">
                <div className="relative">
                  <img 
                    src={luxuryBedroom} 
                    alt="Luxury bedroom furniture delivery and installation" 
                    className="w-full h-full object-cover min-h-[500px] image-luxury image-glossy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent to-slate-900/30"></div>
                </div>
                <div className="p-12 bg-slate-800">
                  <h2 className="text-4xl font-playfair font-bold text-gold mb-6">Curated Piece Delivery & Installation</h2>
                  <p className="text-lg text-white mb-6 leading-relaxed">
                    Experience seamless delivery and professional installation of your custom furniture pieces. 
                    Our specialized team ensures every detail is perfect, from placement to final adjustments, 
                    creating the luxurious ambiance you've envisioned.
                  </p>
                  <div className="space-y-4 mb-8">
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-gold rounded-full"></div>
                      <span className="text-white font-medium">White-glove delivery service</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-gold rounded-full"></div>
                      <span className="text-white font-medium">Professional assembly and installation</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-gold rounded-full"></div>
                      <span className="text-white font-medium">Room styling and arrangement</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-gold rounded-full"></div>
                      <span className="text-white font-medium">Final quality inspection</span>
                    </div>
                  </div>
                  <Button className="bg-gold text-slate-900 px-8 py-4 text-lg font-bold hover:bg-yellow-500 transition-colors">
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
