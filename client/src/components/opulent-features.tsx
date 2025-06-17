import { useState, useEffect } from 'react';
import { MessageSquare, Phone, Mail, Star, Crown, Gem, Award } from 'lucide-react';
import { FloatingActionButton } from '@/components/luxury-effects';

// Premium Floating Menu System
export function OpulentFloatingMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const menuItems = [
    { 
      icon: MessageSquare, 
      label: 'WhatsApp',
      color: 'from-green-500 to-green-600',
      action: () => window.open('https://wa.me/1234567890', '_blank')
    },
    { 
      icon: Phone, 
      label: 'Call Us',
      color: 'from-blue-500 to-blue-600',
      action: () => window.open('tel:+1234567890')
    },
    { 
      icon: Mail, 
      label: 'Email',
      color: 'from-purple-500 to-purple-600',
      action: () => window.open('mailto:info@blackhorsefurnitures.com')
    },
    { 
      icon: MessageSquare, 
      label: 'Chat',
      color: 'from-indigo-500 to-indigo-600',
      action: () => console.log('Open chat')
    }
  ];

  return (
    <div className="fixed bottom-8 right-8 z-50">
      {/* Menu Items */}
      {isOpen && (
        <div className="absolute bottom-20 right-0 space-y-4">
          {menuItems.map((item, index) => (
            <div
              key={item.label}
              className="flex items-center space-x-3 transform transition-all duration-500 ease-out"
              style={{
                transform: `translateY(${isOpen ? 0 : 50}px) scale(${isOpen ? 1 : 0.8})`,
                opacity: isOpen ? 1 : 0,
                transitionDelay: `${index * 100}ms`
              }}
            >
              <span className="bg-slate-900/90 text-white px-3 py-2 rounded-lg text-sm font-medium backdrop-blur-sm border border-gold/20">
                {item.label}
              </span>
              <button
                onClick={item.action}
                className={`w-12 h-12 bg-gradient-to-br ${item.color} rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 flex items-center justify-center text-white hover:scale-110 active:scale-95 border-2 border-white/20`}
              >
                <item.icon size={20} />
              </button>
            </div>
          ))}
        </div>
      )}

      {/* Main Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`
          w-16 h-16 bg-gradient-to-br from-gold via-yellow-400 to-amber-500
          rounded-full shadow-2xl hover:shadow-3xl transition-all duration-500
          flex items-center justify-center text-slate-900 font-bold text-xl
          hover:scale-110 active:scale-95 luxury-glow floating
          border-2 border-gold/30 hover:border-gold/60 ripple-effect
          ${isOpen ? 'rotate-45' : 'rotate-0'}
        `}
      >
        {isOpen ? <Crown size={24} /> : <MessageSquare size={24} />}
      </button>
    </div>
  );
}

// Luxury Status Bar
export function LuxuryStatusBar() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [timeOfDay, setTimeOfDay] = useState('');

  useEffect(() => {
    const updateScrollProgress = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrollTop / docHeight) * 100;
      setScrollProgress(progress);
    };

    const updateTime = () => {
      const hour = new Date().getHours();
      if (hour < 12) setTimeOfDay('Good Morning');
      else if (hour < 17) setTimeOfDay('Good Afternoon');
      else setTimeOfDay('Good Evening');
    };

    updateTime();
    window.addEventListener('scroll', updateScrollProgress);
    const timeInterval = setInterval(updateTime, 60000);

    return () => {
      window.removeEventListener('scroll', updateScrollProgress);
      clearInterval(timeInterval);
    };
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-1 bg-slate-800/50 z-50">
      <div 
        className="h-full bg-gradient-to-r from-gold via-amber-400 to-gold transition-all duration-200 shadow-lg shadow-gold/30"
        style={{ width: `${scrollProgress}%` }}
      />
      <div className="absolute top-2 right-4 text-gold text-sm font-medium backdrop-blur-sm bg-slate-900/80 px-3 py-1 rounded-full border border-gold/20">
        {timeOfDay}
      </div>
    </div>
  );
}

// Premium Achievement Badges
export function AchievementBadges() {
  const achievements = [
    { icon: Crown, label: '25+ Years Excellence', color: 'text-gold' },
    { icon: Star, label: '1000+ Happy Clients', color: 'text-amber-400' },
    { icon: Award, label: 'Premium Quality', color: 'text-yellow-400' },
    { icon: Gem, label: 'Luxury Design', color: 'text-amber-300' }
  ];

  return (
    <div className="flex flex-wrap gap-4 justify-center">
      {achievements.map((achievement, index) => (
        <div
          key={achievement.label}
          className="flex items-center space-x-2 bg-gradient-to-r from-slate-800/80 to-slate-700/80 backdrop-blur-sm border border-gold/20 rounded-full px-4 py-2 hover:scale-105 transition-all duration-300 luxury-glow"
        >
          <achievement.icon className={`w-5 h-5 ${achievement.color}`} />
          <span className="text-white text-sm font-medium">{achievement.label}</span>
        </div>
      ))}
    </div>
  );
}

// Luxury Image Viewer with Zoom
export function LuxuryImageViewer({ 
  src, 
  alt, 
  className = "" 
}: { 
  src: string; 
  alt: string; 
  className?: string; 
}) {
  const [isZoomed, setIsZoomed] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isZoomed) return;
    
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setMousePosition({ x, y });
  };

  return (
    <div 
      className={`relative overflow-hidden cursor-zoom-in ${className}`}
      onClick={() => setIsZoomed(!isZoomed)}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setIsZoomed(false)}
    >
      <img
        src={src}
        alt={alt}
        className={`w-full h-full object-cover transition-all duration-700 ease-out ${
          isZoomed ? 'scale-150' : 'scale-100'
        }`}
        style={isZoomed ? {
          transformOrigin: `${mousePosition.x}% ${mousePosition.y}%`
        } : {}}
      />
      
      {/* Zoom Indicator */}
      <div className={`absolute top-4 right-4 bg-slate-900/80 backdrop-blur-sm text-white px-2 py-1 rounded text-xs transition-opacity duration-300 ${
        isZoomed ? 'opacity-100' : 'opacity-0'
      }`}>
        Click to zoom out
      </div>
      
      {/* Luxury Frame Effect */}
      <div className="absolute inset-0 border-4 border-gold/20 rounded-lg pointer-events-none"></div>
      <div className="absolute top-2 left-2 w-4 h-4 border-l-2 border-t-2 border-gold/40"></div>
      <div className="absolute top-2 right-2 w-4 h-4 border-r-2 border-t-2 border-gold/40"></div>
      <div className="absolute bottom-2 left-2 w-4 h-4 border-l-2 border-b-2 border-gold/40"></div>
      <div className="absolute bottom-2 right-2 w-4 h-4 border-r-2 border-b-2 border-gold/40"></div>
    </div>
  );
}

// Premium Sound Effects (subtle)
export function useLuxurySounds() {
  const playHoverSound = () => {
    // Create a subtle hover sound effect
    const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();
    
    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);
    
    oscillator.frequency.setValueAtTime(800, audioContext.currentTime);
    oscillator.frequency.exponentialRampToValueAtTime(1200, audioContext.currentTime + 0.1);
    
    gainNode.gain.setValueAtTime(0.02, audioContext.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.001, audioContext.currentTime + 0.1);
    
    oscillator.start(audioContext.currentTime);
    oscillator.stop(audioContext.currentTime + 0.1);
  };

  const playClickSound = () => {
    const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();
    
    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);
    
    oscillator.frequency.setValueAtTime(1000, audioContext.currentTime);
    oscillator.frequency.exponentialRampToValueAtTime(500, audioContext.currentTime + 0.2);
    
    gainNode.gain.setValueAtTime(0.03, audioContext.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.001, audioContext.currentTime + 0.2);
    
    oscillator.start(audioContext.currentTime);
    oscillator.stop(audioContext.currentTime + 0.2);
  };

  return { playHoverSound, playClickSound };
}

// Luxury Performance Monitor
export function PerformanceIndicator() {
  const [fps, setFps] = useState(60);
  const [loadTime, setLoadTime] = useState(0);

  useEffect(() => {
    const startTime = performance.now();
    
    // Simple FPS counter
    let frameCount = 0;
    let lastTime = performance.now();
    
    const measureFPS = () => {
      frameCount++;
      const currentTime = performance.now();
      
      if (currentTime - lastTime >= 1000) {
        setFps(Math.round((frameCount * 1000) / (currentTime - lastTime)));
        frameCount = 0;
        lastTime = currentTime;
      }
      
      requestAnimationFrame(measureFPS);
    };
    
    requestAnimationFrame(measureFPS);
    
    // Measure load time
    const handleLoad = () => {
      setLoadTime(Math.round(performance.now() - startTime));
    };
    
    if (document.readyState === 'complete') {
      handleLoad();
    } else {
      window.addEventListener('load', handleLoad);
    }
    
    return () => {
      window.removeEventListener('load', handleLoad);
    };
  }, []);

  return (
    <div className="fixed bottom-4 left-4 bg-slate-900/80 backdrop-blur-sm text-white text-xs px-3 py-2 rounded-lg border border-gold/20 z-50">
      <div>FPS: {fps}</div>
      <div>Load: {loadTime}ms</div>
    </div>
  );
}