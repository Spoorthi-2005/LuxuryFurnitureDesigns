import { useState } from "react";
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
import project4Image from '@assets/WhatsApp Image 2025-06-13 at 16.29.47_37877b1c_1750056061341.jpg';
import project5Image from '@assets/WhatsApp Image 2025-06-13 at 16.31.07_7dc38a64_1750056097211.jpg';
import project6Image from '@assets/WhatsApp Image 2025-06-13 at 16.30.16_e304955a_1750056145268.jpg';

export default function Projects() {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const [activeFilter, setActiveFilter] = useState<string>("All");

  const projects = [
    {
      id: 1,
      title: "Grand Hotel Lobby",
      year: "2024",
      category: "Hospitality",
      client: "Luxury Hotels Group",
      description: "Exquisite hotel lobby design featuring marble floors, crystal chandelier, and elegant center table creating a sophisticated welcome experience for guests.",
      image: project1Image,
      features: ["Crystal Chandelier", "Marble Flooring", "Elegant Furniture", "Luxury Lighting"],
      duration: "6 months",
      awards: ["Best Hospitality Interior 2024"],
      testimonial: "The lobby creates an unforgettable first impression for our guests with its timeless elegance.",
      icon: Hotel
    },
    {
      id: 2,
      title: "Heritage Club Lounge",
      year: "2024",
      category: "Hospitality",
      client: "Elite Club Management",
      description: "Classic club lounge with rich wood paneling, premium bar setup, and sophisticated seating arrangements for distinguished members.",
      image: project2Image,
      features: ["Wood Paneling", "Premium Bar", "Member Seating", "Art Gallery Wall"],
      duration: "4 months",
      awards: ["Club Design Excellence"],
      testimonial: "Perfect blend of tradition and luxury that reflects our club's prestigious heritage.",
      icon: Building2
    },
    {
      id: 3,
      title: "Fine Dining Restaurant",
      year: "2023",
      category: "Restaurant",
      client: "Gourmet Restaurant Chain",
      description: "Contemporary restaurant design with curved ceiling elements, warm lighting, and carefully planned dining areas for optimal guest experience.",
      image: project3Image,
      features: ["Curved Ceiling Design", "Ambient Lighting", "Flexible Seating", "Modern Aesthetics"],
      duration: "5 months",
      awards: ["Restaurant Design Innovation"],
      testimonial: "The design enhances our culinary experience with perfect ambiance and functionality.",
      icon: Utensils
    },
    {
      id: 4,
      title: "Resort Restaurant",
      year: "2023",
      category: "Restaurant",
      client: "Coastal Resort",
      description: "Spacious restaurant with natural lighting, contemporary furnishing, and flexible dining arrangements perfect for resort guests.",
      image: project4Image,
      features: ["Natural Light", "Contemporary Design", "Flexible Layout", "Resort Ambiance"],
      duration: "3 months",
      awards: ["Hospitality Design Award"],
      testimonial: "Beautiful dining space that perfectly complements our resort's luxury offerings.",
      icon: Utensils
    },
    {
      id: 5,
      title: "Luxury Hotel Entrance",
      year: "2024",
      category: "Hospitality",
      client: "Heritage Hotels",
      description: "Grand hotel entrance featuring dramatic floral arrangements, marble surfaces, and sophisticated lighting creating an impressive arrival experience.",
      image: project5Image,
      features: ["Dramatic Florals", "Marble Surfaces", "Grand Lighting", "Luxury Welcome"],
      duration: "4 months",
      awards: ["Entrance Design Excellence"],
      testimonial: "The entrance sets the perfect tone for luxury and hospitality excellence.",
      icon: Hotel
    },
    {
      id: 6,
      title: "Boutique Hotel Lounge",
      year: "2023",
      category: "Hospitality",
      client: "Boutique Hotels",
      description: "Intimate hotel lounge with neutral tones, comfortable seating, and contemporary furnishing creating a relaxed atmosphere for guests.",
      image: project6Image,
      features: ["Neutral Palette", "Comfortable Seating", "Contemporary Style", "Relaxed Atmosphere"],
      duration: "3 months",
      awards: ["Boutique Design Recognition"],
      testimonial: "Perfect balance of comfort and style that our guests absolutely love.",
      icon: Hotel
    }
  ];

  const categories = ["All", "Hospitality", "Restaurant"];
  const filteredProjects = activeFilter === "All" 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700">
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
                  key={project.id}
                  className="project-card opulence-3d bg-gradient-to-br from-slate-900/95 via-slate-800/90 to-slate-700/95 border-gold/20 backdrop-blur-xl shadow-2xl overflow-hidden group cursor-pointer"
                  onMouseEnter={() => setHoveredProject(project.id)}
                  onMouseLeave={() => setHoveredProject(null)}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="relative overflow-hidden h-64 opulence-image-container">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover opulence-image"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-gold text-slate-900 font-semibold flex items-center space-x-1">
                        <IconComponent className="w-3 h-3" />
                        <span>{project.category}</span>
                      </Badge>
                    </div>
                    <div className="absolute top-4 right-4">
                      <Badge variant="outline" className="border-white/30 text-white bg-black/30 backdrop-blur-sm">
                        {project.year}
                      </Badge>
                    </div>
                  </div>

                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <h3 className="text-xl font-bold text-white group-hover:text-gold transition-colors duration-300">
                        {project.title}
                      </h3>
                      <ChevronRight className="text-gold w-5 h-5 transform transition-transform duration-300 group-hover:translate-x-1" />
                    </div>

                    <div className="flex items-center text-gray-400 mb-4 text-sm">
                      <Calendar className="w-4 h-4 mr-2" />
                      <span>{project.duration}</span>
                    </div>

                    <p className="text-gray-300 mb-6 leading-relaxed text-sm">
                      {project.description}
                    </p>

                    <div className="mb-6">
                      <h4 className="text-gold font-semibold mb-3 text-sm">Key Features</h4>
                      <div className="flex flex-wrap gap-1">
                        {project.features.slice(0, 3).map((feature, index) => (
                          <Badge 
                            key={index} 
                            variant="outline" 
                            className="border-gold/30 text-gray-300 bg-slate-800/50 text-xs"
                          >
                            {feature}
                          </Badge>
                        ))}
                        {project.features.length > 3 && (
                          <Badge variant="outline" className="border-gold/30 text-gray-300 bg-slate-800/50 text-xs">
                            +{project.features.length - 3} more
                          </Badge>
                        )}
                      </div>
                    </div>

                    <div className="bg-slate-800/50 rounded-lg p-4 mb-6">
                      <div className="flex text-gold mb-2">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-3 h-3 fill-current" />
                        ))}
                      </div>
                      <p className="text-gray-300 text-xs italic leading-relaxed mb-2">
                        "{project.testimonial}"
                      </p>
                      <p className="text-gold text-xs font-medium">
                        - {project.client}
                      </p>
                    </div>

                    <Button className="w-full bg-gradient-to-r from-gold to-yellow-600 text-slate-900 font-semibold hover:from-yellow-600 hover:to-gold transition-all duration-300 group text-sm py-2">
                      View Details
                      <ExternalLink className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
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
          <Button className="bg-gradient-to-r from-gold to-yellow-600 text-slate-900 font-semibold px-8 py-4 text-lg hover:from-yellow-600 hover:to-gold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
            Start Your Project
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
}