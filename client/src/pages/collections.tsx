import Header from "@/components/header";
import Footer from "@/components/footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import kitchenImage from "@assets/IMG-20250604-WA0017_1749474302053.jpg";
import bathroomImage from "@assets/IMG-20250604-WA0021_1749474302056.jpg";
import wardrobeImage from "@assets/IMG-20250604-WA0029_1749474302058.jpg";
import livingRoomImage from "@assets/img35_1749474302052.png";
import modernKitchenImage from "@assets/IMG-20250604-WA0025_1749474302057.jpg";
import luxuryBathroomImage from "@assets/IMG-20250604-WA0033_1749474302058.jpg";

export default function Collections() {
  const collections = [
    {
      id: 1,
      title: "Exquisite Kitchen Solutions",
      description: "Masterfully crafted kitchen interiors that seamlessly blend functionality with aesthetic grandeur, featuring premium materials and innovative storage solutions.",
      image: kitchenImage,
      alt: "Luxury modular kitchen with sophisticated design elements"
    },
    {
      id: 2,
      title: "Opulent Living Spaces",
      description: "Magnificently designed living room collections that epitomize comfort and elegance, creating harmonious spaces for relaxation and entertainment.",
      image: livingRoomImage,
      alt: "Contemporary living room furniture with artistic accents"
    },
    {
      id: 3,
      title: "Sophisticated Bathroom Retreats",
      description: "Luxuriously appointed bathroom designs featuring premium marble finishes and contemporary fixtures for the ultimate sanctuary experience.",
      image: bathroomImage,
      alt: "Premium bathroom interior with marble walls"
    },
    {
      id: 4,
      title: "Bespoke Wardrobe Systems",
      description: "Meticulously designed storage solutions that maximize space while maintaining aesthetic appeal through innovative design and premium materials.",
      image: wardrobeImage,
      alt: "Custom built wardrobe with modern finishes"
    },
    {
      id: 5,
      title: "Contemporary Kitchen Excellence",
      description: "State-of-the-art kitchen designs that showcase modern functionality with timeless elegance, perfect for the discerning homeowner.",
      image: modernKitchenImage,
      alt: "Modern kitchen design with premium appliances"
    },
    {
      id: 6,
      title: "Luxury Bathroom Concepts",
      description: "Sophisticated bathroom designs featuring exquisite marble work and contemporary fixtures that transform daily routines into luxurious experiences.",
      image: luxuryBathroomImage,
      alt: "Luxury bathroom with marble surfaces and modern fixtures"
    }
  ];

  return (
    <div className="min-h-screen text-foreground">
      <Header />
      <div className="pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-section">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-6xl font-playfair font-bold mb-6 text-gradient-brown">
                Extraordinary Collections
              </h1>
              <p className="text-2xl text-soft-brown leading-relaxed">
                Discover our meticulously curated collections of premium furniture and interior solutions, 
                each piece representing the pinnacle of Indian craftsmanship and contemporary design excellence.
              </p>
            </div>
          </div>
        </section>

        {/* Collections Grid */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {collections.map((collection) => (
                <Card key={collection.id} className="bg-card border-champagne/40 overflow-hidden hover:shadow-2xl transition-all duration-500 hover-lift group">
                  <div className="relative overflow-hidden">
                    <img 
                      src={collection.image} 
                      alt={collection.alt} 
                      className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-transparent-brown opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-playfair font-bold text-elegant-brown mb-4">{collection.title}</h3>
                    <p className="text-soft-brown mb-6 leading-relaxed">{collection.description}</p>
                    <Button 
                      variant="ghost" 
                      className="text-elegant-brown border border-elegant-brown hover:bg-elegant-brown hover:text-white transition-all duration-300 font-semibold p-6"
                    >
                      Explore Collection <i className="fas fa-arrow-right ml-2"></i>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 bg-section">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-playfair font-bold mb-6 text-elegant-brown">Ready to Transform Your Space?</h2>
            <p className="text-xl text-soft-brown mb-8 max-w-2xl mx-auto">
              Let our expert designers create bespoke solutions that perfectly complement your lifestyle and aesthetic preferences.
            </p>
            <Button className="bg-elegant-brown text-white px-12 py-4 text-lg font-bold hover:bg-soft-brown transition-colors">
              Schedule Consultation
            </Button>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
}