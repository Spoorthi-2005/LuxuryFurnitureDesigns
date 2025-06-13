import { useState, useEffect, useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'ai';
  timestamp: Date;
}

export default function AIChatAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputMessage, setInputMessage] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const furnitureKnowledge = {
    styles: {
      "modern": "Clean lines, minimalist design, neutral colors, and functional aesthetics",
      "contemporary": "Current trends with mixed materials, bold colors, and innovative designs",
      "traditional": "Classic designs with rich woods, ornate details, and timeless elegance",
      "rustic": "Natural materials, distressed finishes, and country-inspired designs",
      "industrial": "Metal and wood combinations, exposed hardware, and urban aesthetics",
      "scandinavian": "Light woods, simple forms, and functional beauty with Nordic influence"
    },
    categories: {
      "bedroom": ["beds", "wardrobes", "nightstands", "dressers", "mirrors"],
      "living room": ["sofas", "coffee tables", "TV units", "recliners", "side tables"],
      "dining": ["dining tables", "chairs", "buffets", "bar units", "display cabinets"],
      "office": ["desks", "office chairs", "bookshelves", "filing cabinets", "workstations"],
      "kitchen": ["kitchen cabinets", "islands", "pantry units", "breakfast tables"]
    },
    materials: ["solid wood", "engineered wood", "metal", "glass", "marble", "leather", "fabric"],
    services: ["custom design", "home consultation", "3D visualization", "delivery", "installation", "warranty"]
  };

  const generateAIResponse = (userMessage: string): string => {
    const message = userMessage.toLowerCase();
    
    // Style-related queries
    if (message.includes('style') || message.includes('design')) {
      if (message.includes('modern')) {
        return "Modern furniture features clean lines and minimalist design. We offer contemporary pieces with sleek finishes, neutral tones, and functional storage solutions. Our modern collection includes platform beds, glass dining tables, and modular sofas perfect for today's lifestyle.";
      }
      if (message.includes('traditional')) {
        return "Traditional furniture showcases timeless elegance with rich wood finishes and classic designs. Our collection includes ornate bed frames, mahogany dining sets, and leather Chesterfield sofas that bring sophistication to any space.";
      }
      return "We specialize in various furniture styles including Modern, Contemporary, Traditional, Rustic, Industrial, and Scandinavian. Each style has unique characteristics. Which style interests you most?";
    }
    
    // Room-specific queries
    if (message.includes('bedroom')) {
      return "For bedrooms, we offer complete furniture sets including luxury beds with upholstered headboards, spacious wardrobes with customizable interiors, elegant nightstands, and matching dressers. All pieces can be customized to your space and style preferences.";
    }
    
    if (message.includes('living room') || message.includes('sofa')) {
      return "Our living room collection features premium sofas in various configurations (L-shaped, sectional, recliner), coffee tables in wood/glass/marble, entertainment units, and accent chairs. We offer both ready-made and custom-designed pieces.";
    }
    
    if (message.includes('dining')) {
      return "Our dining furniture includes extendable tables for 4-12 people, comfortable chairs in wood/upholstered options, elegant buffets for storage, and display cabinets. Available in solid wood, glass-top, and marble finishes.";
    }
    
    if (message.includes('office') || message.includes('work')) {
      return "We create functional office spaces with ergonomic desks, executive chairs, modular storage systems, and conference tables. Our office furniture combines style with productivity features.";
    }
    
    // Material queries
    if (message.includes('wood') || message.includes('material')) {
      return "We use premium materials including solid wood (teak, oak, walnut), engineered wood, metals, glass, and marble. All materials are sourced for durability and sustainability. Which material preference do you have?";
    }
    
    // Service queries
    if (message.includes('custom') || message.includes('design')) {
      return "Yes! We specialize in custom furniture design. Our process includes home consultation, 3D visualization, material selection, and complete manufacturing. Timeline is typically 4-8 weeks depending on complexity.";
    }
    
    if (message.includes('price') || message.includes('cost') || message.includes('budget')) {
      return "Our furniture ranges from ₹25,000 for single pieces to ₹5+ lakhs for complete room sets. Pricing depends on materials, size, and customization. We offer flexible payment options. Would you like a consultation for accurate pricing?";
    }
    
    if (message.includes('delivery') || message.includes('installation')) {
      return "We provide white-glove delivery and professional installation across India. Our team handles assembly, placement, and styling. Delivery typically takes 1-2 weeks after manufacturing completion.";
    }
    
    // Warranty and quality
    if (message.includes('warranty') || message.includes('quality')) {
      return "All our furniture comes with comprehensive warranty coverage. We stand behind our craftsmanship with quality guarantees and after-sales service. Our pieces are built to last generations.";
    }
    
    // General greetings and help
    if (message.includes('hello') || message.includes('hi') || message.includes('help')) {
      return "Hello! I'm here to help you with Blackhorse Furnitures. I can assist with furniture styles, room planning, materials, pricing, and our services. What would you like to know about?";
    }
    
    // Default response
    return "I'd be happy to help you with that! I can provide information about our furniture styles, room-specific solutions, materials, custom design services, pricing, and delivery. Could you please provide more specific details about what you're looking for?";
  };

  const handleSendMessage = async () => {
    if (!inputMessage.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputMessage,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage("");
    setIsTyping(true);

    // Simulate AI thinking time
    setTimeout(() => {
      const aiResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: generateAIResponse(inputMessage),
        sender: 'ai',
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, aiResponse]);
      setIsTyping(false);
    }, 1000 + Math.random() * 1000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  const initialMessage: Message = {
    id: 'initial',
    text: "Hello! I'm your Blackhorse Furnitures AI assistant. I can help you with furniture styles, room planning, materials, pricing, and design suggestions. What would you like to know?",
    sender: 'ai',
    timestamp: new Date()
  };

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setMessages([initialMessage]);
    }
  }, [isOpen]);

  return (
    <div className="fixed bottom-32 right-6 z-50">
      {/* AI Chat Button */}
      {!isOpen && (
        <Button 
          onClick={() => setIsOpen(true)}
          className="w-14 h-14 rounded-full bg-purple-600 text-white shadow-xl hover:bg-purple-700 transition-all duration-300 hover:scale-110 luxury-glow flex items-center justify-center"
          title="AI Furniture Assistant"
        >
          <i className="fas fa-robot text-lg"></i>
        </Button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <Card className="w-80 h-96 premium-card shadow-2xl">
          <CardContent className="p-0 flex flex-col h-full">
            {/* Chat Header */}
            <div className="bg-glow-gold text-white p-4 rounded-t-lg flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <i className="fas fa-robot"></i>
                <span className="font-bold">Furniture AI Assistant</span>
              </div>
              <Button 
                onClick={() => setIsOpen(false)}
                className="w-6 h-6 rounded-full bg-transparent hover:bg-white/20 text-white text-xs p-0"
              >
                ×
              </Button>
            </div>

            {/* Messages Area */}
            <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-gray-50">
              {messages.map((message) => (
                <div 
                  key={message.id}
                  className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div 
                    className={`max-w-xs p-3 rounded-lg text-sm ${
                      message.sender === 'user' 
                        ? 'bg-glow-gold text-white' 
                        : 'bg-white border text-gray-800 shadow-sm'
                    }`}
                  >
                    {message.text}
                  </div>
                </div>
              ))}
              
              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-white border text-gray-800 shadow-sm max-w-xs p-3 rounded-lg text-sm">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-pulse"></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-pulse" style={{animationDelay: '0.2s'}}></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-pulse" style={{animationDelay: '0.4s'}}></div>
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <div className="p-4 border-t bg-white rounded-b-lg">
              <div className="flex space-x-2">
                <Input
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Ask about furniture styles, rooms, pricing..."
                  className="flex-1"
                />
                <Button 
                  onClick={handleSendMessage}
                  className="glossy-btn px-4 py-2 text-white"
                  disabled={!inputMessage.trim()}
                >
                  <i className="fas fa-paper-plane"></i>
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}