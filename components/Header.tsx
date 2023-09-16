import { ReactNode } from "react";
import Nav from "./header/Nav";
import NavLink from "./header/NavLink";
import H2 from "./text/H2";
import MobileNav from "./header/MobileNav";

interface HeaderProps {
  children?: ReactNode;
  height: string;
  bgColor?: string;
  logoColor?: string;
  textColor?: string;
}

export default function Header({
  children,
  height,
  bgColor = "",
  textColor,
  logoColor,
}: HeaderProps) {
  const logo = () => {
    return (
      <H2 type="heading--sub-large" textColor={logoColor}>
        MY SYSTEM
      </H2>
    );
  };

  const navlink = () => {
    return (
      <>
        <NavLink href="/">Lien</NavLink>
        <NavLink href="/">Lien</NavLink>
        <NavLink href="/">Lien</NavLink>
        <NavLink href="/">Lien</NavLink>
        <NavLink href="/">Lien</NavLink>
      </>
    );
  };

  return (
    <header
      className={`${height} ${bgColor} flex items-center justify-center px-4  `}
    >
      {children}
      <Nav
        navStyle="tablet:flex hidden gap-large items-center justify-between w-full mx-large "
        navLinkStyle={`flex laptopL:gap-large laptop:gap-sub-large tablet:gap-small justify-center sub-heading ${textColor}`}
        logo={logo()}
      >
        {navlink()}
      </Nav>
      <MobileNav
        navStyle="flex tablet:hidden gap-large items-center justify-between w-full mobile-large:mx-sub-large mx-small"
        navLinkStyle={`flex flex-col gap-large justify-center heading font-normal mt-sub-large pl-8 ${textColor}`}
        modalStyle={`h-screen bg-white w-screen duration-700`}
        height={height}
        logo={logo()}
      >
        {navlink()}
      </MobileNav>
    </header>
  );
}
