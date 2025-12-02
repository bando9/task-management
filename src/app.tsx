import dayjs from "dayjs";
import { SearchForm } from "@/components/shared/search-form";
import { TaskList } from "@/components/shared/task/task-list";
import { CreateTask } from "./routes/create-task";

function App() {
  const nowDate = new Date();
  const now = dayjs(nowDate).format("MMMM D, YYYY");

  return (
    <section className="space-y-5 pt-10">
      <div className="mt-3">
        <h1 className="text-2xl font-semibold">Today</h1>
        <p className="text-slate-400 mb-4 text-sm">{now}</p>
      </div>
      <div className="flex justify-between items-center mb-6">
        <SearchForm />
        <CreateTask />
      </div>

      <TaskList />
    </section>
  );
}
export default App;
