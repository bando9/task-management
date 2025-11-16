import { RiInfoI } from "@remixicon/react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import dayjs from "dayjs";
import { initialDataTasks } from "@/lib/storage";

interface TaskDetailProps {
  taskId: number;
}

export function TaskDetail({ taskId }: TaskDetailProps) {
  const task = initialDataTasks.find((task) => task.id === taskId);
  if (!task) return;

  const formattedCreatedAt = dayjs(task.createdAt).format("MMMM D, YYYY");
  const formattedUpdatedAt = dayjs(task.updatedAt).format("MMMM D, YYYY");

  return (
    <Dialog>
      <DialogTrigger asChild>
        <RiInfoI className="w-4 rounded-2xl text-slate-400 hover:text-slate-900 hover:cursor-pointer" />
      </DialogTrigger>
      <DialogContent className="sm:max-w-md md:max-w-2xl min-h-1/4">
        <DialogHeader className="my-3">
          <DialogTitle className="capitalize flex items-center justify-between mb-2">
            {task.title}
            <Badge status={task.status.name}>{task.status.name}</Badge>
          </DialogTitle>
          <DialogDescription className="flex flex-col">
            {task?.description}
            <span className="text-slate-600 text-xs italic mt-5 ">
              Last updated {formattedUpdatedAt}
            </span>

            <span className="text-slate-600 text-xs italic">
              Created {formattedCreatedAt}
            </span>
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
