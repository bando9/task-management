import dayjs from "dayjs";
import { SearchForm } from "@/components/shared/search-form";
import { TaskList } from "@/components/shared/task/task-list";
import { CreateTask } from "./routes/create-task";
import { useEffect, useState } from "react";
import { initialDataTasks } from "@/data/storage";
import type { Tasks } from "./schema/schema";

function App() {
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

  const nowDate = new Date();
  const now = dayjs(nowDate).format("MMMM D, YYYY");

  return (
    <section className="space-y-5 pt-10">
      <div className="mt-3">
        <h1 className="text-2xl font-semibold">Today</h1>
        <p className="text-slate-400 mb-4 text-sm">{now}</p>
      </div>
      <div className="flex justify-between items-center mb-6">
        <SearchForm />
        <CreateTask />
      </div>

      <TaskList
        tasks={tasks}
        handleDelete={handleDelete}
        handleToggleTaskStatus={handleToggleTaskStatus}
      />
    </section>
  );
}
export default App;
