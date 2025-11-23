import { RiInformationLine } from "@remixicon/react";
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
import { Badge } from "@/components/ui/badge";
import type { Task } from "@/modules/task/schema";

interface TaskDetailProps {
  task: Task;
}

export function TaskDetail({ task }: TaskDetailProps) {
  if (!task) return;

  const formattedCreatedAt = dayjs(task.createdAt).format("MMMM D, YYYY");
  const formattedUpdatedAt = dayjs(task.updatedAt).format("MMMM D, YYYY");

  return (
    <Dialog>
      <DialogTrigger asChild>
        <RiInformationLine className="rounded-2xl text-slate-500 hover:text-slate-900 hover:cursor-pointer" />
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
