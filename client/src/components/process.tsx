export default function Process() {
  const processSteps = [
    {
      id: 1,
      title: "Designing",
      description: "Our expert designers work closely with you to create custom furniture that perfectly matches your vision and space requirements.",
      image: "https://images.unsplash.com/photo-1560472355-536de3962603?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=200",
      alt: "Interior design consultation process"
    },
    {
      id: 2,
      title: "Carpentry",
      description: "Skilled craftsmen use traditional techniques combined with modern tools to shape and construct the wooden framework of your furniture.",
      image: "https://images.unsplash.com/photo-1604709177225-055f99402ea3?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=200",
      alt: "Carpentry workshop craftsmanship"
    },
    {
      id: 3,
      title: "Foaming",
      description: "Premium quality foam is precisely cut and shaped to provide optimal comfort and support for seating and bedding furniture.",
      image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=200",
      alt: "Foam cutting and shaping process"
    },
    {
      id: 4,
      title: "Upholstery",
      description: "Expert upholsterers carefully apply fabrics and materials, ensuring perfect fit, finish, and durability for long-lasting beauty.",
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=200",
      alt: "Professional upholstery work"
    },
    {
      id: 5,
      title: "Polishing",
      description: "The final surface treatment brings out the natural beauty of wood grain while providing protection and a lustrous finish.",
      image: "https://images.unsplash.com/photo-1604709177225-055f99402ea3?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=200",
      alt: "Furniture polishing and finishing"
    },
    {
      id: 6,
      title: "Delivery",
      description: "Our professional team carefully delivers and installs your furniture, ensuring it arrives in perfect condition and is properly set up.",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=200",
      alt: "Professional furniture delivery service"
    }
  ];

  return (
    <section id="process" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-playfair font-bold text-deep-black mb-4">Our Process</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            From concept to creation, we follow a meticulous 6-step process to ensure every piece meets our highest standards of quality and craftsmanship.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {processSteps.map((step) => (
            <div key={step.id} className="text-center group">
              <div className="relative mb-6">
                <div className="w-16 h-16 bg-luxury-gold rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <span className="text-white font-bold text-xl">{step.id}</span>
                </div>
                <img 
                  src={step.image} 
                  alt={step.alt} 
                  className="w-full h-48 object-cover rounded-lg shadow-lg hover-lift transition-all"
                />
              </div>
              <h3 className="text-xl font-semibold text-deep-black mb-2">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
