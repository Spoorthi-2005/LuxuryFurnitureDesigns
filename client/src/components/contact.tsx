import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: ""
  });
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for your inquiry. We'll get back to you soon.",
    });
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      message: ""
    });
  };

  const contactInfo = [
    {
      icon: "fas fa-map-marker-alt",
      title: "Showroom Address",
      content: "Plot No.B, Ground Floor, Kh No.236, Road No.3, Village Ghitorni, New Delhi-110030"
    },
    {
      icon: "fas fa-building",
      title: "India Office Address",
      content: "Opulence Living\n351, Khari Estate, Sultanpur MG road, New Delhi- 110030"
    },
    {
      icon: "fas fa-globe",
      title: "Frezza Arredementi - Italy Office",
      content: "Viale Europa, 2- 36046 Lusiana, Vicenza- Italy"
    }
  ];

  const contactDetails = [
    {
      icon: "fas fa-envelope",
      title: "Email",
      items: ["amarchauhan1287@gmail.com", "dikshas2591@gmail.com"]
    },
    {
      icon: "fas fa-phone",
      title: "Phone",
      items: ["+919718978337", "+918826560644"]
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-playfair font-bold text-deep-black mb-4">Get in Touch</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Ready to transform your space? Contact us today to discuss your furniture needs and schedule a consultation.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-playfair font-semibold text-deep-black mb-6">Contact Information</h3>
              
              {contactInfo.map((info, index) => (
                <Card key={index} className="mb-6 hover-lift transition-all">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-luxury-gold rounded-full flex items-center justify-center flex-shrink-0">
                        <i className={`${info.icon} text-white`}></i>
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-deep-black mb-2">{info.title}</h4>
                        <p className="text-gray-600 whitespace-pre-line">{info.content}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}

              <div className="grid md:grid-cols-2 gap-4">
                {contactDetails.map((detail, index) => (
                  <Card key={index} className="hover-lift transition-all">
                    <CardContent className="p-6">
                      <div className="flex items-center space-x-3 mb-3">
                        <i className={`${detail.icon} text-luxury-gold`}></i>
                        <span className="font-semibold text-deep-black">{detail.title}</span>
                      </div>
                      {detail.items.map((item, itemIndex) => (
                        <p key={itemIndex} className="text-gray-600">{item}</p>
                      ))}
                    </CardContent>
                  </Card>
                ))}
              </div>

              <Card className="bg-luxury-gold text-white">
                <CardContent className="p-6">
                  <h4 className="text-lg font-semibold mb-2">Also visit our online printed canvas style wall art</h4>
                  <a 
                    href="http://www.opulencelivingwalls.com" 
                    className="text-white underline hover:no-underline" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    www.opulencelivingwalls.com
                  </a>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="hover-lift transition-all">
            <CardContent className="p-8">
              <h3 className="text-2xl font-playfair font-semibold text-deep-black mb-6">Send Us a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="firstName" className="text-sm font-medium text-gray-700 mb-2">First Name</Label>
                    <Input
                      id="firstName"
                      name="firstName"
                      type="text"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      placeholder="Your first name"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="lastName" className="text-sm font-medium text-gray-700 mb-2">Last Name</Label>
                    <Input
                      id="lastName"
                      name="lastName"
                      type="text"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      placeholder="Your last name"
                      required
                    />
                  </div>
                </div>
                <div>
                  <Label htmlFor="email" className="text-sm font-medium text-gray-700 mb-2">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="your.email@example.com"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="phone" className="text-sm font-medium text-gray-700 mb-2">Phone</Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="+91 98765 43210"
                  />
                </div>
                <div>
                  <Label htmlFor="message" className="text-sm font-medium text-gray-700 mb-2">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell us about your furniture requirements..."
                    required
                  />
                </div>
                <Button type="submit" className="w-full bg-luxury-gold text-white py-4 text-lg font-semibold hover:bg-yellow-600 transition-colors">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>

        {/* Map Section */}
        <div className="mt-16">
          <h3 className="text-2xl font-playfair font-semibold text-deep-black mb-6 text-center">Find Us</h3>
          <Card className="hover-lift transition-all">
            <CardContent className="p-4">
              <div className="w-full h-96 bg-gray-200 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <i className="fas fa-map-marked-alt text-4xl text-luxury-gold mb-4"></i>
                  <p className="text-gray-600">Interactive Map</p>
                  <p className="text-sm text-gray-500">Plot No.B, Ground Floor, Kh No.236, Road No.3, Village Ghitorni, New Delhi-110030</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
