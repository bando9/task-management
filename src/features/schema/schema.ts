import { dataStatuses } from "@/data/storage";
import { z } from "zod";

export type StatusSlug = "backlog" | "todo" | "in-progress" | "done";

export const statusSlugs = dataStatuses.map((status) => status.slug);

export const StatusSchema = z.object({
  id: z.number().positive(),
  slug: z.enum(statusSlugs),
  name: z.string(),
});

export const TaskSchema = z.object({
  id: z.number().min(1).positive(),
  title: z.string().min(1).max(100),
  description: z.string().max(150).optional(),
  status: StatusSchema,
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
});

export const TasksSchema = TaskSchema.array();

export type Task = z.infer<typeof TaskSchema>;
export type Tasks = z.infer<typeof TasksSchema>;
