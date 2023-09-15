import { ReactNode } from "react";
import Nav from "./header/Nav";
import NavLink from "./header/NavLink";

interface HeaderProps {
  children?: ReactNode;
  height: string;
  bgColor: string;
}

export default function Header({ children, height, bgColor }: HeaderProps) {
  return (
    <header className={`${height} ${bgColor} flex items-center justify-center`}>
      {children}

      <Nav
        flex="flex gap-extraLarge justify-center heading text-white"
        margin="mx-10"
      >
        <NavLink href="/">LIEN</NavLink>
        <NavLink href="/">LIEN</NavLink>
        <NavLink href="/">LIEN</NavLink>
        <NavLink href="/">LIEN</NavLink>
        <NavLink href="/">LIEN</NavLink>
      </Nav>
    </header>
  );
}
