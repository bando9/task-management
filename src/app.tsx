import dayjs from "dayjs";
import { SearchForm } from "@/components/search-form";
import { TaskList } from "@/modules/task/task-list";
import { CounterIncrement } from "./modules/experiment/counter";

function App() {
  const nowDate = new Date();
  const now = dayjs(nowDate).format("MMMM D, YYYY");

  return (
    <>
      <section className="space-y-8 pt-10">
        <CounterIncrement />
        <div className="mt-3">
          <h1 className="text-2xl font-semibold">Today</h1>
          <p className="text-slate-400 mb-4 text-sm">{now}</p>
        </div>
        <SearchForm />
        <TaskList />
      </section>
    </>
  );
}
export default App;
