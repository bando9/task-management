import { initialDataTasks } from "@/data/storage";
import { CardSummary } from "../components/shared/summary/card-summary";
import {
  RiFileAddLine,
  RiFileCheckLine,
  RiFileEditLine,
} from "@remixicon/react";

function countIsDone() {
  const tasks = initialDataTasks;
  const updatedTasks = tasks.filter((task) => task.status.slug === "done");
  const count = updatedTasks.length;
  return count;
}

export function Summary() {
  const countTasks = initialDataTasks.length;

  return (
    <>
      <main className="w-full min-h-screen p-10 overflow-hidden transition-all duration-300 mx-auto">
        <section className="mt-14 w-3/4 mx-auto">
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
        </section>
      </main>
    </>
  );
}
