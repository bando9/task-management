import { Footer } from "@/components/shared/footer";
import { NavBar } from "@/components/shared/navbar";
import { Outlet } from "react-router";

export function Layout() {
  return (
    <main className="flex flex-col items-center w-full h-screen p-5 overflow-hidden transition-all duration-300 mx-auto">
      <section className="w-full mx-auto">
        <NavBar />
      </section>
      <Outlet />
      <Footer />
    </main>
  );
}
