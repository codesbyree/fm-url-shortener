import { Footer } from "../features/footer/components";
import { Header } from "../features/header/components";
import { HeroSection } from "../features/hero-section/components";

export default function Homepage() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
      </main>
      <Footer />
    </>
  );
}
