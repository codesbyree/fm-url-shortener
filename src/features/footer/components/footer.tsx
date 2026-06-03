import FooterLinks from "./footer-links";
import FooterSocialLinks from "./footer-social-links";

import logo from "../../../assets/images/logo.svg";

export default function Footer() {
  return (
    <footer id="footer" className="bg-gray-950">
      <div className="w-full lg:max-w-4xl xl:max-w-5xl lg:mx-auto py-14 flex flex-col gap-10 items-center lg:flex-row lg:justify-between lg:items-start">
        <img src={logo} alt="" className="brightness-0 invert-[1]" />
        <div className="flex flex-col lg:flex-row gap-10 lg:items-start lg:gap-20">
          <FooterLinks />
          <FooterSocialLinks />
        </div>
      </div>
    </footer>
  );
}
