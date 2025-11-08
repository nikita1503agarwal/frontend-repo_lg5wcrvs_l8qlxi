import Hero from './components/Hero';
import Curriculum from './components/Curriculum';
import ToolsShowcase from './components/ToolsShowcase';
import CTA from './components/CTA';

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/70 bg-white/50 border-b border-gray-100">
        <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
          <a href="#" className="font-extrabold text-xl tracking-tight">
            CreatorPro
          </a>
          <nav className="hidden md:flex items-center gap-6 text-sm text-gray-600">
            <a href="#curriculum" className="hover:text-gray-900">Curriculum</a>
            <a href="#tools" className="hover:text-gray-900">Tools</a>
            <a href="#apply" className="hover:text-gray-900">Apply</a>
          </nav>
        </div>
      </header>
      <main>
        <Hero />
        <Curriculum />
        <ToolsShowcase />
        <CTA />
      </main>
      <footer className="border-t border-gray-100">
        <div className="mx-auto max-w-7xl px-6 py-10 text-sm text-gray-500 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} CreatorPro — Learn to build an audience and a business.</p>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-gray-700">Privacy</a>
            <a href="#" className="hover:text-gray-700">Terms</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
