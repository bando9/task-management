import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";

import "./index.css";
import { Layout } from "@/layouts/layout";
import App from "./app";
import { BoardView } from "@/routes/board-view";
import { Summary } from "@/routes/summary";
import { TaskId } from "@/routes/task-id";

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
