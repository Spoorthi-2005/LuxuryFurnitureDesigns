import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function LuxuryFeatures() {
  const [activeFeature, setActiveFeature] = useState(0);

  const features = [
    {
      icon: "fas fa-magic",
      title: "Bespoke Design",
      description: "Every piece is uniquely crafted to your specifications",
      details: "Our master designers work closely with you to create furniture that perfectly matches your vision, lifestyle, and space requirements."
    },
    {
      icon: "fas fa-leaf",
      title: "Sustainable Materials",
      description: "Eco-friendly luxury without compromise",
      details: "We source only the finest sustainable woods and materials, ensuring your furniture is both luxurious and environmentally responsible."
    },
    {
      icon: "fas fa-shipping-fast",
      title: "White Glove Service",
      description: "Professional delivery and installation",
      details: "Our specialized team handles every aspect of delivery, from careful transportation to precise installation and final styling."
    },
    {
      icon: "fas fa-certificate",
      title: "Lifetime Warranty",
      description: "Confidence in our craftsmanship",
      details: "We stand behind every piece with comprehensive warranty coverage, ensuring your investment is protected for years to come."
    }
  ];

  return (
    <section className="py-20 bg-section">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-playfair font-bold mb-6 text-elegant-brown animated-gradient">
            Luxury Redefined
          </h2>
          <p className="text-xl text-soft-brown max-w-3xl mx-auto floating">
            Experience unparalleled quality and service that sets us apart in the luxury furniture industry.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            {features.map((feature, index) => (
              <Card
                key={index}
                className={`premium-card cursor-pointer transition-all duration-300 ${
                  activeFeature === index ? 'luxury-glow border-glow-gold' : 'hover-3d'
                }`}
                onClick={() => setActiveFeature(index)}
              >
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center shadow-lg ${
                      activeFeature === index ? 'bg-glow-gold' : 'bg-elegant-brown'
                    } transition-colors duration-300`}>
                      <i className={`${feature.icon} text-white text-lg`}></i>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-playfair font-bold text-elegant-brown mb-2">
                        {feature.title}
                      </h3>
                      <p className="text-soft-brown">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="lg:pl-8">
            <Card className="glass-morphism shadow-2xl luxury-shine">
              <CardContent className="p-8">
                <div className="w-20 h-20 bg-glow-gold rounded-2xl flex items-center justify-center mx-auto mb-6 luxury-glow">
                  <i className={`${features[activeFeature].icon} text-white text-3xl`}></i>
                </div>
                <h3 className="text-2xl font-playfair font-bold text-elegant-brown mb-4 text-center">
                  {features[activeFeature].title}
                </h3>
                <p className="text-lg text-soft-brown leading-relaxed text-center mb-6">
                  {features[activeFeature].details}
                </p>
                <div className="text-center">
                  <Button className="glossy-btn px-8 py-3 text-white">
                    Learn More
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}