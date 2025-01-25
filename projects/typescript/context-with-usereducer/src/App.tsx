import { useRef } from "react";
import { useTasks } from "./context";

export default function App() {
  const { tasks, addTask, deleteTask, completeTask } = useTasks();
  const input = useRef<HTMLInputElement>(null);

  return (
    <>
      <ul>
        {tasks.map(({ task, isCompleted, id }) => {
          return (
            <li key={id}>
              <p>{task}</p>
              <button
                onClick={() => completeTask(id)}
                className={`${isCompleted ? "isCompleted" : "isNotCompleted"}`}
              >
                {isCompleted ? "Completed" : "Complete"}
              </button>
              <button onClick={() => deleteTask(id)} className="delete">
                Delete
              </button>
            </li>
          );
        })}
      </ul>

      <div>
        <input type="text" ref={input} />
        <button
          onClick={() => {
            const value = input.current!.value;
            addTask(value);
            input.current!.value = "";
          }}
        >
          Add Task
        </button>
      </div>
    </>
  );
}
