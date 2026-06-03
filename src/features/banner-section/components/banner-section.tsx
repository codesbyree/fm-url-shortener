import Button from "../../../components/ui/button";

export default function BannerSection() {
  return (
    <section id="banner-section" className="lg:overflow-hidden relative bg-purple-950 bg-[url(/bg-boost-mobile.svg)] lg:bg-[url(/bg-boost-desktop.svg)] bg-cover">
      <div className="flex flex-col items-center gap-4 lg:max-w-4xl xl:max-w-5xl lg:mx-auto px-6 lg:px-0 py-20 lg:gap-6">
        <h2 className="text-white font-semibold text-2xl lg:text-3xl">Boost you links today</h2>
        <Button className="w-max">Get Started</Button>
      </div>
    </section>
  );
}
