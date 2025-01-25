import { type FormEvent, useRef } from "react";

type NewTaskFormProps = {
  onAddTask: (title: string, description: string) => void;
};

export default function NewTaskForm({ onAddTask }: NewTaskFormProps) {
  const titleInput = useRef<HTMLInputElement>(null);
  const descriptionInput = useRef<HTMLInputElement>(null);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const title = titleInput.current!.value;
    const description = descriptionInput.current!.value;

    onAddTask(title, description);
    event.currentTarget.reset();
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="task">New Task</label>
        <input type="text" id="task" ref={titleInput} />
      </div>
      <div>
        <label htmlFor="description">Task Description</label>
        <input type="text" id="description" ref={descriptionInput} />
      </div>
      <button>Add Task</button>
    </form>
  );
}
