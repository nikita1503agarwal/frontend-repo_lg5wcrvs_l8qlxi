import { Rocket, PlayCircle } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-100 via-white to-blue-100" />
      <div className="relative mx-auto max-w-7xl px-6 py-24 sm:py-28">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <span className="inline-flex items-center rounded-full bg-purple-100 px-3 py-1 text-sm font-medium text-purple-700 ring-1 ring-purple-200">
              New • 12-week cohort-based program
            </span>
            <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
              Become a professional
              <span className="block bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                Content Creator
              </span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Master storytelling, video production, and audience growth with a practical, project-based curriculum designed for modern platforms like YouTube, TikTok, and Instagram.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#curriculum"
                className="inline-flex items-center gap-2 rounded-lg bg-purple-600 px-5 py-3 text-white shadow-sm transition hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
              >
                <Rocket size={18} />
                Start Learning
              </a>
              <a
                href="#tools"
                className="inline-flex items-center gap-2 rounded-lg bg-white px-5 py-3 text-gray-900 ring-1 ring-gray-200 transition hover:bg-gray-50"
              >
                <PlayCircle size={18} />
                Explore Tools
              </a>
            </div>
            <div className="mt-6 flex items-center gap-4 text-sm text-gray-500">
              <span>Weekly live critiques</span>
              <span className="h-1 w-1 rounded-full bg-gray-300" />
              <span>Downloadable templates</span>
              <span className="h-1 w-1 rounded-full bg-gray-300" />
              <span>Private creator community</span>
            </div>
          </div>
          <div className="relative">
            <div className="relative mx-auto aspect-video w-full max-w-xl overflow-hidden rounded-2xl shadow-2xl ring-1 ring-gray-200">
              <img
                src="https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?q=80&w=1600&auto=format&fit=crop"
                alt="Creator workspace with camera, microphone, and lighting"
                className="h-full w-full object-cover"
                loading="eager"
              />
            </div>
            <div className="pointer-events-none absolute -bottom-8 -right-8 hidden h-40 w-40 rounded-full bg-purple-200/60 blur-3xl lg:block" />
            <div className="pointer-events-none absolute -top-8 -left-8 hidden h-40 w-40 rounded-full bg-blue-200/60 blur-3xl lg:block" />
          </div>
        </div>
      </div>
    </section>
  );
}
