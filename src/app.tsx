import { SearchForm } from "@/features/components/search-form";
import { TaskList } from "@/features/components/task-list";
import { CreateTask } from "./features/components/create-task";
import { useEffect, useState } from "react";
import { dataStatuses, initialDataTasks } from "@/data/storage";
import {
  TaskSchema,
  type StatusSlug,
  type Task,
  type Tasks,
} from "@/features/schema/schema";
import { useSearchParams } from "react-router";
import z from "zod";

export type UpdateStatusType = {
  id: number;
  statusSlug: StatusSlug;
};

function App() {
  const [tasks, setTasks] = useState(() => {
    const storedTasks = localStorage.getItem("tasks");
    return storedTasks ? (JSON.parse(storedTasks) as Tasks) : initialDataTasks;
  });

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const [searchParams, setSearchParams] = useSearchParams();
  const query: string = searchParams.get("q") || "";

  function handleSearchChange(event: React.ChangeEvent<HTMLInputElement>) {
    const newQuery = event.target.value;
    setSearchParams((currentSearchParams) => {
      if (newQuery) {
        currentSearchParams.set("q", newQuery);
      } else {
        currentSearchParams.delete("q");
      }
      return currentSearchParams;
    });
  }

  function handleDelete(id: number) {
    const updatedTasks = tasks.filter((task) => task.id !== id);
    setTasks(updatedTasks);
  }

  function handleCreateTask(event: React.FormEvent<HTMLFormElement>) {
    try {
      event.preventDefault();

      const formData = new FormData(event.currentTarget);

      const newId = tasks.length > 0 ? tasks[tasks.length - 1].id + 1 : 1;

      const statusSlug = formData.get("status-slug") as
        | "backlog"
        | "todo"
        | "in-progress"
        | "done";

      const status = dataStatuses.find((status) => status.slug === statusSlug);

      const newTask: Task = {
        id: newId,
        title: formData.get("title")?.toString().trim() || "",
        description: formData.get("description")?.toString().trim() || "",
        status: status || dataStatuses[0],
        createdAt: new Date(),
        updatedAt: new Date(),
      };

      TaskSchema.parse(newTask);

      const updateTasks: Tasks = [...tasks, newTask];
      setTasks(updateTasks);

      event.currentTarget.reset();
    } catch (error: unknown) {
      if (error instanceof z.ZodError) {
        const messages = error.issues.map((i) => `${i.message}`).join("\n");
        alert(messages);
        console.log(messages);
        return null;
      }
    }
  }

  function handleUpdateSelect({ id, statusSlug }: UpdateStatusType) {
    const status = dataStatuses.find((status) => status.slug === statusSlug);
    const task = tasks.find((task) => task.id === id);

    if (!status) return;

    const updateStatusTask: Task = {
      id,
      title: task?.title || "",
      description: task?.description,
      status: status || dataStatuses[0],
      createdAt: task?.createdAt,
      updatedAt: new Date(),
    };

    TaskSchema.parse(updateStatusTask);

    const updateTasks: Tasks = tasks.map((task) => {
      if (task.id === id) {
        return updateStatusTask;
      }
      return task;
    });

    setTasks(updateTasks);
  }

  return (
    <section className="space-y-5 pt-2">
      <div className="flex justify-between items-center mb-6 mt-3">
        <SearchForm handleSearchChange={handleSearchChange} query={query} />
        <CreateTask handleCreateTask={handleCreateTask} />
      </div>

      <TaskList
        query={query}
        tasks={tasks}
        handleDelete={handleDelete}
        handleUpdateSelect={handleUpdateSelect}
      />
    </section>
  );
}
export default App;
