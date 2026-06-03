import { BannerSection } from "../features/banner-section/components";
import { FeatureSection } from "../features/feature-section/components";
import { Footer } from "../features/footer/components";
import { Header } from "../features/header/components";
import { HeroSection } from "../features/hero-section/components";
import { ShortenerSection } from "../features/shortener/components";

export default function Homepage() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <ShortenerSection />
        <FeatureSection />
        <BannerSection />
      </main>
      <Footer />
    </>
  );
}
