import { useState } from "react";
import { initialDataTasks } from "../../src/lib/storage";
import { TaskItem } from "./task-item";

export function TaskList() {
  const [tasks, setTasks] = useState(initialDataTasks);

  function handleDelete(id: number) {
    const updatedTasks = tasks.filter((task) => task.id !== id);
    setTasks(updatedTasks);
  }

  return (
    <ul>
      {tasks.map((task) => {
        return (
          <TaskItem
            key={task.id}
            task={task}
            handleDelete={() => handleDelete(task.id)}
          />
        );
      })}
    </ul>
  );
}
