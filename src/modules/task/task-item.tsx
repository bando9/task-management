import type { Task } from "@/modules/task/schema";
import {
  RiCheckboxCircleLine,
  RiCheckboxCircleFill,
  RiDeleteBin6Fill,
} from "@remixicon/react";
import { TaskDetail } from "./task-detail";
import { Badge } from "@/components/ui/badge";

interface TaskItemProps {
  task: Task;
  handleDelete: () => void;
  handleStatusIsDone: () => void;
  handleStatusIsTodo: () => void;
}

export function TaskItem({
  task,
  handleDelete,
  handleStatusIsDone,
  handleStatusIsTodo,
}: TaskItemProps) {
  const statusIsDone = task.status.name === "done";

  return (
    <li className="mb-3 w-full  border-2 border-blue-300 rounded-lg p-2 flex items-center justify-between">
      <div className="w-1/2 flex items-center gap-2">
        {statusIsDone ? (
          <RiCheckboxCircleFill
            className="text-green-700 cursor-pointer"
            onClick={handleStatusIsTodo}
          />
        ) : (
          <RiCheckboxCircleLine
            className="text-slate-700 cursor-pointer"
            onClick={handleStatusIsDone}
          />
        )}

        <h2 className="text-slate-800 text-base font-semibold capitalize ">
          {task.title}
        </h2>
      </div>

      <Badge status={task.status.name} className="capitalize ">
        {task.status.name}
      </Badge>

      <div className="flex gap-3">
        <TaskDetail task={task} />

        <RiDeleteBin6Fill
          className=" text-red-700 cursor-pointer"
          onClick={handleDelete}
        />
      </div>
    </li>
  );
}
