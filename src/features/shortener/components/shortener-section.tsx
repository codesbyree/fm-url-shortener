import ShortenedUrlList from "./shortened-url-list";
import ShortenerForm from "./shortener-url-form";

export default function ShortenerSection() {
  return (
    <section id="shortener-section" className="bg-gray-100 relative">
      <span className="absolute top-0 left-0 w-full h-20 bg-white block" />

      <div className="w-full lg:mx-auto relative z-10 p-4 px-6 lg:px-0 lg:max-w-4xl xl:max-w-5xl flex flex-col gap-6 pb-10">
        <ShortenerForm />
        <ShortenedUrlList />
      </div>
    </section>
  );
}
