import { dataTasks } from "../lib/storage";
import { CardSummary } from "./card-summary";

function countIsDone() {
  const tasks = dataTasks;
  const updatedTasks = tasks.filter((task) => task.status.name === "done");
  const count = updatedTasks.length;
  return count;
}

export function Summary() {
  const countTasks = dataTasks.length;

  return (
    <div className="grid grid-cols-2 gap-5 mb-10">
      <CardSummary
        count={countIsDone()}
        imageSrc="/icons/check-circle.svg"
        colorBackgroundIcon="bg-green-100"
        statusSummary="completed"
      />

      <CardSummary
        count={32}
        imageSrc="/icons/refresh-ccw.svg"
        colorBackgroundIcon="bg-slate-200"
        statusSummary="updated"
      />

      <CardSummary
        count={countTasks}
        imageSrc="/icons/file-plus.svg"
        colorBackgroundIcon="bg-slate-200"
        statusSummary="created"
      />
    </div>
  );
}
