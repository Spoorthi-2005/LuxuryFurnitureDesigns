import { Link } from "wouter";
import { Button } from "@/components/ui/button";

export default function FloatingContact() {
  return (
    <div className="floating-contact">
      <Link href="/contact">
        <Button className="w-16 h-16 rounded-full bg-glow-gold text-white shadow-2xl hover:bg-elegant-brown transition-all duration-300 pulse-gold">
          <i className="fas fa-comments text-xl"></i>
        </Button>
      </Link>
    </div>
  );
}