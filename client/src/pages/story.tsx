import Header from "@/components/header";
import Footer from "@/components/footer";
import { Card, CardContent } from "@/components/ui/card";

export default function Story() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <div className="pt-20 min-h-screen">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-5xl font-playfair font-bold text-deep-black mb-6">Our Story</h1>
              <p className="text-xl text-gray-600">The journey of craftsmanship, passion, and excellence</p>
            </div>

            <div className="space-y-12">
              <Card className="overflow-hidden">
                <CardContent className="p-8">
                  <div className="grid lg:grid-cols-2 gap-8 items-center">
                    <div>
                      <h2 className="text-3xl font-playfair font-bold text-deep-black mb-4">Founded on Excellence</h2>
                      <p className="text-gray-600 mb-4">
                        Blackhorse Furnitures was born from a vision to blend traditional Indian craftsmanship with contemporary design. 
                        Our journey began with a simple belief: every piece of furniture should tell a story of quality, 
                        durability, and artistic excellence.
                      </p>
                      <p className="text-gray-600">
                        With over 25 years of experience in the furniture industry, we have established ourselves as 
                        trusted creators of luxury furniture that transforms spaces into havens of comfort and style.
                      </p>
                    </div>
                    <div>
                      <img 
                        src="https://images.unsplash.com/photo-1604709177225-055f99402ea3?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400" 
                        alt="Traditional craftsmanship" 
                        className="w-full h-80 object-cover rounded-lg shadow-lg"
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="overflow-hidden">
                <CardContent className="p-8">
                  <div className="grid lg:grid-cols-2 gap-8 items-center">
                    <div className="lg:order-2">
                      <h2 className="text-3xl font-playfair font-bold text-deep-black mb-4">Our Mission</h2>
                      <p className="text-gray-600 mb-4">
                        Led by design consultant <strong>Diksha Shringi</strong>, our team is dedicated to creating 
                        furniture that not only serves functional purposes but also enhances the aesthetic appeal 
                        of your living and working spaces.
                      </p>
                      <p className="text-gray-600">
                        We believe in sustainable practices, quality materials, and time-honored techniques that 
                        ensure each piece we create becomes a cherished part of your home for generations to come.
                      </p>
                    </div>
                    <div className="lg:order-1">
                      <img 
                        src="https://images.unsplash.com/photo-1560472355-536de3962603?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400" 
                        alt="Design consultation" 
                        className="w-full h-80 object-cover rounded-lg shadow-lg"
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-luxury-gold text-white overflow-hidden">
                <CardContent className="p-8 text-center">
                  <h2 className="text-3xl font-playfair font-bold mb-4">Our Promise</h2>
                  <p className="text-lg mb-6 max-w-3xl mx-auto">
                    Every piece we create carries our commitment to excellence. From the initial design consultation 
                    to the final delivery, we ensure that your furniture exceeds expectations in quality, 
                    craftsmanship, and beauty.
                  </p>
                  <div className="grid md:grid-cols-3 gap-8 mt-8">
                    <div>
                      <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                        <i className="fas fa-award text-luxury-gold text-2xl"></i>
                      </div>
                      <h3 className="text-xl font-semibold mb-2">Quality Assured</h3>
                      <p>Premium materials and meticulous craftsmanship</p>
                    </div>
                    <div>
                      <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                        <i className="fas fa-users text-luxury-gold text-2xl"></i>
                      </div>
                      <h3 className="text-xl font-semibold mb-2">Customer First</h3>
                      <p>Personalized service and attention to detail</p>
                    </div>
                    <div>
                      <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                        <i className="fas fa-leaf text-luxury-gold text-2xl"></i>
                      </div>
                      <h3 className="text-xl font-semibold mb-2">Sustainable</h3>
                      <p>Eco-friendly practices and responsible sourcing</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
