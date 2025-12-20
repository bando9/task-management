import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardAction,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { initialDataTasks } from "@/data/storage";
import type { StatusSlug, Tasks } from "@/features/schema/schema";
import { RiDeleteBin6Fill, RiHome9Fill, RiPencilFill } from "@remixicon/react";
import dayjs from "dayjs";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router";
import localizedFormat from "dayjs/plugin/localizedFormat";

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

  function handleEdit() {
    console.log("ddw");
  }

  dayjs.extend(localizedFormat);
  const createdFormatted = dayjs(task.createdAt).format("LLL");
  const updatedFormatted = dayjs(task.updatedAt).format("LLL");

  return (
    <section className="flex flex-col items-center w-full min-h-screen pt-5 transition-all duration-300 mx-auto space-y-5 ">
      <Card className="w-4xl h-96">
        <CardHeader>
          <CardTitle className="text-xl">{task.title}</CardTitle>
          <CardAction className="flex justify-center items-center gap-4">
            <Badge
              status={task.status.slug as StatusSlug}
              className="capitalize"
            >
              {task.status.name}
            </Badge>
            <div className="p-2 hover:bg-slate-200 rounded-full flex justify-center items-center cursor-pointer transition-all ease-in-out duration-200">
              <RiPencilFill
                className="text-slate-800 h-5 w-5"
                onClick={() => handleEdit()}
              />
            </div>
            <div className="p-2 hover:bg-slate-200 rounded-full flex justify-center items-center cursor-pointer transition-all ease-in-out duration-200">
              <RiDeleteBin6Fill
                className=" text-red-700 h-5 w-5"
                onClick={() => handleDelete(task.id)}
              />
            </div>
          </CardAction>
        </CardHeader>
        <CardContent className="h-screen grid grid-rows-4">
          <div className="row-span-3">
            <h2 className="text-lg font-semibold">Description</h2>
            {task.description ? (
              <p className="text-base text-slate-700">{task.description}</p>
            ) : (
              <p className="text-slate-400">Add description...</p>
            )}
            <div className="text-slate-900 mt-5">
              <p className="text-lg font-semibold">Due Date:</p>
              <p className="text-base text-slate-700">📅Dec 24, 2025</p>
            </div>
          </div>
          <div className="text-xs flex flex-col mt-5">
            <p>Updated at {updatedFormatted}</p>
            <p>Created at {createdFormatted}</p>
          </div>
        </CardContent>
      </Card>
    </section>
  );
}
