import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { useToast } from '@/hooks/use-toast';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { apiRequest } from '@/lib/queryClient';
import { Plus, Upload, Edit, Trash2, Star, Image as ImageIcon, Save, X } from 'lucide-react';
import Header from '@/components/header';
import Footer from '@/components/footer';

interface Project {
  id: number;
  title: string;
  description: string;
  category: string;
  status: string;
  featured: boolean;
  price?: string;
  materials?: string;
  dimensions?: string;
  images?: ProjectImage[];
}

interface ProjectImage {
  id: number;
  projectId: number;
  imageUrl: string;
  altText: string;
  caption: string;
  displayOrder: number;
  isFeatured: boolean;
}

interface Category {
  id: number;
  name: string;
  description: string;
  displayOrder: number;
  isActive: boolean;
}

export default function AdminDashboard() {
  const { toast } = useToast();
  const queryClient = useQueryClient();
  
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isProjectModalOpen, setIsProjectModalOpen] = useState(false);
  const [isCategoryModalOpen, setIsCategoryModalOpen] = useState(false);
  const [isImageModalOpen, setIsImageModalOpen] = useState(false);
  const [uploadingImages, setUploadingImages] = useState(false);

  // Project form state
  const [projectForm, setProjectForm] = useState({
    title: '',
    description: '',
    category: '',
    price: '',
    materials: '',
    dimensions: '',
    featured: false
  });

  // Category form state
  const [categoryForm, setCategoryForm] = useState({
    name: '',
    description: '',
    displayOrder: 0
  });

  // Fetch projects
  const { data: projects = [], isLoading: projectsLoading } = useQuery({
    queryKey: ['/api/projects'],
  });

  // Fetch categories
  const { data: categories = [], isLoading: categoriesLoading } = useQuery({
    queryKey: ['/api/categories'],
  });

  // Create project mutation
  const createProjectMutation = useMutation({
    mutationFn: (data: any) => apiRequest('/api/projects', 'POST', data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['/api/projects'] });
      setIsProjectModalOpen(false);
      resetProjectForm();
      toast({
        title: "Success",
        description: "Project created successfully!",
      });
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: "Failed to create project",
        variant: "destructive",
      });
    }
  });

  // Update project mutation
  const updateProjectMutation = useMutation({
    mutationFn: ({ id, data }: { id: number; data: any }) => 
      apiRequest(`/api/projects/${id}`, 'PUT', data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['/api/projects'] });
      setSelectedProject(null);
      toast({
        title: "Success",
        description: "Project updated successfully!",
      });
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: "Failed to update project",
        variant: "destructive",
      });
    }
  });

  // Delete project mutation
  const deleteProjectMutation = useMutation({
    mutationFn: (id: number) => apiRequest(`/api/projects/${id}`, 'DELETE'),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['/api/projects'] });
      toast({
        title: "Success",
        description: "Project deleted successfully!",
      });
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: "Failed to delete project",
        variant: "destructive",
      });
    }
  });

  // Create category mutation
  const createCategoryMutation = useMutation({
    mutationFn: (data: any) => apiRequest('/api/categories', 'POST', data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['/api/categories'] });
      setIsCategoryModalOpen(false);
      resetCategoryForm();
      toast({
        title: "Success",
        description: "Category created successfully!",
      });
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: "Failed to create category",
        variant: "destructive",
      });
    }
  });

  // Upload image mutation
  const uploadImageMutation = useMutation({
    mutationFn: async ({ projectId, formData }: { projectId: number; formData: FormData }) => {
      const response = await fetch(`/api/projects/${projectId}/images`, {
        method: 'POST',
        body: formData,
      });
      if (!response.ok) throw new Error('Upload failed');
      return response.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['/api/projects'] });
      toast({
        title: "Success",
        description: "Image uploaded successfully!",
      });
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: "Failed to upload image",
        variant: "destructive",
      });
    }
  });

  const resetProjectForm = () => {
    setProjectForm({
      title: '',
      description: '',
      category: '',
      price: '',
      materials: '',
      dimensions: '',
      featured: false
    });
  };

  const resetCategoryForm = () => {
    setCategoryForm({
      name: '',
      description: '',
      displayOrder: 0
    });
  };

  const handleCreateProject = () => {
    if (!projectForm.title || !projectForm.category) {
      toast({
        title: "Error",
        description: "Please fill in required fields",
        variant: "destructive",
      });
      return;
    }
    createProjectMutation.mutate(projectForm);
  };

  const handleUpdateProject = (project: Project) => {
    updateProjectMutation.mutate({
      id: project.id,
      data: projectForm
    });
  };

  const handleDeleteProject = (id: number) => {
    if (confirm('Are you sure you want to delete this project?')) {
      deleteProjectMutation.mutate(id);
    }
  };

  const handleCreateCategory = () => {
    if (!categoryForm.name) {
      toast({
        title: "Error",
        description: "Please enter category name",
        variant: "destructive",
      });
      return;
    }
    createCategoryMutation.mutate(categoryForm);
  };

  const handleImageUpload = (projectId: number, files: FileList) => {
    setUploadingImages(true);
    
    Array.from(files).forEach(file => {
      const formData = new FormData();
      formData.append('image', file);
      formData.append('altText', `${file.name} - furniture project image`);
      formData.append('displayOrder', '0');
      
      uploadImageMutation.mutate(
        { projectId, formData },
        {
          onSettled: () => setUploadingImages(false)
        }
      );
    });
  };

  const editProject = (project: Project) => {
    setProjectForm({
      title: project.title,
      description: project.description,
      category: project.category,
      price: project.price || '',
      materials: project.materials || '',
      dimensions: project.dimensions || '',
      featured: project.featured
    });
    setSelectedProject(project);
    setIsProjectModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gold mb-2">Content Management Dashboard</h1>
          <p className="text-gray-300">Manage your furniture projects and images</p>
        </div>

        <Tabs defaultValue="projects" className="space-y-6">
          <TabsList className="grid w-full grid-cols-2 bg-gray-800">
            <TabsTrigger value="projects" className="text-white">Projects</TabsTrigger>
            <TabsTrigger value="categories" className="text-white">Categories</TabsTrigger>
          </TabsList>

          <TabsContent value="projects" className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-semibold text-white">Projects</h2>
              <Button 
                onClick={() => {
                  resetProjectForm();
                  setSelectedProject(null);
                  setIsProjectModalOpen(true);
                }}
                className="bg-gold text-black hover:bg-yellow-500"
              >
                <Plus className="w-4 h-4 mr-2" />
                Add Project
              </Button>
            </div>

            {projectsLoading ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[...Array(6)].map((_, i) => (
                  <Card key={i} className="bg-gray-800 border-gray-700">
                    <div className="animate-pulse">
                      <div className="h-48 bg-gray-700 rounded-t-lg"></div>
                      <CardContent className="p-4 space-y-2">
                        <div className="h-4 bg-gray-700 rounded w-3/4"></div>
                        <div className="h-3 bg-gray-700 rounded w-1/2"></div>
                      </CardContent>
                    </div>
                  </Card>
                ))}
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects?.map((project: Project) => (
                  <Card key={project.id} className="bg-gray-800 border-gray-700 hover:border-gold/50 transition-all">
                    <div className="relative">
                      {project.images && project.images.length > 0 ? (
                        <img 
                          src={project.images.find(img => img.isFeatured)?.imageUrl || project.images[0]?.imageUrl}
                          alt={project.title}
                          className="w-full h-48 object-cover rounded-t-lg"
                        />
                      ) : (
                        <div className="w-full h-48 bg-gray-700 rounded-t-lg flex items-center justify-center">
                          <ImageIcon className="w-12 h-12 text-gray-500" />
                        </div>
                      )}
                      {project.featured && (
                        <Badge className="absolute top-2 right-2 bg-gold text-black">
                          <Star className="w-3 h-3 mr-1" />
                          Featured
                        </Badge>
                      )}
                    </div>
                    <CardContent className="p-4">
                      <h3 className="text-lg font-semibold text-white mb-2">{project.title}</h3>
                      <p className="text-gray-300 text-sm mb-3 line-clamp-2">{project.description}</p>
                      <div className="flex justify-between items-center mb-3">
                        <Badge variant="outline" className="border-gold text-gold">
                          {project.category}
                        </Badge>
                        {project.price && (
                          <span className="text-gold font-medium">{project.price}</span>
                        )}
                      </div>
                      <div className="flex gap-2">
                        <Button 
                          size="sm" 
                          variant="outline"
                          onClick={() => editProject(project)}
                          className="flex-1"
                        >
                          <Edit className="w-3 h-3 mr-1" />
                          Edit
                        </Button>
                        <Dialog>
                          <DialogTrigger asChild>
                            <Button size="sm" variant="outline" className="flex-1">
                              <Upload className="w-3 h-3 mr-1" />
                              Images
                            </Button>
                          </DialogTrigger>
                          <DialogContent className="bg-gray-800 border-gray-700 text-white max-w-md">
                            <DialogHeader>
                              <DialogTitle>Upload Images for {project.title}</DialogTitle>
                            </DialogHeader>
                            <div className="space-y-4">
                              <div>
                                <Label>Select Images</Label>
                                <Input
                                  type="file"
                                  multiple
                                  accept="image/*"
                                  onChange={(e) => {
                                    if (e.target.files && e.target.files.length > 0) {
                                      handleImageUpload(project.id, e.target.files);
                                    }
                                  }}
                                  className="bg-gray-700 border-gray-600 text-white"
                                />
                              </div>
                              <p className="text-sm text-gray-400">
                                You can select multiple images. Supported formats: JPG, PNG, WEBP
                              </p>
                              {project.images && project.images.length > 0 && (
                                <div>
                                  <Label>Current Images ({project.images.length})</Label>
                                  <div className="grid grid-cols-3 gap-2 mt-2">
                                    {project.images.map(img => (
                                      <img 
                                        key={img.id}
                                        src={img.imageUrl} 
                                        alt={img.altText}
                                        className="w-full h-16 object-cover rounded border border-gray-600"
                                      />
                                    ))}
                                  </div>
                                </div>
                              )}
                            </div>
                          </DialogContent>
                        </Dialog>
                        <Button 
                          size="sm" 
                          variant="destructive"
                          onClick={() => handleDeleteProject(project.id)}
                        >
                          <Trash2 className="w-3 h-3" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </TabsContent>

          <TabsContent value="categories" className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-semibold text-white">Categories</h2>
              <Button 
                onClick={() => {
                  resetCategoryForm();
                  setIsCategoryModalOpen(true);
                }}
                className="bg-gold text-black hover:bg-yellow-500"
              >
                <Plus className="w-4 h-4 mr-2" />
                Add Category
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {categories?.map((category: Category) => (
                <Card key={category.id} className="bg-gray-800 border-gray-700">
                  <CardContent className="p-4">
                    <h3 className="text-lg font-semibold text-white">{category.name}</h3>
                    <p className="text-gray-300 text-sm mt-1">{category.description}</p>
                    <div className="flex justify-between items-center mt-3">
                      <Badge variant="outline" className="border-gold text-gold">
                        Order: {category.displayOrder}
                      </Badge>
                      <Badge variant={category.isActive ? "default" : "secondary"}>
                        {category.isActive ? "Active" : "Inactive"}
                      </Badge>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>

        {/* Project Modal */}
        <Dialog open={isProjectModalOpen} onOpenChange={setIsProjectModalOpen}>
          <DialogContent className="bg-gray-800 border-gray-700 text-white max-w-2xl">
            <DialogHeader>
              <DialogTitle>
                {selectedProject ? 'Edit Project' : 'Create New Project'}
              </DialogTitle>
            </DialogHeader>
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label>Title *</Label>
                  <Input
                    value={projectForm.title}
                    onChange={(e) => setProjectForm(prev => ({ ...prev, title: e.target.value }))}
                    className="bg-gray-700 border-gray-600 text-white"
                    placeholder="Project title"
                  />
                </div>
                <div>
                  <Label>Category *</Label>
                  <Select 
                    value={projectForm.category} 
                    onValueChange={(value) => setProjectForm(prev => ({ ...prev, category: value }))}
                  >
                    <SelectTrigger className="bg-gray-700 border-gray-600 text-white">
                      <SelectValue placeholder="Select category" />
                    </SelectTrigger>
                    <SelectContent className="bg-gray-800 border-gray-700">
                      {categories?.map((cat: Category) => (
                        <SelectItem key={cat.id} value={cat.name} className="text-white">
                          {cat.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
              
              <div>
                <Label>Description</Label>
                <Textarea
                  value={projectForm.description}
                  onChange={(e) => setProjectForm(prev => ({ ...prev, description: e.target.value }))}
                  className="bg-gray-700 border-gray-600 text-white"
                  placeholder="Project description"
                  rows={3}
                />
              </div>

              <div className="grid grid-cols-3 gap-4">
                <div>
                  <Label>Price</Label>
                  <Input
                    value={projectForm.price}
                    onChange={(e) => setProjectForm(prev => ({ ...prev, price: e.target.value }))}
                    className="bg-gray-700 border-gray-600 text-white"
                    placeholder="₹50,000"
                  />
                </div>
                <div>
                  <Label>Materials</Label>
                  <Input
                    value={projectForm.materials}
                    onChange={(e) => setProjectForm(prev => ({ ...prev, materials: e.target.value }))}
                    className="bg-gray-700 border-gray-600 text-white"
                    placeholder="Teak, Steel"
                  />
                </div>
                <div>
                  <Label>Dimensions</Label>
                  <Input
                    value={projectForm.dimensions}
                    onChange={(e) => setProjectForm(prev => ({ ...prev, dimensions: e.target.value }))}
                    className="bg-gray-700 border-gray-600 text-white"
                    placeholder="L×W×H"
                  />
                </div>
              </div>

              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  id="featured"
                  checked={projectForm.featured}
                  onChange={(e) => setProjectForm(prev => ({ ...prev, featured: e.target.checked }))}
                  className="rounded"
                />
                <Label htmlFor="featured">Featured Project</Label>
              </div>

              <div className="flex gap-3 pt-4">
                <Button 
                  onClick={selectedProject ? () => handleUpdateProject(selectedProject) : handleCreateProject}
                  className="bg-gold text-black hover:bg-yellow-500 flex-1"
                  disabled={createProjectMutation.isPending || updateProjectMutation.isPending}
                >
                  <Save className="w-4 h-4 mr-2" />
                  {selectedProject ? 'Update' : 'Create'} Project
                </Button>
                <Button 
                  variant="outline" 
                  onClick={() => setIsProjectModalOpen(false)}
                  className="border-gray-600"
                >
                  <X className="w-4 h-4 mr-2" />
                  Cancel
                </Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>

        {/* Category Modal */}
        <Dialog open={isCategoryModalOpen} onOpenChange={setIsCategoryModalOpen}>
          <DialogContent className="bg-gray-800 border-gray-700 text-white">
            <DialogHeader>
              <DialogTitle>Create New Category</DialogTitle>
            </DialogHeader>
            <div className="space-y-4">
              <div>
                <Label>Category Name *</Label>
                <Input
                  value={categoryForm.name}
                  onChange={(e) => setCategoryForm(prev => ({ ...prev, name: e.target.value }))}
                  className="bg-gray-700 border-gray-600 text-white"
                  placeholder="e.g., Beds, Sofas, Tables"
                />
              </div>
              
              <div>
                <Label>Description</Label>
                <Textarea
                  value={categoryForm.description}
                  onChange={(e) => setCategoryForm(prev => ({ ...prev, description: e.target.value }))}
                  className="bg-gray-700 border-gray-600 text-white"
                  placeholder="Category description"
                  rows={2}
                />
              </div>

              <div>
                <Label>Display Order</Label>
                <Input
                  type="number"
                  value={categoryForm.displayOrder}
                  onChange={(e) => setCategoryForm(prev => ({ ...prev, displayOrder: parseInt(e.target.value) || 0 }))}
                  className="bg-gray-700 border-gray-600 text-white"
                  placeholder="0"
                />
              </div>

              <div className="flex gap-3 pt-4">
                <Button 
                  onClick={handleCreateCategory}
                  className="bg-gold text-black hover:bg-yellow-500 flex-1"
                  disabled={createCategoryMutation.isPending}
                >
                  <Save className="w-4 h-4 mr-2" />
                  Create Category
                </Button>
                <Button 
                  variant="outline" 
                  onClick={() => setIsCategoryModalOpen(false)}
                  className="border-gray-600"
                >
                  <X className="w-4 h-4 mr-2" />
                  Cancel
                </Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      <Footer />
    </div>
  );
}