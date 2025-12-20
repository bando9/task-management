import { RiGlobalFill, RiKanbanView2, RiTableView } from "@remixicon/react";
import { Link, matchPath, useLocation } from "react-router";

const menuData = [
  {
    id: 1,
    label: "Backlog",
    icon: RiTableView,
    link: "/",
    match: ["/", "/tasks/:taskId"],
  },
  {
    id: 2,
    label: "Kanban",
    icon: RiKanbanView2,
    link: "/kanban",
    match: ["/kanban"],
  },
  {
    id: 3,
    label: "Summary",
    icon: RiGlobalFill,
    link: "/summary",
    match: ["/summary"],
  },
];

export function NavBar() {
  const active: string = "border-b-4 border-blue-700 text-blue-600";
  const location = useLocation();

  return (
    <nav>
      <ul className="flex gap-24 w-full justify-center items-center border-b-2 pb-1">
        {menuData.map((item) => {
          const isActive = item.match.some((path) =>
            matchPath(path, location.pathname)
          );

          return (
            <li key={item.label}>
              <Link
                to={item.link}
                className={`flex gap-1 items-center font-semibold ${isActive ? active : ""} `}
              >
                <item.icon /> {item.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
