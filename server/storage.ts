import {
  users,
  projects,
  projectImages,
  categories,
  pageContent,
  type User,
  type UpsertUser,
  type Project,
  type InsertProject,
  type ProjectImage,
  type InsertProjectImage,
  type Category,
  type InsertCategory,
  type PageContent,
  type InsertPageContent,
} from "@shared/schema";
import { db } from "./db";
import { eq, desc, and } from "drizzle-orm";

// Interface for storage operations
export interface IStorage {
  // User operations (mandatory for Replit Auth)
  getUser(id: string): Promise<User | undefined>;
  upsertUser(user: UpsertUser): Promise<User>;
  
  // Project operations
  createProject(project: InsertProject): Promise<Project>;
  getProjects(): Promise<Project[]>;
  getProjectById(id: number): Promise<Project | undefined>;
  updateProject(id: number, project: Partial<InsertProject>): Promise<Project>;
  deleteProject(id: number): Promise<void>;
  getProjectsByCategory(category: string): Promise<Project[]>;
  getFeaturedProjects(): Promise<Project[]>;
  
  // Project image operations
  addProjectImage(image: InsertProjectImage): Promise<ProjectImage>;
  getProjectImages(projectId: number): Promise<ProjectImage[]>;
  updateProjectImage(id: number, image: Partial<InsertProjectImage>): Promise<ProjectImage>;
  deleteProjectImage(id: number): Promise<void>;
  setFeaturedImage(projectId: number, imageId: number): Promise<void>;
  
  // Category operations
  createCategory(category: InsertCategory): Promise<Category>;
  getCategories(): Promise<Category[]>;
  updateCategory(id: number, category: Partial<InsertCategory>): Promise<Category>;
  deleteCategory(id: number): Promise<void>;
  
  // Page content operations
  upsertPageContent(content: InsertPageContent): Promise<PageContent>;
  getPageContent(pageKey: string): Promise<PageContent | undefined>;
  getAllPageContent(): Promise<PageContent[]>;
}

export class DatabaseStorage implements IStorage {
  // User operations (mandatory for Replit Auth)
  async getUser(id: string): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.id, id));
    return user;
  }

  async upsertUser(userData: UpsertUser): Promise<User> {
    const [user] = await db
      .insert(users)
      .values(userData)
      .onConflictDoUpdate({
        target: users.id,
        set: {
          ...userData,
          updatedAt: new Date(),
        },
      })
      .returning();
    return user;
  }

  // Project operations
  async createProject(project: InsertProject): Promise<Project> {
    const [newProject] = await db
      .insert(projects)
      .values({
        ...project,
        createdAt: new Date(),
        updatedAt: new Date(),
      })
      .returning();
    return newProject;
  }

  async getProjects(): Promise<Project[]> {
    return await db
      .select()
      .from(projects)
      .where(eq(projects.status, "active"))
      .orderBy(desc(projects.createdAt));
  }

  async getProjectById(id: number): Promise<Project | undefined> {
    const [project] = await db
      .select()
      .from(projects)
      .where(eq(projects.id, id));
    return project;
  }

  async updateProject(id: number, project: Partial<InsertProject>): Promise<Project> {
    const [updatedProject] = await db
      .update(projects)
      .set({
        ...project,
        updatedAt: new Date(),
      })
      .where(eq(projects.id, id))
      .returning();
    return updatedProject;
  }

  async deleteProject(id: number): Promise<void> {
    await db.update(projects)
      .set({ status: "deleted" })
      .where(eq(projects.id, id));
  }

  async getProjectsByCategory(category: string): Promise<Project[]> {
    return await db
      .select()
      .from(projects)
      .where(and(
        eq(projects.category, category),
        eq(projects.status, "active")
      ))
      .orderBy(desc(projects.createdAt));
  }

  async getFeaturedProjects(): Promise<Project[]> {
    return await db
      .select()
      .from(projects)
      .where(and(
        eq(projects.featured, true),
        eq(projects.status, "active")
      ))
      .orderBy(desc(projects.createdAt));
  }

  // Project image operations
  async addProjectImage(image: InsertProjectImage): Promise<ProjectImage> {
    const [newImage] = await db
      .insert(projectImages)
      .values({
        ...image,
        uploadedAt: new Date(),
      })
      .returning();
    return newImage;
  }

  async getProjectImages(projectId: number): Promise<ProjectImage[]> {
    return await db
      .select()
      .from(projectImages)
      .where(eq(projectImages.projectId, projectId))
      .orderBy(projectImages.displayOrder);
  }

  async updateProjectImage(id: number, image: Partial<InsertProjectImage>): Promise<ProjectImage> {
    const [updatedImage] = await db
      .update(projectImages)
      .set(image)
      .where(eq(projectImages.id, id))
      .returning();
    return updatedImage;
  }

  async deleteProjectImage(id: number): Promise<void> {
    await db.delete(projectImages).where(eq(projectImages.id, id));
  }

  async setFeaturedImage(projectId: number, imageId: number): Promise<void> {
    // Remove featured status from all images in this project
    await db
      .update(projectImages)
      .set({ isFeatured: false })
      .where(eq(projectImages.projectId, projectId));
    
    // Set the specified image as featured
    await db
      .update(projectImages)
      .set({ isFeatured: true })
      .where(eq(projectImages.id, imageId));
  }

  // Category operations
  async createCategory(category: InsertCategory): Promise<Category> {
    const [newCategory] = await db
      .insert(categories)
      .values({
        ...category,
        createdAt: new Date(),
      })
      .returning();
    return newCategory;
  }

  async getCategories(): Promise<Category[]> {
    return await db
      .select()
      .from(categories)
      .where(eq(categories.isActive, true))
      .orderBy(categories.displayOrder);
  }

  async updateCategory(id: number, category: Partial<InsertCategory>): Promise<Category> {
    const [updatedCategory] = await db
      .update(categories)
      .set(category)
      .where(eq(categories.id, id))
      .returning();
    return updatedCategory;
  }

  async deleteCategory(id: number): Promise<void> {
    await db
      .update(categories)
      .set({ isActive: false })
      .where(eq(categories.id, id));
  }

  // Page content operations
  async upsertPageContent(content: InsertPageContent): Promise<PageContent> {
    const [newPageContent] = await db
      .insert(pageContent)
      .values({
        ...content,
        updatedAt: new Date(),
      })
      .onConflictDoUpdate({
        target: pageContent.pageKey,
        set: {
          ...content,
          updatedAt: new Date(),
        },
      })
      .returning();
    return newPageContent;
  }

  async getPageContent(pageKey: string): Promise<PageContent | undefined> {
    const [content] = await db
      .select()
      .from(pageContent)
      .where(and(
        eq(pageContent.pageKey, pageKey),
        eq(pageContent.isPublished, true)
      ));
    return content;
  }

  async getAllPageContent(): Promise<PageContent[]> {
    return await db
      .select()
      .from(pageContent)
      .orderBy(pageContent.pageKey);
  }
}

export const storage = new DatabaseStorage();