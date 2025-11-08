const curriculum = [
  {
    title: 'Foundations of Content Strategy',
    modules: [
      'Finding a niche and defining your audience',
      'Creating a content system (pillars, formats, cadence)',
      'Brand positioning and voice',
    ],
  },
  {
    title: 'Production Mastery',
    modules: [
      'Scripting for retention and clarity',
      'Camera, lighting, and audio basics',
      'Editing workflow and pacing principles',
    ],
  },
  {
    title: 'Distribution & Growth',
    modules: [
      'Packaging: titles, thumbnails, hooks',
      'Algorithms 101 for YouTube/Shorts/Reels/TikTok',
      'Analytics and iteration loop',
    ],
  },
  {
    title: 'Monetization & Business',
    modules: [
      'Sponsorships and brand deals',
      'Digital products and memberships',
      'Pricing, pitching, and negotiation',
    ],
  },
];

export default function Curriculum() {
  return (
    <section id="curriculum" className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="mb-10 flex items-end justify-between gap-6">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Curriculum Overview
            </h2>
            <p className="mt-2 text-gray-600">
              A practical roadmap from zero to professional creator.
            </p>
          </div>
          <a href="#apply" className="hidden rounded-md bg-gray-900 px-4 py-2 text-white md:block">
            Apply Now
          </a>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {curriculum.map((section) => (
            <div
              key={section.title}
              className="group rounded-2xl border border-gray-200 bg-gray-50 p-6 shadow-sm transition hover:bg-white hover:shadow-md"
            >
              <h3 className="text-lg font-semibold text-gray-900">
                {section.title}
              </h3>
              <ul className="mt-4 space-y-2 text-sm text-gray-600">
                {section.modules.map((m) => (
                  <li key={m} className="flex gap-2">
                    <span className="mt-1 h-1.5 w-1.5 flex-none rounded-full bg-purple-500" />
                    <span>{m}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
