import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function Collections() {
  const collections = [
    {
      id: 1,
      title: "Bedroom Collection",
      description: "Luxurious bedroom furniture crafted with precision and comfort in mind.",
      image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
      alt: "Modern bedroom furniture collection"
    },
    {
      id: 2,
      title: "Living Room Collection",
      description: "Elegant living room pieces that create perfect gathering spaces.",
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
      alt: "Living room furniture collection"
    },
    {
      id: 3,
      title: "Dining Collection",
      description: "Sophisticated dining furniture for memorable family moments.",
      image: "https://images.unsplash.com/photo-1449247709967-d4461a6a6103?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
      alt: "Dining room furniture collection"
    },
    {
      id: 4,
      title: "Office Collection",
      description: "Professional office furniture designed for productivity and style.",
      image: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
      alt: "Office furniture collection"
    },
    {
      id: 5,
      title: "Curtains & Fabrics",
      description: "Premium curtains and fabric solutions for elegant interiors.",
      image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
      alt: "Curtains and fabric collection"
    },
    {
      id: 6,
      title: "Wall Coverings",
      description: "Transform your spaces with our premium wall covering solutions.",
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
      alt: "Wall coverings collection"
    }
  ];

  return (
    <section id="collections" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-playfair font-bold text-deep-black mb-4">Our Collections</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Explore our carefully curated furniture collections, each piece telling its own story of craftsmanship and design excellence.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {collections.map((collection) => (
            <Card key={collection.id} className="overflow-hidden hover:shadow-xl transition-all duration-300 hover-lift">
              <div className="relative overflow-hidden">
                <img 
                  src={collection.image} 
                  alt={collection.alt} 
                  className="w-full h-64 object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-deep-black mb-2">{collection.title}</h3>
                <p className="text-gray-600 mb-4">{collection.description}</p>
                <Button 
                  variant="ghost" 
                  className="text-luxury-gold font-semibold hover:text-yellow-600 transition-colors p-0"
                >
                  View Collection <i className="fas fa-arrow-right ml-2"></i>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
