import type { ShortenUrl } from "../types/shortener.types";

export const isValidUrl = (urlString: string) => {
  try {
    return URL.canParse(urlString);
  } catch {
    return false;
  }
};

export const isLinkAreadyExist = (urlString: string, list: ShortenUrl[]) => {
  return Boolean(list.filter((x) => x.originalUrl === urlString.trim()).length);
};
