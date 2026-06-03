import Button from "../../../components/ui/button";

import ilustrationWorking from "../../../assets/images/illustration-working.svg";

export default function HeroSection() {
  return (
    <section id="hero-section" className="lg:overflow-hidden relative">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:max-w-4xl xl:max-w-5xl lg:mx-auto lg:py-8 pb-10 lg:pb-12">
        <div className="p-4 flex flex-col items-center row-start-2 lg:row-start-1 lg:p-0 lg:items-start lg:justify-center">
          <h1 className="font-bold text-gray-900 text-4xl text-center mb-3 lg:text-left lg:text-5xl lg:leading-14 xl:text-6xl xl:leading-17">
            More than just <br className="lg:block hidden" /> shorter links
          </h1>
          <p className="text-gray-600 font-medium text-center mb-6 lg:text-left">
            Build your brand's recognition and get detailed <br className="lg:block hidden" /> insights on how your links are performing.
          </p>

          <Button className="w-max">Get Started</Button>
        </div>

        <div className="row-start-1 w-full overflow-hidden lg:col-start-2 lg:overflow-visible">
          <img src={ilustrationWorking} alt="" className="w-[130vw] lg:w-170 max-w-none h-auto object-cover translate-x-6" />
        </div>
      </div>
    </section>
  );
}
