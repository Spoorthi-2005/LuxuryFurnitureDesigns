import { useState } from "react";
import { Link } from "wouter";
import Header from "@/components/header";
import Footer from "@/components/footer";
import SimpleImageRotator from "@/components/simple-image-rotator";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Award, ChevronRight, Star, ExternalLink, Building2, Utensils, Hotel } from "lucide-react";

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
      description: "An exquisite fine dining restaurant featuring elegant seating arrangements, sophisticated table settings, and premium interior design. The space combines contemporary aesthetics with classic luxury, creating an intimate dining experience with custom furniture, warm wood tones, and tasteful décor elements.",
      images: [dlfClub1, dlfClub2, dlfClub3, dlfClub4],
      completionDate: "2024",
      location: "DLF Club 3, Gurgaon",
      features: ["Custom Dining Tables", "Premium Seating", "Elegant Table Settings", "Sophisticated Lighting", "Wood Flooring", "Contemporary Design"],
      clientTestimonial: "The restaurant design perfectly captures the essence of fine dining with impeccable attention to detail and luxurious comfort.",
      projectScope: "Complete interior design and furniture for premium restaurant space",
      area: "2,500 sq ft",
      isPlaceholder: false
    },
    {
      id: 2,
      title: "Mr. Sethi's Luxury Residence",
      category: "Residential",
      description: "A sophisticated residential project featuring modern kitchen design with premium appliances, elegant living spaces with custom furniture, and luxurious bedroom interiors. The project showcases contemporary aesthetics with warm wood tones, marble flooring, and innovative storage solutions throughout the home.",
      images: [sethi1, sethi2, sethi3, sethi4, sethi5],
      completionDate: "2024",
      location: "Premium Residential Complex, Delhi NCR",
      features: ["Modern Kitchen Design", "Custom Wardrobes", "Marble Flooring", "Contemporary Furniture", "Premium Lighting", "Luxury Finishes"],
      clientTestimonial: "The team transformed our home into a masterpiece of modern luxury with impeccable attention to detail and functionality.",
      projectScope: "Complete home interior design including kitchen, bedroom, and living spaces with custom furniture solutions",
      area: "3,200 sq ft",
      isPlaceholder: false
    },
    {
      id: 3,
      title: "Col. Vasal's Premium Furniture Collection",
      category: "Residential",
      description: "An elegant residential furniture project featuring custom-designed premium seating, sophisticated bedroom furniture, and luxurious display units. The collection showcases exquisite craftsmanship with rich velvet upholstery, contemporary design elements, and premium materials creating a refined living environment.",
      images: [vasal1, vasal2, vasal3, vasal4],
      completionDate: "2024",
      location: "Distinguished Residence, Delhi NCR",
      features: ["Custom Velvet Seating", "Premium Bedroom Furniture", "Luxury Display Units", "Contemporary Design", "Rich Upholstery", "Glass Elements"],
      clientTestimonial: "Exceptional craftsmanship and attention to detail. The furniture pieces have transformed our home with elegance and comfort.",
      projectScope: "Complete custom furniture design and manufacturing for premium residential spaces",
      area: "2,800 sq ft",
      isPlaceholder: false
    },
    {
      id: 4,
      title: "Residential Villa Project",
      category: "Residential",
      description: "Coming Soon - Complete home furniture and interior design for luxury residential properties with personalized styling.",
      images: [],
      isPlaceholder: true
    },
    {
      id: 5,
      title: "Boutique Café Design",
      category: "Restaurant",
      description: "Coming Soon - Charming café interiors with custom seating and contemporary furniture solutions for intimate dining experiences.",
      images: [],
      isPlaceholder: true
    },
    {
      id: 6,
      title: "Heritage Club Renovation",
      category: "Hospitality",
      description: "Coming Soon - Classic club interiors combining traditional elements with modern luxury furniture for prestigious venues.",
      images: [],
      isPlaceholder: true
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
            Our Projects
          </h1>
          <div className="w-32 h-2 bg-gradient-to-r from-transparent via-gold to-transparent mx-auto mb-8"></div>
          <p className="text-2xl md:text-3xl text-soft-brown max-w-4xl mx-auto leading-relaxed drop-shadow-xl">
            Discover our exceptional portfolio of luxury furniture projects, where craftsmanship meets innovation in perfect harmony.
          </p>
        </div>
      </section>

      {/* Projects Linear Layout */}
      <div className="container mx-auto px-4 py-12 relative z-10">
        {projects.map((project, index) => (
          <div key={project.id} className="mb-20">
            <Card className="bg-gradient-to-br from-slate-900/95 via-slate-800/90 to-slate-700/95 border-gold/20 backdrop-blur-xl shadow-2xl overflow-hidden">
              <CardContent className="p-10 md:p-16">
                <div className="text-center mb-16">
                  <h2 className="text-5xl md:text-7xl font-bold text-transparent bg-gradient-to-r from-gold via-yellow-300 to-gold bg-clip-text mb-8 tracking-wide animated-gradient">
                    {project.title}
                  </h2>
                  <div className="w-32 h-1.5 bg-gradient-to-r from-transparent via-gold to-transparent mx-auto mb-8"></div>
                  <p className="text-xl md:text-2xl text-soft-brown max-w-5xl mx-auto leading-relaxed font-light">
                    {project.description}
                  </p>
                </div>
              
                {project.isPlaceholder ? (
                  // Placeholder Layout
                  <div className="text-center py-20">
                    <div className="w-32 h-32 bg-gradient-to-br from-gold/20 to-yellow-600/20 rounded-full flex items-center justify-center mx-auto mb-8">
                      <div className="w-16 h-16 border-4 border-gold/30 border-dashed rounded-full flex items-center justify-center">
                        <span className="text-gold text-2xl font-bold">?</span>
                      </div>
                    </div>
                    <h3 className="text-3xl font-bold text-gold mb-4">Coming Soon</h3>
                    <p className="text-lg text-soft-brown max-w-2xl mx-auto">
                      This exciting project is currently in development. Stay tuned for stunning visuals and detailed information about our latest luxury furniture creation.
                    </p>
                  </div>
                ) : (
                  // Full Project Layout
                  <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left: Image Rotator */}
                    <div className="relative">
                      <SimpleImageRotator
                        images={project.images.map((img) => ({ src: img, alt: project.title }))}
                        rotationInterval={3000}
                      />
                    </div>

                    {/* Right: Project Information */}
                    <div className="space-y-8">
                      <div>
                        <h3 className="text-3xl font-bold text-gold mb-4">Project Details</h3>
                        <div className="grid grid-cols-2 gap-4 mb-6">
                          <div className="bg-slate-800/50 rounded-lg p-4">
                            <p className="text-sm text-soft-brown mb-1">Completion Date</p>
                            <p className="text-lg font-semibold text-gold">{project.completionDate}</p>
                          </div>
                          <div className="bg-slate-800/50 rounded-lg p-4">
                            <p className="text-sm text-soft-brown mb-1">Location</p>
                            <p className="text-lg font-semibold text-gold">{project.location}</p>
                          </div>
                          <div className="bg-slate-800/50 rounded-lg p-4">
                            <p className="text-sm text-soft-brown mb-1">Area</p>
                            <p className="text-lg font-semibold text-gold">{project.area}</p>
                          </div>
                          <div className="bg-slate-800/50 rounded-lg p-4">
                            <p className="text-sm text-soft-brown mb-1">Category</p>
                            <p className="text-lg font-semibold text-gold">{project.category}</p>
                          </div>
                        </div>
                      </div>

                      <div>
                        <h4 className="text-xl font-bold text-gold mb-4">Key Features</h4>
                        <div className="flex flex-wrap gap-2">
                          {project.features?.map((feature, featureIndex) => (
                            <Badge 
                              key={featureIndex} 
                              className="bg-gold/20 text-gold border-gold/30 text-sm py-1 px-3"
                            >
                              {feature}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      <div className="bg-gradient-to-r from-gold/10 to-yellow-600/10 rounded-xl p-6 border border-gold/20">
                        <h4 className="text-lg font-bold text-gold mb-3">Client Testimonial</h4>
                        <p className="text-soft-brown italic leading-relaxed">
                          "{project.clientTestimonial}"
                        </p>
                      </div>

                      <div>
                        <h4 className="text-lg font-bold text-gold mb-3">Project Scope</h4>
                        <p className="text-soft-brown leading-relaxed">
                          {project.projectScope}
                        </p>
                      </div>

                      <Button className="w-full bg-gradient-to-r from-gold to-yellow-600 text-slate-900 font-semibold hover:from-yellow-600 hover:to-gold transition-all duration-300 group py-3">
                        View Full Project Details
                        <ChevronRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                      </Button>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        ))}
      </div>

      <Footer />
    </div>
  );
}