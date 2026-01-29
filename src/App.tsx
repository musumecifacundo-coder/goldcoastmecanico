import Hero from './components/Hero';
import Services from './components/Services';
import HealthCheck from './components/HealthCheck';
import Calculator from './components/Calculator';
import FAQ from './components/FAQ';
import SocialProof from './components/SocialProof';
import BookingForm from './components/BookingForm';

function App() {
  return (
    <div className="min-h-screen bg-zinc-950 text-white selection:bg-yellow-500 selection:text-zinc-900 scroll-smooth">
      <nav className="fixed w-full z-50 bg-zinc-950/80 backdrop-blur-md border-b border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="text-xl font-bold text-white flex items-center gap-2">
            <span className="w-8 h-8 bg-yellow-500 rounded-lg flex items-center justify-center text-zinc-900 font-black">B</span>
            Backpacker Buddy
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-400">
            <a href="#services" className="hover:text-white transition-colors">Servicios</a>
            <a href="#calculator" className="hover:text-white transition-colors">Calculadora</a>
            <a href="#faq" className="hover:text-white transition-colors">FAQ</a>
            <a href="#booking" className="px-4 py-2 bg-white text-zinc-900 rounded-lg hover:bg-zinc-200 transition-colors">Reservar</a>
          </div>
        </div>
      </nav>

      <main>
        <Hero />
        <Services />
        <HealthCheck />
        <Calculator />
        <SocialProof />
        <FAQ />
        <BookingForm />
      </main>

      <footer className="py-8 bg-black text-center text-zinc-600 text-sm border-t border-zinc-900">
        <p>© 2026 Backpacker Buddy. Mecánica móvil en Gold Coast.</p>
      </footer>
    </div>
  );
}

export default App;
