import { motion } from "motion/react";

import { useUrlShortener } from "../stores/shortener.store";

import ShortenedListItem from "./shortened-list-item";

export default function ShortenedUrlList() {
  const shortenedUrls = useUrlShortener((s) => s.shortenUrls);

  return (
    <section id="shortened-ur-list">
      <ul className="flex flex-col gap-4">
        {shortenedUrls.map((url, index) => (
          <motion.li key={url.shortUrl + index}>
            <ShortenedListItem data={url} />
          </motion.li>
        ))}
      </ul>
    </section>
  );
}
