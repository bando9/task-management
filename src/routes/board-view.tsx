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
      <main className="w-full min-h-screen p-10 overflow-hidden transition-all duration-300 mx-auto ">
        <section className="mt-14 ">
          <div className="min-h-screen flex flex-col md:flex-row relative w-full">
            <div className="flex-1 pt-7 p-10 bg-slate-100  min-h-screen overflow-hidden transition-all duration-300">
              <section className="max-h-screen overflow-auto">
                <div className="flex items-start gap-5 py-5 ">
                  <div className="min-w-72 bg-slate-200 min-h-screen rounded-md p-3">
                    <h1 className="text-center mb-4 pb-2 text-slate-900 font-semibold border-b border-slate-400">
                      Backlog
                      <span className="ms-1.5 inline-flex items-center rounded-md bg-slate-600/20 px-2 py-1 text-xs font-medium text-slate-800">
                        10
                      </span>
                    </h1>
                    <ul>
                      {parsedTasks
                        .filter((task) => {
                          return task.status.slug === "backlog";
                        })
                        .map((task) => {
                          return <TaskBoardPopover key={task.id} task={task} />;
                        })}
                    </ul>
                  </div>

                  <div className="min-w-72 bg-slate-200 min-h-screen rounded-md p-3">
                    <h1 className="text-center mb-4 pb-2 text-slate-900 font-semibold border-b border-slate-400">
                      Todo
                      <span className="ms-1.5 inline-flex items-center rounded-md bg-slate-600/20 px-2 py-1 text-xs font-medium text-slate-800">
                        10
                      </span>
                    </h1>

                    <ul>
                      {parsedTasks
                        .filter((task) => {
                          return task.status.slug === "todo";
                        })
                        .map((task) => {
                          return <TaskBoardPopover key={task.id} task={task} />;
                        })}
                    </ul>
                  </div>

                  <div className="min-w-72 bg-slate-200 min-h-screen rounded-md p-3">
                    <h1 className="text-center mb-4 pb-2 text-slate-900 font-semibold border-b border-slate-400">
                      In Progress
                      <span className="ms-1.5 inline-flex items-center rounded-md bg-slate-600/20 px-2 py-1 text-xs font-medium text-slate-800">
                        10
                      </span>
                    </h1>
                    <ul>
                      {parsedTasks
                        .filter((task) => {
                          return task.status.slug === "in-progress";
                        })
                        .map((task) => {
                          return <TaskBoardPopover key={task.id} task={task} />;
                        })}
                    </ul>
                  </div>

                  <div className="min-w-72 bg-slate-200 min-h-screen rounded-md p-3">
                    <h1 className="text-center mb-4 pb-2 text-slate-900 font-semibold border-b border-slate-400">
                      Done
                      <span className="ms-1.5 inline-flex items-center rounded-md bg-slate-600/20 px-2 py-1 text-xs font-medium text-slate-800">
                        10
                      </span>
                    </h1>
                    <ul>
                      {parsedTasks
                        .filter((task) => {
                          return task.status.slug === "done";
                        })
                        .map((task) => {
                          return <TaskBoardPopover key={task.id} task={task} />;
                        })}
                    </ul>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </section>
      </main>
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
