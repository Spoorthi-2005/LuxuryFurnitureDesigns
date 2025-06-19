import type { Express } from "express";
import { createServer, type Server } from "http";
import express from "express";
import { storage } from "./storage";
import { 
  insertProjectSchema,
  insertProjectImageSchema,
  insertCategorySchema
} from "@shared/schema";
import multer from "multer";
import path from "path";
import fs from "fs";

// Configure multer for file uploads
const uploadDir = 'uploads';
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
}

const upload = multer({
  storage: multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, uploadDir);
    },
    filename: (req, file, cb) => {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
      cb(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname));
    }
  }),
  fileFilter: (req, file, cb) => {
    if (file.mimetype.startsWith('image/')) {
      cb(null, true);
    } else {
      cb(new Error('Only image files are allowed'));
    }
  },
  limits: {
    fileSize: 10 * 1024 * 1024 // 10MB limit
  }
});

export async function registerRoutes(app: Express): Promise<Server> {
  // Serve uploaded files
  app.use('/uploads', (req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    next();
  }, express.static(uploadDir));

  // Health check
  app.get("/api/healthcheck", (req, res) => {
    res.json({ status: "ok" });
  });

  // Check if user is admin (simplified for demo)
  const isAdmin = (req: any, res: any, next: any) => {
    // For demo purposes, allow all users to be admin
    // In production, implement proper authentication check
    next();
  };

  // Projects API
  app.get("/api/projects", async (req, res) => {
    try {
      const { category, featured } = req.query;
      
      let projects;
      if (featured === 'true') {
        projects = await storage.getFeaturedProjects();
      } else if (category) {
        projects = await storage.getProjectsByCategory(category as string);
      } else {
        projects = await storage.getProjects();
      }
      
      // Get images for each project
      const projectsWithImages = await Promise.all(
        projects.map(async (project) => {
          const images = await storage.getProjectImages(project.id);
          return { ...project, images };
        })
      );
      
      res.json(projectsWithImages);
    } catch (error) {
      console.error("Failed to fetch projects:", error);
      res.status(500).json({ message: "Failed to fetch projects" });
    }
  });

  app.get("/api/projects/:id", async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      const project = await storage.getProjectById(id);
      
      if (!project) {
        return res.status(404).json({ message: "Project not found" });
      }
      
      const images = await storage.getProjectImages(id);
      res.json({ ...project, images });
    } catch (error) {
      console.error("Failed to fetch project:", error);
      res.status(500).json({ message: "Failed to fetch project" });
    }
  });

  app.post("/api/projects", isAdmin, async (req, res) => {
    try {
      const validatedData = insertProjectSchema.parse(req.body);
      const project = await storage.createProject({
        ...validatedData,
        createdBy: 'admin'
      });
      res.status(201).json(project);
    } catch (error) {
      console.error("Failed to create project:", error);
      res.status(400).json({ 
        message: "Failed to create project",
        error: error instanceof Error ? error.message : "Unknown error"
      });
    }
  });

  app.put("/api/projects/:id", isAdmin, async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      const validatedData = insertProjectSchema.parse(req.body);
      const project = await storage.updateProject(id, validatedData);
      res.json(project);
    } catch (error) {
      console.error("Failed to update project:", error);
      res.status(400).json({ 
        message: "Failed to update project",
        error: error instanceof Error ? error.message : "Unknown error"
      });
    }
  });

  app.delete("/api/projects/:id", isAdmin, async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      await storage.deleteProject(id);
      res.json({ message: "Project deleted successfully" });
    } catch (error) {
      console.error("Failed to delete project:", error);
      res.status(500).json({ message: "Failed to delete project" });
    }
  });

  // Project Images API
  app.post("/api/projects/:id/images", isAdmin, upload.single('image'), async (req, res) => {
    try {
      const projectId = parseInt(req.params.id);
      
      if (!req.file) {
        return res.status(400).json({ message: "No image file provided" });
      }
      
      const imageData = {
        projectId,
        imageUrl: `/uploads/${req.file.filename}`,
        altText: req.body.altText || '',
        caption: req.body.caption || '',
        displayOrder: parseInt(req.body.displayOrder) || 0,
        isFeatured: req.body.isFeatured === 'true'
      };
      
      const image = await storage.addProjectImage(imageData);
      res.status(201).json(image);
    } catch (error) {
      console.error("Failed to upload image:", error);
      res.status(400).json({ 
        message: "Failed to upload image",
        error: error instanceof Error ? error.message : "Unknown error"
      });
    }
  });

  app.get("/api/projects/:id/images", async (req, res) => {
    try {
      const projectId = parseInt(req.params.id);
      const images = await storage.getProjectImages(projectId);
      res.json(images);
    } catch (error) {
      console.error("Failed to fetch project images:", error);
      res.status(500).json({ message: "Failed to fetch project images" });
    }
  });

  app.put("/api/images/:id", isAdmin, async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      const imageData = {
        altText: req.body.altText,
        caption: req.body.caption,
        displayOrder: req.body.displayOrder,
        isFeatured: req.body.isFeatured
      };
      
      const image = await storage.updateProjectImage(id, imageData);
      res.json(image);
    } catch (error) {
      console.error("Failed to update image:", error);
      res.status(400).json({ 
        message: "Failed to update image",
        error: error instanceof Error ? error.message : "Unknown error"
      });
    }
  });

  app.delete("/api/images/:id", isAdmin, async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      await storage.deleteProjectImage(id);
      res.json({ message: "Image deleted successfully" });
    } catch (error) {
      console.error("Failed to delete image:", error);
      res.status(500).json({ message: "Failed to delete image" });
    }
  });

  app.post("/api/projects/:projectId/images/:imageId/featured", isAdmin, async (req, res) => {
    try {
      const projectId = parseInt(req.params.projectId);
      const imageId = parseInt(req.params.imageId);
      
      await storage.setFeaturedImage(projectId, imageId);
      res.json({ message: "Featured image updated successfully" });
    } catch (error) {
      console.error("Failed to set featured image:", error);
      res.status(500).json({ message: "Failed to set featured image" });
    }
  });

  // Categories API
  app.get("/api/categories", async (req, res) => {
    try {
      const categories = await storage.getCategories();
      res.json(categories);
    } catch (error) {
      console.error("Failed to fetch categories:", error);
      res.status(500).json({ message: "Failed to fetch categories" });
    }
  });

  app.post("/api/categories", isAdmin, async (req, res) => {
    try {
      const validatedData = insertCategorySchema.parse(req.body);
      const category = await storage.createCategory(validatedData);
      res.status(201).json(category);
    } catch (error) {
      console.error("Failed to create category:", error);
      res.status(400).json({ 
        message: "Failed to create category",
        error: error instanceof Error ? error.message : "Unknown error"
      });
    }
  });

  app.put("/api/categories/:id", isAdmin, async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      const validatedData = insertCategorySchema.parse(req.body);
      const category = await storage.updateCategory(id, validatedData);
      res.json(category);
    } catch (error) {
      console.error("Failed to update category:", error);
      res.status(400).json({ 
        message: "Failed to update category",
        error: error instanceof Error ? error.message : "Unknown error"
      });
    }
  });

  app.delete("/api/categories/:id", isAdmin, async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      await storage.deleteCategory(id);
      res.json({ message: "Category deleted successfully" });
    } catch (error) {
      console.error("Failed to delete category:", error);
      res.status(500).json({ message: "Failed to delete category" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}