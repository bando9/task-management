import { TaskItem } from "./task-item";
import { type Tasks } from "@/schema/schema";
import { ScrollArea } from "@/components/ui/scroll-area";

interface TaskListProps {
  tasks: Tasks;
  handleDelete: (id: number) => void;
  handleToggleTaskStatus: (id: number) => void;
}

export function TaskList({
  tasks,
  handleDelete,
  handleToggleTaskStatus,
}: TaskListProps) {
  return (
    <ScrollArea className="h-88 py-2 px-4 space-y-8 w-3xl border rounded-sm ">
      <ul>
        {tasks.map((task) => {
          return (
            <TaskItem
              key={task.id}
              task={task}
              handleDelete={() => handleDelete(task.id)}
              handleToggleTaskStatus={() => handleToggleTaskStatus(task.id)}
            />
          );
        })}
      </ul>
    </ScrollArea>
  );
}
