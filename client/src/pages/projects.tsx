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

export default function Projects() {
  const projects = [
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
      title: "Luxury Hotel Suite Collection",
      category: "Hospitality",
      description: "Coming Soon - Premium hotel suite designs featuring bespoke furniture, elegant interiors, and luxury amenities for discerning guests.",
      images: [],
      isPlaceholder: true
    },
    {
      id: 3,
      title: "Corporate Office Interiors",
      category: "Commercial",
      description: "Coming Soon - Modern office spaces with custom furniture solutions and professional design aesthetics for contemporary workplaces.",
      images: [],
      isPlaceholder: true
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
                  // DLF Club 3 - Full Project Layout
                  <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left: Image Rotator */}
                    <div className="relative">
                      <SimpleImageRotator
                        images={project.images}
                        alt={project.title}
                        className="w-full h-96 lg:h-[500px] object-cover rounded-2xl shadow-2xl"
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