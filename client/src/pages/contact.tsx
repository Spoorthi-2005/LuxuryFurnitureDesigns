import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import Header from "@/components/header";
import Footer from "@/components/footer";
import FloatingContact from "@/components/floating-contact";
import WhatsAppContact from "@/components/whatsapp-contact";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    projectDetails: ""
  });
  const { toast } = useToast();

  const consultationMutation = useMutation({
    mutationFn: async (data: typeof formData) => {
      const response = await fetch("/api/consultation-requests", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      } as RequestInit);
      if (!response.ok) {
        throw new Error("Failed to submit consultation request");
      }
      return await response.json();
    },
    onSuccess: () => {
      toast({
        title: "Consultation Request Submitted Successfully!",
        description: "Thank you for your inquiry. Our design experts will contact you within 24 hours to discuss your project requirements.",
      });
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        projectDetails: ""
      });
    },
    onError: () => {
      toast({
        title: "Submission Failed",
        description: "There was an error submitting your request. Please try again or contact us directly.",
        variant: "destructive",
      });
    }
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    consultationMutation.mutate(formData);
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
        { label: "Primary Contact", value: "+919718978337" },
        { label: "Secondary Contact", value: "+918826560644" }
      ]
    }
  ];

  const businessHours = [
    { day: "Monday - Friday", hours: "9:00 AM - 7:00 PM" },
    { day: "Saturday", hours: "10:00 AM - 6:00 PM" },
    { day: "Sunday", hours: "By Appointment Only" }
  ];

  return (
    <div className="min-h-screen bg-warm-cream text-foreground">
      <Header />
      <div className="pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-r from-elegant-brown/10 to-transparent">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-6xl font-playfair font-bold mb-6 text-gradient-brown">
                Connect With Excellence
              </h1>
              <p className="text-2xl text-muted-foreground leading-relaxed">
                Transform your living spaces with our exceptional furniture solutions. Our expert consultants are ready to 
                discuss your vision and create bespoke pieces that reflect your unique style and sophistication.
              </p>
            </div>
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
                            <p className="text-muted-foreground whitespace-pre-line leading-relaxed">{info.content}</p>
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
                                <p className="text-elegant-brown font-semibold text-lg break-all">{item.value}</p>
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
                    <h3 className="text-3xl font-playfair font-bold text-elegant-brown">Schedule Your Consultation</h3>
                  </div>
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
                      disabled={consultationMutation.isPending}
                      className="w-full bg-glow-gold text-white py-4 text-lg font-bold hover:bg-elegant-brown transition-colors disabled:opacity-50 shadow-lg"
                    >
                      {consultationMutation.isPending ? "Submitting..." : "Send Consultation Request"}
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
      <Footer />
    </div>
  );
}