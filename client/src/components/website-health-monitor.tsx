import { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { AlertTriangle, CheckCircle, Clock, Zap, Shield, Eye } from 'lucide-react';

interface HealthMetrics {
  status: 'healthy' | 'warning' | 'critical';
  responseTime: number;
  uptime: number;
  errorRate: number;
  securityScore: number;
  seoScore: number;
  performanceScore: number;
  accessibilityScore: number;
  lastCheck: Date;
}

export function WebsiteHealthMonitor() {
  const [health, setHealth] = useState<HealthMetrics | null>(null);
  const [isChecking, setIsChecking] = useState(false);

  useEffect(() => {
    performHealthCheck();
    const interval = setInterval(performHealthCheck, 60000); // Check every minute
    return () => clearInterval(interval);
  }, []);

  const performHealthCheck = async () => {
    setIsChecking(true);
    
    try {
      // Simulate health check - in production, this would call actual monitoring APIs
      const startTime = performance.now();
      
      // Check response time
      await fetch(window.location.origin + '/api/health');
      const responseTime = performance.now() - startTime;
      
      // Calculate other metrics
      const mockHealth: HealthMetrics = {
        status: responseTime < 1000 ? 'healthy' : responseTime < 3000 ? 'warning' : 'critical',
        responseTime: Math.round(responseTime),
        uptime: 99.8,
        errorRate: 0.2,
        securityScore: 95,
        seoScore: 92,
        performanceScore: 88,
        accessibilityScore: 96,
        lastCheck: new Date()
      };
      
      setHealth(mockHealth);
    } catch (error) {
      const errorHealth: HealthMetrics = {
        status: 'critical',
        responseTime: 0,
        uptime: 0,
        errorRate: 100,
        securityScore: 0,
        seoScore: 0,
        performanceScore: 0,
        accessibilityScore: 0,
        lastCheck: new Date()
      };
      setHealth(errorHealth);
    } finally {
      setIsChecking(false);
    }
  };

  if (!health) {
    return (
      <div className="p-4 text-center">
        <div className="animate-spin w-8 h-8 border-4 border-blue-600 border-t-transparent rounded-full mx-auto mb-2"></div>
        <p className="text-sm text-gray-600">Checking website health...</p>
      </div>
    );
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'healthy': return 'text-green-600 bg-green-50 border-green-200';
      case 'warning': return 'text-yellow-600 bg-yellow-50 border-yellow-200';
      case 'critical': return 'text-red-600 bg-red-50 border-red-200';
      default: return 'text-gray-600 bg-gray-50 border-gray-200';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'healthy': return <CheckCircle className="w-5 h-5" />;
      case 'warning': case 'critical': return <AlertTriangle className="w-5 h-5" />;
      default: return <Clock className="w-5 h-5" />;
    }
  };

  return (
    <Card className="w-full max-w-md">
      <CardContent className="p-6">
        {/* Status Header */}
        <div className={`flex items-center gap-3 p-3 rounded-lg border mb-4 ${getStatusColor(health.status)}`}>
          {getStatusIcon(health.status)}
          <div>
            <h3 className="font-semibold capitalize">{health.status}</h3>
            <p className="text-sm opacity-80">Last check: {health.lastCheck.toLocaleTimeString()}</p>
          </div>
          <Button
            onClick={performHealthCheck}
            disabled={isChecking}
            size="sm"
            variant="ghost"
            className="ml-auto"
          >
            {isChecking ? 'Checking...' : 'Refresh'}
          </Button>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div className="text-center p-3 bg-blue-50 rounded-lg">
            <Clock className="w-6 h-6 text-blue-600 mx-auto mb-1" />
            <p className="text-sm text-gray-600">Response Time</p>
            <p className="text-lg font-bold text-blue-600">{health.responseTime}ms</p>
          </div>
          
          <div className="text-center p-3 bg-green-50 rounded-lg">
            <Zap className="w-6 h-6 text-green-600 mx-auto mb-1" />
            <p className="text-sm text-gray-600">Uptime</p>
            <p className="text-lg font-bold text-green-600">{health.uptime}%</p>
          </div>
          
          <div className="text-center p-3 bg-purple-50 rounded-lg">
            <Shield className="w-6 h-6 text-purple-600 mx-auto mb-1" />
            <p className="text-sm text-gray-600">Security</p>
            <p className="text-lg font-bold text-purple-600">{health.securityScore}/100</p>
          </div>
          
          <div className="text-center p-3 bg-orange-50 rounded-lg">
            <Eye className="w-6 h-6 text-orange-600 mx-auto mb-1" />
            <p className="text-sm text-gray-600">SEO Score</p>
            <p className="text-lg font-bold text-orange-600">{health.seoScore}/100</p>
          </div>
        </div>

        {/* Performance Bars */}
        <div className="space-y-3">
          <div>
            <div className="flex justify-between text-sm mb-1">
              <span>Performance</span>
              <span>{health.performanceScore}/100</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div 
                className="bg-blue-600 h-2 rounded-full transition-all duration-500"
                style={{ width: `${health.performanceScore}%` }}
              ></div>
            </div>
          </div>
          
          <div>
            <div className="flex justify-between text-sm mb-1">
              <span>Accessibility</span>
              <span>{health.accessibilityScore}/100</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div 
                className="bg-green-600 h-2 rounded-full transition-all duration-500"
                style={{ width: `${health.accessibilityScore}%` }}
              ></div>
            </div>
          </div>
          
          <div>
            <div className="flex justify-between text-sm mb-1">
              <span>Error Rate</span>
              <span>{health.errorRate}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div 
                className="bg-red-600 h-2 rounded-full transition-all duration-500"
                style={{ width: `${health.errorRate}%` }}
              ></div>
            </div>
          </div>
        </div>

        {/* Recommendations */}
        {health.status !== 'healthy' && (
          <div className="mt-4 p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
            <h4 className="font-medium text-yellow-800 mb-2">Recommendations:</h4>
            <ul className="text-sm text-yellow-700 space-y-1">
              {health.responseTime > 3000 && <li>• Optimize server response time</li>}
              {health.performanceScore < 80 && <li>• Improve page load performance</li>}
              {health.errorRate > 1 && <li>• Investigate and fix errors</li>}
              {health.accessibilityScore < 90 && <li>• Enhance accessibility features</li>}
            </ul>
          </div>
        )}
      </CardContent>
    </Card>
  );
}