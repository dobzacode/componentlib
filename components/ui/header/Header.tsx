import { HTMLAttributes, ReactNode } from "react";
import Nav from "./Nav";
import NavLink from "./NavLink";
import H2 from "../text/H2";
import MobileNav from "./MobileNav";
import Link from "next/link";
import { VariantProps, cva } from "class-variance-authority";
import { cn } from "@/utils/utils";

const sectionVariants = cva(
  "",
  {
    variants: {
      size: {
        small: "h-large",
        medium: "h-sub-extra-large",
        large: "h-extra-large",
      },
      intent: {
        primary:
          "bg-primary40 text-primary1 border-primary80 dark:border-primary1  dark:text-primary1",
        secondary: "bg-secondary40 text-secondary1 border-secondary80",
        tertiary: "bg-tertiary40 text-tertiary1 border-tertiary80",
        success: "bg-success40 text-success1 border-success80",
        error:
          "bg-error40 text-error1 border-error80 dark:border-error1  dark:text-error1",
        warning: "bg-warning40 text-warning1 border-warning 80",
        info: "bg-info40 text-info1 border-info80",
        neutral: "bg-neutral40 text-neutral1 border-neutral80",
        
      },
    },  
  },
);
interface HeaderProps
  extends HTMLAttributes<HTMLHeadElement>,
    VariantProps<typeof sectionVariants> {
  children?: React.ReactNode;
  textColor: "primary" | "secondary" | "tertiary" | "success" | "error" | "warning" | "info" | "neutral" | null | undefined 
}

function Header({
  children,
  className,
  size,
  intent,
  textColor,
  ...props
}: HeaderProps) {


  

  return (
    <header
      className={cn(sectionVariants({className, size, intent}))}
      {...props}
    >
      {children}
      <Nav 
        linkSize="medium"
        intent={textColor}
        className="tablet:flex hidden gap-large items-center justify-between w-full mx-large"
        
      > 
      </Nav>
      <MobileNav
      linkSize="medium"
      intent={textColor}
      size={size}
      className="flex tablet:hidden gap-large items-center justify-between w-full mobile-large:mx-sub-large mx-small"
        
      >
      </MobileNav>
    </header>
  );
}

export {Header, sectionVariants}