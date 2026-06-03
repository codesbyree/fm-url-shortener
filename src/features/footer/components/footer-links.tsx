const content = [
  { title: "Features", links: ["Link Shortening", "Branded Links", "Analytics"] },
  { title: "Resources", links: ["Blog", "Developers", "Support"] },
  { title: "Company", links: ["About", "Our Team", "Careers", "Contact"] },
];

export default function FooterLinks() {
  return (
    <div className="flex flex-col gap-10 lg:flex-row lg:gap-20">
      {content.map((x) => (
        <div key={x.title} className="text-center space-y-4 lg:text-left">
          <p className="text-white font-semibold">{x.title}</p>

          <ul className="space-y-2">
            {x.links.map((l) => (
              <li key={l} className="text-slate-400 hover:text-slate-300 transition-colors">
                {l}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
