import { useState } from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import FloatingContact from "@/components/floating-contact";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

// Import unique luxury furniture images
import bedroomLuxury from "@assets/img5_1749793548297.png";
import livingRoomSet from "@assets/img13_1749793557706.png";
import diningTable from "@assets/img20_1749793571212.png";
import wardrobeDesign from "@assets/IMG-20250604-WA0023_1749793593319.jpg";
import kitchenStorage from "@assets/IMG-20250604-WA0038_1749793606717.jpg";
import bathroomDesign from "@assets/image_1749795624306.png";
import officeSpace from "@assets/image_1749796619978.png";
import modernFurniture from "@assets/image_1749797315618.png";
import customShelving from "@assets/image_1749797480863.png";

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const projects = [
    {
      id: 1,
      title: "Luxury Master Bedroom Suite",
      description: "A complete bedroom transformation featuring custom-designed furniture with crystal chandeliers, premium upholstery, and sophisticated lighting creating an opulent sleeping sanctuary.",
      image: bedroomLuxury,
      category: "Bedroom",
      features: ["Custom Chandelier", "Premium Fabrics", "Integrated Lighting"]
    },
    {
      id: 2,
      title: "Modern Living Room Collection",
      description: "Elegant living room setup with tufted sofas, marble coffee tables, and coordinated color palettes creating a sophisticated atmosphere for entertainment and relaxation.",
      image: livingRoomSet,
      category: "Living Room",
      features: ["Tufted Upholstery", "Marble Surfaces", "Color Coordination"]
    },
    {
      id: 3,
      title: "Executive Dining Experience",
      description: "Professional dining space featuring premium dining table with executive chairs and coordinated lighting for corporate environments and formal dining occasions.",
      image: diningTable,
      category: "Dining",
      features: ["Executive Seating", "Premium Materials", "Corporate Design"]
    },
    {
      id: 4,
      title: "Custom Wardrobe Solutions",
      description: "Bespoke wardrobe design with integrated lighting, premium finishes, and smart storage solutions maximizing space efficiency while maintaining aesthetic elegance.",
      image: wardrobeDesign,
      category: "Wardrobe",
      features: ["Integrated LED", "Smart Storage", "Premium Finish"]
    },
    {
      id: 5,
      title: "Contemporary Kitchen Design",
      description: "Modern kitchen cabinet system with glass panels, internal lighting, and sleek hardware creating a culinary workspace that blends functionality with luxury aesthetics.",
      image: kitchenStorage,
      category: "Kitchen",
      features: ["Glass Panels", "Internal Lighting", "Modern Hardware"]
    },
    {
      id: 6,
      title: "Luxury Bathroom Retreat",
      description: "Sophisticated bathroom design featuring premium materials, elegant fixtures, and spa-like ambiance creating a personal sanctuary for relaxation and rejuvenation.",
      image: bathroomDesign,
      category: "Bathroom",
      features: ["Premium Materials", "Spa Design", "Luxury Fixtures"]
    },
    {
      id: 7,
      title: "Professional Office Space",
      description: "Complete office furniture solution featuring executive desks, ergonomic seating, and storage units designed for productivity and professional excellence.",
      image: officeSpace,
      category: "Office",
      features: ["Executive Design", "Ergonomic Solutions", "Professional Finish"]
    },
    {
      id: 8,
      title: "Modern Furniture Collection",
      description: "Contemporary furniture pieces featuring clean lines, premium materials, and sophisticated design elements that embody modern luxury living.",
      image: modernFurniture,
      category: "Modern",
      features: ["Clean Lines", "Premium Materials", "Contemporary Style"]
    },
    {
      id: 9,
      title: "Designer Shelving System",
      description: "Elegant shelving solution with premium wood finish and strategic lighting to showcase decorative items while maximizing storage functionality.",
      image: customShelving,
      category: "Storage",
      features: ["Premium Wood", "Display Lighting", "Custom Design"]
    }
  ];

  const categories = ["All", "Bedroom", "Living Room", "Dining", "Wardrobe", "Kitchen", "Bathroom", "Office", "Modern", "Storage"];
  
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
                        className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110 image-3d image-glossy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-glow-gold/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <div className="absolute top-4 right-4 bg-glow-gold text-white px-3 py-1 rounded-full text-sm font-bold shadow-lg">
                        {project.category}
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-br from-champagne/10 to-transparent"></div>
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
                      <Button className="w-full glossy-btn text-white shadow-lg">
                        View Details
                      </Button>
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