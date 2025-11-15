import dayjs from "dayjs";
import type { Task } from "../lib/storage";
import { DeleteDialog } from "./delete-dialog";

interface TaskItemProps {
  task: Task;
  className?: string | undefined;
}

export function TaskItem({ task, className }: TaskItemProps) {
  const formattedCreatedAt = dayjs(task.createdAt).format("MMMM D, YYYY");

  return (
    <li className="mb-3 w-2xl  border-2 border-blue-300 rounded-lg p-2">
      <div className="flex items-start justify-between">
        <div>
          <h2 className="text-slate-800 text-lg font-semibold">
            {task.title}{" "}
          </h2>
          <p className="text-slate-700 text-sm ">{task.description}</p>
          <p className="text-slate-600 text-xs mt-2 italic">
            Created {formattedCreatedAt}
          </p>
        </div>
        <div className="flex flex-col items-end gap-10">
          <span className={className}>{task.status.name}</span>

          <DeleteDialog />
        </div>
      </div>
    </li>
  );
}
