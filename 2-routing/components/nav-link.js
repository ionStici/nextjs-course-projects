"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

export default function NavLink({ children, href }) {
  const path = usePathname();

  return (
    <Link href={href} className={path === href ? "active" : ""}>
      {children}
    </Link>
  );
}
