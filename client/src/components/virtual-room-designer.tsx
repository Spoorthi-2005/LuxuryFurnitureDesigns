import { useState, useRef, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Slider } from "@/components/ui/slider";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Palette, 
  Move3D, 
  RotateCcw, 
  Save, 
  Share2, 
  Eye, 
  Maximize2,
  Layers,
  Lightbulb,
  Camera,
  Download,
  Settings
} from "lucide-react";

interface RoomItem {
  id: string;
  name: string;
  type: string;
  x: number;
  y: number;
  width: number;
  height: number;
  rotation: number;
  color: string;
  material: string;
  price: number;
}

interface Room {
  id: string;
  name: string;
  type: string;
  width: number;
  height: number;
  wallColor: string;
  floorType: string;
  lighting: string;
  items: RoomItem[];
}

export default function VirtualRoomDesigner() {
  const [selectedRoom, setSelectedRoom] = useState<Room>({
    id: "1",
    name: "Living Room Design",
    type: "living-room",
    width: 400,
    height: 300,
    wallColor: "#f5f5f0",
    floorType: "hardwood",
    lighting: "natural",
    items: []
  });

  const [selectedTool, setSelectedTool] = useState<string>("select");
  const [selectedItem, setSelectedItem] = useState<RoomItem | null>(null);
  const [isDesigning, setIsDesigning] = useState(false);
  const [roomTemplates] = useState([
    { id: "living", name: "Modern Living Room", style: "contemporary" },
    { id: "bedroom", name: "Luxury Bedroom", style: "luxury" },
    { id: "kitchen", name: "Gourmet Kitchen", style: "modern" },
    { id: "office", name: "Executive Office", style: "professional" }
  ]);

  const [furnitureItems] = useState([
    { id: "sofa1", name: "Premium Sofa", type: "seating", width: 80, height: 40, color: "#8B4513", price: 2500 },
    { id: "table1", name: "Coffee Table", type: "table", width: 60, height: 30, color: "#654321", price: 800 },
    { id: "chair1", name: "Accent Chair", type: "seating", width: 30, height: 30, color: "#2F4F4F", price: 1200 },
    { id: "tv1", name: "Entertainment Unit", type: "storage", width: 70, height: 25, color: "#333333", price: 1500 },
    { id: "plant1", name: "Indoor Plant", type: "decor", width: 15, height: 15, color: "#228B22", price: 150 },
    { id: "lamp1", name: "Floor Lamp", type: "lighting", width: 12, height: 12, color: "#FFD700", price: 400 }
  ]);

  const canvasRef = useRef<HTMLDivElement>(null);

  const addItemToRoom = (furnitureItem: any) => {
    const newItem: RoomItem = {
      id: `${furnitureItem.id}_${Date.now()}`,
      name: furnitureItem.name,
      type: furnitureItem.type,
      x: 50,
      y: 50,
      width: furnitureItem.width,
      height: furnitureItem.height,
      rotation: 0,
      color: furnitureItem.color,
      material: "premium",
      price: furnitureItem.price
    };

    setSelectedRoom(prev => ({
      ...prev,
      items: [...prev.items, newItem]
    }));
  };

  const updateItemPosition = (itemId: string, x: number, y: number) => {
    setSelectedRoom(prev => ({
      ...prev,
      items: prev.items.map(item => 
        item.id === itemId ? { ...item, x, y } : item
      )
    }));
  };

  const getTotalPrice = () => {
    return selectedRoom.items.reduce((total, item) => total + item.price, 0);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-slate-800 dark:text-white mb-2">
            Virtual Room Designer
          </h1>
          <p className="text-slate-600 dark:text-slate-300">
            Create and visualize your perfect interior design with our advanced 3D room planner
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Sidebar - Tools & Furniture */}
          <div className="lg:col-span-1 space-y-6">
            {/* Room Settings */}
            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Settings className="w-5 h-5" />
                  Room Settings
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label className="text-sm font-medium mb-2 block">Room Type</label>
                  <Select value={selectedRoom.type} onValueChange={(value) => 
                    setSelectedRoom(prev => ({ ...prev, type: value }))
                  }>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="living-room">Living Room</SelectItem>
                      <SelectItem value="bedroom">Bedroom</SelectItem>
                      <SelectItem value="kitchen">Kitchen</SelectItem>
                      <SelectItem value="office">Office</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="text-sm font-medium mb-2 block">Wall Color</label>
                  <div className="flex gap-2">
                    {["#f5f5f0", "#e8e5e5", "#d4c5b9", "#c7b299"].map((color) => (
                      <button
                        key={color}
                        className={`w-8 h-8 rounded-full border-2 ${
                          selectedRoom.wallColor === color ? "border-gold" : "border-gray-300"
                        }`}
                        style={{ backgroundColor: color }}
                        onClick={() => setSelectedRoom(prev => ({ ...prev, wallColor: color }))}
                      />
                    ))}
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium mb-2 block">Lighting</label>
                  <Select value={selectedRoom.lighting} onValueChange={(value) => 
                    setSelectedRoom(prev => ({ ...prev, lighting: value }))
                  }>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="natural">Natural Light</SelectItem>
                      <SelectItem value="warm">Warm Lighting</SelectItem>
                      <SelectItem value="cool">Cool Lighting</SelectItem>
                      <SelectItem value="dramatic">Dramatic Lighting</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </CardContent>
            </Card>

            {/* Furniture Library */}
            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Layers className="w-5 h-5" />
                  Furniture Library
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="seating" className="w-full">
                  <TabsList className="grid w-full grid-cols-3">
                    <TabsTrigger value="seating">Seating</TabsTrigger>
                    <TabsTrigger value="tables">Tables</TabsTrigger>
                    <TabsTrigger value="decor">Decor</TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="seating" className="space-y-2 mt-4">
                    {furnitureItems.filter(item => item.type === "seating").map((item) => (
                      <div key={item.id} className="p-3 border rounded-lg hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors">
                        <div className="flex justify-between items-center">
                          <div>
                            <h4 className="font-medium text-sm">{item.name}</h4>
                            <p className="text-xs text-slate-500">${item.price.toLocaleString()}</p>
                          </div>
                          <Button size="sm" onClick={() => addItemToRoom(item)}>
                            Add
                          </Button>
                        </div>
                      </div>
                    ))}
                  </TabsContent>

                  <TabsContent value="tables" className="space-y-2 mt-4">
                    {furnitureItems.filter(item => item.type === "table" || item.type === "storage").map((item) => (
                      <div key={item.id} className="p-3 border rounded-lg hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors">
                        <div className="flex justify-between items-center">
                          <div>
                            <h4 className="font-medium text-sm">{item.name}</h4>
                            <p className="text-xs text-slate-500">${item.price.toLocaleString()}</p>
                          </div>
                          <Button size="sm" onClick={() => addItemToRoom(item)}>
                            Add
                          </Button>
                        </div>
                      </div>
                    ))}
                  </TabsContent>

                  <TabsContent value="decor" className="space-y-2 mt-4">
                    {furnitureItems.filter(item => item.type === "decor" || item.type === "lighting").map((item) => (
                      <div key={item.id} className="p-3 border rounded-lg hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors">
                        <div className="flex justify-between items-center">
                          <div>
                            <h4 className="font-medium text-sm">{item.name}</h4>
                            <p className="text-xs text-slate-500">${item.price.toLocaleString()}</p>
                          </div>
                          <Button size="sm" onClick={() => addItemToRoom(item)}>
                            Add
                          </Button>
                        </div>
                      </div>
                    ))}
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          </div>

          {/* Main Design Canvas */}
          <div className="lg:col-span-3">
            <Card className="glass-card min-h-[600px]">
              <CardHeader>
                <div className="flex justify-between items-center">
                  <CardTitle className="flex items-center gap-2">
                    <Move3D className="w-5 h-5" />
                    {selectedRoom.name}
                  </CardTitle>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm">
                      <Eye className="w-4 h-4 mr-2" />
                      3D View
                    </Button>
                    <Button variant="outline" size="sm">
                      <Camera className="w-4 h-4 mr-2" />
                      AR Preview
                    </Button>
                    <Button variant="outline" size="sm">
                      <Share2 className="w-4 h-4 mr-2" />
                      Share
                    </Button>
                    <Button size="sm">
                      <Save className="w-4 h-4 mr-2" />
                      Save Design
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                {/* Canvas Area */}
                <div 
                  ref={canvasRef}
                  className="relative w-full h-96 border-2 border-dashed border-slate-300 dark:border-slate-600 rounded-lg overflow-hidden"
                  style={{ backgroundColor: selectedRoom.wallColor }}
                >
                  {/* Floor Pattern */}
                  <div className="absolute inset-0 opacity-20" style={{
                    backgroundImage: selectedRoom.floorType === 'hardwood' ? 
                      'repeating-linear-gradient(90deg, #8b4513 0px, #8b4513 100px, #a0522d 100px, #a0522d 200px)' :
                      'none',
                    backgroundSize: selectedRoom.floorType === 'hardwood' ? '200px 20px' : 'auto'
                  }}></div>

                  {/* Room Items */}
                  <AnimatePresence>
                    {selectedRoom.items.map((item) => (
                      <motion.div
                        key={item.id}
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0, opacity: 0 }}
                        className={`absolute cursor-pointer border-2 rounded-lg flex items-center justify-center text-xs font-medium text-white shadow-lg ${
                          selectedItem?.id === item.id ? 'border-gold' : 'border-transparent'
                        }`}
                        style={{
                          left: item.x,
                          top: item.y,
                          width: item.width,
                          height: item.height,
                          backgroundColor: item.color,
                          transform: `rotate(${item.rotation}deg)`
                        }}
                        onClick={() => setSelectedItem(item)}
                        drag
                        dragMomentum={false}
                        onDragEnd={(e, info) => {
                          updateItemPosition(item.id, item.x + info.offset.x, item.y + info.offset.y);
                        }}
                      >
                        {item.name}
                      </motion.div>
                    ))}
                  </AnimatePresence>

                  {/* Room Grid */}
                  <div className="absolute inset-0 pointer-events-none" style={{
                    backgroundImage: 'radial-gradient(circle, #00000020 1px, transparent 1px)',
                    backgroundSize: '20px 20px'
                  }}></div>
                </div>

                {/* Item Properties Panel */}
                {selectedItem && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-4 p-4 bg-slate-50 dark:bg-slate-800 rounded-lg"
                  >
                    <h4 className="font-medium mb-3">Edit: {selectedItem.name}</h4>
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                      <div>
                        <label className="text-sm font-medium block mb-1">X Position</label>
                        <Slider
                          value={[selectedItem.x]}
                          onValueChange={([value]) => updateItemPosition(selectedItem.id, value, selectedItem.y)}
                          max={350}
                          step={1}
                        />
                      </div>
                      <div>
                        <label className="text-sm font-medium block mb-1">Y Position</label>
                        <Slider
                          value={[selectedItem.y]}
                          onValueChange={([value]) => updateItemPosition(selectedItem.id, selectedItem.x, value)}
                          max={250}
                          step={1}
                        />
                      </div>
                      <div>
                        <label className="text-sm font-medium block mb-1">Rotation</label>
                        <Slider
                          value={[selectedItem.rotation]}
                          onValueChange={([value]) => {
                            setSelectedRoom(prev => ({
                              ...prev,
                              items: prev.items.map(item => 
                                item.id === selectedItem.id ? { ...item, rotation: value } : item
                              )
                            }));
                            setSelectedItem(prev => prev ? { ...prev, rotation: value } : null);
                          }}
                          max={360}
                          step={15}
                        />
                      </div>
                      <div className="flex items-end">
                        <Button 
                          variant="destructive" 
                          size="sm"
                          onClick={() => {
                            setSelectedRoom(prev => ({
                              ...prev,
                              items: prev.items.filter(item => item.id !== selectedItem.id)
                            }));
                            setSelectedItem(null);
                          }}
                        >
                          Remove
                        </Button>
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* Design Summary */}
                <div className="mt-6 p-4 bg-gradient-to-r from-gold/10 to-gold/5 rounded-lg border border-gold/20">
                  <div className="flex justify-between items-center">
                    <div>
                      <h4 className="font-medium text-slate-800 dark:text-white">Design Summary</h4>
                      <p className="text-sm text-slate-600 dark:text-slate-300">
                        {selectedRoom.items.length} items • {selectedRoom.type}
                      </p>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-gold">
                        ${getTotalPrice().toLocaleString()}
                      </div>
                      <p className="text-xs text-slate-500">Total Estimate</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}