import { Summary } from "../module/summary/summary";
import { Footer } from "./components/footer";
import { TaskList } from "../module/task/task-list";
import { SearchForm } from "./components/search-form";

function App() {
  return (
    <>
      <main className="w-full min-h-screen p-10 overflow-hidden transition-all duration-300 mx-auto">
        <section className="mt-5 w-3/4 mx-auto">
          <Summary />
        </section>
        <section className=" mt-5 flex justify-center">
          <div>
            <h1 className="text-2xl font-semibold mb-4">Today</h1>
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
