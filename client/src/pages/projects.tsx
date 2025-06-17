import { useState } from "react";
import { Link } from "wouter";
import Header from "@/components/header";
import Footer from "@/components/footer";
import SimpleImageRotator from "@/components/simple-image-rotator";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Award, ChevronRight, Star, ExternalLink, Building2, Utensils, Hotel } from "lucide-react";
import { LuxuryParticles, LuxuryCursorTrail, LuxuryCard, ShimmerText } from "@/components/luxury-effects";

// Import DLF Club 3 restaurant images
import dlfClub1 from '@assets/WhatsApp Image 2025-06-16 at 16.05.09_fe8629cd_1750139197282.jpg';
import dlfClub2 from '@assets/WhatsApp Image 2025-06-16 at 16.05.10_7cb7c3e0_1750139263630.jpg';
import dlfClub3 from '@assets/WhatsApp Image 2025-06-16 at 16.05.12_a6b47b5d_1750139295538.jpg';
import dlfClub4 from '@assets/WhatsApp Image 2025-06-16 at 16.05.09_5fd2771f_1750139462870.jpg';

// Import Mr. Sethi's residential project images
import sethi1 from '@assets/WhatsApp Image 2025-06-16 at 17.02.25_8d88380a_1750139736501.jpg';
import sethi2 from '@assets/WhatsApp Image 2025-06-16 at 17.02.24_bfe86c56_1750139781747.jpg';
import sethi3 from '@assets/WhatsApp Image 2025-06-16 at 17.02.26_f3722efd_1750139803200.jpg';
import sethi4 from '@assets/WhatsApp Image 2025-06-16 at 17.02.26_96d22181_1750139820133.jpg';
import sethi5 from '@assets/WhatsApp Image 2025-06-16 at 17.02.29_e0dbe3dc_1750139873457.jpg';

// Import Mr. Vasal Colonel's project images
import vasal1 from '@assets/Screenshot 2025-06-17 113615_1750140670653.png';
import vasal2 from '@assets/Screenshot 2025-06-17 113642_1750140682883.png';
import vasal3 from '@assets/Screenshot 2025-06-17 113755_1750140694605.png';
import vasal4 from '@assets/Screenshot 2025-06-17 113932_1750140718262.png';

// Import remaining project images
import indore1 from '@assets/WhatsApp Image 2025-06-16 at 18.05.55_4d2d72b3_1750141666441.jpg';
import kapoor1 from '@assets/WhatsApp Image 2025-06-16 at 18.01.50_f5ffe22b_1750141738511.jpg';
import mayur1 from '@assets/WhatsApp Image 2025-06-13 at 16.31.05_6db10a68_1750142099192.jpg';

interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  images: string[];
  completionDate?: string;
  location?: string;
  features?: string[];
  clientTestimonial?: string;
  projectScope?: string;
  area?: string;
  isPlaceholder: boolean;
}

export default function Projects() {
  const projects: Project[] = [
    {
      id: 1,
      title: "DLF Club 3 - Premium Restaurant",
      category: "Restaurant",
      description: "Custom-designed dining furniture featuring elegant upholstered chairs with premium fabric selection. Sophisticated table arrangements maximize seating capacity while maintaining intimate dining atmosphere. Rich wood tones complement warm lighting creating luxurious restaurant ambiance throughout. Contemporary design elements blend seamlessly with classic hospitality furniture aesthetics. High-quality commercial-grade materials ensure durability for heavy restaurant usage patterns. The complete dining set transforms the space into memorable fine dining destination.",
      images: [dlfClub1, dlfClub2, dlfClub3, dlfClub4],
      isPlaceholder: false
    },
    {
      id: 2,
      title: "Mr. Sethi's Luxury Residence",
      category: "Residential",
      description: "Modern kitchen design featuring sleek cabinetry with premium hardware and contemporary styling. Custom wardrobes maximize storage efficiency while maintaining elegant bedroom aesthetics throughout. Marble flooring complements luxury furniture pieces creating sophisticated residential ambiance. Contemporary lighting fixtures illuminate spaces highlighting quality craftsmanship in every detail. Premium materials ensure durability while delivering exceptional visual appeal in design. The complete furniture collection transforms living spaces into modern luxury havens.",
      images: [sethi1, sethi2, sethi3, sethi4, sethi5],
      isPlaceholder: false
    },
    {
      id: 3,
      title: "Col. Vasal's Premium Furniture Collection",
      category: "Residential",
      description: "Custom velvet seating collection featuring rich orange upholstery with diamond-quilted patterns. Premium bedroom furniture showcases elegant blue velvet headboard with contemporary styling. Luxury display units combine glass elements with sophisticated storage solutions throughout. Contemporary design elements blend traditional craftsmanship with modern aesthetic appeal perfectly. Rich upholstery materials ensure comfort while maintaining exceptional visual impact in spaces. The complete furniture collection creates refined living environment with timeless elegance.",
      images: [vasal1, vasal2, vasal3, vasal4],
      isPlaceholder: false
    },
    {
      id: 4,
      title: "Indore Premium Seating Collection",
      category: "Residential",
      description: "Custom-designed quilted leather armchairs featuring premium upholstery and ergonomic comfort. The elegant mint-green seating set showcases sophisticated diamond-quilted patterns with wooden legs. Modern circular side table complements the luxurious seating arrangement perfectly. Premium leather finish ensures durability while maintaining aesthetic appeal. Contemporary design elements blend seamlessly with traditional craftsmanship techniques. The complete furniture set transforms living spaces into sophisticated relaxation zones.",
      images: [indore1],
      isPlaceholder: false
    },
    {
      id: 5,
      title: "DLF Phase 5 - Mr. Kapoor's Custom Storage Solutions",
      category: "Residential",
      description: "Illuminated glass display cabinets with warm LED lighting creating stunning visual impact. Premium white lacquer finish combined with fluted glass panels for sophisticated storage. Custom-designed built-in units maximizing space utilization with contemporary aesthetics. Hidden lighting system highlights displayed items while maintaining elegant ambiance. Seamless integration with modern architecture creates cohesive interior design flow. High-quality materials ensure longevity while delivering exceptional visual appeal.",
      images: [kapoor1],
      isPlaceholder: false
    },
    {
      id: 6,
      title: "Mayur Jain House - Luxury Console Collection",
      category: "Residential",
      description: "Curved marble-top console with rich wood base showcasing exceptional craftsmanship excellence. Fluted wall paneling creates sophisticated backdrop enhancing furniture design aesthetics. Premium brass hardware adds luxurious accent details throughout the furniture piece. Custom marble selection ensures unique patterns and natural beauty in design. Contemporary styling blends modern elements with timeless traditional furniture making techniques. The console serves as stunning focal point while providing functional storage solutions.",
      images: [mayur1],
      isPlaceholder: false
    }
  ];

  return (
    <div className="min-h-screen relative overflow-hidden bg-black text-white">
      {/* Luxury Effects */}
      <LuxuryParticles />
      <LuxuryCursorTrail />
      
      {/* Opulence Black Background with Subtle White Accents */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-black"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-white/5 via-transparent to-white/3"></div>
      </div>

      {/* Minimal Ambient Lighting for Elegance */}
      <div className="absolute top-0 left-1/4 w-80 h-80 bg-white/3 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-gold/5 rounded-full blur-3xl animate-pulse" style={{animationDelay: '3s'}}></div>

      <Header />

      {/* Hero Section */}
      <section className="relative py-24 px-4 overflow-hidden bg-black">
        <div className="relative z-10 container mx-auto text-center">
          <h1 className="text-6xl md:text-8xl font-bold mb-8 text-white">
            Our Projects
          </h1>
          <div className="w-32 h-px bg-gradient-to-r from-transparent via-white/50 to-transparent mx-auto mb-8"></div>
          <p className="text-2xl md:text-3xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Discover our exceptional portfolio of luxury furniture projects, where craftsmanship meets innovation in perfect harmony.
          </p>
        </div>
      </section>

      {/* Opulent Projects Showcase */}
      <div className="relative">
        {/* Minimal Background Pattern */}
        <div className="absolute inset-0 opacity-3">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23FFFFFF' fill-opacity='0.05'%3E%3Cpath d='M30 30l15-15v30l-15-15zm-15 15l15-15h-30l15 15z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '60px 60px'
          }}></div>
        </div>

        <div className="container mx-auto px-4 py-16 relative z-10">
          <div className="space-y-20">
            {projects.map((project, index) => (
              <div key={project.id}>
                {!project.isPlaceholder && (
                  <div className="group mb-24">
                    {/* Alternating Layout: Left/Right Pattern */}
                    <div className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 0 ? '' : 'lg:grid-cols-2'}`}>
                      
                      {/* Project Title and Details */}
                      <div className={`space-y-6 ${index % 2 === 0 ? 'lg:order-1' : 'lg:order-2'}`}>
                        <div className="space-y-4">
                          <Badge className="bg-white/10 text-white border-white/20 hover:bg-white/20">
                            {project.category}
                          </Badge>
                          <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                            {project.title}
                          </h2>
                          <div className="w-16 h-1 bg-gradient-to-r from-white/50 to-transparent"></div>
                        </div>

                        <p className="text-gray-300 text-lg leading-relaxed">
                          {project.description}
                        </p>

                        {project.location && (
                          <div className="flex items-center text-gray-400">
                            <MapPin className="w-4 h-4 mr-2" />
                            <span>{project.location}</span>
                          </div>
                        )}

                        {project.completionDate && (
                          <div className="flex items-center text-gray-400">
                            <Calendar className="w-4 h-4 mr-2" />
                            <span>Completed: {project.completionDate}</span>
                          </div>
                        )}

                        {project.features && (
                          <div className="space-y-2">
                            <h4 className="text-white font-semibold">Key Features:</h4>
                            <ul className="space-y-1">
                              {project.features.slice(0, 3).map((feature, idx) => (
                                <li key={idx} className="text-gray-300 flex items-center">
                                  <ChevronRight className="w-4 h-4 mr-2 text-white/50" />
                                  {feature}
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>

                      {/* Enhanced Image Display with Visual Effects */}
                      <div className={`relative ${index % 2 === 0 ? 'lg:order-2' : 'lg:order-1'}`}>
                        <div className="relative group/image">
                          {/* Glowing Border Effect */}
                          <div className="absolute -inset-1 bg-gradient-to-r from-white/20 via-white/10 to-white/20 rounded-xl blur-sm opacity-0 group-hover/image:opacity-100 transition-opacity duration-500"></div>
                          
                          {/* Main Image Container */}
                          <div className="relative bg-black rounded-lg overflow-hidden shadow-2xl border border-white/20 transform group-hover/image:scale-[1.02] transition-transform duration-500">
                            {/* Floating Particles Effect */}
                            <div className="absolute inset-0 pointer-events-none">
                              <div className="absolute top-4 left-4 w-2 h-2 bg-white/30 rounded-full animate-pulse"></div>
                              <div className="absolute top-8 right-6 w-1 h-1 bg-white/40 rounded-full animate-bounce" style={{animationDelay: '1s'}}></div>
                              <div className="absolute bottom-6 left-8 w-1.5 h-1.5 bg-white/20 rounded-full animate-pulse" style={{animationDelay: '2s'}}></div>
                            </div>
                            
                            {/* Corner Accents with Hover Effect */}
                            <div className="absolute top-3 left-3 w-6 h-6 border-l-2 border-t-2 border-white/40 opacity-0 group-hover/image:opacity-100 transition-opacity duration-300"></div>
                            <div className="absolute top-3 right-3 w-6 h-6 border-r-2 border-t-2 border-white/40 opacity-0 group-hover/image:opacity-100 transition-opacity duration-300"></div>
                            <div className="absolute bottom-3 left-3 w-6 h-6 border-l-2 border-b-2 border-white/40 opacity-0 group-hover/image:opacity-100 transition-opacity duration-300"></div>
                            <div className="absolute bottom-3 right-3 w-6 h-6 border-r-2 border-b-2 border-white/40 opacity-0 group-hover/image:opacity-100 transition-opacity duration-300"></div>
                            
                            {/* Shimmer Effect Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent transform -skew-x-12 -translate-x-full group-hover/image:translate-x-full transition-transform duration-1000"></div>
                            
                            {/* Image Display - Main Focus */}
                            <div className="relative p-3">
                              <SimpleImageRotator
                                images={project.images.map((img) => ({ src: img, alt: project.title }))}
                                rotationInterval={5000}
                              />
                            </div>
                          </div>

                          {/* Floating Info Badge */}
                          <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-black/80 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 opacity-0 group-hover/image:opacity-100 transition-opacity duration-300">
                            <span className="text-white text-sm font-medium">Premium Furniture</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}