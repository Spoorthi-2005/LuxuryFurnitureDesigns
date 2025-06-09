import { 
  users, 
  categories,
  furnitureItems,
  consultationRequests,
  processSteps,
  type User, 
  type InsertUser,
  type Category,
  type InsertCategory,
  type FurnitureItem,
  type InsertFurnitureItem,
  type ConsultationRequest,
  type InsertConsultationRequest,
  type ProcessStep,
  type InsertProcessStep
} from "@shared/schema";
import { db } from "./db";
import { eq } from "drizzle-orm";

export interface IStorage {
  // User methods
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  // Category methods
  getCategories(): Promise<Category[]>;
  getCategory(id: number): Promise<Category | undefined>;
  createCategory(category: InsertCategory): Promise<Category>;
  
  // Furniture methods
  getFurnitureItems(): Promise<FurnitureItem[]>;
  getFurnitureItemsByCategory(categoryId: number): Promise<FurnitureItem[]>;
  getFurnitureItem(id: number): Promise<FurnitureItem | undefined>;
  createFurnitureItem(item: InsertFurnitureItem): Promise<FurnitureItem>;
  
  // Consultation methods
  getConsultationRequests(): Promise<ConsultationRequest[]>;
  getConsultationRequest(id: number): Promise<ConsultationRequest | undefined>;
  createConsultationRequest(request: InsertConsultationRequest): Promise<ConsultationRequest>;
  updateConsultationRequestStatus(id: number, status: string): Promise<ConsultationRequest | undefined>;
  
  // Process methods
  getProcessSteps(): Promise<ProcessStep[]>;
  createProcessStep(step: InsertProcessStep): Promise<ProcessStep>;
}

export class DatabaseStorage implements IStorage {
  // User methods
  async getUser(id: number): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.id, id));
    return user || undefined;
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.username, username));
    return user || undefined;
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const [user] = await db
      .insert(users)
      .values(insertUser)
      .returning();
    return user;
  }

  // Category methods
  async getCategories(): Promise<Category[]> {
    return await db.select().from(categories);
  }

  async getCategory(id: number): Promise<Category | undefined> {
    const [category] = await db.select().from(categories).where(eq(categories.id, id));
    return category || undefined;
  }

  async createCategory(insertCategory: InsertCategory): Promise<Category> {
    const [category] = await db
      .insert(categories)
      .values(insertCategory)
      .returning();
    return category;
  }

  // Furniture methods
  async getFurnitureItems(): Promise<FurnitureItem[]> {
    return await db.select().from(furnitureItems);
  }

  async getFurnitureItemsByCategory(categoryId: number): Promise<FurnitureItem[]> {
    return await db.select().from(furnitureItems).where(eq(furnitureItems.categoryId, categoryId));
  }

  async getFurnitureItem(id: number): Promise<FurnitureItem | undefined> {
    const [item] = await db.select().from(furnitureItems).where(eq(furnitureItems.id, id));
    return item || undefined;
  }

  async createFurnitureItem(insertItem: InsertFurnitureItem): Promise<FurnitureItem> {
    const [item] = await db
      .insert(furnitureItems)
      .values(insertItem)
      .returning();
    return item;
  }

  // Consultation methods
  async getConsultationRequests(): Promise<ConsultationRequest[]> {
    return await db.select().from(consultationRequests);
  }

  async getConsultationRequest(id: number): Promise<ConsultationRequest | undefined> {
    const [request] = await db.select().from(consultationRequests).where(eq(consultationRequests.id, id));
    return request || undefined;
  }

  async createConsultationRequest(insertRequest: InsertConsultationRequest): Promise<ConsultationRequest> {
    const [request] = await db
      .insert(consultationRequests)
      .values(insertRequest)
      .returning();
    return request;
  }

  async updateConsultationRequestStatus(id: number, status: string): Promise<ConsultationRequest | undefined> {
    const [request] = await db
      .update(consultationRequests)
      .set({ status })
      .where(eq(consultationRequests.id, id))
      .returning();
    return request || undefined;
  }

  // Process methods
  async getProcessSteps(): Promise<ProcessStep[]> {
    return await db.select().from(processSteps);
  }

  async createProcessStep(insertStep: InsertProcessStep): Promise<ProcessStep> {
    const [step] = await db
      .insert(processSteps)
      .values(insertStep)
      .returning();
    return step;
  }
}

export const storage = new DatabaseStorage();
