import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export default function WhatsAppContact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    projectType: "",
    budget: "",
    message: "",
    location: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create WhatsApp message
    const whatsappMessage = `
*New Consultation Request - Blackhorse Furnitures*

*Customer Details:*
Name: ${formData.name}
Phone: ${formData.phone}
Location: ${formData.location}

*Project Information:*
Project Type: ${formData.projectType}
Budget Range: ${formData.budget}

*Message:*
${formData.message}

*Requested via Blackhorse Furnitures Website*
    `.trim();

    // Amar Chauhan's WhatsApp number
    const whatsappNumber = "919718978337";
    const encodedMessage = encodeURIComponent(whatsappMessage);
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
    
    // Open WhatsApp
    window.open(whatsappUrl, '_blank');
    
    // Reset form
    setFormData({
      name: "",
      phone: "",
      projectType: "",
      budget: "",
      message: "",
      location: ""
    });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  return (
    <div className="max-w-2xl mx-auto">
      <Card className="premium-card hover-3d shadow-2xl luxury-shine">
        <CardContent className="p-8">
          <div className="text-center mb-8">
            <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4 luxury-glow">
              <i className="fab fa-whatsapp text-white text-3xl"></i>
            </div>
            <h3 className="text-2xl font-playfair font-bold text-elegant-brown mb-2 animated-gradient">
              WhatsApp Consultation
            </h3>
            <p className="text-soft-brown">
              Send your consultation request directly via WhatsApp for immediate response
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <Label htmlFor="name" className="text-elegant-brown font-medium">Full Name *</Label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) => handleInputChange("name", e.target.value)}
                  placeholder="Your full name"
                  required
                  className="mt-2"
                />
              </div>
              <div>
                <Label htmlFor="phone" className="text-elegant-brown font-medium">Phone Number *</Label>
                <Input
                  id="phone"
                  value={formData.phone}
                  onChange={(e) => handleInputChange("phone", e.target.value)}
                  placeholder="+91 9876543210"
                  required
                  className="mt-2"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <Label htmlFor="projectType" className="text-elegant-brown font-medium">Project Type *</Label>
                <Select value={formData.projectType} onValueChange={(value) => handleInputChange("projectType", value)}>
                  <SelectTrigger className="mt-2">
                    <SelectValue placeholder="Select project type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="bedroom">Bedroom Furniture</SelectItem>
                    <SelectItem value="living-room">Living Room</SelectItem>
                    <SelectItem value="dining">Dining Room</SelectItem>
                    <SelectItem value="kitchen">Kitchen Cabinets</SelectItem>
                    <SelectItem value="office">Office Furniture</SelectItem>
                    <SelectItem value="wardrobe">Wardrobe & Storage</SelectItem>
                    <SelectItem value="complete-home">Complete Home Furnishing</SelectItem>
                    <SelectItem value="custom">Custom Design</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="budget" className="text-elegant-brown font-medium">Budget Range</Label>
                <Select value={formData.budget} onValueChange={(value) => handleInputChange("budget", value)}>
                  <SelectTrigger className="mt-2">
                    <SelectValue placeholder="Select budget range" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="under-1lakh">Under ₹1 Lakh</SelectItem>
                    <SelectItem value="1-3lakh">₹1 - 3 Lakhs</SelectItem>
                    <SelectItem value="3-5lakh">₹3 - 5 Lakhs</SelectItem>
                    <SelectItem value="5-10lakh">₹5 - 10 Lakhs</SelectItem>
                    <SelectItem value="above-10lakh">Above ₹10 Lakhs</SelectItem>
                    <SelectItem value="discuss">Prefer to Discuss</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div>
              <Label htmlFor="location" className="text-elegant-brown font-medium">Location *</Label>
              <Input
                id="location"
                value={formData.location}
                onChange={(e) => handleInputChange("location", e.target.value)}
                placeholder="Your city/area"
                required
                className="mt-2"
              />
            </div>

            <div>
              <Label htmlFor="message" className="text-elegant-brown font-medium">Project Details</Label>
              <Textarea
                id="message"
                value={formData.message}
                onChange={(e) => handleInputChange("message", e.target.value)}
                placeholder="Tell us about your furniture requirements, preferred style, timeline, or any specific needs..."
                rows={4}
                className="mt-2"
              />
            </div>

            <Button 
              type="submit" 
              className="w-full glossy-btn py-4 text-lg font-bold text-white"
              disabled={!formData.name || !formData.phone || !formData.projectType || !formData.location}
            >
              <i className="fab fa-whatsapp mr-2"></i>
              Send WhatsApp Message
            </Button>
          </form>

          <div className="mt-6 p-4 bg-green-50 rounded-lg border border-green-200">
            <div className="flex items-center space-x-2 text-green-700">
              <i className="fas fa-info-circle"></i>
              <span className="font-medium">Quick Response Guaranteed</span>
            </div>
            <p className="text-green-600 text-sm mt-1">
              Your message will be sent directly to our WhatsApp for immediate attention. 
              We typically respond within 15 minutes during business hours.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}