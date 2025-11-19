import dayjs from "dayjs";
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
}

export function TaskItem({
  task,
  handleDelete,
  handleStatusIsDone,
}: TaskItemProps) {
  const formattedCreatedAt = dayjs(task.createdAt).format("MMMM D, YYYY");

  const statusIsDone = task.status.name === "done";

  function handleStatusIsTodo(id: number) {
    console.log("Checklist status todo", id);
  }

  return (
    <li className="mb-3 w-2xl  border-2 border-blue-300 rounded-lg p-2">
      <div className="flex items-stretch justify-between">
        <div>
          <h2 className="text-slate-800 text-lg font-semibold capitalize">
            {task.title}{" "}
          </h2>
          <p className="text-slate-700 text-sm ">{task.description}</p>

          <p className="text-slate-600 text-xs mt-2 italic">
            Created {formattedCreatedAt}
          </p>

          <Badge status={task.status.name} className="capitalize mt-3">
            {task.status.name}
          </Badge>
        </div>
        <div className="flex flex-col items-end justify-between  gap-5 ">
          <TaskDetail task={task} />

          <div className="flex gap-5 items-center">
            {statusIsDone ? (
              <RiCheckboxCircleFill
                className="text-green-700 cursor-pointer"
                onClick={() => handleStatusIsTodo(task.id)}
              />
            ) : (
              <RiCheckboxCircleLine
                className="text-slate-700 cursor-pointer"
                onClick={handleStatusIsDone}
              />
            )}

            <RiDeleteBin6Fill
              className=" text-red-700 cursor-pointer"
              onClick={handleDelete}
            />
          </div>
        </div>
      </div>
    </li>
  );
}
