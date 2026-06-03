import { motion } from "motion/react";

import { useUrlShortener } from "../stores/shortener.store";

import ShortenedListItem from "./shortened-list-item";

export default function ShortenedUrlList() {
  const shortenedUrls = useUrlShortener((s) => s.shortenUrls);

  return (
    <section>
      <ul className="px-6 lg:px-0 lg:max-w-4xl xl:max-w-5xl pb-10 flex flex-col gap-4">
        {shortenedUrls.map((url, index) => (
          <motion.li key={url.shortUrl + index}>
            <ShortenedListItem data={url} />
          </motion.li>
        ))}
      </ul>
    </section>
  );
}
