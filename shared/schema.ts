import { pgTable, text, serial, integer, boolean, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";
import { relations } from "drizzle-orm";

export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export const categories = pgTable("categories", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  description: text("description"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const furnitureItems = pgTable("furniture_items", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  description: text("description").notNull(),
  categoryId: integer("category_id").references(() => categories.id).notNull(),
  imageUrl: text("image_url"),
  materials: text("materials"),
  dimensions: text("dimensions"),
  isCustomizable: boolean("is_customizable").default(true),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const consultationRequests = pgTable("consultation_requests", {
  id: serial("id").primaryKey(),
  firstName: text("first_name").notNull(),
  lastName: text("last_name").notNull(),
  email: text("email").notNull(),
  phone: text("phone"),
  projectDetails: text("project_details").notNull(),
  status: text("status").default("pending").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const processSteps = pgTable("process_steps", {
  id: serial("id").primaryKey(),
  stepNumber: integer("step_number").notNull(),
  title: text("title").notNull(),
  description: text("description").notNull(),
  icon: text("icon").notNull(),
  imageUrl: text("image_url"),
});

export const portfolioProjects = pgTable("portfolio_projects", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  description: text("description").notNull(),
  clientName: text("client_name"),
  projectType: text("project_type").notNull(),
  location: text("location"),
  completedDate: timestamp("completed_date"),
  imageUrls: text("image_urls").array(),
  featured: boolean("featured").default(false),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const testimonials = pgTable("testimonials", {
  id: serial("id").primaryKey(),
  clientName: text("client_name").notNull(),
  clientTitle: text("client_title"),
  content: text("content").notNull(),
  rating: integer("rating").notNull(),
  projectId: integer("project_id").references(() => portfolioProjects.id),
  avatarUrl: text("avatar_url"),
  featured: boolean("featured").default(false),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const virtualShowroom = pgTable("virtual_showroom", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  description: text("description").notNull(),
  roomType: text("room_type").notNull(),
  style: text("style").notNull(),
  threeDModelUrl: text("three_d_model_url"),
  imageUrls: text("image_urls").array(),
  furnishingIds: text("furnishing_ids").array(),
  isActive: boolean("is_active").default(true),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const designConsultations = pgTable("design_consultations", {
  id: serial("id").primaryKey(),
  clientName: text("client_name").notNull(),
  clientEmail: text("client_email").notNull(),
  clientPhone: text("client_phone"),
  consultationType: text("consultation_type").notNull(),
  preferredDate: timestamp("preferred_date"),
  budget: text("budget"),
  projectScope: text("project_scope").notNull(),
  stylePreferences: text("style_preferences").array(),
  roomTypes: text("room_types").array(),
  additionalNotes: text("additional_notes"),
  status: text("status").default("pending").notNull(),
  consultantNotes: text("consultant_notes"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

// Relations
export const categoriesRelations = relations(categories, ({ many }) => ({
  furnitureItems: many(furnitureItems),
}));

export const furnitureItemsRelations = relations(furnitureItems, ({ one }) => ({
  category: one(categories, {
    fields: [furnitureItems.categoryId],
    references: [categories.id],
  }),
}));

export const portfolioProjectsRelations = relations(portfolioProjects, ({ many }) => ({
  testimonials: many(testimonials),
}));

export const testimonialsRelations = relations(testimonials, ({ one }) => ({
  project: one(portfolioProjects, {
    fields: [testimonials.projectId],
    references: [portfolioProjects.id],
  }),
}));

// Insert schemas
export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

export const insertCategorySchema = createInsertSchema(categories).pick({
  name: true,
  description: true,
});

export const insertFurnitureItemSchema = createInsertSchema(furnitureItems).pick({
  name: true,
  description: true,
  categoryId: true,
  imageUrl: true,
  materials: true,
  dimensions: true,
  isCustomizable: true,
});

export const insertConsultationRequestSchema = createInsertSchema(consultationRequests).pick({
  firstName: true,
  lastName: true,
  email: true,
  phone: true,
  projectDetails: true,
});

export const insertProcessStepSchema = createInsertSchema(processSteps).pick({
  stepNumber: true,
  title: true,
  description: true,
  icon: true,
  imageUrl: true,
});

export const insertPortfolioProjectSchema = createInsertSchema(portfolioProjects).pick({
  title: true,
  description: true,
  clientName: true,
  projectType: true,
  location: true,
  completedDate: true,
  imageUrls: true,
  featured: true,
});

export const insertTestimonialSchema = createInsertSchema(testimonials).pick({
  clientName: true,
  clientTitle: true,
  content: true,
  rating: true,
  projectId: true,
  avatarUrl: true,
  featured: true,
});

export const insertVirtualShowroomSchema = createInsertSchema(virtualShowroom).pick({
  name: true,
  description: true,
  roomType: true,
  style: true,
  threeDModelUrl: true,
  imageUrls: true,
  furnishingIds: true,
  isActive: true,
});

export const insertDesignConsultationSchema = createInsertSchema(designConsultations).pick({
  clientName: true,
  clientEmail: true,
  clientPhone: true,
  consultationType: true,
  preferredDate: true,
  budget: true,
  projectScope: true,
  stylePreferences: true,
  roomTypes: true,
  additionalNotes: true,
});

// Types
export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;
export type InsertCategory = z.infer<typeof insertCategorySchema>;
export type Category = typeof categories.$inferSelect;
export type InsertFurnitureItem = z.infer<typeof insertFurnitureItemSchema>;
export type FurnitureItem = typeof furnitureItems.$inferSelect;
export type InsertConsultationRequest = z.infer<typeof insertConsultationRequestSchema>;
export type ConsultationRequest = typeof consultationRequests.$inferSelect;
export type InsertProcessStep = z.infer<typeof insertProcessStepSchema>;
export type ProcessStep = typeof processSteps.$inferSelect;
export type InsertPortfolioProject = z.infer<typeof insertPortfolioProjectSchema>;
export type PortfolioProject = typeof portfolioProjects.$inferSelect;
export type InsertTestimonial = z.infer<typeof insertTestimonialSchema>;
export type Testimonial = typeof testimonials.$inferSelect;
export type InsertVirtualShowroom = z.infer<typeof insertVirtualShowroomSchema>;
export type VirtualShowroom = typeof virtualShowroom.$inferSelect;
export type InsertDesignConsultation = z.infer<typeof insertDesignConsultationSchema>;
export type DesignConsultation = typeof designConsultations.$inferSelect;
