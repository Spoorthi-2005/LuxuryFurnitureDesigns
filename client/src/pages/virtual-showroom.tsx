import { useState } from "react";
import { Link } from "wouter";
import Header from "@/components/header";
import Footer from "@/components/footer";
import VirtualRoomDesigner from "@/components/virtual-room-designer";
import ARPreviewModal from "@/components/ar-preview-modal";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion } from "framer-motion";
import {
  Camera,
  Eye,
  Move3D,
  Palette,
  Smartphone,
  Monitor,
  Lightbulb,
  Settings,
  Play,
  Star,
  Users,
  Clock,
  Award
} from "lucide-react";

export default function VirtualShowroom() {
  const [selectedRoom, setSelectedRoom] = useState(null);
  const [isARModalOpen, setIsARModalOpen] = useState(false);

  const showrooms = [
    {
      id: 1,
      name: "Modern Living Suite",
      type: "living-room",
      style: "Contemporary",
      description: "Sleek modern furniture with clean lines and premium materials",
      imageUrl: "/api/placeholder/400/300",
      items: 12,
      price: 15000,
      rating: 4.9,
      featured: true
    },
    {
      id: 2,
      name: "Luxury Bedroom Collection",
      type: "bedroom", 
      style: "Luxury",
      description: "Opulent bedroom furniture with rich textures and elegant design",
      imageUrl: "/api/placeholder/400/300",
      items: 8,
      price: 12000,
      rating: 4.8,
      featured: true
    },
    {
      id: 3,
      name: "Executive Office Space",
      type: "office",
      style: "Professional",
      description: "Sophisticated office furniture for the modern executive",
      imageUrl: "/api/placeholder/400/300", 
      items: 10,
      price: 8500,
      rating: 4.7,
      featured: false
    },
    {
      id: 4,
      name: "Gourmet Kitchen Design",
      type: "kitchen",
      style: "Modern",
      description: "Premium kitchen solutions with cutting-edge functionality",
      imageUrl: "/api/placeholder/400/300",
      items: 15,
      price: 25000,
      rating: 5.0,
      featured: true
    }
  ];

  const features = [
    {
      icon: Move3D,
      title: "3D Room Designer",
      description: "Create and customize your space with our advanced 3D design tools",
      color: "text-blue-500"
    },
    {
      icon: Camera,
      title: "AR Visualization",
      description: "See your furniture in your actual space using augmented reality",
      color: "text-purple-500"
    },
    {
      icon: Eye,
      title: "VR Experience",
      description: "Immersive virtual reality walkthrough of your designed space",
      color: "text-green-500"
    },
    {
      icon: Palette,
      title: "Material Editor",
      description: "Customize colors, textures, and finishes in real-time",
      color: "text-orange-500"
    }
  ];

  const stats = [
    { icon: Users, value: "10,000+", label: "Designs Created" },
    { icon: Star, value: "4.9", label: "Average Rating" },
    { icon: Clock, value: "24/7", label: "Design Support" },
    { icon: Award, value: "Premium", label: "Quality Guarantee" }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-slate-900 to-black"></div>
        <div className="relative max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <Badge className="mb-4 bg-gold/10 text-gold border-gold/20">
              Premium Virtual Experience
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-gold to-white bg-clip-text text-transparent">
              Virtual Showroom
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-8">
              Experience our premium furniture collections through cutting-edge virtual reality, 
              augmented reality, and 3D visualization technology
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button size="lg" className="bg-gold hover:bg-gold/80 text-black">
                <Play className="w-5 h-5 mr-2" />
                Start Virtual Tour
              </Button>
              <Button size="lg" variant="outline" className="border-gold text-gold hover:bg-gold/10">
                <Camera className="w-5 h-5 mr-2" />
                Try AR Preview
              </Button>
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
          >
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <stat.icon className="w-8 h-8 mx-auto mb-2 text-gold" />
                <div className="text-2xl font-bold text-white">{stat.value}</div>
                <div className="text-sm text-slate-400">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4">Advanced Design Technology</h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Revolutionary tools that bring your interior design vision to life
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="bg-slate-800/50 border-slate-700 hover:border-gold/50 transition-all duration-300 h-full">
                  <CardContent className="p-6 text-center">
                    <feature.icon className={`w-12 h-12 mx-auto mb-4 ${feature.color}`} />
                    <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
                    <p className="text-slate-400 text-sm">{feature.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Virtual Showrooms */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4">Explore Our Virtual Showrooms</h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Step into professionally designed spaces and experience premium furniture collections
            </p>
          </motion.div>

          <Tabs defaultValue="featured" className="w-full">
            <TabsList className="grid w-full grid-cols-3 max-w-md mx-auto mb-8">
              <TabsTrigger value="featured">Featured</TabsTrigger>
              <TabsTrigger value="all">All Rooms</TabsTrigger>
              <TabsTrigger value="custom">Custom</TabsTrigger>
            </TabsList>

            <TabsContent value="featured">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {showrooms.filter(room => room.featured).map((room, index) => (
                  <motion.div
                    key={room.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Card className="bg-slate-800/50 border-slate-700 hover:border-gold/50 transition-all duration-300 overflow-hidden group">
                      <div className="relative">
                        <div className="aspect-video bg-gradient-to-br from-slate-600 to-slate-700 flex items-center justify-center">
                          <Monitor className="w-16 h-16 text-slate-400" />
                        </div>
                        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                          <Button 
                            className="bg-gold hover:bg-gold/80 text-black"
                            onClick={() => {
                              setSelectedRoom(room);
                              setIsARModalOpen(true);
                            }}
                          >
                            <Eye className="w-4 h-4 mr-2" />
                            View in AR
                          </Button>
                        </div>
                        <Badge className="absolute top-3 right-3 bg-gold/90 text-black">
                          {room.style}
                        </Badge>
                      </div>
                      <CardContent className="p-6">
                        <div className="flex items-center gap-2 mb-2">
                          <Star className="w-4 h-4 text-gold fill-current" />
                          <span className="text-sm text-slate-300">{room.rating}</span>
                        </div>
                        <h3 className="text-xl font-semibold text-white mb-2">{room.name}</h3>
                        <p className="text-slate-400 text-sm mb-4">{room.description}</p>
                        <div className="flex justify-between items-center mb-4">
                          <span className="text-sm text-slate-500">{room.items} items</span>
                          <span className="text-gold font-semibold">${room.price.toLocaleString()}</span>
                        </div>
                        <div className="flex gap-2">
                          <Button size="sm" className="flex-1 bg-gold hover:bg-gold/80 text-black">
                            <Move3D className="w-4 h-4 mr-2" />
                            Design
                          </Button>
                          <Button size="sm" variant="outline" className="border-slate-600">
                            <Camera className="w-4 h-4" />
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="all">
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {showrooms.map((room, index) => (
                  <motion.div
                    key={room.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Card className="bg-slate-800/50 border-slate-700 hover:border-gold/50 transition-all duration-300">
                      <CardContent className="p-4">
                        <div className="aspect-square bg-gradient-to-br from-slate-600 to-slate-700 rounded-lg mb-3 flex items-center justify-center">
                          <Monitor className="w-8 h-8 text-slate-400" />
                        </div>
                        <h4 className="font-semibold text-white text-sm mb-1">{room.name}</h4>
                        <p className="text-xs text-slate-400 mb-2">{room.style}</p>
                        <div className="flex justify-between items-center">
                          <span className="text-xs text-slate-500">{room.items} items</span>
                          <Button size="sm" variant="outline" className="h-6 text-xs">
                            View
                          </Button>  
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="custom">
              <div className="text-center py-12">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  <div className="w-32 h-32 mx-auto mb-6 bg-gradient-to-br from-gold/20 to-gold/40 rounded-2xl flex items-center justify-center">
                    <Settings className="w-16 h-16 text-gold" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">Create Custom Design</h3>
                  <p className="text-slate-300 max-w-md mx-auto mb-6">
                    Use our advanced 3D designer to create your own custom room layout with AR preview
                  </p>
                  <Button size="lg" className="bg-gold hover:bg-gold/80 text-black">
                    <Move3D className="w-5 h-5 mr-2" />
                    Launch Designer
                  </Button>
                </motion.div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-gold/10 to-gold/5 border-t border-gold/20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Design Your Dream Space?
            </h2>
            <p className="text-xl text-slate-300 mb-8">
              Experience the future of interior design with our premium virtual showroom
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button size="lg" className="bg-gold hover:bg-gold/80 text-black">
                <Move3D className="w-5 h-5 mr-2" />
                Start Designing
              </Button>
              <Button size="lg" variant="outline" className="border-gold text-gold hover:bg-gold/10">
                <Link href="/contact" className="flex items-center">
                  Schedule Consultation
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />

      {/* AR Preview Modal */}
      <ARPreviewModal 
        isOpen={isARModalOpen}
        onClose={() => setIsARModalOpen(false)}
        roomData={selectedRoom}
      />
    </div>
  );
}