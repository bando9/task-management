import { RiInformationLine } from "@remixicon/react";
import type { Task } from "@/features/schema/schema";
import { RiDeleteBin6Fill } from "@remixicon/react";
import { Link } from "react-router";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { dataStatuses } from "@/data/storage";
import type { UpdateStatusType } from "@/app";

interface TaskItemProps {
  task: Task;
  handleDelete: () => void;
  handleUpdateSelect: (payload: UpdateStatusType) => void;
}

export function TaskItem({
  task,
  handleDelete,
  handleUpdateSelect,
}: TaskItemProps) {
  return (
    <li className="mb-3 w-full h-11 border-2 border-blue-300 rounded-lg p-2 flex items-center justify-between">
      <div className="w-1/2 flex items-center gap-2">
        <h2 className="text-slate-800 text-base font-semibold capitalize ms-2">
          {task.title}
        </h2>
      </div>

      <Select
        name="status-slug"
        onValueChange={(value) =>
          handleUpdateSelect({
            id: task.id,
            statusSlug: value as UpdateStatusType["statusSlug"],
          })
        }
      >
        <SelectTrigger className="w-32">
          <SelectValue placeholder={task.status.name} />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            {dataStatuses.map((status) => {
              return (
                <SelectItem value={status.slug} key={status.slug}>
                  {status.name}
                </SelectItem>
              );
            })}
          </SelectGroup>
        </SelectContent>
      </Select>

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
