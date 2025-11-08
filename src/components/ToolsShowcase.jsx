import { Camera, Mic, Scissors, Laptop, WandSparkles } from 'lucide-react';

const tools = [
  {
    name: 'Scripting & Planning',
    description:
      'Frameworks and templates for hooks, storytelling, and retention.',
    icon: WandSparkles,
  },
  {
    name: 'Camera & Audio',
    description:
      'Shoot crisp video and capture clean audio on any budget.',
    icon: Camera,
  },
  {
    name: 'Editing Workflow',
    description:
      'Efficient timeline structure, b-roll, sound design, and pacing.',
    icon: Scissors,
  },
  {
    name: 'Systems & Productivity',
    description:
      'Notion boards, asset libraries, and a repeatable content OS.',
    icon: Laptop,
  },
  {
    name: 'Microphone Techniques',
    description:
      'Placement, room treatment, and voice clarity tricks.',
    icon: Mic,
  },
];

export default function ToolsShowcase() {
  return (
    <section id="tools" className="bg-gradient-to-b from-white to-gray-50">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Tools you will master
        </h2>
        <p className="mt-2 max-w-2xl text-gray-600">
          Learn a modern toolchain with clear, beginner-friendly explanations and
          pro-level tips.
        </p>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {tools.map((t) => (
            <div
              key={t.name}
              className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition hover:shadow-md"
            >
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-purple-50 text-purple-600 ring-1 ring-purple-100">
                  <t.icon size={22} />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">{t.name}</h3>
                  <p className="mt-1 text-sm text-gray-600">{t.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
