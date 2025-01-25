import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import TasksProvider from "./context.tsx";

createRoot(document.getElementById("root")!).render(
  <TasksProvider>
    <StrictMode>
      <App />
    </StrictMode>
  </TasksProvider>
);
