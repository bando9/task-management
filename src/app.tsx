import dayjs from "dayjs";
import { Footer } from "./components/footer";
import { SearchForm } from "./components/search-form";
import { NavBar } from "./modules/navbar";
import { TaskList } from "./modules/task/task-list";

function App() {
  const nowDate = new Date();
  const now = dayjs(nowDate).format("MMMM D, YYYY");

  return (
    <>
      <main className="w-full min-h-screen p-10 overflow-hidden transition-all duration-300 mx-auto">
        <section className="mt-5 w-3/4 mx-auto">
          <NavBar />
        </section>
        <section className=" mt-5 flex justify-center">
          <div>
            <h1 className="text-2xl font-semibold">Today</h1>
            <p className="text-slate-400 mb-4 text-sm">{now}</p>

            <SearchForm />
            <TaskList />
          </div>
        </section>
        <Footer />
      </main>
    </>
  );
}
export default App;
