import { useState, useRef, useEffect } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Camera, 
  Smartphone, 
  Download, 
  Share2, 
  RotateCcw, 
  ZoomIn, 
  ZoomOut,
  Move3D,
  Eye,
  Settings,
  X
} from "lucide-react";

interface ARPreviewModalProps {
  isOpen: boolean;
  onClose: () => void;
  roomData: any;
}

export default function ARPreviewModal({ isOpen, onClose, roomData }: ARPreviewModalProps) {
  const [isARActive, setIsARActive] = useState(false);
  const [viewMode, setViewMode] = useState<"3d" | "ar" | "vr">("3d");
  const [isLoading, setIsLoading] = useState(false);
  const canvasRef = useRef<HTMLDivElement>(null);

  const handleStartAR = async () => {
    setIsLoading(true);
    // Simulate AR initialization
    setTimeout(() => {
      setIsARActive(true);
      setIsLoading(false);
    }, 2000);
  };

  const handleCapture = () => {
    // Simulate capturing AR view
    console.log("Capturing AR view...");
  };

  const handleShare = () => {
    // Simulate sharing functionality
    console.log("Sharing AR design...");
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-hidden p-0">
        <DialogHeader className="p-6 pb-0">
          <div className="flex justify-between items-center">
            <DialogTitle className="flex items-center gap-2 text-xl">
              <Camera className="w-6 h-6 text-gold" />
              AR Preview & Visualization
            </DialogTitle>
            <Button variant="ghost" size="sm" onClick={onClose}>
              <X className="w-4 h-4" />
            </Button>
          </div>
        </DialogHeader>

        <div className="flex flex-col h-[600px]">
          {/* Mode Selector */}
          <div className="px-6 pb-4">
            <div className="flex gap-2">
              <Button
                variant={viewMode === "3d" ? "default" : "outline"}
                size="sm"
                onClick={() => setViewMode("3d")}
                className="flex items-center gap-2"
              >
                <Move3D className="w-4 h-4" />
                3D View
              </Button>
              <Button
                variant={viewMode === "ar" ? "default" : "outline"}
                size="sm"
                onClick={() => setViewMode("ar")}
                className="flex items-center gap-2"
              >
                <Camera className="w-4 h-4" />
                AR Mode
              </Button>
              <Button
                variant={viewMode === "vr" ? "default" : "outline"}
                size="sm"
                onClick={() => setViewMode("vr")}
                className="flex items-center gap-2"
              >
                <Eye className="w-4 h-4" />
                VR Preview
              </Button>
            </div>
          </div>

          {/* Main Preview Area */}
          <div className="flex-1 px-6">
            <div className="relative h-full bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-900 rounded-lg overflow-hidden">
              {viewMode === "3d" && (
                <div className="h-full flex flex-col items-center justify-center">
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="text-center space-y-4"
                  >
                    <div className="w-32 h-32 mx-auto bg-gradient-to-br from-gold/20 to-gold/40 rounded-2xl flex items-center justify-center">
                      <Move3D className="w-16 h-16 text-gold" />
                    </div>
                    <h3 className="text-xl font-semibold text-slate-800 dark:text-white">
                      3D Room Visualization
                    </h3>
                    <p className="text-slate-600 dark:text-slate-300 max-w-md">
                      Interactive 3D preview of your room design with realistic lighting and materials
                    </p>
                    <div className="flex gap-2 justify-center">
                      <Button variant="outline" size="sm">
                        <RotateCcw className="w-4 h-4 mr-2" />
                        Rotate
                      </Button>
                      <Button variant="outline" size="sm">
                        <ZoomIn className="w-4 h-4 mr-2" />
                        Zoom
                      </Button>
                    </div>
                  </motion.div>
                </div>
              )}

              {viewMode === "ar" && (
                <div className="h-full flex flex-col items-center justify-center">
                  {!isARActive ? (
                    <motion.div
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      className="text-center space-y-6"
                    >
                      <div className="w-32 h-32 mx-auto bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl flex items-center justify-center">
                        <Smartphone className="w-16 h-16 text-blue-500" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-slate-800 dark:text-white mb-2">
                          Augmented Reality Preview
                        </h3>
                        <p className="text-slate-600 dark:text-slate-300 max-w-md">
                          See your furniture design in your actual space using advanced AR technology
                        </p>
                      </div>
                      <Button 
                        onClick={handleStartAR}
                        disabled={isLoading}
                        className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600"
                      >
                        {isLoading ? (
                          <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                            className="w-4 h-4 border-2 border-white border-t-transparent rounded-full mr-2"
                          />
                        ) : (
                          <Camera className="w-4 h-4 mr-2" />
                        )}
                        {isLoading ? "Initializing AR..." : "Start AR Preview"}
                      </Button>
                    </motion.div>
                  ) : (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="h-full relative"
                    >
                      {/* AR Camera View Simulation */}
                      <div className="absolute inset-0 bg-gradient-to-br from-slate-700 to-slate-800 rounded-lg">
                        <div className="absolute inset-4 border-2 border-dashed border-white/30 rounded-lg flex items-center justify-center">
                          <div className="text-center text-white">
                            <Camera className="w-12 h-12 mx-auto mb-2 opacity-60" />
                            <p className="text-sm opacity-80">AR Camera View Active</p>
                            <p className="text-xs opacity-60 mt-1">Point device at room space</p>
                          </div>
                        </div>
                        
                        {/* AR Controls Overlay */}
                        <div className="absolute top-4 right-4 flex flex-col gap-2">
                          <Button size="sm" variant="secondary" onClick={handleCapture}>
                            <Camera className="w-4 h-4" />
                          </Button>
                          <Button size="sm" variant="secondary" onClick={handleShare}>
                            <Share2 className="w-4 h-4" />
                          </Button>
                        </div>
                        
                        {/* Virtual Furniture Preview */}
                        <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2">
                          <motion.div
                            animate={{ 
                              scale: [1, 1.05, 1],
                              opacity: [0.8, 1, 0.8]
                            }}
                            transition={{ 
                              duration: 2, 
                              repeat: Infinity,
                              ease: "easeInOut"
                            }}
                            className="bg-white/20 backdrop-blur-sm border border-white/30 rounded-lg p-3 text-white text-sm"
                          >
                            <div className="flex items-center gap-2">
                              <div className="w-3 h-3 bg-gold rounded-full"></div>
                              Virtual furniture placed in real space
                            </div>
                          </motion.div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </div>
              )}

              {viewMode === "vr" && (
                <div className="h-full flex flex-col items-center justify-center">
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="text-center space-y-4"
                  >
                    <div className="w-32 h-32 mx-auto bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-2xl flex items-center justify-center">
                      <Eye className="w-16 h-16 text-purple-500" />
                    </div>
                    <h3 className="text-xl font-semibold text-slate-800 dark:text-white">
                      Virtual Reality Experience
                    </h3>
                    <p className="text-slate-600 dark:text-slate-300 max-w-md">
                      Immersive VR walkthrough of your designed space with full interaction
                    </p>
                    <Button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600">
                      <Eye className="w-4 h-4 mr-2" />
                      Launch VR Experience
                    </Button>
                  </motion.div>
                </div>
              )}
            </div>
          </div>

          {/* Bottom Controls */}
          <div className="p-6 pt-4 border-t bg-slate-50 dark:bg-slate-800/50">
            <div className="flex justify-between items-center">
              <div className="flex gap-2">
                <Badge variant="secondary" className="bg-gold/10 text-gold border-gold/20">
                  Premium Feature
                </Badge>
                <Badge variant="outline">
                  {roomData?.items?.length || 0} Items
                </Badge>
              </div>

              <div className="flex gap-2">
                <Button variant="outline" size="sm">
                  <Download className="w-4 h-4 mr-2" />
                  Export
                </Button>
                <Button variant="outline" size="sm">
                  <Share2 className="w-4 h-4 mr-2" />
                  Share
                </Button>
                <Button size="sm" className="bg-gold hover:bg-gold/80">
                  <Settings className="w-4 h-4 mr-2" />
                  Advanced Settings
                </Button>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}