import { useState } from "react";
import { motion } from "motion/react";

import HeaderCTA from "./header-cta";
import Button from "../../../components/ui/button";
import { cn } from "../../../utils/cn.utils";

const navigatonList = ["Features", "Pricing", "Resources"];

export default function Navigation() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => setIsVisible(!isVisible);

  return (
    <nav id="navigation" className="lg:w-full">
      <Button aria-controls="navigation-list" onClick={toggleVisibility} className="lg:hidden p-0 h-max bg-transparent">
        <span className="sr-only">Navigation toggler button</span>
        <div className="flex flex-col justify-between w-6 h-5 bg-red-400/0">
          <motion.span animate={{ rotate: isVisible ? 45 : 0, y: isVisible ? 8 : 0, filter: isVisible ? ["blur(4px)", "blur(0)"] : "blur(0px)" }} className="w-full h-0.75 bg-gray-400" />
          <motion.span animate={{ x: isVisible ? 10 : 0, opacity: isVisible ? 0 : 1, filter: isVisible ? "blur(4px)" : "blur(0px)" }} className="w-full h-0.75 bg-gray-400" />
          <motion.span animate={{ rotate: isVisible ? -45 : 0, y: isVisible ? -9 : 0, filter: isVisible ? ["blur(4px)", "blur(0)"] : "blur(0px)" }} className="w-full h-0.75 bg-gray-400" />
        </div>
      </Button>

      <div
        className={cn(
          "fixed left-0 p-6 w-full h-full top-30 transition-all blur-sm opacity-0 pointer-events-none duration-300 lg:static lg:top-0! lg:blur-none! lg:opacity-100! lg:p-0 lg:pointer-events-auto! z-100",
          isVisible && "top-14 blur-none opacity-100 pointer-events-auto",
        )}
      >
        <div className="bg-purple-950 p-6 rounded-xl w-full flex flex-col gap-3 pb-10 relative z-20 lg:p-0 lg:bg-transparent transition-colors lg:flex-row">
          <ul id="navigation-list" className="lg:flex lg:gap-6 lg:items-center">
            {navigatonList.map((nav) => (
              <li key={nav} className="text-center font-semibold text-white p-3 text-lg lg:text-base lg:p-0 lg:text-gray-600 lg:hover:text-gray-900 transition-all cursor-pointer">
                {nav}
              </li>
            ))}
          </ul>

          <span className="w-full h-px bg-white/10 block" />

          <HeaderCTA />
        </div>

        <span onClick={toggleVisibility} className="absolute top-0 left-0 w-full h-full lg:hidden" />
      </div>
    </nav>
  );
}
