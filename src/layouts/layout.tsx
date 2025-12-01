import { Footer } from "@/components/shared/footer";
import { RiGlobalFill, RiKanbanView2, RiTableView } from "@remixicon/react";
import { Link, Outlet, useLocation } from "react-router";

const menuData = [
  { id: 1, label: "Backlog", icon: RiTableView, link: "/" },
  { id: 2, label: "Board", icon: RiKanbanView2, link: "/board" },
  { id: 3, label: "Summary", icon: RiGlobalFill, link: "/summary" },
];

export function Layout() {
  const active: string = "border-b-4 border-blue-700 text-blue-600";
  const location = useLocation();

  return (
    <>
      <main className="flex flex-col items-center w-full min-h-screen p-10 overflow-hidden transition-all duration-300 mx-auto">
        <section className="w-3/4 mx-auto">
          <nav>
            <ul className="flex gap-24 w-full justify-center items-center border-b-2 pb-1">
              {menuData.map((item) => {
                return (
                  <li key={item.label}>
                    <Link
                      to={item.link}
                      className={`flex gap-1 items-center font-semibold ${location.pathname === item.link ? active : ""} `}
                    >
                      <item.icon /> {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
        </section>
        <Outlet />
      </main>

      <Footer />
    </>
  );
}
