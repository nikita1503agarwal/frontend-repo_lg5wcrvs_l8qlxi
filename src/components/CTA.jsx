import { ArrowRight } from 'lucide-react';

export default function CTA() {
  return (
    <section id="apply" className="relative">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="overflow-hidden rounded-3xl bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 p-1 shadow-xl">
          <div className="grid items-center gap-8 rounded-3xl bg-white/5 p-10 sm:p-12 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Ready to level up your creator career?
              </h2>
              <p className="mt-2 text-white/80">
                Join the next cohort and build a portfolio of professional work,
                get feedback from mentors, and grow with a focused community.
              </p>
            </div>
            <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-end">
              <a
                href="#"
                className="inline-flex items-center gap-2 rounded-lg bg-white px-5 py-3 font-medium text-gray-900 shadow-sm transition hover:bg-gray-50"
              >
                Apply now
                <ArrowRight size={18} />
              </a>
              <span className="text-sm text-white/80">Limited spots • Rolling admissions</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
