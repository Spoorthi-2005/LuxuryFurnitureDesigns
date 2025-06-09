import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { 
  insertConsultationRequestSchema,
  insertCategorySchema,
  insertFurnitureItemSchema 
} from "@shared/schema";

export async function registerRoutes(app: Express): Promise<Server> {
  // Health check
  app.get("/api/healthcheck", (req, res) => {
    res.json({ status: "ok" });
  });

  // Consultation requests
  app.post("/api/consultation-requests", async (req, res) => {
    try {
      const validatedData = insertConsultationRequestSchema.parse(req.body);
      const request = await storage.createConsultationRequest(validatedData);
      res.json({ success: true, data: request });
    } catch (error) {
      res.status(400).json({ success: false, error: "Invalid request data" });
    }
  });

  app.get("/api/consultation-requests", async (req, res) => {
    try {
      const requests = await storage.getConsultationRequests();
      res.json({ success: true, data: requests });
    } catch (error) {
      res.status(500).json({ success: false, error: "Failed to fetch consultation requests" });
    }
  });

  app.patch("/api/consultation-requests/:id/status", async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      const { status } = req.body;
      const request = await storage.updateConsultationRequestStatus(id, status);
      if (!request) {
        return res.status(404).json({ success: false, error: "Request not found" });
      }
      res.json({ success: true, data: request });
    } catch (error) {
      res.status(500).json({ success: false, error: "Failed to update request status" });
    }
  });

  // Categories
  app.get("/api/categories", async (req, res) => {
    try {
      const categories = await storage.getCategories();
      res.json({ success: true, data: categories });
    } catch (error) {
      res.status(500).json({ success: false, error: "Failed to fetch categories" });
    }
  });

  app.post("/api/categories", async (req, res) => {
    try {
      const validatedData = insertCategorySchema.parse(req.body);
      const category = await storage.createCategory(validatedData);
      res.json({ success: true, data: category });
    } catch (error) {
      res.status(400).json({ success: false, error: "Invalid category data" });
    }
  });

  // Furniture items
  app.get("/api/furniture-items", async (req, res) => {
    try {
      const categoryId = req.query.categoryId ? parseInt(req.query.categoryId as string) : undefined;
      const items = categoryId 
        ? await storage.getFurnitureItemsByCategory(categoryId)
        : await storage.getFurnitureItems();
      res.json({ success: true, data: items });
    } catch (error) {
      res.status(500).json({ success: false, error: "Failed to fetch furniture items" });
    }
  });

  app.get("/api/furniture-items/:id", async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      const item = await storage.getFurnitureItem(id);
      if (!item) {
        return res.status(404).json({ success: false, error: "Item not found" });
      }
      res.json({ success: true, data: item });
    } catch (error) {
      res.status(500).json({ success: false, error: "Failed to fetch furniture item" });
    }
  });

  app.post("/api/furniture-items", async (req, res) => {
    try {
      const validatedData = insertFurnitureItemSchema.parse(req.body);
      const item = await storage.createFurnitureItem(validatedData);
      res.json({ success: true, data: item });
    } catch (error) {
      res.status(400).json({ success: false, error: "Invalid furniture item data" });
    }
  });

  // Process steps
  app.get("/api/process-steps", async (req, res) => {
    try {
      const steps = await storage.getProcessSteps();
      res.json({ success: true, data: steps });
    } catch (error) {
      res.status(500).json({ success: false, error: "Failed to fetch process steps" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
