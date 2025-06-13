import { useState } from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import FloatingContact from "@/components/floating-contact";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

// Import unique luxury hospitality furniture images
import project1Image from "@assets/IMG-20250613-WA0024_1749812797538.jpg";
import project2Image from "@assets/IMG-20250613-WA0025_1749812815133.jpg";
import project3Image from "@assets/IMG-20250613-WA0026_1749812830979.jpg";
import project4Image from "@assets/WhatsApp Image 2025-06-13 at 16.31.07_8b6b59a2_1749812856777.jpg";
import project5Image from "@assets/IMG-20250613-WA0023_1749812884813.jpg";
import project6Image from "@assets/IMG-20250613-WA0028_1749812922793.jpg";
import project7Image from "@assets/WhatsApp Image 2025-06-13 at 16.29.47_a47fa735_1749813023915.jpg";
import project8Image from "@assets/IMG-20250604-WA0023_1749793593319.jpg";
import project9Image from "@assets/IMG-20250604-WA0038_1749793606717.jpg";

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const projects = [
    {
      id: 1,
      title: "Grand Hotel Lobby Design",
      description: "Sophisticated entrance featuring crystal chandeliers, premium marble flooring, elegant console tables, and contemporary seating arrangements creating memorable first impressions for luxury hotels.",
      image: project1Image,
      category: "Hospitality",
      features: ["Crystal Chandelier", "Marble Flooring", "Custom Console Tables"]
    },
    {
      id: 2,
      title: "Premium Bar & Entertainment Space",
      description: "Upscale bar featuring rich wooden cabinetry, marble surfaces, comfortable high-back stools, and integrated lighting systems for sophisticated entertainment venues.",
      image: project2Image,
      category: "Bar & Lounge",
      features: ["Wooden Cabinetry", "Marble Countertops", "Integrated Lighting"]
    },
    {
      id: 3,
      title: "Contemporary Dining Experience",
      description: "Modern dining space with premium upholstered chairs, elegant table settings, and sophisticated ambient lighting creating exceptional dining experiences for restaurants.",
      image: project3Image,
      category: "Restaurant",
      features: ["Premium Upholstery", "Ambient Lighting", "Contemporary Design"]
    },
    {
      id: 4,
      title: "Hospitality Lounge Collection",
      description: "Elegant lounge furniture featuring high-back cane chairs, round dining tables, premium upholstery, and carefully curated decor for comfortable hospitality environments.",
      image: project4Image,
      category: "Lounge",
      features: ["Cane Furniture", "Premium Upholstery", "Round Tables"]
    },
    {
      id: 5,
      title: "Luxury Bar Environment",
      description: "Sophisticated bar design with premium leather seating, marble-topped tables, elegant lighting fixtures, and custom cabinetry for exclusive hospitality venues.",
      image: project5Image,
      category: "Bar & Lounge",
      features: ["Leather Seating", "Marble Tables", "Custom Cabinetry"]
    },
    {
      id: 6,
      title: "Fine Dining Restaurant",
      description: "Comprehensive restaurant design featuring curved ceiling elements, premium wooden fixtures, elegant table arrangements, and sophisticated lighting for upscale dining.",
      image: project6Image,
      category: "Restaurant",
      features: ["Curved Ceilings", "Wooden Elements", "Premium Lighting"]
    },
    {
      id: 7,
      title: "Modern Dining Experience",
      description: "Contemporary dining space with elegant chairs, premium table settings, natural lighting, and sophisticated decor creating exceptional guest experiences.",
      image: project7Image,
      category: "Restaurant",
      features: ["Contemporary Chairs", "Natural Lighting", "Premium Settings"]
    },
    {
      id: 8,
      title: "Luxury Interior Design",
      description: "Complete interior transformation featuring marble accents, elegant lighting solutions, premium furniture arrangements, and sophisticated color coordination.",
      image: project8Image,
      category: "Hospitality",
      features: ["Marble Accents", "Elegant Lighting", "Premium Arrangements"]
    },
    {
      id: 9,
      title: "Executive Hospitality Suite",
      description: "High-end hospitality furniture with luxury finishes, contemporary design elements, and premium materials creating memorable experiences for distinguished guests.",
      image: project9Image,
      category: "Hospitality",
      features: ["Luxury Finishes", "Contemporary Design", "Premium Materials"]
    }
  ];

  const categories = ["All", "Hospitality", "Bar & Lounge", "Restaurant", "Lounge"];
  
  const filteredProjects = selectedCategory === "All" 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  return (
    <div className="min-h-screen text-foreground">
      <Header />
      <div className="pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-section">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-6xl font-playfair font-bold mb-6 animated-gradient">
                Our Luxury Projects
              </h1>
              <p className="text-2xl text-soft-brown leading-relaxed floating">
                Discover our portfolio of exceptional furniture creations that showcase the pinnacle of 
                craftsmanship, design excellence, and luxury living.
              </p>
            </div>
          </div>
        </section>

        {/* Category Filter */}
        <section className="py-8 bg-section">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
                <Button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  variant={selectedCategory === category ? "default" : "outline"}
                  className={`transition-all duration-300 ${
                    selectedCategory === category
                      ? 'bg-glow-gold text-white shadow-lg'
                      : 'border-elegant-brown text-elegant-brown hover:bg-elegant-brown hover:text-white'
                  }`}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-8">
              <p className="text-lg text-soft-brown">
                Showing {filteredProjects.length} {selectedCategory === "All" ? "projects" : selectedCategory.toLowerCase() + " projects"}
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project) => (
                <Card key={project.id} className="premium-card hover-3d overflow-hidden transition-all duration-500 group shadow-xl luxury-shine">
                  <CardContent className="p-0">
                    <div className="relative overflow-hidden">
                      <img 
                        src={project.image} 
                        alt={project.title} 
                        className="w-full h-64 object-cover transition-all duration-700 group-hover:scale-110 group-hover:rotate-2 image-luxury image-glossy-enhanced"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-glow-gold/30 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                      <div className="absolute top-4 right-4 bg-gradient-to-r from-glow-gold to-elegant-brown text-white px-4 py-2 rounded-full text-sm font-bold shadow-xl transform group-hover:scale-110 transition-transform duration-300">
                        {project.category}
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-br from-champagne/20 to-transparent group-hover:rotate-1 transition-transform duration-700"></div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-playfair font-bold text-elegant-brown mb-3">{project.title}</h3>
                      <p className="text-soft-brown mb-4 text-sm leading-relaxed">{project.description}</p>
                      <div className="space-y-2 mb-4">
                        {project.features.map((feature, index) => (
                          <div key={index} className="flex items-center">
                            <i className="fas fa-check text-glow-gold mr-2 text-xs"></i>
                            <span className="text-soft-brown text-sm">{feature}</span>
                          </div>
                        ))}
                      </div>
                      <Link href="/contact">
                        <Button className="w-full glossy-btn text-white shadow-lg">
                          View Details
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 bg-section">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-playfair font-bold mb-6 text-elegant-brown">Ready to Create Your Dream Space?</h2>
            <p className="text-xl text-soft-brown mb-8 max-w-2xl mx-auto">
              Let us bring your vision to life with our bespoke furniture solutions and exceptional craftsmanship.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link href="/contact">
                <Button className="bg-glow-gold text-white px-12 py-4 text-lg font-bold hover:bg-elegant-brown transition-colors shadow-lg">
                  Schedule Consultation
                </Button>
              </Link>
              <Link href="/collections">
                <Button variant="outline" className="border-2 border-elegant-brown text-elegant-brown px-12 py-4 text-lg font-bold hover:bg-elegant-brown hover:text-white transition-colors">
                  Browse Collections
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </div>
      
      <FloatingContact />
      <Footer />
    </div>
  );
}