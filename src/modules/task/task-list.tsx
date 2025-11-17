import { useState } from "react";
import { initialDataTasks, type Task } from "@/lib/storage";
import { TaskItem } from "./task-item";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

export function TaskList() {
  const [tasks, setTasks] = useState(initialDataTasks);

  function handleDelete(id: number) {
    const updatedTasks = tasks.filter((task) => task.id !== id);
    setTasks(updatedTasks);
  }

  function handleCreateTask(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const title = formData.get("title")?.toString();
    if (!title) return null;

    const newId = tasks.length > 0 ? tasks[tasks.length - 1].id + 1 : 1;

    const newTask: Task = {
      id: newId,
      title,
      status: { id: 3, name: "backlog" },
    };

    const updateTasks = [...tasks, newTask];
    setTasks(updateTasks);

    event.currentTarget.reset();
  }

  return (
    <section className="space-y-8">
      <form method="post" className="space-y-2" onSubmit={handleCreateTask}>
        <Label htmlFor="title">Title Task</Label>
        <Input type="text" name="title" id="title" />
        <Button>Create Task</Button>
      </form>

      <ul>
        {tasks.map((task) => {
          return (
            <TaskItem
              key={task.id}
              task={task}
              handleDelete={() => handleDelete(task.id)}
            />
          );
        })}
      </ul>
    </section>
  );
}
