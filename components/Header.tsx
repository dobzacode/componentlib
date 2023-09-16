import { ReactNode } from "react";
import Nav from "./header/Nav";
import NavLink from "./header/NavLink";
import H2 from "./text/H2";
import MobileNav from "./header/MobileNav";

interface HeaderProps {
  children?: ReactNode;
  height: string;
  bgColor: string;
}

const logo = () => {
  return (
    <H2 type="heading--sub-large" textColor="text-white">
      MY SYSTEM
    </H2>
  );
};

const navlink = () => {
  return (
    <>
      <NavLink href="/">LIEN</NavLink>
      <NavLink href="/">LIEN</NavLink>
      <NavLink href="/">LIEN</NavLink>
      <NavLink href="/">LIEN</NavLink>
      <NavLink href="/">LIEN</NavLink>
    </>
  );
};

export default function Header({ children, height, bgColor }: HeaderProps) {
  return (
    <header
      className={`${height} ${bgColor} flex items-center justify-center px-4  `}
    >
      {children}
      <Nav
        navStyle="tablet:flex hidden gap-large items-center justify-around w-full mx-sub-large "
        navLinkStyle="flex laptopL:gap-large laptop:gap-sub-large tablet:gap-small justify-center sub-heading text-white "
        logo={logo()}
      >
        {navlink()}
      </Nav>
      <MobileNav
        navStyle="flex tablet:hidden gap-large items-center justify-between w-full mobile-large:mx-sub-large mx-small"
        navLinkStyle="flex flex-col gap-large justify-center heading font-normal text-black mt-sub-large pl-8"
        modalStyle={`h-screen bg-white w-full duration-700`}
        height={height}
        logo={logo()}
      >
        {navlink()}
      </MobileNav>
    </header>
  );
}
