import { Summary } from "./components/summary";
import { Footer } from "./components/footer";
import { ListTask } from "./components/list-task";
import { SearchForm } from "./components/search-form";

import "@radix-ui/themes/styles.css";
import { Theme } from "@radix-ui/themes";
import { Flex, Text, Button } from "@radix-ui/themes";

function App() {
  return (
    <Theme
      accentColor="blue"
      grayColor="sand"
      radius="full"
      // scaling="95%"
      // appearance="dark"
    >
      <main className="w-full min-h-screen p-10 overflow-hidden transition-all duration-300 mx-auto">
        <section className="mt-5 w-3/4 mx-auto">
          <Summary />
        </section>

        <section className=" mt-5 flex justify-center">
          <div>
            <h1 className="text-2xl font-semibold mb-4">Today</h1>
            <SearchForm />
            <ListTask />
          </div>
        </section>

        <Flex
          direction="column"
          gap="2"
          className="mt-5 max-w-2xl w-full mx-auto"
        >
          <Text>Hello from Radix Themes :)</Text>
          <Button>Let's go</Button>
        </Flex>

        <Footer />
      </main>
    </Theme>
  );
}
export default App;
