import { motion, type HTMLMotionProps } from "motion/react";
import { cn } from "../../../utils/cn.utils";

interface Props extends HTMLMotionProps<"article"> {
  image: string;
  title: string;
  description: string;
  indentTop: number;
}

export default function FeatureCard(props: Props) {
  const { className, title, description, image, indentTop, ...rest } = props;

  return (
    <motion.article className={cn("bg-white p-6 pt-15 xl:pt-20 pb-10 rounded-xl relative xl:h-max", className, indentTop === 2 && "xl:mt-10", indentTop === 3 && "xl:mt-20")} {...rest}>
      <header className="mb-4">
        <div className="bg-purple-950 rounded-full w-20 h-20 grid place-items-center absolute -top-10 left-1/2 -translate-x-1/2 xl:left-6 xl:translate-x-0">
          <img src={image} alt="" aria-hidden="true" />
        </div>

        <h3 className="font-bold text-gray-900 text-xl text-center xl:text-left">{title}</h3>
      </header>

      <div>
        <p className="text-gray-500 font-medium text-center leading-6 xl:text-left">{description}</p>
      </div>
    </motion.article>
  );
}
