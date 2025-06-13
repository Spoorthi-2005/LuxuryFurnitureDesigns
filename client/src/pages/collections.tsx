import Header from "@/components/header";
import Footer from "@/components/footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function Collections() {
  const collections = [
    {
      id: 1,
      title: "Sofas",
      description: "Luxurious and comfortable sofas crafted with premium materials, offering exceptional seating solutions for modern living spaces.",
      images: Array(6).fill("/api/placeholder/400/300").map((src, index) => ({
        src: `${src}?sofa=${index + 1}`,
        alt: `Luxury sofa design ${index + 1}`
      }))
    },
    {
      id: 2,
      title: "Arm Chairs",
      description: "Elegant arm chairs combining comfort and sophistication, perfect for creating intimate seating arrangements.",
      images: Array(6).fill("/api/placeholder/400/300").map((src, index) => ({
        src: `${src}?armchair=${index + 1}`,
        alt: `Premium arm chair ${index + 1}`
      }))
    },
    {
      id: 3,
      title: "Beds",
      description: "Exquisite bed designs that transform your bedroom into a luxurious sanctuary of comfort and style.",
      images: Array(6).fill("/api/placeholder/400/300").map((src, index) => ({
        src: `${src}?bed=${index + 1}`,
        alt: `Luxury bed design ${index + 1}`
      }))
    },
    {
      id: 4,
      title: "Dining Tables and Chairs",
      description: "Sophisticated dining sets that create the perfect atmosphere for memorable dining experiences.",
      images: Array(6).fill("/api/placeholder/400/300").map((src, index) => ({
        src: `${src}?dining=${index + 1}`,
        alt: `Dining table and chairs set ${index + 1}`
      }))
    },
    {
      id: 5,
      title: "Consoles",
      description: "Elegant console tables that serve as functional art pieces, perfect for entryways and living spaces.",
      images: Array(6).fill("/api/placeholder/400/300").map((src, index) => ({
        src: `${src}?console=${index + 1}`,
        alt: `Luxury console table ${index + 1}`
      }))
    },
    {
      id: 6,
      title: "Coffee Tables",
      description: "Stunning coffee tables that become the centerpiece of your living room with their exceptional design.",
      images: Array(6).fill("/api/placeholder/400/300").map((src, index) => ({
        src: `${src}?coffee=${index + 1}`,
        alt: `Designer coffee table ${index + 1}`
      }))
    },
    {
      id: 7,
      title: "Centre Tables",
      description: "Beautifully crafted centre tables that add elegance and functionality to any living space.",
      images: Array(6).fill("/api/placeholder/400/300").map((src, index) => ({
        src: `${src}?centre=${index + 1}`,
        alt: `Elegant centre table ${index + 1}`
      }))
    },
    {
      id: 8,
      title: "Pouf and Benches",
      description: "Versatile poufs and benches that provide additional seating while enhancing your interior design.",
      images: Array(6).fill("/api/placeholder/400/300").map((src, index) => ({
        src: `${src}?pouf=${index + 1}`,
        alt: `Luxury pouf and bench ${index + 1}`
      }))
    }
  ];

  return (
    <div className="min-h-screen text-foreground">
      <Header />
      <div className="pt-20">
        {/* Hero Section */}
        <section className="py-20 glass-elegant">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-6xl font-playfair font-bold mb-6 text-gradient-brown">
                Luxury Furniture Collections
              </h1>
              <p className="text-2xl text-dark-elegant leading-relaxed">
                Discover our expertly curated collections of premium furniture, each piece representing 
                the pinnacle of craftsmanship and contemporary design excellence.
              </p>
            </div>
          </div>
        </section>

        {/* Collections Sections */}
        {collections.map((collection, index) => (
          <section 
            key={collection.id} 
            className={`py-16 ${index % 2 === 0 ? 'bg-light-grey' : 'bg-white'}`}
          >
            <div className="container mx-auto px-4">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-playfair font-bold mb-4 text-dark-elegant">
                  {collection.title}
                </h2>
                <p className="text-lg text-medium-grey max-w-3xl mx-auto leading-relaxed">
                  {collection.description}
                </p>
              </div>
              
              {/* Image Grid - 6 images per collection */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                {collection.images.map((image, imageIndex) => (
                  <Card 
                    key={imageIndex} 
                    className="overflow-hidden hover-lift transition-all duration-500 group shadow-lg"
                  >
                    <div className="relative overflow-hidden">
                      <img 
                        src={image.src}
                        alt={image.alt}
                        className="w-full h-64 object-cover transition-all duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                    </div>
                    <CardContent className="p-4">
                      <p className="text-sm text-medium-grey font-medium">
                        {image.alt}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
              
              {/* Collection Action Button */}
              <div className="text-center">
                <Link href="/contact">
                  <Button 
                    variant="outline" 
                    className="text-dark-elegant border-2 border-dark-elegant hover:bg-dark-elegant hover:text-white transition-all duration-300 px-8 py-3 font-semibold"
                  >
                    Explore {collection.title} Collection
                  </Button>
                </Link>
              </div>
            </div>
          </section>
        ))}

        {/* Call to Action */}
        <section className="py-20 bg-dark-elegant">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-playfair font-bold mb-6 text-white">
              Ready to Transform Your Space?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Let our expert designers create bespoke solutions that perfectly complement your lifestyle and aesthetic preferences.
            </p>
            <Link href="/contact">
              <Button className="bg-white text-dark-elegant px-12 py-4 text-lg font-bold hover:bg-gray-100 transition-colors">
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