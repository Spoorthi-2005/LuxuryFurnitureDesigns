import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function FloatingContact() {
  const [isExpanded, setIsExpanded] = useState(false);

  const openWhatsApp = () => {
    const whatsappMessage = "Hi! I'm interested in learning more about Blackhorse Furnitures and would like to discuss my furniture requirements.";
    const whatsappNumber = "919718978337"; // Using the primary contact number
    const encodedMessage = encodeURIComponent(whatsappMessage);
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  const callDirect = () => {
    window.location.href = "tel:+919718978337";
  };

  return (
    <div className="floating-contact">
      <div className="relative">
        {/* Main Contact Button */}
        <Button 
          className="w-16 h-16 rounded-full bg-gradient-to-r from-gold to-amber-500 shadow-lg hover:shadow-xl hover:scale-105 relative z-10 transition-all duration-300"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          <i className={`fas ${isExpanded ? 'fa-times' : 'fa-comments'} text-xl text-black transition-all duration-300`}></i>
        </Button>

        {/* Expanded Contact Options */}
        <div className={`absolute bottom-20 right-0 space-y-3 transition-all duration-500 ${
          isExpanded ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-4 pointer-events-none'
        }`}>
          {/* WhatsApp Button */}
          <Button 
            onClick={openWhatsApp}
            className="w-14 h-14 rounded-full bg-green-500 text-white shadow-lg hover:bg-green-600 transition-all duration-300 hover:scale-105 flex items-center justify-center"
            title="Chat on WhatsApp"
          >
            <i className="fab fa-whatsapp text-lg"></i>
          </Button>

          {/* Call Button */}
          <Button 
            onClick={callDirect}
            className="w-14 h-14 rounded-full bg-blue-500 text-white shadow-lg hover:bg-blue-600 transition-all duration-300 hover:scale-105 flex items-center justify-center"
            title="Call Now"
          >
            <i className="fas fa-phone text-lg"></i>
          </Button>

          {/* Contact Page Button */}
          <Link href="/contact">
            <Button 
              className="w-14 h-14 rounded-full bg-slate-700 text-white shadow-lg hover:bg-slate-600 transition-all duration-300 hover:scale-105 flex items-center justify-center"
              title="Contact Form"
            >
              <i className="fas fa-envelope text-lg"></i>
            </Button>
          </Link>
        </div>

        {/* Background overlay when expanded */}
        {isExpanded && (
          <div 
            className="fixed inset-0 bg-black bg-opacity-20 z-0"
            onClick={() => setIsExpanded(false)}
          />
        )}
      </div>
    </div>
  );
}