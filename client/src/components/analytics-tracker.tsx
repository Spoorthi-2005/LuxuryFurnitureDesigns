import { useEffect, useRef } from 'react';
import { useLocation } from 'wouter';

// Enhanced analytics tracking system
interface AnalyticsEvent {
  event: string;
  category: string;
  action: string;
  label?: string;
  value?: number;
  timestamp: number;
  sessionId: string;
  userId?: string;
  pageUrl: string;
  userAgent: string;
  screenResolution: string;
  referrer: string;
}

class FurnitureAnalytics {
  private events: AnalyticsEvent[] = [];
  private sessionId: string;
  private startTime: number;
  private lastActivity: number;

  constructor() {
    this.sessionId = this.generateSessionId();
    this.startTime = Date.now();
    this.lastActivity = Date.now();
    this.setupEventListeners();
    this.trackPageLoad();
  }

  private generateSessionId(): string {
    return `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
  }

  private setupEventListeners() {
    // Track scroll depth
    let maxScroll = 0;
    window.addEventListener('scroll', () => {
      const scrollPercent = Math.round((window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100);
      if (scrollPercent > maxScroll) {
        maxScroll = scrollPercent;
        if (scrollPercent >= 25 && scrollPercent < 50) {
          this.track('scroll', 'engagement', 'scroll_25_percent');
        } else if (scrollPercent >= 50 && scrollPercent < 75) {
          this.track('scroll', 'engagement', 'scroll_50_percent');
        } else if (scrollPercent >= 75 && scrollPercent < 90) {
          this.track('scroll', 'engagement', 'scroll_75_percent');
        } else if (scrollPercent >= 90) {
          this.track('scroll', 'engagement', 'scroll_90_percent');
        }
      }
    });

    // Track time on page
    setInterval(() => {
      if (this.isUserActive()) {
        this.lastActivity = Date.now();
      }
    }, 30000); // Check every 30 seconds

    // Track page visibility
    document.addEventListener('visibilitychange', () => {
      if (document.hidden) {
        this.track('page_visibility', 'engagement', 'page_hidden');
      } else {
        this.track('page_visibility', 'engagement', 'page_visible');
      }
    });

    // Track form interactions
    document.addEventListener('focus', (e) => {
      if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement || e.target instanceof HTMLSelectElement) {
        this.track('form_interaction', 'engagement', 'form_field_focus', e.target.name || e.target.id);
      }
    }, true);

    // Track button clicks
    document.addEventListener('click', (e) => {
      if (e.target instanceof HTMLButtonElement || e.target instanceof HTMLAnchorElement) {
        const text = e.target.textContent?.trim() || '';
        this.track('button_click', 'interaction', 'click', text);
      }
    });

    // Track page unload
    window.addEventListener('beforeunload', () => {
      this.trackSessionEnd();
    });
  }

  private isUserActive(): boolean {
    return (Date.now() - this.lastActivity) < 300000; // 5 minutes
  }

  private trackPageLoad() {
    this.track('page_load', 'navigation', 'page_view');
    
    // Track performance metrics
    if ('performance' in window) {
      setTimeout(() => {
        const perfData = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
        if (perfData) {
          this.track('performance', 'technical', 'load_time', undefined, perfData.loadEventEnd - perfData.loadEventStart);
          this.track('performance', 'technical', 'dom_content_loaded', undefined, perfData.domContentLoadedEventEnd - perfData.domContentLoadedEventStart);
        }
      }, 1000);
    }
  }

  private trackSessionEnd() {
    const sessionDuration = Date.now() - this.startTime;
    this.track('session', 'engagement', 'session_end', undefined, sessionDuration);
    this.sendAnalytics();
  }

  public track(event: string, category: string, action: string, label?: string, value?: number) {
    const analyticsEvent: AnalyticsEvent = {
      event,
      category,
      action,
      label,
      value,
      timestamp: Date.now(),
      sessionId: this.sessionId,
      pageUrl: window.location.href,
      userAgent: navigator.userAgent,
      screenResolution: `${screen.width}x${screen.height}`,
      referrer: document.referrer
    };

    this.events.push(analyticsEvent);

    // Send immediately for critical events
    if (category === 'conversion' || action === 'contact_form_submit') {
      this.sendAnalytics();
    }

    // Auto-send when buffer is full
    if (this.events.length >= 50) {
      this.sendAnalytics();
    }
  }

  public trackFurnitureInteraction(furnitureType: string, action: string, furnitureId?: string) {
    this.track('furniture_interaction', 'product', action, `${furnitureType}_${furnitureId || 'unknown'}`);
  }

  public trackVirtualRoomUsage(action: string, duration?: number) {
    this.track('virtual_room', 'feature', action, undefined, duration);
  }

  public trackARUsage(action: string, furnitureId?: string) {
    this.track('ar_preview', 'feature', action, furnitureId);
  }

  public trackContactEngagement(method: string, successful: boolean) {
    this.track('contact', successful ? 'conversion' : 'engagement', method);
  }

  private async sendAnalytics() {
    if (this.events.length === 0) return;

    try {
      // Store in localStorage as backup
      const existingData = JSON.parse(localStorage.getItem('furniture_analytics') || '[]');
      const updatedData = [...existingData, ...this.events];
      localStorage.setItem('furniture_analytics', JSON.stringify(updatedData.slice(-1000))); // Keep last 1000 events

      // Send to analytics endpoint (implement server-side endpoint)
      await fetch('/api/analytics', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          events: this.events,
          sessionId: this.sessionId
        })
      });

      this.events = []; // Clear sent events
    } catch (error) {
      console.warn('Analytics sending failed:', error);
    }
  }

  public getAnalyticsSummary() {
    const data = JSON.parse(localStorage.getItem('furniture_analytics') || '[]');
    return {
      totalEvents: data.length,
      sessionId: this.sessionId,
      sessionDuration: Date.now() - this.startTime,
      pageViews: data.filter((e: AnalyticsEvent) => e.action === 'page_view').length,
      interactions: data.filter((e: AnalyticsEvent) => e.category === 'interaction').length
    };
  }
}

// Global analytics instance
const analytics = new FurnitureAnalytics();

// React hook for using analytics
export function useAnalytics() {
  const [location] = useLocation();
  const previousLocation = useRef(location);

  useEffect(() => {
    if (location !== previousLocation.current) {
      analytics.track('navigation', 'page_change', location);
      previousLocation.current = location;
    }
  }, [location]);

  return {
    track: analytics.track.bind(analytics),
    trackFurnitureInteraction: analytics.trackFurnitureInteraction.bind(analytics),
    trackVirtualRoomUsage: analytics.trackVirtualRoomUsage.bind(analytics),
    trackARUsage: analytics.trackARUsage.bind(analytics),
    trackContactEngagement: analytics.trackContactEngagement.bind(analytics),
    getAnalyticsSummary: analytics.getAnalyticsSummary.bind(analytics)
  };
}

// Analytics dashboard component for admin use
export function AnalyticsDashboard() {
  const analytics = useAnalytics();
  const summary = analytics.getAnalyticsSummary();

  return (
    <div className="fixed bottom-4 right-4 bg-black/90 text-white p-4 rounded-lg text-xs z-50 max-w-xs">
      <h4 className="font-bold mb-2">Analytics Summary</h4>
      <div className="space-y-1">
        <div>Session: {summary.sessionId.slice(-8)}</div>
        <div>Duration: {Math.round(summary.sessionDuration / 1000)}s</div>
        <div>Events: {summary.totalEvents}</div>
        <div>Page Views: {summary.pageViews}</div>
        <div>Interactions: {summary.interactions}</div>
      </div>
    </div>
  );
}

// Heatmap tracking component
export function HeatmapTracker() {
  useEffect(() => {
    const trackClick = (e: MouseEvent) => {
      const rect = document.documentElement.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / window.innerWidth) * 100;
      const y = ((e.clientY - rect.top) / window.innerHeight) * 100;
      
      analytics.track('heatmap', 'click', 'position', `${x.toFixed(2)},${y.toFixed(2)}`);
    };

    document.addEventListener('click', trackClick);
    return () => document.removeEventListener('click', trackClick);
  }, []);

  return null;
}

// A/B testing framework
export function useABTest(testName: string, variants: string[]) {
  const variant = localStorage.getItem(`ab_test_${testName}`) || 
    variants[Math.floor(Math.random() * variants.length)];
  
  useEffect(() => {
    if (!localStorage.getItem(`ab_test_${testName}`)) {
      localStorage.setItem(`ab_test_${testName}`, variant);
      analytics.track('ab_test', 'assignment', testName, variant);
    }
  }, [testName, variant]);

  return variant;
}

export default analytics;