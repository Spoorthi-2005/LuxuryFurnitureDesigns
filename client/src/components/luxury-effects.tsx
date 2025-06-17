import { useEffect, useState } from 'react';

// Luxury Particle System Component
export function LuxuryParticles() {
  const [particles, setParticles] = useState<Array<{
    id: number;
    x: number;
    y: number;
    size: number;
    delay: number;
    duration: number;
  }>>([]);

  useEffect(() => {
    const generateParticles = () => {
      const newParticles = Array.from({ length: 20 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 4 + 2,
        delay: Math.random() * 15,
        duration: Math.random() * 10 + 15,
      }));
      setParticles(newParticles);
    };

    generateParticles();
    const interval = setInterval(generateParticles, 20000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="luxury-particles">
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="particle"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            animationDelay: `${particle.delay}s`,
            animationDuration: `${particle.duration}s`,
          }}
        />
      ))}
    </div>
  );
}

// Luxury Cursor Trail Effect
export function LuxuryCursorTrail() {
  useEffect(() => {
    const trails: HTMLElement[] = [];
    let mouseX = 0;
    let mouseY = 0;

    const createTrail = (x: number, y: number) => {
      const trail = document.createElement('div');
      trail.className = 'cursor-trail';
      trail.style.left = `${x}px`;
      trail.style.top = `${y}px`;
      document.body.appendChild(trail);
      trails.push(trail);

      setTimeout(() => {
        if (trail.parentNode) {
          trail.parentNode.removeChild(trail);
        }
        const index = trails.indexOf(trail);
        if (index > -1) {
          trails.splice(index, 1);
        }
      }, 800);
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      
      if (Math.random() > 0.7) {
        createTrail(mouseX, mouseY);
      }
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      trails.forEach(trail => {
        if (trail.parentNode) {
          trail.parentNode.removeChild(trail);
        }
      });
    };
  }, []);

  return null;
}

// Luxury Loading Spinner
export function LuxurySpinner() {
  return (
    <div className="flex items-center justify-center p-8">
      <div className="luxury-spinner"></div>
    </div>
  );
}

// Premium Floating Action Button
interface FloatingActionButtonProps {
  onClick: () => void;
  children: React.ReactNode;
  className?: string;
}

export function FloatingActionButton({ onClick, children, className = "" }: FloatingActionButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`
        fixed bottom-8 right-8 w-16 h-16 bg-gradient-to-br from-gold via-yellow-400 to-amber-500
        rounded-full shadow-2xl hover:shadow-3xl transition-all duration-500
        flex items-center justify-center text-slate-900 font-bold text-xl
        hover:scale-110 active:scale-95 luxury-glow floating ripple-effect
        border-2 border-gold/30 hover:border-gold/60
        ${className}
      `}
    >
      {children}
    </button>
  );
}

// Luxury Card with Advanced Effects
interface LuxuryCardProps {
  children: React.ReactNode;
  className?: string;
  hover3D?: boolean;
}

export function LuxuryCard({ children, className = "", hover3D = true }: LuxuryCardProps) {
  return (
    <div className={`
      premium-card rounded-2xl p-8 
      ${hover3D ? 'luxury-card-hover' : 'hover-lift'}
      transition-all duration-500 group
      border border-gold/20 hover:border-gold/40
      ${className}
    `}>
      <div className="absolute inset-0 bg-gradient-to-br from-gold/5 via-transparent to-gold/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}

// Shimmer Text Effect Component
interface ShimmerTextProps {
  children: React.ReactNode;
  className?: string;
}

export function ShimmerText({ children, className = "" }: ShimmerTextProps) {
  return (
    <span className={`text-shimmer ${className}`}>
      {children}
    </span>
  );
}

// Luxury Button with Ripple Effect
interface LuxuryButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export function LuxuryButton({ 
  children, 
  onClick, 
  variant = 'primary', 
  size = 'md',
  className = "" 
}: LuxuryButtonProps) {
  const baseClasses = "ripple-effect transition-all duration-300 font-semibold rounded-xl";
  
  const variants = {
    primary: "bg-gradient-to-r from-gold via-yellow-400 to-amber-500 text-slate-900 hover:from-yellow-400 hover:to-gold shadow-lg hover:shadow-xl",
    secondary: "bg-gradient-to-r from-slate-800 to-slate-700 text-gold border border-gold/30 hover:border-gold/60 hover:bg-gradient-to-r hover:from-slate-700 hover:to-slate-600",
    outline: "border-2 border-gold text-gold bg-transparent hover:bg-gold hover:text-slate-900"
  };
  
  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg"
  };

  return (
    <button
      onClick={onClick}
      className={`
        ${baseClasses}
        ${variants[variant]}
        ${sizes[size]}
        ${className}
      `}
    >
      {children}
    </button>
  );
}