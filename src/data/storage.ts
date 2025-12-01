import type { Tasks } from "@/schema/schema";

export const dataStatuses = [
  { id: 1, slug: "backlog", name: "Backlog" },
  { id: 2, slug: "todo", name: "Todo" },
  { id: 3, slug: "in-progress", name: "In Progress" },
  { id: 4, slug: "done", name: "Done" },
];

export const initialDataTasks: Tasks = [
  {
    id: 1,
    title: "Setup Mindflow project",
    description:
      "Initialize React with Vite + SWC, configure Tailwind CSS and TypeScript.",
    status: {
      id: 1,
      name: "Backlog",
      slug: "backlog",
    },
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: 2,
    title: "Design database schema",
    description:
      "Create initial task model structure for board, column, and task entities.",
    status: {
      id: 2,
      name: "Todo",
      slug: "todo",
    },
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: 3,
    title: "Implement Kanban board UI",
    description:
      "Build draggable task cards using @dnd-kit and Tailwind layout.",
    status: {
      id: 3,
      name: "In Progress",
      slug: "in-progress",
    },
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: 4,
    title: "Add CRUD functionality",
    description:
      "Implement create, read, update, delete tasks with local state management.",
    status: {
      id: 2,
      name: "Todo",
      slug: "todo",
    },
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: 5,
    title: "Integrate local storage persistence",
    description:
      "Store and retrieve task data from browser localStorage for offline use.",
    status: {
      id: 4,
      name: "Done",
      slug: "done",
    },
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: 6,
    title: "Implement typescript in project react",
    status: {
      id: 4,
      name: "Done",
      slug: "done",
    },
    createdAt: new Date(),
    updatedAt: new Date(),
  },
];
