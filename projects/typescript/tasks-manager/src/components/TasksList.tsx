import { type Task as TaskType } from "../types";
import Task from "./Task";
import Note from "./Note";

type TasksListProps = {
  tasks: TaskType[];
  onDeleteTask: (id: number) => void;
};

export default function TasksList({ tasks, onDeleteTask }: TasksListProps) {
  if (tasks.length === 0) {
    return (
      <Note mode="green">
        <p>Add a new task and stay focused!</p>
      </Note>
    );
  }

  let subMode: "low" | "medium" | "high" = "low";
  if (tasks.length >= 8) subMode = "medium";
  if (tasks.length >= 12) subMode = "high";

  return (
    <section>
      {tasks.length >= 4 && (
        <Note mode="red" subMode={subMode}>
          <p>Too many tasks can slow down your productivity!</p>
        </Note>
      )}
      <ul>
        {tasks.map(({ id, title, description }: TaskType) => {
          return (
            <Task key={id} id={id} title={title} onDelete={onDeleteTask}>
              <p>{description}</p>
            </Task>
          );
        })}
      </ul>
    </section>
  );
}
