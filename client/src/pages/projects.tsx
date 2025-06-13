import Header from "@/components/header";
import Footer from "@/components/footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

// Import luxury furniture images
import bedroomLuxury from "@assets/img5_1749793548297.png";
import livingRoomSet from "@assets/img13_1749793557706.png";
import diningTable from "@assets/img20_1749793571212.png";
import wardrobeDesign from "@assets/IMG-20250604-WA0023_1749793593319.jpg";
import kitchenStorage from "@assets/IMG-20250604-WA0038_1749793606717.jpg";
import customShelving from "@assets/IMG-20250604-WA0033_1749474302058.jpg";
import officeSpace from "@assets/IMG-20250604-WA0037_1749474302059.jpg";
import modernFurniture from "@assets/IMG-20250606-WA0034_1749474302060.jpg";

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "Luxury Master Bedroom Suite",
      description: "A complete bedroom transformation featuring custom-designed furniture with crystal chandeliers, premium upholstery, and sophisticated lighting.",
      image: bedroomLuxury,
      category: "Bedroom",
      features: ["Custom Chandelier", "Premium Fabrics", "Integrated Lighting"]
    },
    {
      id: 2,
      title: "Modern Living Room Collection",
      description: "Elegant living room setup with tufted sofas, marble coffee tables, and coordinated color palettes creating a sophisticated atmosphere.",
      image: livingRoomSet,
      category: "Living Room",
      features: ["Tufted Upholstery", "Marble Surfaces", "Color Coordination"]
    },
    {
      id: 3,
      title: "Executive Dining Experience",
      description: "Professional dining space featuring premium dining table with executive chairs and coordinated lighting for corporate environments.",
      image: diningTable,
      category: "Dining",
      features: ["Executive Seating", "Premium Materials", "Corporate Design"]
    },
    {
      id: 4,
      title: "Custom Wardrobe Solutions",
      description: "Bespoke wardrobe design with integrated lighting, premium finishes, and smart storage solutions for modern living.",
      image: wardrobeDesign,
      category: "Storage",
      features: ["Integrated LED", "Smart Storage", "Premium Finish"]
    },
    {
      id: 5,
      title: "Contemporary Kitchen Storage",
      description: "Modern kitchen cabinet system with glass panels, internal lighting, and sleek hardware for luxury kitchen environments.",
      image: kitchenStorage,
      category: "Kitchen",
      features: ["Glass Panels", "Internal Lighting", "Modern Hardware"]
    },
    {
      id: 6,
      title: "Designer Shelving System",
      description: "Elegant shelving solution with premium wood finish and strategic lighting to showcase decorative items and books.",
      image: customShelving,
      category: "Storage",
      features: ["Premium Wood", "Display Lighting", "Custom Design"]
    },
    {
      id: 7,
      title: "Professional Office Space",
      description: "Complete office furniture solution featuring executive desks, ergonomic seating, and storage units for professional environments.",
      image: officeSpace,
      category: "Office",
      features: ["Executive Design", "Ergonomic Solutions", "Professional Finish"]
    },
    {
      id: 8,
      title: "Modern Furniture Collection",
      description: "Contemporary furniture pieces featuring clean lines, premium materials, and sophisticated design elements for modern homes.",
      image: modernFurniture,
      category: "Modern",
      features: ["Clean Lines", "Premium Materials", "Contemporary Style"]
    }
  ];

  const categories = ["All", "Bedroom", "Living Room", "Dining", "Storage", "Kitchen", "Office", "Modern"];

  return (
    <div className="min-h-screen bg-[#2E2E2E] text-white">
      <Header />
      <div className="pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-r from-[#C9B037]/20 to-transparent">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-6xl font-playfair font-bold mb-6 bg-gradient-to-r from-[#C9B037] to-[#D4AF37] bg-clip-text text-transparent">
                Our Luxury Projects
              </h1>
              <p className="text-2xl text-[#F5F5F5] leading-relaxed">
                Discover our portfolio of exceptional furniture creations that showcase the pinnacle of 
                craftsmanship, design excellence, and luxury living.
              </p>
            </div>
          </div>
        </section>

        {/* Category Filter */}
        <section className="py-8 bg-gray-800/20">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant="outline"
                  className="border-[#C9B037] text-[#C9B037] hover:bg-[#C9B037] hover:text-black transition-all duration-300"
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
            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {projects.map((project) => (
                <Card key={project.id} className="bg-gray-800/30 border-gray-700 overflow-hidden hover:shadow-2xl transition-all duration-500 group">
                  <CardContent className="p-0">
                    <div className="relative overflow-hidden">
                      <img 
                        src={project.image} 
                        alt={project.title} 
                        className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <div className="absolute top-4 right-4 bg-[#C9B037] text-black px-3 py-1 rounded-full text-sm font-bold">
                        {project.category}
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-playfair font-bold text-[#C9B037] mb-3">{project.title}</h3>
                      <p className="text-gray-300 mb-4 text-sm leading-relaxed">{project.description}</p>
                      <div className="space-y-2 mb-4">
                        {project.features.map((feature, index) => (
                          <div key={index} className="flex items-center">
                            <i className="fas fa-check text-[#C9B037] mr-2 text-xs"></i>
                            <span className="text-gray-400 text-sm">{feature}</span>
                          </div>
                        ))}
                      </div>
                      <Button className="w-full bg-[#C9B037] text-black hover:bg-[#D4AF37] transition-colors">
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
        <section className="py-20 bg-gradient-to-r from-[#C9B037]/20 to-transparent">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-playfair font-bold mb-6 text-[#C9B037]">Ready to Create Your Dream Space?</h2>
            <p className="text-xl text-[#F5F5F5] mb-8 max-w-2xl mx-auto">
              Let us bring your vision to life with our bespoke furniture solutions and exceptional craftsmanship.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link href="/contact">
                <Button className="bg-[#C9B037] text-black px-12 py-4 text-lg font-bold hover:bg-[#D4AF37] transition-colors">
                  Schedule Consultation
                </Button>
              </Link>
              <Link href="/collections">
                <Button variant="outline" className="border-2 border-[#C9B037] text-[#C9B037] px-12 py-4 text-lg font-bold hover:bg-[#C9B037] hover:text-black transition-colors">
                  Browse Collections
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