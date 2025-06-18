import Header from "@/components/header";
import Footer from "@/components/footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import foundersImage from "@assets/WhatsApp Image 2025-06-02 at 18.04.55_6060650b_1750062974940.jpg";

export default function Story() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <div className="pt-20">
        {/* Story Page - Flowing Wave Pattern */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-black"></div>
          <div className="absolute inset-0 opacity-[0.008]" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='40' viewBox='0 0 100 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 20 Q25 5 50 20 T100 20' stroke='%23FFFFFF' stroke-width='0.5' fill='none'/%3E%3Cpath d='M0 30 Q25 15 50 30 T100 30' stroke='%23FFFFFF' stroke-width='0.3' fill='none'/%3E%3C/svg%3E")`,
            backgroundSize: '100px 40px'
          }}></div>
          <div className="absolute inset-0 bg-gradient-to-bl from-rose-900/[0.01] via-transparent to-amber-900/[0.01]"></div>
        </div>

        {/* Organic Light Elements */}
        <div className="absolute top-1/5 left-1/6 w-80 h-80 bg-rose-500/[0.015] rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/5 right-1/6 w-80 h-80 bg-amber-500/[0.015] rounded-full blur-3xl animate-pulse" style={{animationDelay: '7s'}}></div>

        {/* Hero Section */}
        <section className="py-20 bg-transparent relative z-10">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-6xl font-playfair font-bold mb-6 text-white">
                Our Extraordinary Journey
              </h1>
              <p className="text-2xl text-gray-300 leading-relaxed">
                Discover the passionate story behind Blackhorse Furnitures. Where traditional Indian craftsmanship meets contemporary design excellence.
              </p>
            </div>
          </div>
        </section>

        {/* Founders Section */}
        <section className="py-20 bg-black">
          <div className="container mx-auto px-4">
            <Card className="bg-black/50 border-white/20 overflow-hidden shadow-xl">
              <CardContent className="p-0">
                <div className="grid lg:grid-cols-2 gap-0 items-center">
                  <div className="p-12">
                    <h2 className="text-4xl font-playfair font-bold text-white mb-8">Meet Our Visionary Founders</h2>
                    
                    <div className="space-y-12">
                      <div className="bg-black/30 p-6 rounded-lg border border-white/20">
                        <h3 className="text-4xl font-playfair font-bold text-white mb-6 border-b border-gold/30 pb-3">
                          Amar Chauhan - Founder & Creative Director
                        </h3>
                        <p className="text-white leading-relaxed mb-4 text-lg">
                          With an unwavering passion for excellence and specialized expertise in luxury hospitality furniture, 
                          Amar Chauhan established Blackhorse Furnitures with a revolutionary vision to create exceptional 
                          commercial spaces. His entrepreneurial journey spans over two decades in the hospitality industry, 
                          designing premium hotels, restaurants, bars, and luxury commercial environments.
                        </p>
                        <p className="text-white leading-relaxed mb-4 text-lg">
                          Amar's expertise lies in understanding hospitality requirements, creating memorable guest experiences, 
                          and designing furniture that combines functionality with luxury aesthetics for commercial success. 
                          His deep understanding of guest psychology, operational efficiency, and aesthetic excellence has made 
                          him a trusted partner for India's leading hospitality brands.
                        </p>
                        <p className="text-white leading-relaxed text-lg">
                          Starting his career with a small workshop in Delhi, Amar transformed his passion for woodworking into 
                          a thriving enterprise that now serves premium hotels across India. Under his leadership, Blackhorse 
                          Furnitures has completed over 700 successful projects, earning recognition from industry leaders nationwide.
                        </p>
                      </div>
                      
                      <div className="bg-black/30 p-6 rounded-lg border border-white/20">
                        <h3 className="text-4xl font-playfair font-bold text-white mb-6 border-b border-gold/30 pb-3">
                          Diksha Shringi - Co-Founder & Design Consultant
                        </h3>
                        <p className="text-white leading-relaxed mb-4 text-lg">
                          A distinguished graduate from the American University of Interior Design in Dubai, Diksha Shringi brings over 15 years of specialized experience in hospitality interior design and commercial furniture consultation. 
                          Her international education combined with profound understanding of guest psychology, spatial dynamics, and commercial functionality enables her to create hospitality solutions 
                          that enhance guest experiences and operational efficiency.
                        </p>
                        <p className="text-white leading-relaxed mb-4 text-lg">
                          Diksha's meticulous attention to detail and innovative approach to hospitality design has resulted in 
                          countless successful hotel, restaurant, and commercial projects that create memorable guest experiences while maintaining operational excellence.
                        </p>
                        <p className="text-white leading-relaxed text-lg">
                          Her expertise in color psychology, space optimization, and luxury aesthetics ensures that every project 
                          not only meets functional requirements but also creates emotional connections with guests. Diksha's design 
                          philosophy centers on creating spaces that tell stories and evoke lasting impressions.
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                    <img 
                      src={foundersImage} 
                      alt="Amar Chauhan and Diksha Shringi - Founders of Blackhorse Furnitures" 
                      className="w-full h-[600px] lg:h-[700px] object-cover object-center"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 via-transparent to-transparent"></div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Company Journey */}
        <section className="py-20 bg-black">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-5xl font-playfair font-bold mb-8 text-white">Our Evolution of Excellence</h2>
                <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
                  From humble beginnings to becoming a distinguished name in luxury furniture, our journey reflects 
                  unwavering commitment to quality, innovation, and customer satisfaction. We have transformed from 
                  a small workshop into India's premier hospitality furniture manufacturer.
                </p>
                <div className="bg-gradient-to-r from-gold/20 to-amber-500/20 p-6 rounded-lg border border-gold/30 max-w-4xl mx-auto">
                  <p className="text-white text-lg leading-relaxed">
                    Our story is one of relentless pursuit of perfection, where traditional Indian craftsmanship meets 
                    contemporary design excellence. Every piece we create carries the legacy of master artisans who have 
                    perfected their skills over decades, combined with modern innovation that meets today's hospitality standards.
                  </p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-12">
                <Card className="bg-black/50 border-white/20 hover-lift transition-all shadow-xl">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-6">
                      <i className="fas fa-lightbulb text-white text-2xl"></i>
                    </div>
                    <h3 className="text-2xl font-playfair font-bold text-white mb-4">Founded on Innovation</h3>
                    <p className="text-gray-300 leading-relaxed">
                      Blackhorse Furnitures emerged from a revolutionary vision to bridge the gap between traditional Indian woodworking heritage and contemporary design sensibilities. Our founders recognized the immense potential in combining time-honored craftsmanship techniques with modern aesthetic preferences.
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-black/50 border-white/20 hover-lift transition-all shadow-xl">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-6">
                      <i className="fas fa-tools text-white text-2xl"></i>
                    </div>
                    <h3 className="text-2xl font-playfair font-bold text-white mb-4">Mastering the Craft</h3>
                    <p className="text-gray-300 leading-relaxed">
                      Through years of dedicated research, experimentation, and collaboration with master craftsmen, we have developed proprietary techniques that ensure exceptional quality in every piece. Our commitment to excellence extends from material selection and design conceptualization to precision manufacturing.
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-card border-champagne/40 hover-lift transition-all shadow-xl">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 bg-glow-gold rounded-full flex items-center justify-center mb-6">
                      <i className="fas fa-globe text-white text-2xl"></i>
                    </div>
                    <h3 className="text-2xl font-playfair font-bold text-elegant-brown mb-4">Expanding Horizons</h3>
                    <p className="text-soft-brown leading-relaxed">
                      Our success in the Indian market has opened doors to international opportunities, including our 
                      partnership with Frezza Arredementi in Italy. This collaboration has enriched our design 
                      perspective, incorporating European elegance with Indian craftsmanship to create truly unique 
                      furniture collections that appeal to global aesthetics.
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-card border-champagne/40 hover-lift transition-all shadow-xl">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 bg-glow-gold rounded-full flex items-center justify-center mb-6">
                      <i className="fas fa-heart text-white text-2xl"></i>
                    </div>
                    <h3 className="text-2xl font-playfair font-bold text-elegant-brown mb-4">Customer-Centric Philosophy</h3>
                    <p className="text-soft-brown leading-relaxed">
                      Every project we undertake is approached with genuine passion and commitment to exceeding client 
                      expectations. Our personalized consultation process ensures that each piece we create reflects 
                      the client's unique vision while maintaining our signature standards of quality, durability, 
                      and aesthetic excellence.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Values & Mission */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <Card className="bg-black/60 border-white/20 text-white overflow-hidden">
              <CardContent className="p-12 text-center">
                <h2 className="text-4xl font-playfair font-bold mb-8 text-white">Our Unwavering Commitment</h2>
                <p className="text-xl mb-12 max-w-4xl mx-auto leading-relaxed text-gray-300">
                  At Blackhorse Furnitures, every piece we create embodies our foundational values of excellence, 
                  integrity, and innovation. From the initial design consultation to the final installation, 
                  we ensure that your investment in our furniture represents not just a purchase, but a legacy 
                  of quality that will be cherished for generations.
                </p>
                
                <div className="grid md:grid-cols-3 gap-12">
                  <div>
                    <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
                      <i className="fas fa-award text-white text-3xl"></i>
                    </div>
                    <h3 className="text-2xl font-playfair font-bold mb-4 text-white">Uncompromising Quality</h3>
                    <p className="text-lg text-gray-300">Premium materials, precision craftsmanship, and rigorous quality control ensure exceptional durability and timeless beauty.</p>
                  </div>
                  <div>
                    <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
                      <i className="fas fa-users text-white text-3xl"></i>
                    </div>
                    <h3 className="text-2xl font-playfair font-bold mb-4 text-white">Client-First Approach</h3>
                    <p className="text-lg text-gray-300">Personalized service, transparent communication, and unwavering dedication to bringing your vision to life.</p>
                  </div>
                  <div>
                    <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
                      <i className="fas fa-leaf text-white text-3xl"></i>
                    </div>
                    <h3 className="text-2xl font-playfair font-bold mb-4 text-white">Sustainable Practices</h3>
                    <p className="text-lg text-gray-300">Environmentally responsible sourcing, eco-friendly processes, and commitment to preserving our planet's resources.</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 bg-gradient-to-r from-luxury-gold/20 to-transparent">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-playfair font-bold mb-6 text-luxury-gold">Begin Your Journey With Us</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Ready to experience the Blackhorse Furnitures difference? Let us transform your space with our exceptional craftsmanship and personalized service.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button className="bg-luxury-gold text-black px-12 py-4 text-lg font-bold hover:bg-yellow-400 transition-colors">
                  Schedule Consultation
                </Button>
              </Link>
              <Link href="/projects">
                <Button variant="outline" className="border-2 border-luxury-gold text-luxury-gold px-12 py-4 text-lg font-bold hover:bg-luxury-gold hover:text-black transition-colors">
                  View Portfolio
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
}
