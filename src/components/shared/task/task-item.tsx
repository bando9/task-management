import { RiInformationLine } from "@remixicon/react";
import type { StatusSlug, Task } from "@/schema/schema";
import {
  RiCheckboxCircleLine,
  RiCheckboxCircleFill,
  RiDeleteBin6Fill,
} from "@remixicon/react";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router";

interface TaskItemProps {
  task: Task;
  handleDelete: () => void;
  handleToggleTaskStatus: () => void;
}

export function TaskItem({
  task,
  handleDelete,
  handleToggleTaskStatus,
}: TaskItemProps) {
  const statusIsDone = task.status.name === "done";

  return (
    <li className="mb-3 w-full  border-2 border-blue-300 rounded-lg p-2 flex items-center justify-between">
      <div className="w-1/2 flex items-center gap-2">
        {statusIsDone ? (
          <RiCheckboxCircleFill
            className="text-green-700 cursor-pointer"
            onClick={handleToggleTaskStatus}
          />
        ) : (
          <RiCheckboxCircleLine
            className="text-slate-700 cursor-pointer"
            onClick={handleToggleTaskStatus}
          />
        )}

        <h2 className="text-slate-800 text-base font-semibold capitalize ">
          {task.title}
        </h2>
      </div>

      <Badge status={task.status.slug as StatusSlug} className="capitalize ">
        {task.status.name}
      </Badge>

      <div className="flex gap-3">
        <Link to={`/tasks/${task.id}`}>
          <RiInformationLine />
        </Link>
        <RiDeleteBin6Fill
          className=" text-red-700 cursor-pointer"
          onClick={handleDelete}
        />
      </div>
    </li>
  );
}
