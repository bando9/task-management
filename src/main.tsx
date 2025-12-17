import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";

import "@/index.css";
import { Layout } from "@/layouts/layout";
import App from "@/app";
import { BoardView } from "@/features/pages/kanban-page";
import { Summary } from "@/features/pages/summary-page";
import { TaskId } from "@/features/components/task-id";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<App />} />
        <Route path="/board" element={<BoardView />} />
        <Route path="/summary" element={<Summary />} />
        <Route path="/tasks/:taskId" element={<TaskId />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
