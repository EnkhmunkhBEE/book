// components/Header.tsx
import Link from "next/link";

export function Header() {
  return (
    <header className="site-header">
      <Link className="logo" href="/">BOK</Link>
      <nav className="main-nav">
        <Link href="/">Home</Link>
        <Link href="/books">Books</Link>
        <Link href="/about">About</Link>
      </nav>
    </header>
  );
}