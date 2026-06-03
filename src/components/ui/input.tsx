import type { ComponentPropsWithoutRef } from "react";
import { cn } from "../../utils/cn.utils";

export default function Input(props: ComponentPropsWithoutRef<"input">) {
  const { className, value, placeholder, onChange, ...rest } = props;

  return (
    <input
      className={cn("bg-white border-none outline-2 outline-solid outline-transparent p-3 font-medium rounded-md w-full placeholder:text-slate-300 text-gray-900", className)}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
      {...rest}
    />
  );
}

export function InputErrorMessage(props: ComponentPropsWithoutRef<"span">) {
  const { className, children, ...rest } = props;

  return (
    <span className={cn("text-red-400 text-sm italic", className)} {...rest}>
      {children}
    </span>
  );
}
