import SocialIcon from "./footer/SocialIcon";
import { mdiInstagram, mdiFacebook, mdiTwitter, mdiLinkedin } from "@mdi/js";

export default function Footer() {
  return (
    <footer>
      <address className="flex justify-center">
        <SocialIcon size={2} linkTo="/" mdiPath={mdiInstagram}></SocialIcon>
        <SocialIcon size={2} linkTo="/" mdiPath={mdiFacebook}></SocialIcon>
        <SocialIcon size={2} linkTo="/" mdiPath={mdiTwitter}></SocialIcon>
        <SocialIcon size={2} linkTo="/" mdiPath={mdiLinkedin}></SocialIcon>
      </address>
    </footer>
  );
}
