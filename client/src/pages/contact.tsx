import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import Header from "@/components/header";
import Footer from "@/components/footer";
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
    },
    {
      icon: "fas fa-globe",
      title: "International Office - Italy",
      content: "Frezza Arredementi\nViale Europa, 2- 36046 Lusiana, Vicenza- Italy"
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
    <div className="min-h-screen bg-warm-beige text-foreground">
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
                  <h2 className="text-4xl font-playfair font-bold text-luxury-gold mb-8">Get In Touch</h2>
                  
                  {contactInfo.map((info, index) => (
                    <Card key={index} className={`mb-6 bg-gray-800/30 border-gray-700 hover-lift transition-all ${info.highlight ? 'border-luxury-gold' : ''}`}>
                      <CardContent className="p-8">
                        <div className="flex items-start space-x-6">
                          <div className="w-16 h-16 bg-luxury-gold rounded-full flex items-center justify-center flex-shrink-0">
                            <i className={`${info.icon} text-black text-xl`}></i>
                          </div>
                          <div>
                            <h3 className="text-2xl font-playfair font-bold text-luxury-gold mb-3">{info.title}</h3>
                            <p className="text-gray-300 whitespace-pre-line leading-relaxed">{info.content}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}

                  <div className="grid md:grid-cols-2 gap-6">
                    {contactDetails.map((detail, index) => (
                      <Card key={index} className="bg-gray-800/30 border-gray-700 hover-lift transition-all">
                        <CardContent className="p-6">
                          <div className="flex items-center space-x-4 mb-4">
                            <i className={`${detail.icon} text-luxury-gold text-xl`}></i>
                            <span className="font-playfair font-bold text-luxury-gold text-lg">{detail.title}</span>
                          </div>
                          {detail.items.map((item, itemIndex) => (
                            <div key={itemIndex} className="mb-2">
                              <p className="text-sm text-gray-400">{item.label}</p>
                              <p className="text-gray-300 font-medium">{item.value}</p>
                            </div>
                          ))}
                        </CardContent>
                      </Card>
                    ))}
                  </div>

                  {/* Business Hours */}
                  <Card className="bg-luxury-gold text-black">
                    <CardContent className="p-8">
                      <h3 className="text-2xl font-playfair font-bold mb-6">Consultation Hours</h3>
                      {businessHours.map((schedule, index) => (
                        <div key={index} className="flex justify-between items-center py-2 border-b border-black/20 last:border-b-0">
                          <span className="font-semibold">{schedule.day}</span>
                          <span>{schedule.hours}</span>
                        </div>
                      ))}
                    </CardContent>
                  </Card>

                  <Card className="bg-gray-800/50 border-luxury-gold">
                    <CardContent className="p-6">
                      <h4 className="text-xl font-playfair font-bold text-luxury-gold mb-4">Visit Our Online Gallery</h4>
                      <p className="text-gray-300 mb-4">Explore our exclusive collection of printed canvas wall art</p>
                      <a 
                        href="http://www.opulencelivingwalls.com" 
                        className="text-luxury-gold hover:text-yellow-300 transition-colors font-semibold" 
                        target="_blank" 
                        rel="noopener noreferrer"
                      >
                        www.opulencelivingwalls.com <i className="fas fa-external-link-alt ml-2"></i>
                      </a>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* Contact Form */}
              <Card className="bg-gray-800/30 border-gray-700 hover-lift transition-all">
                <CardContent className="p-10">
                  <h3 className="text-3xl font-playfair font-bold text-luxury-gold mb-8">Schedule Your Consultation</h3>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="firstName" className="text-sm font-medium text-gray-300 mb-2 block">First Name *</Label>
                        <Input
                          id="firstName"
                          name="firstName"
                          type="text"
                          value={formData.firstName}
                          onChange={handleInputChange}
                          placeholder="Your first name"
                          className="bg-gray-700 border-gray-600 text-white placeholder-gray-400"
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="lastName" className="text-sm font-medium text-gray-300 mb-2 block">Last Name *</Label>
                        <Input
                          id="lastName"
                          name="lastName"
                          type="text"
                          value={formData.lastName}
                          onChange={handleInputChange}
                          placeholder="Your last name"
                          className="bg-gray-700 border-gray-600 text-white placeholder-gray-400"
                          required
                        />
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="email" className="text-sm font-medium text-gray-300 mb-2 block">Email Address *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="your.email@example.com"
                        className="bg-gray-700 border-gray-600 text-white placeholder-gray-400"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone" className="text-sm font-medium text-gray-300 mb-2 block">Phone Number</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="+91 98765 43210"
                        className="bg-gray-700 border-gray-600 text-white placeholder-gray-400"
                      />
                    </div>
                    <div>
                      <Label htmlFor="projectDetails" className="text-sm font-medium text-gray-300 mb-2 block">Project Details *</Label>
                      <Textarea
                        id="projectDetails"
                        name="projectDetails"
                        rows={5}
                        value={formData.projectDetails}
                        onChange={handleInputChange}
                        placeholder="Describe your furniture requirements, space dimensions, style preferences, and any specific needs..."
                        className="bg-gray-700 border-gray-600 text-white placeholder-gray-400"
                        required
                      />
                    </div>
                    <Button 
                      type="submit" 
                      disabled={consultationMutation.isPending}
                      className="w-full bg-luxury-gold text-black py-4 text-lg font-bold hover:bg-yellow-400 transition-colors disabled:opacity-50"
                    >
                      {consultationMutation.isPending ? "Submitting..." : "Send Consultation Request"}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Map Section */}
            <div className="mt-20">
              <h3 className="text-4xl font-playfair font-bold text-luxury-gold mb-8 text-center">Visit Our Showroom</h3>
              <Card className="bg-gray-800/30 border-gray-700 hover-lift transition-all">
                <CardContent className="p-6">
                  <div className="w-full h-96 bg-gradient-to-br from-gray-700 to-gray-800 rounded-lg flex items-center justify-center">
                    <div className="text-center">
                      <i className="fas fa-map-marked-alt text-6xl text-luxury-gold mb-6"></i>
                      <h4 className="text-2xl font-playfair font-bold text-luxury-gold mb-4">Interactive Showroom Location</h4>
                      <p className="text-gray-300 mb-2">Plot No.B, Ground Floor, Kh No.236, Road No.3</p>
                      <p className="text-gray-300">Village Ghitorni, New Delhi-110030</p>
                      <Button className="mt-6 bg-luxury-gold text-black px-8 py-3 font-semibold hover:bg-yellow-400 transition-colors">
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