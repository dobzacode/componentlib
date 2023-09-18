import { ReactNode } from "react";
import Nav from "./Nav";
import NavLink from "./NavLink";
import H2 from "../text/H2";
import MobileNav from "./MobileNav";
import Link from "next/link";

interface HeaderProps {
  children?: ReactNode;
  height: string;
  bgColor?: string;
  logoColor?: string;
  logoType?: string;
  textColor?: string;
  textType?: string;
  mobileTextType?: string;
}

export default function Header({
  children,
  height,
  bgColor = "",
  textColor,
  textType = "",
  logoColor,
  logoType = "",
  mobileTextType = "",
}: HeaderProps) {
  const logo = () => {
    return (
      <Link href="/">
        <H2 type={logoType} textColor={logoColor}>
          DESIGN SYSTEM
        </H2>
      </Link>
    );
  };

  const navlink = () => {
    return (
      <>
        <NavLink href="/color">Color</NavLink>
        <NavLink href="/typography">Typography</NavLink>
        <NavLink href="/component">Component</NavLink>
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
        navLinkStyle={`flex laptopL:gap-large laptop:gap-sub-large tablet:gap-small justify-center ${textType} ${textColor}`}
        logo={logo()}
      >
        {navlink()}
      </Nav>
      <MobileNav
        navStyle="flex tablet:hidden gap-large items-center justify-between w-full mobile-large:mx-sub-large mx-small"
        navLinkStyle={`flex flex-col gap-large justify-center ${mobileTextType} mt-sub-large pl-8 ${textColor}`}
        modalStyle={`h-screen bg-white w-screen duration-700`}
        height={height}
        logo={logo()}
      >
        {navlink()}
      </MobileNav>
    </header>
  );
}
