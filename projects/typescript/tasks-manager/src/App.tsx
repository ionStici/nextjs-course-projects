import Header from "./components/Header";
import reactImage from "./assets/react.svg";
import NewTaskForm from "./components/NewTaskForm";
import { useState } from "react";
import { type Task } from "./types";
import TasksList from "./components/TasksList";

export default function App() {
  const [tasks, setTasks] = useState<Task[]>([]);

  function handleAddTask(title: string, description: string): void {
    setTasks((prevTasks) => {
      const newTask: Task = { title, description, id: Math.random() };
      return [...prevTasks, newTask];
    });
  }

  function handleDeleteTask(id: number): void {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  }

  return (
    <main>
      <Header image={{ src: reactImage, alt: "React" }}>
        <h1>Tasks Manager</h1>
      </Header>
      <NewTaskForm onAddTask={handleAddTask} />
      <TasksList tasks={tasks} onDeleteTask={handleDeleteTask} />
    </main>
  );
}
