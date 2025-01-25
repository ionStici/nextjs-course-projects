import { type ReactNode } from "react";

type RedNote = {
  mode: "red";
  subMode: "low" | "medium" | "high";
  children: ReactNode;
};

type GreenNote = {
  mode: "green";
  children: ReactNode;
};

type NoteProps = RedNote | GreenNote;

export default function Note(props: NoteProps) {
  const { children, mode } = props;

  if (mode === "green") {
    return <div className="green">{children}</div>;
  }

  const { subMode } = props;

  return <div className={`red mod--${subMode}`}>{children}</div>;
}
