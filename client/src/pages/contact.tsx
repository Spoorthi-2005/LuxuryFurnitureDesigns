import { useState } from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import FloatingContact from "@/components/floating-contact";
import WhatsAppContact from "@/components/whatsapp-contact";
import AIDesignConsultant from "@/components/ai-design-consultant";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { useToast } from "@/hooks/use-toast";
import { motion } from "framer-motion";
import { 
  Bot, 
  Calendar, 
  Camera, 
  Clock, 
  MessageCircle, 
  Phone, 
  Mail, 
  MapPin, 
  Star, 
  Sparkles,
  Zap,
  Users,
  Award,
  CheckCircle
} from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    projectDetails: ""
  });
  const [isAIConsultantOpen, setIsAIConsultantOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("consultation");
  const { toast } = useToast();

  const sendWhatsAppConsultation = (data: typeof formData) => {
    const message = `🏠 *New Consultation Request*

👤 *Name:* ${data.firstName} ${data.lastName}
📧 *Email:* ${data.email}
📱 *Phone:* ${data.phone}

📝 *Project Details:*
${data.projectDetails}

---
Sent from Blackhorse Furnitures Website`;

    const encodedMessage = encodeURIComponent(message);
    
    // Contact numbers for Amar Chauhan and Diksha Shringi
    const amarNumber = "919718978337";
    const dikshaNumber = "918826560644";
    
    // Send to both contacts
    const amarWhatsAppUrl = `https://wa.me/${amarNumber}?text=${encodedMessage}`;
    const dikshaWhatsAppUrl = `https://wa.me/${dikshaNumber}?text=${encodedMessage}`;
    
    // Open both WhatsApp chats
    window.open(amarWhatsAppUrl, '_blank');
    setTimeout(() => {
      window.open(dikshaWhatsAppUrl, '_blank');
    }, 1000); // Small delay to prevent popup blocking
    
    toast({
      title: "WhatsApp Consultation Sent!",
      description: "Your consultation request has been sent to both Amar Chauhan and Diksha Shringi via WhatsApp.",
    });
    
    // Clear form
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      projectDetails: ""
    });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    sendWhatsAppConsultation(formData);
  };

  const contactInfo = [
    {
      icon: "fas fa-map-marker-alt",
      title: "Premium Showroom Address",
      content: "Plot No.B, Ground Floor, Kh No.236, Road No.3, Village Ghitorni, New Delhi-110030",
      highlight: true
    },
    {
      icon: "fas fa-building",
      title: "India Corporate Office",
      content: "Opulence Living\n351, Khari Estate, Sultanpur MG road, New Delhi- 110030"
    }
  ];

  const contactDetails = [
    {
      icon: "fas fa-envelope",
      title: "Email Communications",
      items: [
        { label: "Amar Chauhan (Founder)", value: "amarchauhan1287@gmail.com" },
        { label: "Diksha Shringi (Co-Founder)", value: "dikshas2591@gmail.com" }
      ]
    },
    {
      icon: "fas fa-phone",
      title: "Direct Contact Numbers",
      items: [
        { label: "Amar Chauhan (Founder)", value: "+919718978337" },
        { label: "Diksha Shringi (Co-Founder)", value: "+918826560644" }
      ]
    }
  ];

  const businessHours = [
    { day: "Monday - Friday", hours: "9:00 AM - 7:00 PM" },
    { day: "Saturday", hours: "10:00 AM - 6:00 PM" },
    { day: "Sunday", hours: "By Appointment Only" }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <div className="pt-20">
        {/* Contact Page - Network Connection Pattern */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-black"></div>
          <div className="absolute inset-0 opacity-[0.01]" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='150' height='150' viewBox='0 0 150 150' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' stroke='%23FFFFFF' stroke-width='0.4'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3Ccircle cx='120' cy='30' r='4'/%3E%3Ccircle cx='75' cy='75' r='4'/%3E%3Ccircle cx='30' cy='120' r='4'/%3E%3Ccircle cx='120' cy='120' r='4'/%3E%3Cline x1='30' y1='30' x2='75' y2='75'/%3E%3Cline x1='120' y1='30' x2='75' y2='75'/%3E%3Cline x1='75' y1='75' x2='30' y2='120'/%3E%3Cline x1='75' y1='75' x2='120' y2='120'/%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '150px 150px'
          }}></div>
          <div className="absolute inset-0 bg-gradient-to-tr from-teal-900/[0.01] via-transparent to-indigo-900/[0.015]"></div>
        </div>

        {/* Connection Light Elements */}
        <div className="absolute top-1/4 left-1/3 w-64 h-64 bg-teal-500/[0.02] rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/3 w-64 h-64 bg-indigo-500/[0.02] rounded-full blur-3xl animate-pulse" style={{animationDelay: '9s'}}></div>

        {/* Hero Section */}
        <section className="py-20 bg-transparent relative z-10">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-4xl mx-auto mb-16">
              <Badge className="mb-4 bg-purple-500/10 text-purple-300 border-purple-400/30">
                <Sparkles className="w-4 h-4 mr-2" />
                Premium Design Consultation
              </Badge>
              <h1 className="text-6xl font-playfair font-bold mb-6 text-white">
                Connect With Excellence
              </h1>
              <p className="text-xl text-gray-300 leading-relaxed mb-8">
                Experience next-generation interior design consultation with AI-powered recommendations and expert human guidance
              </p>
              
              {/* Enhanced CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <Button
                  onClick={() => setIsAIConsultantOpen(true)}
                  className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-8 py-3 text-lg font-semibold shadow-2xl transform hover:scale-105 transition-all duration-300"
                >
                  <Bot className="w-5 h-5 mr-2" />
                  AI Design Consultant
                </Button>
                
                <Button
                  onClick={() => setActiveTab("consultation")}
                  className="bg-gradient-to-r from-gold to-amber-500 hover:from-amber-500 hover:to-gold text-black px-8 py-3 text-lg font-semibold shadow-2xl transform hover:scale-105 transition-all duration-300"
                >
                  <Calendar className="w-5 h-5 mr-2" />
                  Schedule Expert Call
                </Button>

                <Button
                  onClick={() => {
                    const quickMessage = "Hi! I'm interested in a luxury interior design consultation for my space. Could you please help me get started?";
                    const encodedMessage = encodeURIComponent(quickMessage);
                    window.open(`https://wa.me/919718978337?text=${encodedMessage}`, '_blank');
                  }}
                  className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-8 py-3 text-lg font-semibold shadow-2xl transform hover:scale-105 transition-all duration-300"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Quick WhatsApp Chat
                </Button>
              </div>
            </div>

            {/* AI Features Preview */}
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="bg-black/30 backdrop-blur-sm rounded-2xl p-6 border border-purple-400/20"
              >
                <Bot className="w-12 h-12 text-purple-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">AI Design Assistant</h3>
                <p className="text-slate-400 text-sm">
                  Get instant design recommendations powered by advanced AI algorithms trained on premium interior design principles
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="bg-black/30 backdrop-blur-sm rounded-2xl p-6 border border-gold/20"
              >
                <Users className="w-12 h-12 text-gold mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">Expert Consultation</h3>
                <p className="text-slate-400 text-sm">
                  Connect with our master craftsmen and design experts for personalized guidance on your luxury furniture project
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="bg-black/30 backdrop-blur-sm rounded-2xl p-6 border border-blue-400/20"
              >
                <Camera className="w-12 h-12 text-blue-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">Virtual Preview</h3>
                <p className="text-slate-400 text-sm">
                  Visualize furniture in your space using AR technology before making final decisions on your investment
                </p>
              </motion.div>
            </div>
            
            <div className="text-center">
              <div className="bg-gradient-to-r from-gold/20 to-amber-500/20 p-8 rounded-lg border border-gold/30">
                <h2 className="text-3xl font-playfair font-bold text-gold mb-4">Why Choose Blackhorse Furnitures?</h2>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gold/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Award className="text-gold text-2xl" />
                    </div>
                    <h3 className="text-white font-semibold mb-2">20+ Years Experience</h3>
                    <p className="text-gray-300 text-sm">Proven expertise in luxury furniture design and manufacturing</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gold/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Users className="text-gold text-2xl" />
                    </div>
                    <h3 className="text-white font-semibold mb-2">700+ Projects Completed</h3>
                    <p className="text-gray-300 text-sm">Successfully delivered across hotels, restaurants, and homes</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gold/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <CheckCircle className="text-gold text-2xl" />
                    </div>
                    <h3 className="text-white font-semibold mb-2">24/7 Support</h3>
                    <p className="text-gray-300 text-sm">Dedicated customer service and post-delivery support</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* WhatsApp Contact Section */}
        <section className="py-20 bg-section">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-playfair font-bold text-elegant-brown mb-6 animated-gradient">
                Instant WhatsApp Consultation
              </h2>
              <p className="text-xl text-soft-brown max-w-3xl mx-auto floating">
                Get immediate responses and personalized assistance through WhatsApp - the fastest way to start your furniture journey.
              </p>
            </div>
            <WhatsAppContact />
          </div>
        </section>

        <div className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-16">
              {/* Contact Information */}
              <div className="space-y-8">
                <div>
                  <h2 className="text-4xl font-playfair font-bold text-elegant-brown mb-8">Get In Touch</h2>
                  
                  {contactInfo.map((info, index) => (
                    <Card key={index} className={`mb-6 bg-white border-silver/30 hover-lift transition-all ${info.highlight ? 'border-elegant-brown' : ''}`}>
                      <CardContent className="p-8">
                        <div className="flex items-start space-x-6">
                          <div className="w-16 h-16 bg-elegant-brown rounded-full flex items-center justify-center flex-shrink-0">
                            <i className={`${info.icon} text-white text-xl`}></i>
                          </div>
                          <div>
                            <h3 className="text-2xl font-playfair font-bold text-elegant-brown mb-3">{info.title}</h3>
                            <p className="text-soft-brown whitespace-pre-line leading-relaxed">{info.content}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}

                  <div className="space-y-6">
                    {contactDetails.map((detail, index) => (
                      <Card key={index} className="bg-card border-champagne/40 hover-lift transition-all">
                        <CardContent className="p-8">
                          <div className="flex items-center space-x-4 mb-6">
                            <div className="w-12 h-12 bg-glow-gold rounded-full flex items-center justify-center">
                              <i className={`${detail.icon} text-white text-lg`}></i>
                            </div>
                            <h3 className="font-playfair font-bold text-elegant-brown text-xl">{detail.title}</h3>
                          </div>
                          <div className="space-y-4">
                            {detail.items.map((item, itemIndex) => (
                              <div key={itemIndex} className="bg-section rounded-lg p-4 border border-champagne/30">
                                <p className="text-sm text-soft-brown mb-1 font-medium">{item.label}</p>
                                {detail.title === "Direct Contact Numbers" ? (
                                  <div className="flex items-center justify-between">
                                    <a 
                                      href={`tel:${item.value}`}
                                      className="text-elegant-brown hover:text-glow-gold font-semibold text-lg transition-colors cursor-pointer"
                                    >
                                      {item.value}
                                    </a>
                                    <Button
                                      onClick={() => window.open(`tel:${item.value}`, '_self')}
                                      size="sm"
                                      className="ml-2 bg-green-600 hover:bg-green-700 text-white px-3 py-1"
                                    >
                                      <Phone className="w-4 h-4 mr-1" />
                                      Call
                                    </Button>
                                  </div>
                                ) : detail.title === "Email Communications" ? (
                                  <div className="flex items-center justify-between">
                                    <a 
                                      href={`mailto:${item.value}`}
                                      className="text-elegant-brown hover:text-glow-gold font-semibold text-lg transition-colors cursor-pointer break-all"
                                    >
                                      {item.value}
                                    </a>
                                    <Button
                                      onClick={() => window.open(`mailto:${item.value}`, '_self')}
                                      size="sm"
                                      className="ml-2 bg-blue-600 hover:bg-blue-700 text-white px-3 py-1"
                                    >
                                      <Mail className="w-4 h-4 mr-1" />
                                      Email
                                    </Button>
                                  </div>
                                ) : (
                                  <p className="text-elegant-brown font-semibold text-lg break-all">{item.value}</p>
                                )}
                              </div>
                            ))}
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>

                  {/* Business Hours */}
                  <Card className="bg-glow-gold text-white shadow-lg">
                    <CardContent className="p-8">
                      <div className="flex items-center space-x-4 mb-6">
                        <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                          <i className="fas fa-clock text-white text-lg"></i>
                        </div>
                        <h3 className="text-2xl font-playfair font-bold">Consultation Hours</h3>
                      </div>
                      <div className="space-y-3">
                        {businessHours.map((schedule, index) => (
                          <div key={index} className="flex justify-between items-center py-3 px-4 bg-white/10 rounded-lg">
                            <span className="font-semibold">{schedule.day}</span>
                            <span className="font-medium">{schedule.hours}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="bg-card border-champagne/40 shadow-lg">
                    <CardContent className="p-8">
                      <div className="flex items-center space-x-4 mb-4">
                        <div className="w-12 h-12 bg-glow-gold rounded-full flex items-center justify-center">
                          <i className="fas fa-palette text-white text-lg"></i>
                        </div>
                        <h4 className="text-xl font-playfair font-bold text-elegant-brown">Visit Our Online Gallery</h4>
                      </div>
                      <p className="text-soft-brown mb-6">Explore our exclusive collection of printed canvas wall art</p>
                      <div className="bg-section rounded-lg p-4 border border-champagne/30">
                        <a 
                          href="http://www.opulencelivingwalls.com" 
                          className="text-elegant-brown hover:text-glow-gold transition-colors font-semibold text-lg inline-flex items-center" 
                          target="_blank" 
                          rel="noopener noreferrer"
                        >
                          www.opulencelivingwalls.com <i className="fas fa-external-link-alt ml-2"></i>
                        </a>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* Contact Form */}
              <Card className="bg-card border-champagne/40 hover-lift transition-all shadow-xl">
                <CardContent className="p-10">
                  <div className="flex items-center space-x-4 mb-8">
                    <div className="w-16 h-16 bg-glow-gold rounded-full flex items-center justify-center">
                      <i className="fas fa-calendar-check text-white text-xl"></i>
                    </div>
                    <h3 className="text-3xl font-playfair font-bold text-elegant-brown">WhatsApp Consultation Request</h3>
                  </div>
                  <p className="text-soft-brown mb-6 text-center">
                    Fill out the form below and we'll send your consultation request directly to both Amar Chauhan and Diksha Shringi via WhatsApp for immediate response.
                  </p>
                  <form onSubmit={handleSubmit} className="space-y-8">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="firstName" className="text-sm font-medium text-elegant-brown mb-2 block">First Name *</Label>
                        <Input
                          id="firstName"
                          name="firstName"
                          type="text"
                          value={formData.firstName}
                          onChange={handleInputChange}
                          placeholder="Your first name"
                          className="bg-section border-champagne/50 text-elegant-brown placeholder-soft-brown focus:border-glow-gold focus:ring-glow-gold/20"
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="lastName" className="text-sm font-medium text-elegant-brown mb-2 block">Last Name *</Label>
                        <Input
                          id="lastName"
                          name="lastName"
                          type="text"
                          value={formData.lastName}
                          onChange={handleInputChange}
                          placeholder="Your last name"
                          className="bg-section border-champagne/50 text-elegant-brown placeholder-soft-brown focus:border-glow-gold focus:ring-glow-gold/20"
                          required
                        />
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="email" className="text-sm font-medium text-elegant-brown mb-2 block">Email Address *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="your.email@example.com"
                        className="bg-section border-champagne/50 text-elegant-brown placeholder-soft-brown focus:border-glow-gold focus:ring-glow-gold/20"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone" className="text-sm font-medium text-elegant-brown mb-2 block">Phone Number</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="+91 98765 43210"
                        className="bg-section border-champagne/50 text-elegant-brown placeholder-soft-brown focus:border-glow-gold focus:ring-glow-gold/20"
                      />
                    </div>
                    <div>
                      <Label htmlFor="projectDetails" className="text-sm font-medium text-elegant-brown mb-2 block">Project Details *</Label>
                      <Textarea
                        id="projectDetails"
                        name="projectDetails"
                        rows={5}
                        value={formData.projectDetails}
                        onChange={handleInputChange}
                        placeholder="Describe your furniture requirements, space dimensions, style preferences, and any specific needs..."
                        className="bg-section border-champagne/50 text-elegant-brown placeholder-soft-brown focus:border-glow-gold focus:ring-glow-gold/20"
                        required
                      />
                    </div>
                    <Button 
                      type="submit" 
                      className="w-full bg-glow-gold text-white py-4 text-lg font-bold hover:bg-elegant-brown transition-colors shadow-lg"
                    >
                      Send WhatsApp Consultation
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Map Section */}
            <div className="mt-20">
              <h3 className="text-4xl font-playfair font-bold text-elegant-brown mb-8 text-center">Visit Our Showroom</h3>
              <Card className="bg-card border-champagne/40 hover-lift transition-all shadow-xl">
                <CardContent className="p-8">
                  <div className="w-full h-96 bg-section rounded-lg border border-champagne/30 flex items-center justify-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-glow-gold/10 to-transparent"></div>
                    <div className="text-center z-10">
                      <div className="w-20 h-20 bg-glow-gold rounded-full flex items-center justify-center mx-auto mb-6">
                        <i className="fas fa-map-marked-alt text-white text-3xl"></i>
                      </div>
                      <h4 className="text-2xl font-playfair font-bold text-elegant-brown mb-4">Interactive Showroom Location</h4>
                      <p className="text-soft-brown mb-2 font-medium">Plot No.B, Ground Floor, Kh No.236, Road No.3</p>
                      <p className="text-soft-brown mb-6 font-medium">Village Ghitorni, New Delhi-110030</p>
                      <Button 
                        onClick={() => window.open('https://maps.google.com/?q=Plot+No.B,+Ground+Floor,+Kh+No.236,+Road+No.3,+Village+Ghitorni,+New+Delhi-110030', '_blank')}
                        className="bg-glow-gold text-white px-8 py-3 font-semibold hover:bg-elegant-brown transition-colors shadow-lg"
                      >
                        Get Directions <i className="fas fa-directions ml-2"></i>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
      
      <FloatingContact />
      <Footer />

      {/* AI Design Consultant Modal */}
      <Dialog open={isAIConsultantOpen} onOpenChange={setIsAIConsultantOpen}>
        <DialogContent className="max-w-6xl max-h-[90vh] overflow-hidden p-0">
          <DialogHeader className="p-6 pb-0">
            <DialogTitle className="flex items-center gap-2">
              <Bot className="w-6 h-6 text-purple-500" />
              AI Design Consultant
              <Badge variant="secondary" className="bg-purple-500/10 text-purple-400 border-purple-400/30">
                Premium Service
              </Badge>
            </DialogTitle>
          </DialogHeader>
          <div className="h-[75vh]">
            <AIDesignConsultant />
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}