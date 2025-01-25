import { type ReactNode } from "react";

type TaskProps = {
  id: number;
  title: string;
  children: ReactNode;
  onDelete: (id: number) => void;
};

export default function Task({ id, title, children, onDelete }: TaskProps) {
  return (
    <li>
      <button onClick={() => onDelete(id)}>Delete</button>
      <h2>{title}</h2>
      {children}
    </li>
  );
}
