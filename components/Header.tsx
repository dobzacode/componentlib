import { ReactNode } from "react";
import Nav from "./header/Nav";
import NavLink from "./header/NavLink";
import H2 from "./text/H2";

interface HeaderProps {
  children?: ReactNode;
  height: string;
  bgColor: string;
}

export default function Header({ children, height, bgColor }: HeaderProps) {
  return (
    <header
      className={`${height} ${bgColor} flex items-center justify-center px-4`}
    >
      {children}
      <Nav
        navStyle="flex gap-large items-center justify-around w-full mx-10"
        navLinkStyle="flex laptopL:gap-large laptop:gap-subLarge tablet:gap-small justify-center subHeading text-white "
        logo={
          <H2 type="headingSubLarge" textColor="text-white">
            MY SYSTEM
          </H2>
        }
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
