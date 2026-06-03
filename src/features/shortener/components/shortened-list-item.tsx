import { cn } from "../../../utils/cn.utils";

import type { ComponentPropsWithoutRef } from "react";
import type { ShortenUrl } from "../types/shortener.types";

import CopyButton from "./copy-button";

interface Props extends ComponentPropsWithoutRef<"article"> {
  data: ShortenUrl;
}

export default function ShortenedListItem(props: Props) {
  const { className, data, ...rest } = props;

  return (
    <article className={cn("rounded-xl bg-white flex flex-col lg:flex-row lg:items-center-safe lg:justify-between lg:p-6 lg:py-3 lg:gap-20", className)} {...rest}>
      <header className="p-4 border-b border-gray-100 lg:border-none lg:p-0">
        <p className="line-clamp-1 text-gray-700 font-medium">{data.originalUrl}</p>
      </header>

      <div className="p-4 flex flex-col gap-4 lg:flex-row lg:items-center lg:p-0 lg:w-max">
        <p className="font-medium w-max text-blue-400">{data.shortUrl}</p>

        <CopyButton text={data.shortUrl} />
      </div>
    </article>
  );
}
