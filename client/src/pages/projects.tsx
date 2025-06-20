import { useState } from "react";
import { Link } from "wouter";
import Header from "@/components/header";
import Footer from "@/components/footer";
import SimpleImageRotator from "@/components/simple-image-rotator";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Award, ChevronRight, Star, ExternalLink, Building2, Utensils, Hotel, Plus, Upload, X, Lock, Trash2 } from "lucide-react";
import { LuxuryParticles, LuxuryCursorTrail, LuxuryCard, ShimmerText } from "@/components/luxury-effects";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";

// Import DLF Club 3 restaurant images
import dlfClub1 from '@assets/WhatsApp Image 2025-06-16 at 16.05.09_fe8629cd_1750139197282.jpg';
import dlfClub2 from '@assets/WhatsApp Image 2025-06-16 at 16.05.10_7cb7c3e0_1750139263630.jpg';
import dlfClub3 from '@assets/WhatsApp Image 2025-06-16 at 16.05.12_a6b47b5d_1750139295538.jpg';
import dlfClub4 from '@assets/WhatsApp Image 2025-06-16 at 16.05.09_5fd2771f_1750139462870.jpg';

// Import Mr. Sethi's residential project images
import sethi1 from '@assets/WhatsApp Image 2025-06-16 at 17.02.25_8d88380a_1750139736501.jpg';
import sethi2 from '@assets/WhatsApp Image 2025-06-16 at 17.02.24_bfe86c56_1750139781747.jpg';
import sethi3 from '@assets/WhatsApp Image 2025-06-16 at 17.02.26_f3722efd_1750139803200.jpg';
import sethi4 from '@assets/WhatsApp Image 2025-06-16 at 17.02.26_96d22181_1750139820133.jpg';
import sethi5 from '@assets/WhatsApp Image 2025-06-16 at 17.02.29_e0dbe3dc_1750139873457.jpg';

// Import Mr. Vasal Colonel's project images
import vasal1 from '@assets/Screenshot 2025-06-17 113615_1750140670653.png';
import vasal2 from '@assets/Screenshot 2025-06-17 113642_1750140682883.png';
import vasal3 from '@assets/Screenshot 2025-06-17 113755_1750140694605.png';
import vasal4 from '@assets/Screenshot 2025-06-17 113932_1750140718262.png';

// Import remaining project images
import indore1 from '@assets/WhatsApp Image 2025-06-16 at 18.05.55_4d2d72b3_1750141666441.jpg';
import kapoor1 from '@assets/WhatsApp Image 2025-06-16 at 18.01.50_f5ffe22b_1750141738511.jpg';
import mayur1 from '@assets/WhatsApp Image 2025-06-13 at 16.31.05_6db10a68_1750142099192.jpg';

interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  images: string[];
  completionDate?: string;
  location?: string;
  features?: string[];
  clientTestimonial?: string;
  projectScope?: string;
  area?: string;
  isPlaceholder: boolean;
}

export default function Projects() {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showAddProjectModal, setShowAddProjectModal] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loginData, setLoginData] = useState({ username: '', password: '', email: '' });
  const [newProject, setNewProject] = useState({
    title: '',
    category: 'Residential',
    description: '',
    price: '',
    materials: '',
    dimensions: ''
  });
  const [uploadedImages, setUploadedImages] = useState<File[]>([]);
  const [dragOver, setDragOver] = useState(false);
  
  const { toast } = useToast();
  const queryClient = useQueryClient();

  // Add new project to the existing hardcoded list
  const [dynamicProjects, setDynamicProjects] = useState<Project[]>([]);

  const projects: Project[] = [
    {
      id: 1,
      title: "DLF Club 3 - Premium Restaurant",
      category: "Restaurant",
      description: "Custom-designed dining furniture featuring elegant upholstered chairs with premium fabric selection. Sophisticated table arrangements maximize seating capacity while maintaining intimate dining atmosphere. Rich wood tones complement warm lighting creating luxurious restaurant ambiance throughout. Contemporary design elements blend seamlessly with classic hospitality furniture aesthetics. High-quality commercial-grade materials ensure durability for heavy restaurant usage patterns. The complete dining set transforms the space into memorable fine dining destination.",
      images: [dlfClub1, dlfClub2, dlfClub3, dlfClub4],
      isPlaceholder: false
    },
    {
      id: 2,
      title: "Mr. Sethi's Luxury Residence",
      category: "Residential",
      description: "Modern kitchen design featuring sleek cabinetry with premium hardware and contemporary styling. Custom wardrobes maximize storage efficiency while maintaining elegant bedroom aesthetics throughout. Marble flooring complements luxury furniture pieces creating sophisticated residential ambiance. Contemporary lighting fixtures illuminate spaces highlighting quality craftsmanship in every detail. Premium materials ensure durability while delivering exceptional visual appeal in design. The complete furniture collection transforms living spaces into modern luxury havens.",
      images: [sethi1, sethi2, sethi3, sethi4, sethi5],
      isPlaceholder: false
    },
    {
      id: 3,
      title: "Col. Vasal's Premium Furniture Collection",
      category: "Residential",
      description: "Custom velvet seating collection featuring rich orange upholstery with diamond-quilted patterns. Premium bedroom furniture showcases elegant blue velvet headboard with contemporary styling. Luxury display units combine glass elements with sophisticated storage solutions throughout. Contemporary design elements blend traditional craftsmanship with modern aesthetic appeal perfectly. Rich upholstery materials ensure comfort while maintaining exceptional visual impact in spaces. The complete furniture collection creates refined living environment with timeless elegance.",
      images: [vasal1, vasal2, vasal3, vasal4],
      isPlaceholder: false
    },
    {
      id: 4,
      title: "Indore Premium Seating Collection",
      category: "Residential",
      description: "Custom-designed quilted leather armchairs featuring premium upholstery and ergonomic comfort. The elegant mint-green seating set showcases sophisticated diamond-quilted patterns with wooden legs. Modern circular side table complements the luxurious seating arrangement perfectly. Premium leather finish ensures durability while maintaining aesthetic appeal. Contemporary design elements blend seamlessly with traditional craftsmanship techniques. The complete furniture set transforms living spaces into sophisticated relaxation zones.",
      images: [indore1],
      isPlaceholder: false
    },
    {
      id: 5,
      title: "DLF Phase 5 - Mr. Kapoor's Custom Storage Solutions",
      category: "Residential",
      description: "Illuminated glass display cabinets with warm LED lighting creating stunning visual impact. Premium white lacquer finish combined with fluted glass panels for sophisticated storage. Custom-designed built-in units maximizing space utilization with contemporary aesthetics. Hidden lighting system highlights displayed items while maintaining elegant ambiance. Seamless integration with modern architecture creates cohesive interior design flow. High-quality materials ensure longevity while delivering exceptional visual appeal.",
      images: [kapoor1],
      isPlaceholder: false
    },
    {
      id: 6,
      title: "Mayur Jain House - Luxury Console Collection",
      category: "Residential",
      description: "Curved marble-top console with rich wood base showcasing exceptional craftsmanship excellence. Fluted wall paneling creates sophisticated backdrop enhancing furniture design aesthetics. Premium brass hardware adds luxurious accent details throughout the furniture piece. Custom marble selection ensures unique patterns and natural beauty in design. Contemporary styling blends modern elements with timeless traditional furniture making techniques. The console serves as stunning focal point while providing functional storage solutions.",
      images: [mayur1],
      isPlaceholder: false
    }
  ];

  // Combine existing projects with newly added ones
  const allProjects = [...dynamicProjects, ...projects];

  // Authentication handler
  const handleLogin = async () => {
    const validCredentials = [
      { username: 'blackhorse', password: 'blackhorse@1908', email: 'amarchauhan1287@gmail.com' },
      { username: 'blackhorse', password: 'blackhorse@1908', email: 'dikshas2591@gmail.com' }
    ];

    const isValidAdmin = validCredentials.some(cred => 
      cred.username === loginData.username && 
      cred.password === loginData.password && 
      cred.email === loginData.email
    );

    if (isValidAdmin) {
      setIsAuthenticated(true);
      setShowLoginModal(false);
      setShowAddProjectModal(true);
      toast({
        title: "Authentication successful",
        description: "Welcome admin! You can now add new projects.",
      });
    } else {
      toast({
        title: "Access Denied",
        description: "Only admin should add projects. Invalid credentials provided.",
        variant: "destructive",
      });
    }
  };

  // File upload handlers
  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setDragOver(false);
    
    const files = Array.from(e.dataTransfer.files).filter(file => 
      file.type.startsWith('image/')
    );
    
    if (files.length > 0) {
      setUploadedImages(prev => [...prev, ...files]);
      toast({
        title: "Images uploaded",
        description: `${files.length} image(s) added successfully.`,
      });
    }
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setDragOver(true);
  };

  const handleDragEnter = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setDragOver(true);
  };

  const handleDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setDragOver(false);
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const files = Array.from(e.target.files).filter(file => 
        file.type.startsWith('image/')
      );
      setUploadedImages(prev => [...prev, ...files]);
      toast({
        title: "Images selected",
        description: `${files.length} image(s) added successfully.`,
      });
    }
  };

  const removeImage = (index: number) => {
    setUploadedImages(prev => prev.filter((_, i) => i !== index));
  };

  const deleteProject = (projectId: number) => {
    setDynamicProjects(prev => prev.filter(project => project.id !== projectId));
    toast({
      title: "Project deleted",
      description: "The project has been removed successfully.",
    });
  };

  // Add project handler
  const handleAddProject = () => {
    if (!newProject.title || !newProject.description || uploadedImages.length === 0) {
      toast({
        title: "Missing information",
        description: "Please fill in title, description and upload at least one image.",
        variant: "destructive",
      });
      return;
    }

    // Convert uploaded files to URLs for display
    const imageUrls = uploadedImages.map(file => URL.createObjectURL(file));
    
    const projectToAdd: Project = {
      id: Date.now(), // Simple ID generation
      title: newProject.title,
      category: newProject.category,
      description: newProject.description,
      images: imageUrls,
      completionDate: new Date().toLocaleDateString(),
      location: "Custom Location", // You can make this an input field later
      features: newProject.materials ? [
        `Premium ${newProject.materials} construction`,
        `Custom dimensions: ${newProject.dimensions || 'Made to measure'}`,
        "Expert craftsmanship with attention to detail",
        "Durable finish for long-lasting beauty"
      ] : undefined,
      clientTestimonial: undefined, // Can be added later
      projectScope: newProject.price,
      area: newProject.dimensions,
      isPlaceholder: false
    };

    setDynamicProjects(prev => [projectToAdd, ...prev]);
    
    // Reset form
    setNewProject({
      title: '',
      category: 'Residential',
      description: '',
      price: '',
      materials: '',
      dimensions: ''
    });
    setUploadedImages([]);
    setShowAddProjectModal(false);
    setIsAuthenticated(false);

    toast({
      title: "Project added successfully",
      description: "Your new project is now visible on the page.",
    });
  };

  return (
    <div className="min-h-screen relative overflow-hidden bg-black text-white">
      {/* Luxury Effects */}
      <LuxuryParticles />
      <LuxuryCursorTrail />
      
      {/* Opulence Black Background with Subtle White Accents */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-black"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-white/5 via-transparent to-white/3"></div>
      </div>

      {/* Subtle Background Effects - No Yellow Shine */}
      <div className="absolute top-0 left-1/4 w-80 h-80 bg-white/2 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-white/1 rounded-full blur-3xl"></div>

      <Header />

      {/* Hero Section */}
      <section className="relative py-24 px-4 overflow-hidden bg-black">
        <div className="relative z-10 container mx-auto text-center">
          <h1 className="text-6xl md:text-8xl font-bold mb-8 text-white">
            Our Projects
          </h1>
          <div className="w-32 h-px bg-gradient-to-r from-transparent via-white/50 to-transparent mx-auto mb-8"></div>
          <p className="text-2xl md:text-3xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
            Discover our exceptional portfolio of luxury furniture projects, where craftsmanship meets innovation in perfect harmony.
          </p>
          
          {/* Add Project Button */}
          <Button 
            onClick={() => setShowLoginModal(true)}
            className="bg-white text-black hover:bg-gray-200 font-bold py-3 px-8 text-lg border-2 border-white/20"
          >
            <Plus className="w-5 h-5 mr-2" />
            Add New Project
          </Button>
        </div>
      </section>

      {/* Opulent Projects Showcase */}
      <div className="relative">
        {/* Minimal Background Pattern */}
        <div className="absolute inset-0 opacity-3">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23FFFFFF' fill-opacity='0.05'%3E%3Cpath d='M30 30l15-15v30l-15-15zm-15 15l15-15h-30l15 15z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '60px 60px'
          }}></div>
        </div>

        <div className="container mx-auto px-4 py-16 relative z-10">
          <div className="space-y-20">
            {allProjects.map((project, index) => (
              <div key={project.id}>
                {!project.isPlaceholder && (
                  <div className="group mb-24">
                    {/* Alternating Layout: Left/Right Pattern */}
                    <div className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 0 ? '' : 'lg:grid-cols-2'}`}>
                      
                      {/* Content Section */}
                      <div className={`space-y-8 ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                        <div className="space-y-6">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-4">
                              <Badge className="px-4 py-2 bg-white text-black font-bold text-sm">
                                {project.category}
                              </Badge>
                              {project.location && (
                                <div className="flex items-center text-gray-400">
                                  <MapPin className="w-4 h-4 mr-1" />
                                  <span className="text-sm">{project.location}</span>
                                </div>
                              )}
                              {project.completionDate && (
                                <div className="flex items-center text-gray-400">
                                  <Calendar className="w-4 h-4 mr-1" />
                                  <span className="text-sm">{project.completionDate}</span>
                                </div>
                              )}
                            </div>
                            
                            {/* Delete button for dynamically added projects */}
                            {dynamicProjects.find(dp => dp.id === project.id) && (
                              <Button
                                onClick={() => deleteProject(project.id)}
                                variant="outline"
                                size="sm"
                                className="border-red-500 text-red-500 hover:bg-red-500 hover:text-white"
                              >
                                <Trash2 className="w-4 h-4" />
                              </Button>
                            )}
                          </div>

                          <div>
                            <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-white group-hover:text-white transition-colors duration-300">
                              {project.title}
                            </h2>
                            <p className="text-lg text-gray-300 leading-relaxed mb-8">
                              {project.description}
                            </p>
                          </div>

                          {project.features && project.features.length > 0 && (
                            <div className="space-y-3">
                              <h3 className="text-xl font-semibold text-white">Key Features</h3>
                              <ul className="space-y-2">
                                {project.features.map((feature, idx) => (
                                  <li key={idx} className="flex items-center text-gray-300">
                                    <Award className="w-4 h-4 text-white mr-3 flex-shrink-0" />
                                    <span>{feature}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}

                          <div className="flex flex-col sm:flex-row gap-4">
                            <Button className="bg-white text-black hover:bg-gray-200 font-bold py-3 px-8 group">
                              View Details
                              <ChevronRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                            </Button>
                            <Button variant="outline" className="border-white text-white hover:bg-white hover:text-black font-bold py-3 px-8">
                              Contact for Quote
                              <ExternalLink className="w-4 h-4 ml-2" />
                            </Button>
                          </div>
                        </div>
                      </div>

                      {/* Image Gallery Section */}
                      <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                        <LuxuryCard className="overflow-hidden shadow-2xl">
                          <SimpleImageRotator 
                            images={project.images.map(img => ({ src: img, alt: project.title }))}
                            rotationInterval={4000}
                          />
                        </LuxuryCard>
                      </div>
                    </div>

                    {/* Project Stats or Testimonial */}
                    {project.clientTestimonial && (
                      <div className="mt-12 bg-black/30 border border-white/10 rounded-lg p-8 text-center">
                        <blockquote className="text-xl italic text-gray-300 mb-4">
                          "{project.clientTestimonial}"
                        </blockquote>
                        <cite className="text-gold font-semibold">— Client Testimonial</cite>
                      </div>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Call to Action Section */}
          <div className="text-center py-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white">
              Ready to Start Your Dream Project?
            </h2>
            <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
              Transform your space with our bespoke furniture solutions. From concept to completion, we bring your vision to life with unparalleled craftsmanship and attention to detail.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link href="/contact">
                <Button className="bg-gold text-black hover:bg-yellow-500 text-lg font-bold py-4 px-10">
                  Start Your Project
                  <ChevronRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
              <Link href="/collections">
                <Button variant="outline" className="border-white text-white hover:bg-white hover:text-black text-lg font-bold py-4 px-10">
                  Explore Our Collections
                  <ExternalLink className="w-5 h-5 ml-2" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <Footer />

      {/* Login Modal */}
      <Dialog open={showLoginModal} onOpenChange={(open) => {
        setShowLoginModal(open);
        if (!open) {
          setLoginData({ username: '', password: '', email: '' });
        }
      }}>
        <DialogContent className="bg-black border-gold/50 text-white">
          <DialogHeader>
            <DialogTitle className="text-gold flex items-center">
              <Lock className="w-5 h-5 mr-2" />
              Admin Authentication
            </DialogTitle>
            <div className="bg-red-900/20 border border-red-500/30 rounded-lg p-4 mt-4">
              <p className="text-red-300 text-sm font-medium">
                ⚠️ RESTRICTED ACCESS: Only authorized Blackhorse Furniture administrators should access this feature.
              </p>
            </div>
          </DialogHeader>
          <form onSubmit={(e) => { e.preventDefault(); handleLogin(); }} className="space-y-4">
            <div>
              <Label htmlFor="email" className="text-white">Admin Email</Label>
              <Input
                id="email"
                type="email"
                value={loginData.email}
                onChange={(e) => setLoginData(prev => ({ ...prev, email: e.target.value }))}
                className="bg-gray-900 border-gray-700 text-white"
                placeholder="Enter admin email"
                required
              />
            </div>
            <div>
              <Label htmlFor="username" className="text-white">Username</Label>
              <Input
                id="username"
                type="text"
                value={loginData.username}
                onChange={(e) => setLoginData(prev => ({ ...prev, username: e.target.value }))}
                className="bg-gray-900 border-gray-700 text-white"
                placeholder="Enter username"
                required
              />
            </div>
            <div>
              <Label htmlFor="password" className="text-white">Password</Label>
              <Input
                id="password"
                type="password"
                value={loginData.password}
                onChange={(e) => setLoginData(prev => ({ ...prev, password: e.target.value }))}
                className="bg-gray-900 border-gray-700 text-white"
                placeholder="Enter password"
                required
              />
            </div>
            <div className="flex gap-2 pt-4">
              <Button 
                type="submit"
                className="bg-white text-black hover:bg-gray-200 font-bold px-6 py-2 flex-1"
              >
                Submit & Login
              </Button>
              <Button 
                type="button"
                variant="outline" 
                onClick={() => setShowLoginModal(false)} 
                className="border-gray-600 text-white hover:bg-gray-800 px-6 py-2"
              >
                Cancel
              </Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>

      {/* Add Project Modal */}
      <Dialog open={showAddProjectModal} onOpenChange={setShowAddProjectModal}>
        <DialogContent className="bg-black border-gold/50 text-white max-w-2xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-gold flex items-center">
              <Plus className="w-5 h-5 mr-2" />
              Add New Project
            </DialogTitle>
          </DialogHeader>
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="title" className="text-white">Project Title</Label>
                <Input
                  id="title"
                  value={newProject.title}
                  onChange={(e) => setNewProject(prev => ({ ...prev, title: e.target.value }))}
                  className="bg-gray-900 border-gray-700 text-white"
                  placeholder="Enter project title"
                />
              </div>
              <div>
                <Label htmlFor="category" className="text-white">Category</Label>
                <select
                  id="category"
                  value={newProject.category}
                  onChange={(e) => setNewProject(prev => ({ ...prev, category: e.target.value }))}
                  className="w-full p-2 bg-gray-900 border border-gray-700 text-white rounded-md"
                >
                  <option value="Residential">Residential</option>
                  <option value="Restaurant">Restaurant</option>
                  <option value="Hotel">Hotel</option>
                  <option value="Office">Office</option>
                  <option value="Retail">Retail</option>
                </select>
              </div>
            </div>
            
            <div>
              <Label htmlFor="description" className="text-white">Description</Label>
              <Textarea
                id="description"
                value={newProject.description}
                onChange={(e) => setNewProject(prev => ({ ...prev, description: e.target.value }))}
                className="bg-gray-900 border-gray-700 text-white h-32"
                placeholder="Describe your project in detail..."
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <Label htmlFor="price" className="text-white">Price (Optional)</Label>
                <Input
                  id="price"
                  value={newProject.price}
                  onChange={(e) => setNewProject(prev => ({ ...prev, price: e.target.value }))}
                  className="bg-gray-900 border-gray-700 text-white"
                  placeholder="₹50,000"
                />
              </div>
              <div>
                <Label htmlFor="materials" className="text-white">Materials (Optional)</Label>
                <Input
                  id="materials"
                  value={newProject.materials}
                  onChange={(e) => setNewProject(prev => ({ ...prev, materials: e.target.value }))}
                  className="bg-gray-900 border-gray-700 text-white"
                  placeholder="Wood, Steel, Glass"
                />
              </div>
              <div>
                <Label htmlFor="dimensions" className="text-white">Dimensions (Optional)</Label>
                <Input
                  id="dimensions"
                  value={newProject.dimensions}
                  onChange={(e) => setNewProject(prev => ({ ...prev, dimensions: e.target.value }))}
                  className="bg-gray-900 border-gray-700 text-white"
                  placeholder="120cm x 80cm"
                />
              </div>
            </div>

            {/* Image Upload */}
            <div>
              <Label className="text-white">Project Images</Label>
              <div
                className={`border-2 border-dashed rounded-lg p-8 text-center transition-colors ${
                  dragOver ? 'border-white bg-white/10' : 'border-gray-600'
                }`}
                onDrop={handleDrop}
                onDragOver={handleDragOver}
                onDragEnter={handleDragEnter}
                onDragLeave={handleDragLeave}
              >
                <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-300 mb-2">Drag and drop images here, or</p>
                <input
                  type="file"
                  multiple
                  accept="image/*"
                  onChange={handleFileSelect}
                  className="hidden"
                  id="file-upload"
                />
                <label
                  htmlFor="file-upload"
                  className="bg-white text-black px-4 py-2 rounded cursor-pointer hover:bg-gray-200 font-bold"
                >
                  Choose Files
                </label>
              </div>
              
              {/* Preview uploaded images */}
              {uploadedImages.length > 0 && (
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
                  {uploadedImages.map((file, index) => (
                    <div key={index} className="relative">
                      <img
                        src={URL.createObjectURL(file)}
                        alt={`Upload ${index + 1}`}
                        className="w-full h-24 object-cover rounded"
                      />
                      <button
                        onClick={() => removeImage(index)}
                        className="absolute top-1 right-1 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs"
                      >
                        <X className="w-3 h-3" />
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div className="flex gap-2 pt-4">
              <Button 
                onClick={handleAddProject} 
                className="bg-white text-black hover:bg-gray-200 font-bold px-8 py-3 text-lg flex-1"
              >
                Submit Project
              </Button>
              <Button 
                variant="outline" 
                onClick={() => setShowAddProjectModal(false)} 
                className="border-gray-600 text-white hover:bg-gray-800 px-6 py-3"
              >
                Cancel
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}