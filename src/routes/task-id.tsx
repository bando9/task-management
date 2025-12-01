import {
  Card,
  CardAction,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { initialDataTasks } from "@/lib/storage";
import type { Tasks } from "@/modules/task/schema";
import { RiDeleteBin6Fill, RiHome9Fill } from "@remixicon/react";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router";

export function TaskId() {
  const params = useParams();
  const { taskId } = params;

  const [tasks, setTasks] = useState(() => {
    const storedTasks = localStorage.getItem("tasks");
    return storedTasks ? (JSON.parse(storedTasks) as Tasks) : initialDataTasks;
  });

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  window.scrollTo(0, 0);
  const storedTasks = localStorage.getItem("tasks");
  if (!storedTasks) {
    return (
      <>
        <h1>Task data unavailable</h1>
        <Link to="/">Go to home</Link>
      </>
    );
  }

  const parsedTasks = JSON.parse(storedTasks) as Tasks;

  const task = parsedTasks.find((task) => task.id === Number(taskId));

  if (!task) {
    return (
      <main className="flex flex-col items-center w-full min-h-screen p-10 transition-all duration-300 mx-auto space-y-5 ">
        <Card className="w-full max-w-md">
          <CardHeader>
            <CardTitle className="flex gap-2 justify-center items-center">
              Task data unavailable. Go to
              <Link to="/">
                <RiHome9Fill className="text-blue-700" />
              </Link>
            </CardTitle>
          </CardHeader>
        </Card>
      </main>
    );
  }

  function handleDelete(id: number) {
    const updatedTasks = tasks.filter((task) => task.id !== id);
    setTasks(updatedTasks);
  }

  return (
    <>
      <main className="flex flex-col items-center w-full min-h-screen p-10 transition-all duration-300 mx-auto space-y-5 ">
        <Card className="w-full max-w-md">
          <CardHeader>
            <CardTitle>{task.title}</CardTitle>
            <CardAction>
              <RiDeleteBin6Fill
                className=" text-red-700 cursor-pointer"
                onClick={() => handleDelete(task.id)}
              />
            </CardAction>
          </CardHeader>
          <CardContent>{task.description} </CardContent>
        </Card>
      </main>
    </>
  );
}
