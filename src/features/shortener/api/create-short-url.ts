export const createShortUrl = async (url: string) => {
  const response = await fetch("/api/v1/shorten", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ url }),
  });

  const data = await response.json();
  return data;
};
