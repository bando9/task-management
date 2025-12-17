import { initialDataTasks } from "@/data/storage";
import type { Tasks } from "@/features/schema/schema";

export function getTasksFromLocalStorage() {
  const storedTasks = localStorage.getItem("tasks");

  const parsedTasks = storedTasks ? JSON.parse(storedTasks) : initialDataTasks;

  return parsedTasks;
}

export function setTaskToLocalStorage(tasks: Tasks) {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}
