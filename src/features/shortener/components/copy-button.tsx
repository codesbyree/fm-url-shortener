import { useState, type ComponentPropsWithoutRef } from "react";
import { motion, AnimatePresence } from "motion/react";

import Button from "../../../components/ui/button";
import { cn } from "../../../utils/cn.utils";

interface Props extends ComponentPropsWithoutRef<"button"> {
  text: string;
}

export default function CopyButton(props: Props) {
  const [copied, setCopied] = useState(false);

  const copyText = () => {
    navigator.clipboard.writeText(props.text);
    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  return (
    <Button disabled={copied} onClick={copyText} className={cn("rounded-md lg:h-max lg:w-25 p-2", copied && "bg-purple-950")}>
      <AnimatePresence mode="wait">
        <motion.span
          key={copied ? "processing" : "shorten"}
          initial={{ y: 10, opacity: 0, filter: "blur(8px)" }}
          animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
          exit={{ y: -8, opacity: 0, filter: "blur(8px)" }}
          transition={{ duration: 0.2 }}
        >
          {copied ? "Copied!" : "Copy"}
        </motion.span>
      </AnimatePresence>
    </Button>
  );
}
