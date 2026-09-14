// components/SideMenu.tsx
import Link from "next/link";

export function SideMenu() {
  return (
    <nav className="side-menu">
      <Link href="/">Home</Link>
      <Link href="/books">All Books</Link>
      <Link href="/about">About</Link>
    </nav>
  );
}