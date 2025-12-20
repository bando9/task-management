import { dataStatuses, initialDataTasks } from "@/data/storage";
import {
  DndContext,
  useDraggable,
  useDroppable,
  type DragEndEvent,
} from "@dnd-kit/core";
import { useState } from "react";
import type { StatusSlug, Task, Tasks } from "../schema/schema";

type ColumnType = {
  id: number;
  slug: StatusSlug;
  name: string;
};

const columns = dataStatuses;

export function KanbanBoard() {
  const [tasks, setTasks] = useState<Tasks>(initialDataTasks);

  function handleDragEnd(event: DragEndEvent) {
    const { active, over } = event;
    if (!over) return;

    const id = active.id as number;
    const statusSlug = over.id as StatusSlug;
    const newStatusSlug = dataStatuses.find(
      (status) => status.slug === statusSlug
    );
    const task = tasks.find((task) => task.id === id);

    if (!task) return;

    const updateStatusTask: Task = {
      ...task,
      status: newStatusSlug || dataStatuses[0],
    };

    const updateTasks: Tasks = tasks.map((task) => {
      if (task.id === id) {
        return updateStatusTask;
      }
      return task;
    });

    setTasks(updateTasks);
  }

  return (
    <div className="overflow-y-scroll overflow-x-hidden w-full bg-slate-100 [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-slate-200 [&::-webkit-scrollbar-thumb]:rounded-sm [&::-webkit-scrollbar-thumb]:bg-slate-300 [&::-webkit-scrollbar-thumb]:hover:bg-slate-100">
      <DndContext onDragEnd={handleDragEnd}>
        <div className="flex pt-2 px-3 gap-5 w-full">
          {columns.map((column) => {
            return (
              <Column
                key={column.id}
                column={column}
                tasks={tasks.filter((task) => task.status.slug === column.slug)}
              />
            );
          })}
        </div>
      </DndContext>
    </div>
  );
}

type ColumnProps = {
  column: ColumnType;
  tasks: Tasks;
};

function Column({ column, tasks }: ColumnProps) {
  const { setNodeRef } = useDroppable({
    id: column.slug,
  });

  return (
    <div className="w-full min-h-screen  bg-slate-200 rounded-md p-3 ">
      <div className="text-center mb-4 py-2 text-slate-900 bg-slate-200 font-semibold border-b border-slate-400 sticky top-0 right-0 left-0">
        <h1>
          {column.name}
          <span className="ms-1.5 inline-flex items-center rounded-md bg-slate-600/20 px-2 py-1 text-xs font-medium text-slate-800">
            00
          </span>
        </h1>
      </div>
      <div ref={setNodeRef} className="min-h-96 flex flex-1 flex-col gap-4">
        {tasks.map((task) => {
          return <TaskCard key={task.id} task={task} />;
        })}
      </div>
    </div>
  );
}

type TaskCardProps = {
  task: Task;
};

function TaskCard({ task }: TaskCardProps) {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: task.id,
  });

  const style = transform
    ? {
        transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
      }
    : undefined;

  return (
    <div
      ref={setNodeRef}
      {...listeners}
      {...attributes}
      className="p-3 bg-slate-50 rounded-md cursor-grab border-2 border-slate-50 hover:border-blue-400 "
      style={style}
    >
      <h2 className="mb-3"> {task.title} </h2>
      <div className="flex justify-between items-center">
        <p className="text-xs text-slate-600">December 30, 2025</p>
        <p className="inline-flex items-center rounded-md bg-slate-950/10 px-2 py-1 text-xs font-medium text-slate-800 inset-ring inset-ring-slate-950/20">
          5
        </p>
      </div>
    </div>
  );
}
