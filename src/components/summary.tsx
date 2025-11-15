import { initialDataTasks } from "../lib/storage";
import { CardSummary } from "./card-summary";
import {
  RiFileAddLine,
  RiFileCheckLine,
  RiFileEditLine,
} from "@remixicon/react";

function countIsDone() {
  const tasks = initialDataTasks;
  const updatedTasks = tasks.filter((task) => task.status.name === "done");
  const count = updatedTasks.length;
  return count;
}

export function Summary() {
  const countTasks = initialDataTasks.length;

  return (
    <div className="grid grid-cols-2 gap-5 mb-10">
      <CardSummary
        count={countIsDone()}
        icon={<RiFileCheckLine />}
        colorBackgroundIcon="bg-green-100"
        statusSummary="completed"
      />
      <CardSummary
        count={32}
        icon={<RiFileEditLine />}
        colorBackgroundIcon="bg-slate-200"
        statusSummary="updated"
      />

      <CardSummary
        count={countTasks}
        icon={<RiFileAddLine />}
        colorBackgroundIcon="bg-slate-200"
        statusSummary="created"
      />
    </div>
  );
}
