import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import dayjs from "dayjs";
import type { StatusSlug, Task, Tasks } from "@/schema/schema";
import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router";
import { ScrollArea } from "@/components/ui/scroll-area";

export function BoardView() {
  const storedTasks = localStorage.getItem("tasks");
  if (!storedTasks) {
    return (
      <>
        <h1>Task not Found</h1>
        <Link to="/">Go to home</Link>
      </>
    );
  }

  const parsedTasks = JSON.parse(storedTasks) as Tasks;

  return (
    <>
      <div className="mt-2 flex flex-col md:flex-row relative w-full justify-center">
        <div className=" p-5 bg-slate-100 grid grid-cols-4 gap-5 h-[515px] overflow-hidden transition-all duration-300">
          <ScrollArea className="w-full h-120  bg-slate-200  rounded-md p-3">
            <div className="text-center mb-4 pb-2 text-slate-900 bg-slate-200 font-semibold border-b border-slate-400 sticky top-0 right-0 left-0">
              <h1>
                Backlog
                <span className="ms-1.5 inline-flex items-center rounded-md bg-slate-600/20 px-2 py-1 text-xs font-medium text-slate-800">
                  10
                </span>
              </h1>
            </div>
            <ul>
              {parsedTasks
                .filter((task) => {
                  return task.status.slug === "backlog";
                })
                .map((task) => {
                  return <TaskBoardPopover key={task.id} task={task} />;
                })}
            </ul>
          </ScrollArea>

          <ScrollArea className="w-full h-120   bg-slate-200  rounded-md p-3">
            <div className="text-center mb-4 pb-2 text-slate-900 bg-slate-200 font-semibold border-b border-slate-400 sticky top-0 right-0 left-0">
              <h1>
                Todo
                <span className="ms-1.5 inline-flex items-center rounded-md bg-slate-600/20 px-2 py-1 text-xs font-medium text-slate-800">
                  10
                </span>
              </h1>
            </div>
            <ul>
              {parsedTasks
                .filter((task) => {
                  return task.status.slug === "todo";
                })
                .map((task) => {
                  return <TaskBoardPopover key={task.id} task={task} />;
                })}
            </ul>
          </ScrollArea>

          <ScrollArea className="w-full h-120   bg-slate-200  rounded-md p-3">
            <div className="text-center mb-4 pb-2 text-slate-900 bg-slate-200 font-semibold border-b border-slate-400 sticky top-0 right-0 left-0">
              <h1>
                In Progress
                <span className="ms-1.5 inline-flex items-center rounded-md bg-slate-600/20 px-2 py-1 text-xs font-medium text-slate-800">
                  10
                </span>
              </h1>
            </div>
            <ul>
              {parsedTasks
                .filter((task) => {
                  return task.status.slug === "in-progress";
                })
                .map((task) => {
                  return <TaskBoardPopover key={task.id} task={task} />;
                })}
            </ul>
          </ScrollArea>

          <ScrollArea className="w-full h-120   bg-slate-200  rounded-md p-3">
            <div className="text-center mb-4 pb-2 text-slate-900 bg-slate-200 font-semibold border-b border-slate-400 sticky top-0 right-0 left-0">
              <h1>
                Done
                <span className="ms-1.5 inline-flex items-center rounded-md bg-slate-600/20 px-2 py-1 text-xs font-medium text-slate-800">
                  10
                </span>
              </h1>
            </div>
            <ul>
              {parsedTasks
                .filter((task) => {
                  return task.status.slug === "done";
                })
                .map((task) => {
                  return <TaskBoardPopover key={task.id} task={task} />;
                })}
            </ul>
          </ScrollArea>
        </div>
      </div>
    </>
  );
}

interface TaskDetailProps {
  task: Task;
}

export function TaskBoardPopover({ task }: TaskDetailProps) {
  if (!task) return;

  const formattedCreatedAt = dayjs(task.createdAt).format("MMMM D, YYYY");
  const formattedUpdatedAt = dayjs(task.updatedAt).format("MMMM D, YYYY");

  return (
    <Dialog>
      <DialogTrigger asChild>
        <li className="w-full p-3 bg-slate-50 rounded-md mb-5 cursor-pointer border-2 border-slate-50 hover:border-blue-400 duration-200 transition-all">
          <h2 className="mb-3">{task.title}</h2>
          <p className="inline-flex items-center rounded-md bg-slate-950/10 px-2 py-1 text-xs font-medium text-slate-800 inset-ring inset-ring-slate-950/20">
            5
          </p>
        </li>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md md:max-w-5xl min-h-1/4">
        <DialogHeader className="my-3">
          <DialogTitle className="capitalize flex items-center justify-between mb-2">
            {task.title}
          </DialogTitle>
          <DialogDescription className="grid grid-cols-3">
            <div className="col-span-2">
              <h2 className="text-slate-800 font-semibold text-base">
                Description
              </h2>
              {task?.description}

              <div className="text-slate-600 text-xs italic mt-5 flex flex-col">
                <span>Last updated {formattedUpdatedAt}</span>
                <span>Created {formattedCreatedAt}</span>
              </div>
            </div>
            <Card className="w-full p-4">
              <CardTitle className="flex justify-between items-center">
                Details
                <Badge
                  status={task.status.slug as StatusSlug}
                  className="capitalize"
                >
                  {task.status.name}
                </Badge>
              </CardTitle>
              <CardDescription className="space-y-2">
                <div>
                  <h2 className="text-slate-800 font-semibold text-base ">
                    Due Date
                  </h2>
                  <p>{formattedCreatedAt}</p>
                </div>
                <div>
                  <h2 className="text-slate-800 font-semibold text-base ">
                    Sroty Point Estimate
                  </h2>
                  <p>5</p>
                </div>
                <div>
                  <h2 className="text-slate-800 font-semibold text-base ">
                    Duration
                  </h2>
                  <p>02:30:00</p>
                </div>
              </CardDescription>
            </Card>
          </DialogDescription>
        </DialogHeader>

        <DialogFooter className="sm:justify-start md:justify-end">
          <DialogClose asChild>
            <Button
              variant="outline"
              size="sm"
              className="hover:cursor-pointer"
            >
              Close
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
