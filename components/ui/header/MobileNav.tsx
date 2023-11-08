"use client";
import { cn } from "@/utils/utils";
import { mdiMenu } from "@mdi/js";
import Icon from "@mdi/react";
import React, { FC, useState } from "react";
import Logo from "../branding/Logo";
import NavLink from "./NavLink";

interface NavProps {
  children: React.ReactNode;
  className?: string;
  intent: "primary" | "secondary" | "tertiary" | "success" | "error" | "warning" | "info" | "neutral" | null | undefined,
  linkSize: "small" | "medium" | "large" | null | undefined,
  size?: "small" | "medium" | "large" | null | undefined
}

const MobileNav: FC<NavProps> = ({
  className,
  linkSize,
  intent,
  size,
}: NavProps) => {
  const [showMenu, setShowMenu] = useState<boolean>(false);

  const modalOffset = () => {
    switch (size) {
      case "small": 
        return "top-large";
      case "medium": 
        return "top-sub-extra-large";
      case "large":
        return "top-extra-large";
    }
  }

  return (
    <nav className={className}>
      <Logo href="/" className="font-bold tracking-widest" intent={intent} textType="heading--sub-large">DESIGN SYSTEM</Logo>
      <button onClick={() => setShowMenu(!showMenu)}>
        <Icon path={mdiMenu} size={3.5}></Icon>
      </button>
      <div
        className={cn(
         "h-screen bg-white w-screen duration-700",
          "absolute z-10",
          showMenu ? "left-0" : "-left-[768px] ",
          modalOffset(),
        )}
      >
        <ul className={"flex flex-col gap-large justify-center  mt-sub-large pl-8"}><NavLink rounded="small" hover={true} size={linkSize} intent={intent}
        currentNavStyle={intent}  href="/color">
         Color
      </NavLink>
      <NavLink rounded="small" hover={true} size={linkSize}
        intent={intent}
        currentNavStyle={intent}
        href="/typography"
      >
        Typography
      </NavLink>
      <NavLink rounded="small" hover={true} size={linkSize}
        intent={intent}
        currentNavStyle={intent}
        href="/component"
      >
        Component
      </NavLink></ul>
      </div>
    </nav>
  );
};

export default MobileNav;
