import iconBrandRecognition from "../../../assets/images/icon-brand-recognition.svg";
import iconDetailedRecord from "../../../assets/images/icon-brand-recognition.svg";
import iconFullyCustomizable from "../../../assets/images/icon-brand-recognition.svg";
import FeatureCard from "./feature-card";

const features = [
  {
    title: "Brand Recognition",
    description: "Boost your brand recognition with each click. Generic links don’t mean a thing. Branded links help instil confidence in your content.",
    icon: iconBrandRecognition,
  },
  {
    title: "Detailed Records",
    description: "Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.",
    icon: iconDetailedRecord,
  },
  { title: "Fully Customizable", description: "Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.", icon: iconFullyCustomizable },
];

export default function FeatureCardList() {
  return (
    <div className="relative">
      <span className="w-2 h-full xl:h-2 xl:w-full absolute bg-blue-400 z-10 left-1/2 -translate-x-1/2 xl:top-40" />

      <div className="flex flex-col gap-24 relative z-20 xl:flex-row xl:gap-8">
        {features.map((feature, index) => (
          <FeatureCard key={feature.title} title={feature.title} description={feature.description} image={feature.icon} indentTop={index + 1} />
        ))}
      </div>
    </div>
  );
}
