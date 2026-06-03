import FeatureCardList from "./feature-card-list";

export default function FeatureSection() {
  return (
    <section id="feature-section" className="bg-slate-100 pt-8 pb-20">
      <div className="w-full px-6 mx-auto xl:px-0 lg:max-w-4xl xl:max-w-5xl">
        <header className="mb-20 xl:mb-30">
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-4">Advanced Statistics</h2>
          <p className="font-medium text-gray-600 text-center">
            Track how your links are performing across the web with <br className="hidden xl:block" /> our advanced statistics dashboard.
          </p>
        </header>

        <FeatureCardList />
      </div>
    </section>
  );
}
