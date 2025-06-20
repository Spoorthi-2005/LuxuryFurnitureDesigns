import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell } from 'recharts';
import { Eye, Users, Clock, MousePointer, Smartphone, Monitor, TrendingUp, Activity } from 'lucide-react';

interface AnalyticsData {
  pageViews: number;
  uniqueVisitors: number;
  avgSessionDuration: number;
  bounceRate: number;
  topPages: Array<{ page: string; views: number }>;
  deviceTypes: Array<{ type: string; percentage: number }>;
  userFlow: Array<{ step: string; users: number; dropOff: number }>;
  performanceMetrics: {
    avgLoadTime: number;
    coreWebVitals: {
      LCP: number;
      FID: number;
      CLS: number;
    };
  };
}

export function AdminDashboard() {
  const [analyticsData, setAnalyticsData] = useState<AnalyticsData | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedTimeRange, setSelectedTimeRange] = useState('7d');

  useEffect(() => {
    fetchAnalyticsData();
  }, [selectedTimeRange]);

  const fetchAnalyticsData = async () => {
    setIsLoading(true);
    try {
      // In production, this would fetch from your analytics API
      const mockData: AnalyticsData = {
        pageViews: 15847,
        uniqueVisitors: 8932,
        avgSessionDuration: 342,
        bounceRate: 23.4,
        topPages: [
          { page: '/collections', views: 5234 },
          { page: '/', views: 4891 },
          { page: '/contact', views: 2156 },
          { page: '/craftsmanship', views: 1823 },
          { page: '/story', views: 1743 }
        ],
        deviceTypes: [
          { type: 'Mobile', percentage: 67 },
          { type: 'Desktop', percentage: 28 },
          { type: 'Tablet', percentage: 5 }
        ],
        userFlow: [
          { step: 'Landing', users: 1000, dropOff: 0 },
          { step: 'Collections', users: 780, dropOff: 22 },
          { step: 'Product View', users: 623, dropOff: 20 },
          { step: 'Contact Form', users: 312, dropOff: 50 },
          { step: 'Form Submit', users: 187, dropOff: 40 }
        ],
        performanceMetrics: {
          avgLoadTime: 1.8,
          coreWebVitals: {
            LCP: 2.1,
            FID: 45,
            CLS: 0.08
          }
        }
      };
      
      setTimeout(() => {
        setAnalyticsData(mockData);
        setIsLoading(false);
      }, 800);
    } catch (error) {
      console.error('Failed to fetch analytics:', error);
      setIsLoading(false);
    }
  };

  const COLORS = ['#DAA520', '#B8860B', '#CD853F', '#DEB887'];

  if (isLoading || !analyticsData) {
    return (
      <div className="p-8 space-y-6">
        <div className="animate-pulse space-y-4">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="h-32 bg-gray-200 rounded-lg"></div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Time Range Controls */}
        <div className="flex justify-end items-center">
          <div className="flex gap-2">
            {['24h', '7d', '30d', '90d'].map((range) => (
              <Button
                key={range}
                variant={selectedTimeRange === range ? 'default' : 'outline'}
                size="sm"
                onClick={() => setSelectedTimeRange(range)}
                className={selectedTimeRange === range ? 'bg-yellow-600 hover:bg-yellow-700' : ''}
              >
                {range}
              </Button>
            ))}
          </div>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Page Views</CardTitle>
              <Eye className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{analyticsData.pageViews.toLocaleString()}</div>
              <p className="text-xs text-muted-foreground">
                <span className="text-green-600">+12.5%</span> from last period
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Unique Visitors</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{analyticsData.uniqueVisitors.toLocaleString()}</div>
              <p className="text-xs text-muted-foreground">
                <span className="text-green-600">+8.3%</span> from last period
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Avg Session</CardTitle>
              <Clock className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{Math.floor(analyticsData.avgSessionDuration / 60)}m {analyticsData.avgSessionDuration % 60}s</div>
              <p className="text-xs text-muted-foreground">
                <span className="text-green-600">+15.2%</span> from last period
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Bounce Rate</CardTitle>
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{analyticsData.bounceRate}%</div>
              <p className="text-xs text-muted-foreground">
                <span className="text-red-600">-3.1%</span> from last period
              </p>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="traffic" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="traffic">Traffic</TabsTrigger>
            <TabsTrigger value="performance">Performance</TabsTrigger>
            <TabsTrigger value="devices">Devices</TabsTrigger>
            <TabsTrigger value="conversion">Conversion</TabsTrigger>
          </TabsList>

          <TabsContent value="traffic" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Top Pages */}
              <Card>
                <CardHeader>
                  <CardTitle>Top Pages</CardTitle>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={analyticsData.topPages}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="page" />
                      <YAxis />
                      <Tooltip />
                      <Bar dataKey="views" fill="#DAA520" />
                    </BarChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>

              {/* Device Distribution */}
              <Card>
                <CardHeader>
                  <CardTitle>Traffic by Device</CardTitle>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <PieChart>
                      <Pie
                        data={analyticsData.deviceTypes}
                        cx="50%"
                        cy="50%"
                        outerRadius={80}
                        dataKey="percentage"
                        label={({ type, percentage }) => `${type}: ${percentage}%`}
                      >
                        {analyticsData.deviceTypes.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                      </Pie>
                      <Tooltip />
                    </PieChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="performance" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Core Web Vitals */}
              <Card>
                <CardHeader>
                  <CardTitle>Core Web Vitals</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span>Largest Contentful Paint (LCP)</span>
                    <Badge variant={analyticsData.performanceMetrics.coreWebVitals.LCP <= 2.5 ? 'default' : 'destructive'}>
                      {analyticsData.performanceMetrics.coreWebVitals.LCP}s
                    </Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>First Input Delay (FID)</span>
                    <Badge variant={analyticsData.performanceMetrics.coreWebVitals.FID <= 100 ? 'default' : 'destructive'}>
                      {analyticsData.performanceMetrics.coreWebVitals.FID}ms
                    </Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Cumulative Layout Shift (CLS)</span>
                    <Badge variant={analyticsData.performanceMetrics.coreWebVitals.CLS <= 0.1 ? 'default' : 'destructive'}>
                      {analyticsData.performanceMetrics.coreWebVitals.CLS}
                    </Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Average Load Time</span>
                    <Badge variant={analyticsData.performanceMetrics.avgLoadTime <= 3 ? 'default' : 'destructive'}>
                      {analyticsData.performanceMetrics.avgLoadTime}s
                    </Badge>
                  </div>
                </CardContent>
              </Card>

              {/* Performance Recommendations */}
              <Card>
                <CardHeader>
                  <CardTitle>Performance Insights</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="p-3 bg-green-50 border border-green-200 rounded-lg">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span className="text-sm font-medium text-green-800">Excellent LCP performance</span>
                    </div>
                  </div>
                  <div className="p-3 bg-green-50 border border-green-200 rounded-lg">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span className="text-sm font-medium text-green-800">Good FID score</span>
                    </div>
                  </div>
                  <div className="p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                      <span className="text-sm font-medium text-yellow-800">CLS could be improved</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="devices" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Device Analytics</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {analyticsData.deviceTypes.map((device, index) => (
                    <div key={device.type} className="text-center p-4 border rounded-lg">
                      {device.type === 'Mobile' && <Smartphone className="w-8 h-8 mx-auto mb-2 text-blue-600" />}
                      {device.type === 'Desktop' && <Monitor className="w-8 h-8 mx-auto mb-2 text-green-600" />}
                      {device.type === 'Tablet' && <Activity className="w-8 h-8 mx-auto mb-2 text-purple-600" />}
                      <h3 className="font-semibold">{device.type}</h3>
                      <p className="text-2xl font-bold text-gray-900">{device.percentage}%</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="conversion" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>User Conversion Funnel</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={400}>
                  <LineChart data={analyticsData.userFlow}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="step" />
                    <YAxis />
                    <Tooltip />
                    <Line type="monotone" dataKey="users" stroke="#DAA520" strokeWidth={3} />
                  </LineChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}