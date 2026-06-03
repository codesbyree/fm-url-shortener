import { useState, type ChangeEvent, type SyntheticEvent } from "react";
import { motion, AnimatePresence } from "motion/react";
import { toast } from "react-toastify";

import { cn } from "../../../utils/cn.utils";
import { isLinkAreadyExist, isValidUrl } from "../utils/shortener.utils";
import { createShortUrl } from "../api/create-short-url";
import { useUrlShortener } from "../stores/shortener.store";

import Button from "../../../components/ui/button";
import Input, { InputErrorMessage } from "../../../components/ui/input";
import { useShallow } from "zustand/shallow";

export default function ShortenerForm() {
  const { addShortenUrl, shortenUrls } = useUrlShortener(
    useShallow((s) => ({
      addShortenUrl: s.addShortenUrl,
      shortenUrls: s.shortenUrls,
    })),
  );

  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [url, setUrl] = useState("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (!isValidUrl(value)) setErrorMessage("Url is not valid");
    else setErrorMessage("");
    setUrl(value);
  };

  const handleSubmit = async (e: SyntheticEvent) => {
    e.preventDefault();
    try {
      setLoading(true);

      if (!isValidUrl(url)) {
        setErrorMessage("Url is not valid");
        return;
      }

      if (isLinkAreadyExist(url, shortenUrls)) {
        toast.info("This url already converted, see the list below");
        return;
      }

      const data = await createShortUrl(url);
      if (data.result_url) {
        addShortenUrl({
          originalUrl: url,
          shortUrl: data.result_url,
        });

        setUrl("");
        toast.success("Link created!");
      } else {
        toast.error("Failed to create link: " + data.error);
        throw new Error(data.error);
      }
    } catch (e: unknown) {
      const error = e as Error;
      console.log(error.message);
    } finally {
      setLoading(false);
    }
  };

  const hasErrorMessage = Boolean(errorMessage.length);

  return (
    <section id="shortened-url-form">
      <form
        onSubmit={handleSubmit}
        className="p-6 rounded-xl bg-[url(/bg-shorten-mobile.svg)] lg:bg-[url(/bg-shorten-desktop.svg)] bg-purple-950 bg-no-repeat bg-top-right lg:bg-cover lg:p-16 lg:py-12 flex flex-col lg:flex-row lg:gap-6"
      >
        <div className="mb-4 space-y-2 w-full lg:mb-0 lg:space-y-0 relative">
          <label htmlFor="input-url" className="sr-only">
            Input url
          </label>

          <Input value={url} className={cn(hasErrorMessage)} placeholder="Shorten a link here..." onChange={handleChange} />

          <InputErrorMessage className={cn("static lg:absolute -bottom-6", hasErrorMessage ? "block" : "hidden")}>{errorMessage}</InputErrorMessage>
        </div>

        <Button disabled={hasErrorMessage} className="rounded-md lg:h-max lg:max-w-30 w-full">
          <AnimatePresence mode="wait">
            <motion.span
              key={loading ? "processing" : "shorten"}
              initial={{ y: 10, opacity: 0, filter: "blur(8px)" }}
              animate={{ y: 0, opacity: 1, filter: "blur(0px)" }} // Fixed opacity: 100 -> 1
              exit={{ y: -8, opacity: 0, filter: "blur(8px)" }} // Added matching blur on exit
              transition={{ duration: 0.2 }}
            >
              {loading ? "Processing" : "Shorten It!"}
            </motion.span>
          </AnimatePresence>
        </Button>
      </form>
    </section>
  );
}
