import { useEffect, useState } from "react";
import { initialDataTasks } from "@/data/storage";
import { TaskItem } from "./task-item";

import { type Tasks } from "@/schema/schema";
import { ScrollArea } from "@/components/ui/scroll-area";

export function TaskList() {
  const [tasks, setTasks] = useState(() => {
    const storedTasks = localStorage.getItem("tasks");
    return storedTasks ? (JSON.parse(storedTasks) as Tasks) : initialDataTasks;
  });

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  function handleDelete(id: number) {
    const updatedTasks = tasks.filter((task) => task.id !== id);
    setTasks(updatedTasks);
  }

  function handleToggleTaskStatus(id: number) {
    const foundTask = tasks.find((task) => task.id === id);
    if (!foundTask) return null;
    const isTaskDone = foundTask.status.slug === "done";

    const updatedStatusTask = tasks.map((task) => {
      if (task.id === id) {
        return {
          ...task,
          status: isTaskDone
            ? { id: 2, slug: "todo", name: "Todo" }
            : { id: 4, slug: "done", name: "Done" },
        };
      } else {
        return task;
      }
    });
    setTasks(updatedStatusTask);
  }

  return (
    <ScrollArea className="h-88 py-2 px-4 space-y-8 w-3xl border rounded-sm ">
      <ul>
        {tasks.map((task) => {
          return (
            <TaskItem
              key={task.id}
              task={task}
              handleDelete={() => handleDelete(task.id)}
              handleToggleTaskStatus={() => handleToggleTaskStatus(task.id)}
            />
          );
        })}
      </ul>
    </ScrollArea>
  );
}
