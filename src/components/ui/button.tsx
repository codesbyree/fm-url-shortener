import { cn } from "../../utils/cn.utils";
import type { ComponentPropsWithoutRef } from "react";

export default function Button(props: ComponentPropsWithoutRef<"button">) {
  const { className, children, disabled, onClick, ...rest } = props;

  return (
    <button
      onClick={onClick}
      className={cn(
        "flex gap-4 items-center bg-blue-400 text-center rounded-full text-white justify-center h-auto py-3 px-6 w-full text-nowrap hover:opacity-80 transition-all cursor-pointer font-semibold disabled:opacity-70",
        className,
      )}
      disabled={disabled}
      {...rest}
    >
      {children}
    </button>
  );
}
