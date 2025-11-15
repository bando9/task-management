import dayjs from "dayjs";
import type { Task } from "../lib/storage";
import { DeleteDialog } from "./delete-dialog";
import { RiCheckDoubleFill } from "@remixicon/react";
import { TaskDetail } from "./task-detail";
import { Badge } from "@/components/ui/badge";

interface TaskItemProps {
  task: Task;
}

export function TaskItem({ task }: TaskItemProps) {
  const formattedCreatedAt = dayjs(task.createdAt).format("MMMM D, YYYY");

  return (
    <li className="mb-3 w-2xl  border-2 border-blue-300 rounded-lg p-2">
      <div className="flex items-stretch justify-between">
        <div>
          <h2 className="text-slate-800 text-lg font-semibold">
            {task.title}{" "}
          </h2>
          <p className="text-slate-700 text-sm ">{task.description}</p>

          <p className="text-slate-600 text-xs mt-2 italic">
            Created {formattedCreatedAt}
          </p>

          <Badge status={task.status.name} className="capitalize">
            {task.status.name}
          </Badge>
        </div>
        <div className="flex flex-col items-end justify-between  gap-5 ">
          <TaskDetail />

          <div className="flex gap-5 ">
            <RiCheckDoubleFill className="text-green-500 w-5 hover:cursor-pointer" />
            <DeleteDialog />
          </div>
        </div>
      </div>
    </li>
  );
}
