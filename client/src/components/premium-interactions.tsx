import { useEffect, useState } from 'react';
import { Button } from "@/components/ui/button";

// Premium Parallax Background Component
export function PremiumParallax({ children, intensity = 0.5 }: { 
  children: React.ReactNode; 
  intensity?: number; 
}) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * intensity;
      const y = (e.clientY / window.innerHeight - 0.5) * intensity;
      setMousePosition({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [intensity]);

  return (
    <div 
      className="relative transition-transform duration-300 ease-out"
      style={{
        transform: `translate3d(${mousePosition.x * 20}px, ${mousePosition.y * 20}px, 0)`
      }}
    >
      {children}
    </div>
  );
}

// Luxury Tilt Effect Component
export function LuxuryTilt({ children, maxTilt = 15 }: { 
  children: React.ReactNode; 
  maxTilt?: number; 
}) {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    const tiltX = ((e.clientY - centerY) / (rect.height / 2)) * maxTilt;
    const tiltY = ((e.clientX - centerX) / (rect.width / 2)) * -maxTilt;
    
    setTilt({ x: tiltX, y: tiltY });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="transition-transform duration-300 ease-out"
      style={{
        transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) translateZ(20px)`,
        transformStyle: 'preserve-3d'
      }}
    >
      {children}
    </div>
  );
}

// Premium Magnetic Button Effect
export function MagneticButton({ 
  children, 
  className = "",
  onClick,
  strength = 0.5 
}: { 
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  strength?: number;
}) {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    const deltaX = (e.clientX - centerX) * strength;
    const deltaY = (e.clientY - centerY) * strength;
    
    setPosition({ x: deltaX, y: deltaY });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  return (
    <Button
      className={`transition-transform duration-200 ease-out ripple-effect ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      style={{
        transform: `translate3d(${position.x}px, ${position.y}px, 0)`
      }}
    >
      {children}
    </Button>
  );
}

// Luxury Reveal Animation
export function LuxuryReveal({ 
  children, 
  delay = 0,
  direction = 'up' 
}: { 
  children: React.ReactNode;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
}) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  const getTransform = () => {
    if (isVisible) return 'translate3d(0, 0, 0) scale(1)';
    
    switch (direction) {
      case 'up': return 'translate3d(0, 60px, 0) scale(0.95)';
      case 'down': return 'translate3d(0, -60px, 0) scale(0.95)';
      case 'left': return 'translate3d(-60px, 0, 0) scale(0.95)';
      case 'right': return 'translate3d(60px, 0, 0) scale(0.95)';
      default: return 'translate3d(0, 60px, 0) scale(0.95)';
    }
  };

  return (
    <div
      className="transition-all duration-1000 ease-out"
      style={{
        opacity: isVisible ? 1 : 0,
        transform: getTransform()
      }}
    >
      {children}
    </div>
  );
}

// Premium Floating Elements
export function FloatingOrbs() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {Array.from({ length: 8 }).map((_, i) => (
        <div
          key={i}
          className="absolute w-4 h-4 bg-gradient-to-br from-gold/30 to-amber-500/20 rounded-full blur-sm"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animation: `float ${8 + Math.random() * 4}s ease-in-out infinite`,
            animationDelay: `${Math.random() * 5}s`
          }}
        />
      ))}
    </div>
  );
}

// Luxury Glass Morphism Card
export function GlassMorphCard({ 
  children, 
  className = "",
  blur = 25 
}: { 
  children: React.ReactNode;
  className?: string;
  blur?: number;
}) {
  return (
    <div 
      className={`relative backdrop-blur-${blur} bg-white/[0.08] border border-white/20 rounded-2xl shadow-2xl ${className}`}
      style={{
        backdropFilter: `blur(${blur}px)`,
        background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05))'
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-gold/5 via-transparent to-amber-500/5 rounded-2xl"></div>
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}

// Premium Loading Animation
export function PremiumLoader() {
  return (
    <div className="flex items-center justify-center p-8">
      <div className="relative">
        <div className="w-16 h-16 border-4 border-gold/20 rounded-full animate-spin"></div>
        <div className="absolute inset-0 w-16 h-16 border-4 border-transparent border-t-gold rounded-full animate-spin"></div>
        <div className="absolute inset-2 w-12 h-12 border-4 border-transparent border-t-amber-400 rounded-full animate-spin" style={{animationDirection: 'reverse'}}></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-2 h-2 bg-gold rounded-full animate-pulse"></div>
        </div>
      </div>
    </div>
  );
}

// Luxury Scroll Progress Indicator
export function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const updateProgress = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrollTop / docHeight) * 100;
      setProgress(progress);
    };

    window.addEventListener('scroll', updateProgress);
    return () => window.removeEventListener('scroll', updateProgress);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-1 bg-slate-800/50 z-50">
      <div 
        className="h-full bg-gradient-to-r from-gold via-amber-400 to-gold transition-all duration-200 shadow-lg shadow-gold/30"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}