import { type ComponentPropsWithoutRef, type ReactNode } from "react";

type ButtonProps = {
  href?: never;
  children: ReactNode;
} & ComponentPropsWithoutRef<"button">;

type AnchorProps = {
  href?: string;
  children: ReactNode;
} & ComponentPropsWithoutRef<"a">;

function isAnchorProps(props: ButtonProps | AnchorProps): props is AnchorProps {
  return "href" in props;
}

export default function Button(props: ButtonProps | AnchorProps) {
  if (isAnchorProps(props)) {
    return <a {...props}></a>;
  }

  return <button {...props}></button>;
}
