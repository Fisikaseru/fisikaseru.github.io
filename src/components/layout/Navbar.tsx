import Link from "next/link";
import { Container } from "./Container";

const links = [
  { href: "/labs", label: "Labs" },
  { href: "/simulations", label: "Simulasi" },
  { href: "/about", label: "Tentang" }
];

export function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-primary/10 bg-white/80 backdrop-blur">
      <Container className="flex items-center justify-between py-4">
        <Link href="/" className="text-lg font-semibold text-primary">
          FisikaSeru
        </Link>
        <nav className="flex items-center gap-4 text-sm font-medium text-neutral">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-full px-3 py-2 transition hover:bg-accent focus-ring"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/login"
            className="rounded-full bg-primary px-4 py-2 text-white shadow focus-ring"
          >
            Login
          </Link>
        </nav>
      </Container>
    </header>
  );
}
