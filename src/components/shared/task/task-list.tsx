import { TaskItem } from "./task-item";
import { type Tasks } from "@/schema/schema";
import { ScrollArea } from "@/components/ui/scroll-area";

interface TaskListProps {
  tasks: Tasks;
  query: string;
  handleDelete: (id: number) => void;
  handleToggleTaskStatus: (id: number) => void;
}

export function TaskList({
  tasks,
  query,
  handleDelete,
  handleToggleTaskStatus,
}: TaskListProps) {
  return (
    <ScrollArea className="h-88 py-2 px-4 space-y-8 w-3xl border rounded-sm ">
      <ul>
        {
          query
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
                      handleToggleTaskStatus={() =>
                        handleToggleTaskStatus(task.id)
                      }
                    />
                  );
                })
            : tasks.map((task) => {
                return (
                  <TaskItem
                    key={task.id}
                    task={task}
                    handleDelete={() => handleDelete(task.id)}
                    handleToggleTaskStatus={() =>
                      handleToggleTaskStatus(task.id)
                    }
                  />
                );
              }) // Mengembalikan `null` atau `[]` saat tidak ada `query`
        }
      </ul>
    </ScrollArea>
  );
}
