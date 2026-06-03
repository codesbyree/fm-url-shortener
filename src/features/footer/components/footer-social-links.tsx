import facebookIcon from "../../../assets/images/icon-facebook.svg";
import twitterIcon from "../../../assets/images/icon-twitter.svg";
import pinterestIcon from "../../../assets/images/icon-pinterest.svg";
import instagramIcon from "../../../assets/images/icon-instagram.svg";

export default function FooterSocialLinks() {
  return (
    <ul className="flex items-center gap-6">
      <li>
        <img src={facebookIcon} alt="" className="w-5 h-5" />
      </li>
      <li>
        <img src={twitterIcon} alt="" className="w-5 h-5" />
      </li>
      <li>
        <img src={pinterestIcon} alt="" className="w-5 h-5" />
      </li>
      <li>
        <img src={instagramIcon} alt="" className="w-5 h-5" />
      </li>
    </ul>
  );
}
