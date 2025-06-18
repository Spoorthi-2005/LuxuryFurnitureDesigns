import { useState, useRef, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion, AnimatePresence } from "framer-motion";
import {
  Bot,
  Send,
  Camera,
  Palette,
  Home,
  Lightbulb,
  Star,
  Download,
  Share2,
  MessageCircle,
  Sparkles,
  Zap,
  Target,
  CheckCircle,
  Clock
} from "lucide-react";

interface Message {
  id: string;
  type: "user" | "ai";
  content: string;
  timestamp: Date;
  suggestions?: string[];
  designRecommendations?: DesignRecommendation[];
}

interface DesignRecommendation {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  price: number;
  category: string;
  confidence: number;
}

export default function AIDesignConsultant() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      type: "ai",
      content: "Hello! I'm your AI Interior Design Consultant. I can help you create the perfect space by analyzing your preferences, room dimensions, and lifestyle needs. What type of space are you looking to design?",
      timestamp: new Date(),
      suggestions: ["Living Room", "Bedroom", "Kitchen", "Office", "Dining Room"]
    }
  ]);
  
  const [currentMessage, setCurrentMessage] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [analysisMode, setAnalysisMode] = useState<"text" | "image" | "room">("text");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const designStyles = [
    { name: "Modern", icon: "🏢", color: "bg-slate-100" },
    { name: "Scandinavian", icon: "🌿", color: "bg-green-100" },
    { name: "Industrial", icon: "⚙️", color: "bg-gray-100" },
    { name: "Bohemian", icon: "🎨", color: "bg-purple-100" },
    { name: "Minimalist", icon: "⚪", color: "bg-blue-100" },
    { name: "Traditional", icon: "🏛️", color: "bg-amber-100" }
  ];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const simulateAIResponse = (userMessage: string) => {
    setIsTyping(true);
    
    setTimeout(() => {
      const aiResponse: Message = {
        id: Date.now().toString(),
        type: "ai",
        content: generateAIResponse(userMessage),
        timestamp: new Date(),
        designRecommendations: generateDesignRecommendations(userMessage)
      };
      
      setMessages(prev => [...prev, aiResponse]);
      setIsTyping(false);
    }, 1500);
  };

  const generateAIResponse = (userMessage: string): string => {
    const message = userMessage.toLowerCase();
    
    if (message.includes("living room")) {
      return "Perfect! For a living room, I recommend focusing on creating a comfortable seating arrangement with good flow. Based on current trends, I suggest a neutral color palette with warm accents. What's your budget range and room size?";
    } else if (message.includes("bedroom")) {
      return "Great choice! A bedroom should be your personal sanctuary. I'll help you create a space that promotes relaxation and reflects your style. What's your preferred color scheme - calming neutrals or bold statement colors?";
    } else if (message.includes("kitchen")) {
      return "Excellent! Modern kitchens balance functionality with aesthetics. I recommend considering the work triangle principle and incorporating plenty of storage. Are you planning a full renovation or just updating the design?";
    } else if (message.includes("budget")) {
      return "Understanding your budget helps me provide realistic recommendations. I can suggest options across different price points while maintaining quality and style. What specific items are you most interested in investing in?";
    } else {
      return "I understand your vision! Let me analyze your requirements and suggest some personalized design solutions. I'll consider your space, style preferences, and practical needs to create the perfect interior design plan.";
    }
  };

  const generateDesignRecommendations = (userMessage: string): DesignRecommendation[] => {
    const message = userMessage.toLowerCase();
    
    if (message.includes("living room")) {
      return [
        {
          id: "1",
          title: "Premium Sectional Sofa",
          description: "Luxurious sectional with premium fabric upholstery",
          imageUrl: "/api/placeholder/200/150",
          price: 2800,
          category: "Seating",
          confidence: 95
        },
        {
          id: "2", 
          title: "Modern Coffee Table",
          description: "Sleek glass and metal coffee table with storage",
          imageUrl: "/api/placeholder/200/150",
          price: 800,
          category: "Tables",
          confidence: 88
        }
      ];
    }
    
    return [];
  };

  const handleSendMessage = () => {
    if (currentMessage.trim()) {
      const userMessage: Message = {
        id: Date.now().toString(),
        type: "user",
        content: currentMessage,
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, userMessage]);
      simulateAIResponse(currentMessage);
      setCurrentMessage("");
    }
  };

  const handleSuggestionClick = (suggestion: string) => {
    setCurrentMessage(suggestion);
    handleSendMessage();
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Chat Interface */}
        <div className="lg:col-span-2">
          <Card className="h-[600px] flex flex-col">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <CardTitle className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                    <Bot className="w-4 h-4 text-white" />
                  </div>
                  AI Design Consultant
                  <Badge variant="secondary" className="bg-green-100 text-green-700">
                    Online
                  </Badge>
                </CardTitle>
                <div className="flex gap-2">
                  <Button
                    variant={analysisMode === "text" ? "default" : "outline"}
                    size="sm"
                    onClick={() => setAnalysisMode("text")}
                  >
                    <MessageCircle className="w-4 h-4" />
                  </Button>
                  <Button
                    variant={analysisMode === "image" ? "default" : "outline"}
                    size="sm"
                    onClick={() => setAnalysisMode("image")}
                  >
                    <Camera className="w-4 h-4" />
                  </Button>
                  <Button
                    variant={analysisMode === "room" ? "default" : "outline"}
                    size="sm"
                    onClick={() => setAnalysisMode("room")}
                  >
                    <Home className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </CardHeader>
            
            <CardContent className="flex-1 flex flex-col p-0">
              {/* Messages */}
              <ScrollArea className="flex-1 p-4">
                <div className="space-y-4">
                  <AnimatePresence>
                    {messages.map((message) => (
                      <motion.div
                        key={message.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className={`flex ${message.type === "user" ? "justify-end" : "justify-start"}`}
                      >
                        <div className={`max-w-[80%] ${message.type === "user" ? "order-2" : "order-1"}`}>
                          <div className={`flex items-end gap-2 ${message.type === "user" ? "flex-row-reverse" : "flex-row"}`}>
                            <Avatar className="w-8 h-8">
                              {message.type === "ai" ? (
                                <AvatarFallback className="bg-gradient-to-br from-purple-500 to-pink-500 text-white">
                                  <Bot className="w-4 h-4" />
                                </AvatarFallback>
                              ) : (
                                <AvatarFallback className="bg-gold text-black">
                                  U
                                </AvatarFallback>
                              )}
                            </Avatar>
                            <div className={`rounded-2xl px-4 py-2 ${
                              message.type === "user" 
                                ? "bg-gold text-black" 
                                : "bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-white"
                            }`}>
                              <p className="text-sm">{message.content}</p>
                            </div>
                          </div>
                          
                          {/* Suggestions */}
                          {message.suggestions && (
                            <div className="mt-2 flex flex-wrap gap-2">
                              {message.suggestions.map((suggestion, index) => (
                                <Button
                                  key={index}
                                  variant="outline"
                                  size="sm"
                                  onClick={() => handleSuggestionClick(suggestion)}
                                  className="text-xs"
                                >
                                  {suggestion}
                                </Button>
                              ))}
                            </div>
                          )}
                          
                          {/* Design Recommendations */}
                          {message.designRecommendations && message.designRecommendations.length > 0 && (
                            <div className="mt-3 space-y-2">
                              {message.designRecommendations.map((rec) => (
                                <div key={rec.id} className="border rounded-lg p-3 bg-white dark:bg-slate-800">
                                  <div className="flex gap-3">
                                    <div className="w-16 h-16 bg-slate-200 dark:bg-slate-700 rounded-lg flex items-center justify-center">
                                      <Palette className="w-6 h-6 text-slate-400" />
                                    </div>
                                    <div className="flex-1">
                                      <div className="flex justify-between items-start mb-1">
                                        <h4 className="font-medium text-sm">{rec.title}</h4>
                                        <Badge variant="secondary" className="text-xs">
                                          {rec.confidence}% match
                                        </Badge>
                                      </div>
                                      <p className="text-xs text-slate-600 dark:text-slate-400 mb-2">{rec.description}</p>
                                      <div className="flex justify-between items-center">
                                        <span className="font-semibold text-gold">${rec.price}</span>
                                        <Button size="sm" variant="outline" className="h-6 text-xs">
                                          Add to Design
                                        </Button>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              ))}
                            </div>
                          )}
                        </div>
                      </motion.div>
                    ))}
                  </AnimatePresence>
                  
                  {/* Typing Indicator */}
                  {isTyping && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex justify-start"
                    >
                      <div className="flex items-end gap-2">
                        <Avatar className="w-8 h-8">
                          <AvatarFallback className="bg-gradient-to-br from-purple-500 to-pink-500 text-white">
                            <Bot className="w-4 h-4" />
                          </AvatarFallback>
                        </Avatar>
                        <div className="bg-slate-100 dark:bg-slate-800 rounded-2xl px-4 py-2">
                          <div className="flex space-x-1">
                            <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce"></div>
                            <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: "0.1s" }}></div>
                            <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: "0.2s" }}></div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </div>
                <div ref={messagesEndRef} />
              </ScrollArea>
              
              {/* Message Input */}
              <div className="p-4 border-t">
                <div className="flex gap-2">
                  <Input
                    value={currentMessage}
                    onChange={(e) => setCurrentMessage(e.target.value)}
                    placeholder="Describe your design vision..."
                    onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                    className="flex-1"
                  />
                  <Button 
                    onClick={handleSendMessage}
                    disabled={!currentMessage.trim() || isTyping}
                    className="bg-gold hover:bg-gold/80 text-black"
                  >
                    <Send className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Sidebar */}
        <div className="space-y-4">
          {/* Design Styles */}
          <Card>
            <CardHeader>
              <CardTitle className="text-sm flex items-center gap-2">
                <Palette className="w-4 h-4" />
                Popular Styles
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              {designStyles.map((style) => (
                <Button
                  key={style.name}
                  variant="outline"
                  size="sm"
                  className="w-full justify-start"
                  onClick={() => handleSuggestionClick(`I'm interested in ${style.name.toLowerCase()} design style`)}
                >
                  <span className="mr-2">{style.icon}</span>
                  {style.name}
                </Button>
              ))}
            </CardContent>
          </Card>

          {/* AI Capabilities */}
          <Card>
            <CardHeader>
              <CardTitle className="text-sm flex items-center gap-2">
                <Sparkles className="w-4 h-4" />
                AI Capabilities
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-center gap-2 text-sm">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span>Room Analysis</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span>Style Matching</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span>3D Visualization</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span>Budget Planning</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Clock className="w-4 h-4 text-blue-500" />
                <span>Real-time Suggestions</span>
              </div>
            </CardContent>
          </Card>

          {/* Quick Actions */}
          <Card>
            <CardHeader>
              <CardTitle className="text-sm">Quick Actions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <Button variant="outline" size="sm" className="w-full justify-start">
                <Download className="w-4 h-4 mr-2" />
                Export Chat
              </Button>
              <Button variant="outline" size="sm" className="w-full justify-start">
                <Share2 className="w-4 h-4 mr-2" />
                Share Design
              </Button>
              <Button variant="outline" size="sm" className="w-full justify-start">
                <Calendar className="w-4 h-4 mr-2" />
                Book Consultation
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}