import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function Hero() {
  const scrollToCollections = () => {
    const element = document.getElementById("collections");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="pt-20 min-h-screen bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-5xl lg:text-6xl font-playfair font-bold text-deep-black leading-tight">
              Crafting <span className="text-luxury-gold">Luxury</span> Furniture Since Excellence
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Discover our exquisite collection of handcrafted furniture pieces that blend traditional Indian craftsmanship with contemporary design, creating timeless pieces for your home.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/our-story">
                <Button className="bg-luxury-gold text-white px-8 py-4 text-lg font-semibold hover:bg-yellow-600 transition-colors">
                  Learn Our Story
                </Button>
              </Link>
              <Button 
                variant="outline" 
                onClick={scrollToCollections}
                className="border-2 border-luxury-gold text-luxury-gold px-8 py-4 text-lg font-semibold hover:bg-luxury-gold hover:text-white transition-colors"
              >
                View Collections
              </Button>
            </div>
          </div>
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
              alt="Luxury interior design showcase" 
              className="rounded-2xl shadow-2xl w-full h-auto hover-lift transition-all"
            />
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg">
              <div className="text-center">
                <div className="text-3xl font-bold text-luxury-gold">25+</div>
                <div className="text-sm text-gray-600">Years Experience</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
