import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import logoImage from "@assets/logo1_1749471245647.png";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Home", path: "/" },
    { label: "Collections", path: "/collections" },
    { label: "Process", path: "/process" },
    { label: "Craftsmanship", path: "/craftsmanship" },
    { label: "Contact", path: "/contact" },
  ];

  return (
    <header className={`fixed w-full top-0 z-50 transition-all duration-300 ${
      isScrolled ? "bg-black shadow-md" : "bg-black/95 backdrop-blur-sm"
    }`}>
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center space-x-3">
            <img 
              src={logoImage} 
              alt="Blackhorse Furnitures Logo" 
              className="w-12 h-12 object-contain"
            />
            <span className="text-2xl font-playfair font-bold text-luxury-gold">
              Blackhorse Furnitures
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className={`text-white hover:text-luxury-gold transition-colors font-medium ${
                  location === item.path ? 'text-luxury-gold' : ''
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Mobile Navigation */}
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <i className="fas fa-bars text-2xl text-white"></i>
              </Button>
            </SheetTrigger>
            <SheetContent className="bg-black border-gray-800">
              <div className="flex flex-col space-y-4 mt-8">
                {navItems.map((item) => (
                  <Link
                    key={item.path}
                    href={item.path}
                    className={`text-left text-white hover:text-luxury-gold transition-colors text-lg ${
                      location === item.path ? 'text-luxury-gold' : ''
                    }`}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
}
