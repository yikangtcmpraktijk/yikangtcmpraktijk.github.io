
import React from 'react';
import Header from './src/components/Header';
import Hero from './src/components/Hero';
import About from './src/components/About';
import Services from './src/components/Services';
import Contact from './src/components/Contact';

function App() {
  return (
    <div className="min-h-screen flex flex-col font-sans text-primary-100 selection:bg-gold-500 selection:text-white">
      <Header />
      <main className="flex-grow">
        <Hero />
        <About />
        <Services />
        <Contact />
      </main>
      
      <footer className="bg-primary-950 text-primary-400 py-12 border-t border-primary-800">
        <div className="container mx-auto px-4 grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-serif text-gold-400 text-xl mb-4">YIKANG TCM PRAKTIJK</h3>
            <p className="text-sm leading-relaxed max-w-xs text-primary-300">
              Herstel van balans en gezondheid door de eeuwenoude wijsheid van Traditionele Chinese Geneeskunde en moderne, compassievolle zorg.
            </p>
            <p className="mt-4 text-sm text-primary-300">
              Amsterdamse Veerkade 17<br/>
              2512AG Den Haag
            </p>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4 uppercase text-sm tracking-wider">Snelmenu</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#services" className="hover:text-gold-400 transition-colors">Acupunctuur</a></li>
              <li><a href="#services" className="hover:text-gold-400 transition-colors">Tui-Na Therapie</a></li>
              <li><a href="#services" className="hover:text-gold-400 transition-colors">Cupping & Gua-Sha</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4 uppercase text-sm tracking-wider">Openingstijden</h4>
            <ul className="space-y-2 text-sm text-primary-300">
              <li className="flex justify-between max-w-[220px]">
                <span>Ma, Di, Do, Vr, Za</span>
                <span>9:00 - 19:00</span>
              </li>
              <li className="flex justify-between max-w-[220px] text-primary-500">
                <span>Woensdag</span>
                <span>Gesloten</span>
              </li>
              <li className="flex justify-between max-w-[220px] text-primary-500">
                <span>Zondag</span>
                <span>Gesloten</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="container mx-auto px-4 mt-12 pt-8 border-t border-primary-800 text-center text-xs text-primary-500">
          &copy; {new Date().getFullYear()} Yikang TCM Praktijk. Alle rechten voorbehouden.
        </div>
      </footer>
    </div>
  );
}

export default App;
