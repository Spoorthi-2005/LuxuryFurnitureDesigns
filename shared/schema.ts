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
