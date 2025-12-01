import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardAction,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { initialDataTasks } from "@/data/storage";
import type { StatusSlug, Tasks } from "@/schema/schema";
import { RiDeleteBin6Fill, RiHome9Fill } from "@remixicon/react";
import dayjs from "dayjs";
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
    window.location.href = "/";
  }

  const createdFormatted = dayjs(task.createdAt).format("MMMM D, YYYY");
  const updatedFormatted = dayjs(task.updatedAt).format("MMMM D, YYYY");

  return (
    <>
      <main className="flex flex-col items-center w-full min-h-screen p-10 transition-all duration-300 mx-auto space-y-5 ">
        <Card className="w-full max-w-lg">
          <CardHeader>
            <CardTitle>{task.title}</CardTitle>
            <CardAction className="flex gap-4">
              <Badge
                status={task.status.slug as StatusSlug}
                className="capitalize "
              >
                {task.status.name}
              </Badge>
              <RiDeleteBin6Fill
                className=" text-red-700 cursor-pointer"
                onClick={() => handleDelete(task.id)}
              />
            </CardAction>
          </CardHeader>
          <CardContent className="">
            <div>
              <h2 className="text-base font-semibold">Description</h2>
              {task.description}
            </div>
            <div className="italic text-xs flex flex-col mt-5">
              <p>Updated at {updatedFormatted}</p>
              <p>Created at {createdFormatted}</p>
            </div>
          </CardContent>
        </Card>
      </main>
    </>
  );
}
