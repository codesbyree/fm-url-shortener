import Navigation from "./navigation";

import logo from "../../../assets/images/logo.svg";

export default function Header() {
  return (
    <header className="sticky top-0 left-0 w-full z-100 bg-white">
      <div className="items-center p-4 px-6 pt-8 lg:p-0 w-full flex justify-between lg:max-w-4xl xl:max-w-5xl lg:mx-auto lg:gap-10 lg:py-6">
        <img src={logo} alt="logo" className="w-auto h-7" id="logo" />
        <Navigation />
      </div>
    </header>
  );
}
