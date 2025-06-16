import { useState } from "react";
import { Link } from "wouter";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Award, ChevronRight, Star, ExternalLink, Building2, Utensils, Hotel } from "lucide-react";

// Import project images
import project1Image from '@assets/WhatsApp Image 2025-06-13 at 16.29.47_c71c5951_1750056003015.jpg';
import project2Image from '@assets/WhatsApp Image 2025-06-13 at 16.29.47_9e6edafe_1750056017054.jpg';
import project3Image from '@assets/WhatsApp Image 2025-06-13 at 16.29.47_8d285b60_1750056034362.jpg';
import project4Image from '@assets/WhatsApp Image 2025-06-13 at 16.29.47_593f7c9b_1750056874168.jpg';
import project5Image from '@assets/WhatsApp Image 2025-06-13 at 16.31.07_7dc38a64_1750056097211.jpg';
import project6Image from '@assets/WhatsApp Image 2025-06-13 at 16.30.16_e304955a_1750056145268.jpg';

export default function Projects() {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const [activeFilter, setActiveFilter] = useState<string>("All");

  const projects = [
    {
      title: "Grand Hotel Lobby",
      category: "Hospitality",
      description: "Exquisite hotel lobby design featuring marble floors, crystal chandelier, and elegant center table creating a sophisticated welcome experience for guests.",
      image: project1Image,
      features: ["Crystal Chandelier", "Marble Flooring", "Elegant Furniture", "Luxury Lighting"],
      testimonial: "The lobby creates an unforgettable first impression for our guests with its timeless elegance.",
      icon: Hotel
    },
    {
      title: "Heritage Club Lounge",
      category: "Hospitality",
      description: "Classic club lounge with rich wood paneling, premium bar setup, and sophisticated seating arrangements for distinguished members.",
      image: project2Image,
      features: ["Wood Paneling", "Premium Bar", "Member Seating", "Art Gallery Wall"],
      testimonial: "Perfect blend of tradition and luxury that reflects our club's prestigious heritage.",
      icon: Building2
    },
    {
      title: "Fine Dining Restaurant",
      category: "Restaurant",
      description: "Contemporary restaurant design with curved ceiling elements, warm lighting, and carefully planned dining areas for optimal guest experience.",
      image: project3Image,
      features: ["Curved Ceiling Design", "Ambient Lighting", "Flexible Seating", "Modern Aesthetics"],
      testimonial: "The design enhances our culinary experience with perfect ambiance and functionality.",
      icon: Utensils
    },
    {
      title: "DLF Club 3",
      category: "Restaurant",
      description: "Sophisticated dining space with contemporary furnishing, natural lighting, and elegant seating arrangements featuring premium materials and modern aesthetics.",
      image: project4Image,
      features: ["Contemporary Design", "Natural Light", "Premium Seating", "Modern Aesthetics"],
      testimonial: "Beautiful dining space that perfectly complements our luxury offerings.",
      icon: Utensils
    },
    {
      title: "Luxury Hotel Entrance",
      category: "Hospitality",
      description: "Grand hotel entrance featuring dramatic floral arrangements, marble surfaces, and sophisticated lighting creating an impressive arrival experience.",
      image: project5Image,
      features: ["Dramatic Florals", "Marble Surfaces", "Grand Lighting", "Luxury Welcome"],
      testimonial: "The entrance sets the perfect tone for luxury and hospitality excellence.",
      icon: Hotel
    },
    {
      title: "Boutique Hotel Lounge",
      category: "Hospitality",
      description: "Intimate hotel lounge with neutral tones, comfortable seating, and contemporary furnishing creating a relaxed atmosphere for guests.",
      image: project6Image,
      features: ["Neutral Palette", "Comfortable Seating", "Contemporary Style", "Relaxed Atmosphere"],
      testimonial: "Perfect balance of comfort and style that our guests absolutely love.",
      icon: Hotel
    }
  ];

  const categories = ["All", "Hospitality", "Restaurant"];
  const filteredProjects = activeFilter === "All" 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <div className="min-h-screen opulence-bg-primary">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/90 via-slate-800/80 to-slate-700/90"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold text-transparent bg-gradient-to-r from-gold via-yellow-300 to-gold bg-clip-text mb-8 tracking-wide animated-gradient">
              Our Projects
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed mb-8">
              Explore our portfolio of exceptional hospitality and restaurant designs that showcase luxury, innovation, and impeccable craftsmanship.
            </p>
            
            {/* Filter Buttons */}
            <div className="flex justify-center space-x-4 mb-12">
              {categories.map((category) => (
                <Button
                  key={category}
                  onClick={() => setActiveFilter(category)}
                  className={`px-6 py-3 rounded-full transition-all duration-300 ${
                    activeFilter === category
                      ? "bg-gradient-to-r from-gold to-yellow-600 text-slate-900 font-semibold"
                      : "bg-slate-800/50 text-gray-300 border border-gold/30 hover:bg-gold/20"
                  }`}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => {
              const IconComponent = project.icon;
              return (
                <Card 
                  key={index}
                  className="project-card opulence-3d bg-gradient-to-br from-slate-900/95 via-slate-800/90 to-slate-700/95 border-gold/20 backdrop-blur-xl shadow-2xl overflow-hidden group cursor-pointer"
                  onMouseEnter={() => setHoveredProject(index)}
                  onMouseLeave={() => setHoveredProject(null)}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="relative overflow-hidden h-80 opulence-image-container">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover opulence-image"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    {/* Circular Image Overlays */}
                    <div className="absolute top-4 right-4 flex space-x-2">
                      <div className="w-12 h-12 rounded-full border-2 border-gold/60 overflow-hidden bg-slate-800/80 backdrop-blur-sm">
                        <img
                          src={project.image}
                          alt="Detail"
                          className="w-full h-full object-cover opacity-90"
                        />
                      </div>
                      <div className="w-10 h-10 rounded-full border-2 border-gold/40 overflow-hidden bg-slate-800/60 backdrop-blur-sm">
                        <img
                          src={project.image}
                          alt="Detail"
                          className="w-full h-full object-cover opacity-80 filter grayscale"
                        />
                      </div>
                    </div>

                    {/* Category Badge */}
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-gold text-slate-900 font-semibold flex items-center space-x-1">
                        <IconComponent className="w-3 h-3" />
                        <span>{project.category}</span>
                      </Badge>
                    </div>

                    {/* Project Title Overlay */}
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-2xl font-bold text-white drop-shadow-lg">
                        {project.title}
                      </h3>
                    </div>
                  </div>

                  <CardContent className="p-6">
                    <p className="text-gray-300 mb-6 leading-relaxed text-sm">
                      {project.description}
                    </p>

                    <div className="mb-6">
                      <h4 className="text-gold font-semibold mb-3 text-sm">Key Features</h4>
                      <div className="flex flex-wrap gap-1">
                        {project.features.map((feature, featureIndex) => (
                          <Badge 
                            key={featureIndex} 
                            variant="outline" 
                            className="border-gold/30 text-gray-300 bg-slate-800/50 text-xs"
                          >
                            {feature}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div className="bg-slate-800/50 rounded-lg p-4 mb-6">
                      <div className="flex text-gold mb-2">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-3 h-3 fill-current" />
                        ))}
                      </div>
                      <p className="text-gray-300 text-xs italic leading-relaxed">
                        "{project.testimonial}"
                      </p>
                    </div>

                    <Button className="w-full bg-gradient-to-r from-gold to-yellow-600 text-slate-900 font-semibold hover:from-yellow-600 hover:to-gold transition-all duration-300 group text-sm py-2">
                      Explore Project
                      <ChevronRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Unique Interactive Feature: Virtual Design Studio */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/90 via-purple-900/80 to-slate-800/90"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold text-transparent bg-gradient-to-r from-gold via-yellow-300 to-gold bg-clip-text mb-6 animated-gradient">
              Virtual Design Studio
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Experience our designs in an immersive virtual environment. Hover over elements to see interactive details and design variations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {/* Interactive Design Elements */}
            {[
              { title: "Material Selection", icon: "🎨", feature: "Premium Fabrics" },
              { title: "Lighting Control", icon: "💡", feature: "Smart Ambiance" },
              { title: "Color Schemes", icon: "🌈", feature: "Custom Palettes" },
              { title: "Furniture Layout", icon: "🛋️", feature: "3D Positioning" },
              { title: "Texture Preview", icon: "✨", feature: "Real Materials" },
              { title: "Space Planning", icon: "📐", feature: "Optimal Flow" }
            ].map((item, index) => (
              <div 
                key={index}
                className="virtual-studio-card bg-gradient-to-br from-slate-800/90 to-slate-700/90 rounded-xl p-6 border border-gold/20 backdrop-blur-xl group cursor-pointer"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-4xl mb-4 group-hover:scale-125 transition-transform duration-300">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-gold transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-gray-400 text-sm mb-4">{item.feature}</p>
                <div className="w-full h-2 bg-slate-600 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-gold to-yellow-600 w-0 group-hover:w-full transition-all duration-1000 ease-out"></div>
                </div>
              </div>
            ))}
          </div>

          {/* Interactive 3D Preview */}
          <div className="bg-gradient-to-br from-slate-800/95 to-slate-700/95 rounded-2xl p-8 border border-gold/30 backdrop-blur-xl">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-white mb-4">Interactive Design Preview</h3>
              <p className="text-gray-300">Click and drag to explore different angles and design variations</p>
            </div>
            
            <div className="relative h-80 bg-gradient-to-br from-slate-900 to-slate-800 rounded-xl overflow-hidden interactive-preview">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-64 h-64 relative preview-3d">
                  <div className="absolute inset-0 bg-gradient-to-br from-gold/20 to-yellow-600/20 rounded-lg blur-xl"></div>
                  <div className="relative w-full h-full bg-gradient-to-br from-slate-700 to-slate-800 rounded-lg border border-gold/30 flex items-center justify-center">
                    <div className="text-6xl text-gold">🏢</div>
                  </div>
                </div>
              </div>
              
              {/* Interactive Controls */}
              <div className="absolute bottom-4 left-4 right-4 flex justify-center space-x-4">
                {['View 1', 'View 2', 'View 3'].map((view, index) => (
                  <button 
                    key={index}
                    className="px-4 py-2 bg-gold/20 text-gold border border-gold/30 rounded-lg hover:bg-gold/30 transition-all duration-300"
                  >
                    {view}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-gold/10 to-yellow-600/10"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-gradient-to-r from-gold via-yellow-300 to-gold bg-clip-text mb-6 animated-gradient">
            Ready to Create Your Dream Space?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Let's collaborate to bring your hospitality or restaurant vision to life with our expert design and craftsmanship.
          </p>
          <Link href="/contact">
            <Button className="bg-gradient-to-r from-gold to-yellow-600 text-slate-900 font-semibold px-8 py-4 text-lg hover:from-yellow-600 hover:to-gold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
              Start Your Project
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}