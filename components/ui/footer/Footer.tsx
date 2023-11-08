import { FC, HTMLAttributes, HTMLProps } from "react";
import SocialIcon from "./SocialIcon";
import { mdiInstagram, mdiFacebook, mdiTwitter, mdiLinkedin } from "@mdi/js";
import { cn } from "@/utils/utils";
import { sectionVariants } from "../header/Header";
import { VariantProps } from "class-variance-authority";

interface FooterProps
  extends HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof sectionVariants> {
  children?: React.ReactNode;
  textColor?: "primary" | "secondary" | "tertiary" | "success" | "error" | "warning" | "info" | "neutral" | null | undefined 
}

const Footer: FC<FooterProps> = ({
  className,
  size,
  intent,
}: FooterProps) => {
  return (
    <footer className={cn(sectionVariants({size, intent, className}))}>
      <address className="flex justify-center gap-medium ">
        <SocialIcon size={3} href="/" mdiPath={mdiInstagram}></SocialIcon>
        <SocialIcon size={3} href="/" mdiPath={mdiFacebook}></SocialIcon>
        <SocialIcon size={3} href="/" mdiPath={mdiTwitter}></SocialIcon>
        <SocialIcon size={3} href="/" mdiPath={mdiLinkedin}></SocialIcon>
      </address>
    </footer>
  );
};

export default Footer;
