import searchIcon from "/search.svg";
import { Summary } from "./components/summary";
import { Footer } from "./components/footer";
import { ListTask } from "./components/list-task";
import "./index.css";
import { SearchForm } from "./components/search-form";
import "@fontsource/poppins";

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
            <SearchForm searchIcon={searchIcon} />
            <ListTask />
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}
export default App;
