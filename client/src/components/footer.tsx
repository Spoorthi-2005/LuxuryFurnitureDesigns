import { Link } from "wouter";

export default function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const quickLinks = [
    { label: "Home", id: "home" },
    { label: "Collections", id: "collections" },
    { label: "Our Process", id: "process" },
    { label: "Craftsmanship", id: "craftsmanship" },
  ];

  const services = [
    "Custom Furniture",
    "Interior Design", 
    "Curtains & Fabrics",
    "Wall Coverings"
  ];

  const socialLinks = [
    { icon: "fab fa-instagram", href: "https://www.instagram.com/blackhorsefurnitures/" },
    { icon: "fab fa-linkedin", href: "https://www.linkedin.com/in/amar-chauhan-29187228?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" },
    { icon: "fab fa-youtube", href: "https://youtu.be/3ewXDG1TG8c?si=WxaqlgpeIJKprN8t" },
    { icon: "fab fa-whatsapp", href: "https://wa.me/919718978337" }
  ];

  return (
    <footer className="bg-gradient-to-br from-luxury-pearl to-warm-cream text-elegant-brown py-12 border-t border-champagne/50">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-elegant-brown rounded-full flex items-center justify-center shadow-lg">
                <i className="fas fa-chair text-white text-sm"></i>
              </div>
              <span className="text-xl font-playfair font-bold text-elegant-brown">Blackhorse Furnitures</span>
            </Link>
            <p className="text-soft-brown mb-4">
              Crafting luxury furniture with traditional Indian craftsmanship and contemporary design since excellence.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link, index) => (
                <a 
                  key={index}
                  href={link.href} 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-soft-brown hover:text-elegant-brown transition-all duration-300 hover:scale-110 luxury-glow"
                >
                  <i className={`${link.icon} text-xl`}></i>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-elegant-brown">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-soft-brown hover:text-elegant-brown transition-colors cursor-pointer"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-elegant-brown">Services</h4>
            <ul className="space-y-2">
              {services.map((service, index) => (
                <li key={index}>
                  <span className="text-soft-brown hover:text-elegant-brown transition-colors cursor-pointer">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-elegant-brown">Contact</h4>
            <p className="text-soft-brown mb-2">
              <span className="font-semibold text-elegant-brown">Diksha Shringi</span><br />
              Design Consultant
            </p>
            <p className="text-soft-brown text-sm mb-4">
              Plot No.B, Ground Floor, Kh No.236, Road No.3, Village Ghitorni, New Delhi-110030
            </p>
            <p className="text-soft-brown">
              <i className="fas fa-phone mr-2"></i>+919718978337<br />
              <i className="fas fa-envelope mr-2"></i>dikshas2591@gmail.com
            </p>
          </div>
        </div>

        <div className="border-t border-champagne/30 mt-8 pt-8 text-center">
          <p className="text-soft-brown">
            &copy; 2020 Blackhorse Furnitures. All rights reserved. | Crafted with passion in India
          </p>
        </div>
      </div>
    </footer>
  );
}
