import { TaskItem } from "./task-item";
import { type Tasks } from "@/features/schema/schema";
import { ScrollArea } from "@/components/ui/scroll-area";
import type { UpdateStatusType } from "@/app";

interface TaskListProps {
  tasks: Tasks;
  query: string;
  handleDelete: (id: number) => void;
  handleUpdateSelect: (payload: UpdateStatusType) => void;
}

export function TaskList({
  tasks,
  query,
  handleDelete,
  handleUpdateSelect,
}: TaskListProps) {
  return (
    <ScrollArea className="h-108 py-2 px-4 space-y-8 w-4xl border rounded-sm ">
      <ul>
        {query
          ? tasks
              .filter((task) =>
                task.title.toLowerCase().includes(query.toLowerCase())
              )
              .map((task) => {
                return (
                  <TaskItem
                    key={task.id}
                    task={task}
                    handleDelete={() => handleDelete(task.id)}
                    handleUpdateSelect={handleUpdateSelect}
                  />
                );
              })
          : tasks.map((task) => {
              return (
                <TaskItem
                  key={task.id}
                  task={task}
                  handleDelete={() => handleDelete(task.id)}
                  handleUpdateSelect={handleUpdateSelect}
                />
              );
            })}
      </ul>
    </ScrollArea>
  );
}
