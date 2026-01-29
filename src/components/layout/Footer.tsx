import { Container } from "./Container";

export function Footer() {
  return (
    <footer className="border-t border-primary/10 bg-white">
      <Container className="flex flex-col gap-2 py-6 text-sm text-neutral/70 sm:flex-row sm:items-center sm:justify-between">
        <span>© 2024 FisikaSeru Nasional</span>
        <span>Belajar fisika lebih seru, inklusif, dan siap skala nasional.</span>
      </Container>
    </footer>
  );
}
