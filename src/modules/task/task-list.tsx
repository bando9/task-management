import { useState } from "react";
import { initialDataTasks } from "@/lib/storage";
import { TaskItem } from "./task-item";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { TaskSchema, type Task, type Tasks } from "@/modules/task/schema";

export function TaskList() {
  const [tasks, setTasks] = useState(initialDataTasks);

  function handleDelete(id: number) {
    const updatedTasks = tasks.filter((task) => task.id !== id);
    setTasks(updatedTasks);
  }

  function handleCreateTask(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    const time = formData.get("time-picker");
    console.log(time);

    const newId = tasks.length > 0 ? tasks[tasks.length - 1].id + 1 : 1;

    const newTask: Task = {
      id: newId,
      title: formData.get("title")?.toString().trim() || "",
      status: { id: 2, name: "todo" },
      description: "-".trim(),
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    const result = TaskSchema.safeParse(newTask);
    if (!result.success) {
      alert("New task data invalid");
      return null;
    }

    const updateTasks: Tasks = [...tasks, newTask];
    setTasks(updateTasks);

    event.currentTarget.reset();
  }

  function handleStatusIsDone(id: number) {
    setTasks((tasks) =>
      tasks.map((task) => {
        if (task.id === id) {
          const statusNameType: string = "done";
          const updateTask = {
            ...task,
            status: {
              id: 4,
              name: statusNameType as "done",
            },
          };
          return updateTask;
        } else {
          return task;
        }
      })
    );
  }

  function handleStatusIsTodo(id: number) {
    setTasks((tasks) =>
      tasks.map((task) => {
        if (task.id === id) {
          const statusNameType: string = "todo";
          const updateTask = {
            ...task,
            status: {
              id: 2,
              name: statusNameType as "todo",
            },
          };
          return updateTask;
        } else {
          return task;
        }
      })
    );
  }

  return (
    <section className="space-y-8 w-2xl">
      <form method="post" className="space-y-2" onSubmit={handleCreateTask}>
        <Label htmlFor="title">Title Task</Label>
        <Input type="text" name="title" id="title" required />

        <div className="w-36">
          <Label htmlFor="time-picker" className="px-1">
            Time
          </Label>
          <Input
            type="time"
            id="time-picker"
            step="1"
            defaultValue="10:30:00"
            className="bg-background appearance-none [&::-webkit-calendar-picker-indicator]:hidden [&::-webkit-calendar-picker-indicator]:appearance-none"
          />
        </div>

        <Button>Create Task</Button>
      </form>

      <ul>
        {tasks.map((task) => {
          return (
            <TaskItem
              key={task.id}
              task={task}
              handleDelete={() => handleDelete(task.id)}
              handleStatusIsDone={() => handleStatusIsDone(task.id)}
              handleStatusIsTodo={() => handleStatusIsTodo(task.id)}
            />
          );
        })}
      </ul>
    </section>
  );
}
