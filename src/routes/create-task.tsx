import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { dataStatuses, initialDataTasks } from "@/data/storage";
import { TaskSchema, type Task, type Tasks } from "@/schema/schema";
import { useEffect, useState } from "react";
import z from "zod";

export function CreateTask() {
  const [tasks, setTasks] = useState(() => {
    const storedTasks = localStorage.getItem("tasks");
    return storedTasks ? (JSON.parse(storedTasks) as Tasks) : initialDataTasks;
  });

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

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

  return (
    <section className="space-y-8 w-3xl mt-14">
      <form method="post" className="space-y-2" onSubmit={handleCreateTask}>
        <Label htmlFor="title">Title </Label>
        <Input type="text" name="title" id="title" required />

        <Label htmlFor="description">Description </Label>
        <Input type="text" name="description" id="description" />

        <Select name="status-slug">
          <SelectTrigger className="w-36">
            <SelectValue placeholder="Select Status" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              {dataStatuses.map((status) => {
                return (
                  <SelectItem value={status.slug} key={status.slug}>
                    {status.name}
                  </SelectItem>
                );
              })}
            </SelectGroup>
          </SelectContent>
        </Select>

        <Button>Create Task</Button>
      </form>
    </section>
  );
}
