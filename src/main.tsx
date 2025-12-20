import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";

import "@/index.css";
import { Layout } from "@/layouts/layout";
import App from "@/app";
import { Summary } from "@/features/pages/summary-page";
import { TaskId } from "@/features/components/task-id";
import { KanbanBoard } from "./features/pages/kanban-board";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<App />} />
        <Route path="/kanban" element={<KanbanBoard />} />
        <Route path="/summary" element={<Summary />} />
        <Route path="/tasks/:taskId" element={<TaskId />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
