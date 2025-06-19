import { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

// Skip to content link for keyboard navigation
export function SkipToContent() {
  return (
    <a
      href="#main-content"
      className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-blue-600 text-white px-4 py-2 rounded z-50 transition-all"
    >
      Skip to main content
    </a>
  );
}

// Focus trap for modals and dialogs
export function useFocusTrap(isActive: boolean) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isActive || !containerRef.current) return;

    const container = containerRef.current;
    const focusableElements = container.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    
    const firstElement = focusableElements[0] as HTMLElement;
    const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

    const handleTabKey = (e: KeyboardEvent) => {
      if (e.key !== 'Tab') return;

      if (e.shiftKey) {
        if (document.activeElement === firstElement) {
          lastElement?.focus();
          e.preventDefault();
        }
      } else {
        if (document.activeElement === lastElement) {
          firstElement?.focus();
          e.preventDefault();
        }
      }
    };

    const handleEscapeKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        // Trigger close action
        const closeButton = container.querySelector('[data-close]') as HTMLElement;
        closeButton?.click();
      }
    };

    container.addEventListener('keydown', handleTabKey);
    container.addEventListener('keydown', handleEscapeKey);
    firstElement?.focus();

    return () => {
      container.removeEventListener('keydown', handleTabKey);
      container.removeEventListener('keydown', handleEscapeKey);
    };
  }, [isActive]);

  return containerRef;
}

// High contrast mode toggle
export function HighContrastToggle() {
  const [isHighContrast, setIsHighContrast] = useState(false);

  useEffect(() => {
    const savedPreference = localStorage.getItem('high-contrast');
    if (savedPreference === 'true') {
      setIsHighContrast(true);
      document.documentElement.classList.add('high-contrast');
    }
  }, []);

  const toggleHighContrast = () => {
    const newValue = !isHighContrast;
    setIsHighContrast(newValue);
    localStorage.setItem('high-contrast', newValue.toString());
    
    if (newValue) {
      document.documentElement.classList.add('high-contrast');
    } else {
      document.documentElement.classList.remove('high-contrast');
    }
  };

  return (
    <Button
      onClick={toggleHighContrast}
      variant="outline"
      size="sm"
      className="fixed top-4 right-20 z-50 bg-white/90 hover:bg-white"
      aria-label={`${isHighContrast ? 'Disable' : 'Enable'} high contrast mode`}
    >
      <i className={`fas fa-${isHighContrast ? 'eye-slash' : 'eye'} mr-2`}></i>
      {isHighContrast ? 'Normal' : 'High Contrast'}
    </Button>
  );
}

// Font size adjuster
export function FontSizeControls() {
  const [fontSize, setFontSize] = useState(100);

  useEffect(() => {
    const savedSize = localStorage.getItem('font-size');
    if (savedSize) {
      const size = parseInt(savedSize);
      setFontSize(size);
      document.documentElement.style.fontSize = `${size}%`;
    }
  }, []);

  const adjustFontSize = (change: number) => {
    const newSize = Math.max(75, Math.min(150, fontSize + change));
    setFontSize(newSize);
    localStorage.setItem('font-size', newSize.toString());
    document.documentElement.style.fontSize = `${newSize}%`;
  };

  return (
    <div className="fixed top-4 right-4 z-50 flex gap-2">
      <Button
        onClick={() => adjustFontSize(-10)}
        variant="outline"
        size="sm"
        className="bg-white/90 hover:bg-white"
        aria-label="Decrease font size"
        disabled={fontSize <= 75}
      >
        A-
      </Button>
      <Button
        onClick={() => adjustFontSize(10)}
        variant="outline"
        size="sm"
        className="bg-white/90 hover:bg-white"
        aria-label="Increase font size"
        disabled={fontSize >= 150}
      >
        A+
      </Button>
    </div>
  );
}

// Screen reader announcements
export function useScreenReaderAnnouncer() {
  const announcerRef = useRef<HTMLDivElement>(null);

  const announce = (message: string, priority: 'polite' | 'assertive' = 'polite') => {
    if (announcerRef.current) {
      announcerRef.current.textContent = message;
      announcerRef.current.setAttribute('aria-live', priority);
    }
  };

  const AnnouncerComponent = () => (
    <div
      ref={announcerRef}
      className="sr-only"
      aria-live="polite"
      aria-atomic="true"
    />
  );

  return { announce, AnnouncerComponent };
}

// Keyboard navigation helper
export function useKeyboardNavigation() {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Add focus indicators when using keyboard
      if (e.key === 'Tab') {
        document.body.classList.add('keyboard-navigation');
      }
    };

    const handleMouseDown = () => {
      // Remove focus indicators when using mouse
      document.body.classList.remove('keyboard-navigation');
    };

    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('mousedown', handleMouseDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('mousedown', handleMouseDown);
    };
  }, []);
}

// Reduced motion preference
export function useReducedMotion() {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    const handleChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches);
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  useEffect(() => {
    if (prefersReducedMotion) {
      document.documentElement.classList.add('reduce-motion');
    } else {
      document.documentElement.classList.remove('reduce-motion');
    }
  }, [prefersReducedMotion]);

  return prefersReducedMotion;
}

// Color blind friendly palette toggle
export function ColorBlindFriendlyMode() {
  const [isColorBlindMode, setIsColorBlindMode] = useState(false);

  useEffect(() => {
    const savedMode = localStorage.getItem('color-blind-mode');
    if (savedMode === 'true') {
      setIsColorBlindMode(true);
      document.documentElement.classList.add('color-blind-friendly');
    }
  }, []);

  const toggleColorBlindMode = () => {
    const newValue = !isColorBlindMode;
    setIsColorBlindMode(newValue);
    localStorage.setItem('color-blind-mode', newValue.toString());
    
    if (newValue) {
      document.documentElement.classList.add('color-blind-friendly');
    } else {
      document.documentElement.classList.remove('color-blind-friendly');
    }
  };

  return (
    <Button
      onClick={toggleColorBlindMode}
      variant="outline"
      size="sm"
      className="fixed bottom-4 right-4 z-50 bg-white/90 hover:bg-white"
      aria-label={`${isColorBlindMode ? 'Disable' : 'Enable'} color blind friendly mode`}
    >
      <i className={`fas fa-palette mr-2`}></i>
      {isColorBlindMode ? 'Standard Colors' : 'Color Blind Friendly'}
    </Button>
  );
}

// Accessibility toolbar
export function AccessibilityToolbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-4 right-4 z-50 bg-blue-600 hover:bg-blue-700 text-white"
        aria-label="Open accessibility options"
        aria-expanded={isOpen}
      >
        <i className="fas fa-universal-access"></i>
      </Button>

      {isOpen && (
        <Card className="fixed top-16 right-4 z-50 p-4 bg-white shadow-xl border">
          <div className="space-y-3">
            <h3 className="font-semibold text-gray-900">Accessibility Options</h3>
            <FontSizeControls />
            <HighContrastToggle />
            <ColorBlindFriendlyMode />
          </div>
        </Card>
      )}
    </>
  );
}