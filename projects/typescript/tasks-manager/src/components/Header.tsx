import { ReactNode } from "react";

type HeaderProps = {
  image: {
    src: string;
    alt: string;
  };
  children: ReactNode;
};

export default function Header({ children, image }: HeaderProps) {
  return (
    <header>
      <img {...image} />
      {children}
    </header>
  );
}
