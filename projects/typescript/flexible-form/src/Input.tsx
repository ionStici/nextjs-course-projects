import { ComponentPropsWithoutRef } from "react";

type InputProps = {
  label: string;
  id: string;
} & ComponentPropsWithoutRef<"input">;

export default function Input({ label, id, ...otherProps }: InputProps) {
  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <input id={id} name={id} {...otherProps} />
    </div>
  );
}
