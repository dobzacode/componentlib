import SocialIcon from "./footer/SocialIcon";
import { mdiInstagram, mdiFacebook, mdiTwitter, mdiLinkedin } from "@mdi/js";

interface FooterProps {
  height: string;
}

export default function Footer({ height }: FooterProps) {
  return (
    <footer className={`${height}`}>
      <address className="flex justify-center">
        <SocialIcon size={2} linkTo="/" mdiPath={mdiInstagram}></SocialIcon>
        <SocialIcon size={2} linkTo="/" mdiPath={mdiFacebook}></SocialIcon>
        <SocialIcon size={2} linkTo="/" mdiPath={mdiTwitter}></SocialIcon>
        <SocialIcon size={2} linkTo="/" mdiPath={mdiLinkedin}></SocialIcon>
      </address>
    </footer>
  );
}
