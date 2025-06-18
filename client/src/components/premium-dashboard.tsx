import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { motion } from "framer-motion";
import {
  TrendingUp,
  Users,
  Calendar,
  Star,
  Award,
  Clock,
  DollarSign,
  Eye,
  Heart,
  Share2,
  Download,
  Settings,
  Camera,
  Palette,
  Home,
  CheckCircle
} from "lucide-react";

export default function PremiumDashboard() {
  const [activeProjects] = useState([
    {
      id: 1,
      name: "Luxury Penthouse Renovation",
      client: "Michael Chen",
      progress: 75,
      budget: 150000,
      deadline: "2025-07-15",
      status: "In Progress",
      type: "Full Home",
      rooms: 8
    },
    {
      id: 2,
      name: "Boutique Hotel Lobby",
      client: "Azure Hotels",
      progress: 90,
      budget: 85000,
      deadline: "2025-06-30",
      status: "Finalizing",
      type: "Commercial",
      rooms: 3
    },
    {
      id: 3,
      name: "Modern Living Room",
      client: "Sarah Johnson",
      progress: 45,
      budget: 25000,
      deadline: "2025-08-01",
      status: "Design Phase",
      type: "Single Room",
      rooms: 1
    }
  ]);

  const [recentActivity] = useState([
    { action: "Client approved bedroom designs", time: "2 hours ago", type: "approval" },
    { action: "3D render completed for living room", time: "5 hours ago", type: "render" },
    { action: "New consultation request received", time: "1 day ago", type: "inquiry" },
    { action: "Kitchen materials delivered", time: "2 days ago", type: "delivery" },
    { action: "Client feedback on bathroom tiles", time: "3 days ago", type: "feedback" }
  ]);

  const stats = [
    { label: "Active Projects", value: "12", change: "+3", icon: Home, color: "text-blue-500" },
    { label: "Revenue This Month", value: "$125K", change: "+18%", icon: DollarSign, color: "text-green-500" },
    { label: "Client Satisfaction", value: "4.9", change: "+0.2", icon: Star, color: "text-yellow-500" },
    { label: "Designs Created", value: "47", change: "+12", icon: Palette, color: "text-purple-500" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold text-slate-800 dark:text-white">Premium Dashboard</h1>
              <p className="text-slate-600 dark:text-slate-300">Manage your interior design projects and clients</p>
            </div>
            <div className="flex gap-3">
              <Button variant="outline" className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                Schedule
              </Button>
              <Button className="bg-gold hover:bg-gold/80 text-black flex items-center gap-2">
                <Camera className="w-4 h-4" />
                New Project
              </Button>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="glass-card">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-slate-600 dark:text-slate-400">{stat.label}</p>
                      <div className="flex items-center gap-2 mt-1">
                        <p className="text-2xl font-bold text-slate-800 dark:text-white">{stat.value}</p>
                        <Badge variant="secondary" className="text-xs bg-green-100 text-green-700">
                          {stat.change}
                        </Badge>
                      </div>
                    </div>
                    <stat.icon className={`w-8 h-8 ${stat.color}`} />
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Active Projects */}
          <div className="lg:col-span-2">
            <Card className="glass-card">
              <CardHeader>
                <div className="flex justify-between items-center">
                  <CardTitle className="flex items-center gap-2">
                    <Home className="w-5 h-5 text-gold" />
                    Active Projects
                  </CardTitle>
                  <Button variant="outline" size="sm">View All</Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {activeProjects.map((project) => (
                    <motion.div
                      key={project.id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      className="p-4 border rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors"
                    >
                      <div className="flex justify-between items-start mb-3">
                        <div>
                          <h4 className="font-semibold text-slate-800 dark:text-white">{project.name}</h4>
                          <p className="text-sm text-slate-600 dark:text-slate-400">Client: {project.client}</p>
                        </div>
                        <Badge 
                          variant={project.status === "In Progress" ? "default" : 
                                  project.status === "Finalizing" ? "secondary" : "outline"}
                          className={project.status === "Finalizing" ? "bg-green-100 text-green-700" : ""}
                        >
                          {project.status}
                        </Badge>
                      </div>
                      
                      <div className="grid grid-cols-2 gap-4 mb-3">
                        <div className="text-sm">
                          <span className="text-slate-600 dark:text-slate-400">Budget: </span>
                          <span className="font-medium text-slate-800 dark:text-white">
                            ${project.budget.toLocaleString()}
                          </span>
                        </div>
                        <div className="text-sm">
                          <span className="text-slate-600 dark:text-slate-400">Deadline: </span>
                          <span className="font-medium text-slate-800 dark:text-white">{project.deadline}</span>
                        </div>
                      </div>
                      
                      <div className="mb-3">
                        <div className="flex justify-between text-sm mb-1">
                          <span className="text-slate-600 dark:text-slate-400">Progress</span>
                          <span className="font-medium text-slate-800 dark:text-white">{project.progress}%</span>
                        </div>
                        <Progress value={project.progress} className="h-2" />
                      </div>
                      
                      <div className="flex justify-between items-center">
                        <div className="flex gap-2 text-xs text-slate-500">
                          <span>{project.type}</span>
                          <span>•</span>
                          <span>{project.rooms} rooms</span>
                        </div>
                        <div className="flex gap-1">
                          <Button size="sm" variant="ghost" className="h-8 w-8 p-0">
                            <Eye className="w-4 h-4" />
                          </Button>
                          <Button size="sm" variant="ghost" className="h-8 w-8 p-0">
                            <Settings className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Recent Activity */}
            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Clock className="w-5 h-5 text-blue-500" />
                  Recent Activity
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {recentActivity.map((activity, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className={`w-2 h-2 rounded-full mt-2 ${
                        activity.type === "approval" ? "bg-green-500" :
                        activity.type === "render" ? "bg-blue-500" :
                        activity.type === "inquiry" ? "bg-yellow-500" :
                        activity.type === "delivery" ? "bg-purple-500" :
                        "bg-gray-500"
                      }`} />
                      <div className="flex-1">
                        <p className="text-sm text-slate-800 dark:text-white">{activity.action}</p>
                        <p className="text-xs text-slate-500">{activity.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="text-lg">Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button className="w-full justify-start bg-gold hover:bg-gold/80 text-black">
                  <Camera className="w-4 h-4 mr-2" />
                  New 3D Design
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Calendar className="w-4 h-4 mr-2" />
                  Schedule Consultation
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Users className="w-4 h-4 mr-2" />
                  Client Meeting
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Download className="w-4 h-4 mr-2" />
                  Export Reports
                </Button>
              </CardContent>
            </Card>

            {/* Achievement */}
            <Card className="glass-card bg-gradient-to-br from-gold/10 to-gold/5 border-gold/20">
              <CardContent className="p-6 text-center">
                <Award className="w-12 h-12 text-gold mx-auto mb-3" />
                <h3 className="font-semibold text-slate-800 dark:text-white mb-2">
                  Premium Designer
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">
                  You've completed 50+ premium projects this year!
                </p>
                <Badge className="bg-gold/20 text-gold border-gold/30">
                  Achievement Unlocked
                </Badge>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}