import { createBrowserRouter } from "react-router";
import App from "@/app";
import { BoardView } from "@/modules/board/board-view";
import { Summary } from "@/modules/summary/summary";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/board",
    element: <BoardView />,
  },
  {
    path: "/summary",
    element: <Summary />,
  },
]);

export default router;
