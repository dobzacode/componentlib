import { ReactNode } from "react";
import Nav from "./header/Nav";
import NavLink from "./header/NavLink";

interface HeaderProps {
  children?: ReactNode;
  height: string;
}

export default function Header({ children, height }: HeaderProps) {
  return (
    <header className={`${height} flex items-center justify-center`}>
      {children}

      <Nav flex="flex gap-40 justify-center" margin="mx-10">
        <NavLink href="/">LIEN</NavLink>
        <NavLink href="/">LIEN</NavLink>
        <NavLink href="/">LIEN</NavLink>
        <NavLink href="/">LIEN</NavLink>
        <NavLink href="/">LIEN</NavLink>
      </Nav>
    </header>
  );
}
