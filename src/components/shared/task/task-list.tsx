import { useEffect, useState } from "react";
import { initialDataTasks } from "@/data/storage";
import { TaskItem } from "./task-item";
import { Button } from "@/components/ui/button";
import { type Tasks } from "@/schema/schema";

import { Link } from "react-router";

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

  // function handleCreateTask(event: React.FormEvent<HTMLFormElement>) {
  //   try {
  //     event.preventDefault();

  //     const formData = new FormData(event.currentTarget);

  //     const newId = tasks.length > 0 ? tasks[tasks.length - 1].id + 1 : 1;

  //     const statusSlug = formData.get("status-slug") as
  //       | "backlog"
  //       | "todo"
  //       | "in-progress"
  //       | "done";

  //     const status = dataStatuses.find((status) => status.slug === statusSlug);

  //     const newTask: Task = {
  //       id: newId,
  //       title: formData.get("title")?.toString().trim() || "",
  //       description: formData.get("description")?.toString().trim() || "",
  //       status: status || dataStatuses[0],
  //       createdAt: new Date(),
  //       updatedAt: new Date(),
  //     };

  //     TaskSchema.parse(newTask);

  //     const updateTasks: Tasks = [...tasks, newTask];
  //     setTasks(updateTasks);

  //     event.currentTarget.reset();
  //   } catch (error: unknown) {
  //     if (error instanceof z.ZodError) {
  //       const messages = error.issues.map((i) => `${i.message}`).join("\n");
  //       alert(messages);
  //       console.log(messages);
  //       return null;
  //     }
  //   }
  // }

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
    <section className="space-y-8 w-3xl">
      <Button>
        <Link to="/create-task">Create Task</Link>{" "}
      </Button>

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
    </section>
  );
}
