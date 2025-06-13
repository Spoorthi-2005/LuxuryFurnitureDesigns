import Header from "@/components/header";
import Footer from "@/components/footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import luxuryLobbyImage from "@assets/IMG-20250613-WA0024_1749812797538.jpg";
import premiumBarImage from "@assets/IMG-20250613-WA0025_1749812815133.jpg";
import elegantDiningImage from "@assets/IMG-20250613-WA0026_1749812830979.jpg";
import hospitalityLoungeImage from "@assets/WhatsApp Image 2025-06-13 at 16.31.07_8b6b59a2_1749812856777.jpg";
import luxuryDecorImage from "@assets/WhatsApp Image 2025-06-13 at 16.31.07_8b6b59a2_1749812856777.jpg";
import customBarImage from "@assets/IMG-20250613-WA0023_1749812884813.jpg";

export default function Collections() {
  const collections = [
    {
      id: 1,
      title: "Luxury Hotel Lobbies",
      description: "Sophisticated entrance designs featuring elegant chandeliers, premium marble flooring, custom console tables, and contemporary seating arrangements that create memorable first impressions.",
      image: luxuryLobbyImage,
      alt: "Elegant hotel lobby with chandelier and marble flooring"
    },
    {
      id: 2,
      title: "Premium Bar & Lounge Collections",
      description: "Exquisite bar furniture with rich wooden cabinetry, marble countertops, comfortable high-back stools, and integrated lighting for sophisticated entertainment spaces.",
      image: premiumBarImage,
      alt: "Luxury bar area with wooden cabinetry and marble surfaces"
    },
    {
      id: 3,
      title: "Fine Dining Furniture",
      description: "Contemporary dining spaces featuring premium chairs with upholstered seating, elegant table settings, and sophisticated ambient lighting for exceptional dining experiences.",
      image: elegantDiningImage,
      alt: "Modern dining area with contemporary furniture"
    },
    {
      id: 4,
      title: "Hospitality Lounge Spaces",
      description: "Comfortable lounge furniture with high-back cane chairs, round dining tables, premium upholstery, and carefully curated decor for relaxing hospitality environments.",
      image: hospitalityLoungeImage,
      alt: "Elegant lounge area with cane chairs and dining tables"
    },
    {
      id: 5,
      title: "Custom Bar Solutions",
      description: "Sophisticated bar environments with premium leather seating, marble-topped tables, elegant lighting fixtures, and custom cabinetry for exclusive hospitality venues.",
      image: customBarImage,
      alt: "Upscale bar with leather seating and marble tables"
    },
    {
      id: 6,
      title: "Restaurant & Dining Halls",
      description: "Comprehensive dining solutions with curved ceiling designs, premium wooden elements, elegant table arrangements, and sophisticated lighting for upscale restaurants.",
      image: luxuryDecorImage,
      alt: "Upscale restaurant dining hall with elegant design"
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
                <Card key={collection.id} className="premium-card hover-3d overflow-hidden transition-all duration-500 group shadow-xl luxury-shine">
                  <div className="relative overflow-hidden">
                    <img 
                      src={collection.image} 
                      alt={collection.alt} 
                      className="w-full h-80 object-cover transition-all duration-700 group-hover:scale-110 group-hover:rotate-1 image-luxury image-glossy-enhanced"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-glow-gold/30 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                    <div className="absolute inset-0 bg-gradient-to-br from-champagne/20 to-transparent group-hover:rotate-2 transition-transform duration-700"></div>
                  </div>
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-playfair font-bold text-elegant-brown mb-4">{collection.title}</h3>
                    <p className="text-soft-brown mb-6 leading-relaxed">{collection.description}</p>
                    <Link href="/contact">
                      <Button 
                        variant="ghost" 
                        className="text-elegant-brown border border-elegant-brown hover:bg-elegant-brown hover:text-white transition-all duration-300 font-semibold p-6"
                      >
                        Explore Collection <i className="fas fa-arrow-right ml-2"></i>
                      </Button>
                    </Link>
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
            <Link href="/contact">
              <Button className="bg-elegant-brown text-white px-12 py-4 text-lg font-bold hover:bg-soft-brown transition-colors">
                Schedule Consultation
              </Button>
            </Link>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
}