import { RiGlobalFill, RiKanbanView2, RiTableView } from "@remixicon/react";

const menuData = [
  { name: "Backlog", icon: <RiTableView />, route: "/" },
  { name: "Board", icon: <RiKanbanView2 />, route: "/board" },
  { name: "Summary", icon: <RiGlobalFill />, route: "/summary" },
];

console.log(menuData);

export function Navbar() {
  return (
    <nav>
      <ul className="flex gap-24 w-full justify-center items-center border-b-2 pb-1">
        {menuData.map((item) => {
          return (
            <li key={item.name}>
              <a
                href={item.route}
                className="flex gap-1 items-center px font-semibold"
              >
                {item.icon} {item.name}
              </a>
            </li>
          );
        })}
        {/* <li>
          <a
            href="/"
            className="flex gap-1 items-center px font-semibold  border-b-3 border-blue-700 text-blue-600"
          >
            <RiTableView /> Backlog
          </a>
        </li>
        <li>
          <a href="/board" className="flex gap-1 items-center font-semibold">
            <RiKanbanView2 />
            Board
          </a>
        </li>
        <li>
          <a href="/summary" className="flex gap-1 items-center font-semibold">
            <RiGlobalFill className="w-5" /> Summary
          </a>
        </li> */}
      </ul>
    </nav>
  );
}
