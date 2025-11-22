import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, FileText } from 'lucide-react';
import Header from './src/components/Header';
import Hero from './src/components/Hero';
import About from './src/components/About';
import Services from './src/components/Services';
import Contact from './src/components/Contact';

function App() {
  const [isContractOpen, setIsContractOpen] = useState(false);

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
              Lid van NBCG-YI | Traditionele Chinese Geneeskunde | Kwaliteitsgeregistreerd.
            </p>
            <p className="mt-4 text-sm text-primary-300">
              Amsterdamse Veerkade 17<br/>
              2512AG Den Haag
            </p>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4 uppercase text-sm tracking-wider">Info & Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a 
                  href="https://nl.wikipedia.org/wiki/Acupunctuur" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-gold-400 transition-colors flex items-center gap-2"
                >
                  Acupunctuur <span className="opacity-50 text-[10px]">↗</span>
                </a>
              </li>
              <li>
                <a 
                  href="https://nl.wikipedia.org/wiki/Tui_Na" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-gold-400 transition-colors flex items-center gap-2"
                >
                  Tui-Na Therapie <span className="opacity-50 text-[10px]">↗</span>
                </a>
              </li>
              <li>
                <a 
                  href="https://nl.wikipedia.org/wiki/Cupping" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-gold-400 transition-colors flex items-center gap-2"
                >
                  Cupping & Gua-Sha <span className="opacity-50 text-[10px]">↗</span>
                </a>
              </li>
              <li className="pt-2 border-t border-primary-800/50 mt-2">
                 <button 
                   onClick={() => setIsContractOpen(true)}
                   className="hover:text-gold-400 transition-colors flex items-center gap-2 text-left"
                 >
                   <FileText size={14} />
                   Behandelovereenkomst
                 </button>
                 </li>
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
      {/* Contract Modal */}
      <AnimatePresence>
        {isContractOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] flex items-center justify-center p-4"
          >
            <div 
              className="absolute inset-0 bg-primary-950/90 backdrop-blur-sm"
              onClick={() => setIsContractOpen(false)}
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="bg-primary-900 rounded-2xl shadow-2xl w-full max-w-lg z-10 border border-primary-700 overflow-hidden flex flex-col max-h-[80vh]"
            >
              <div className="p-6 border-b border-primary-800 flex justify-between items-center bg-primary-800/50">
                <h3 className="font-serif text-xl text-white flex items-center gap-2">
                  <FileText className="text-gold-500" size={20} />
                  Behandelovereenkomst
                </h3>
                <button 
                  onClick={() => setIsContractOpen(false)}
                  className="text-primary-400 hover:text-white transition-colors"
                >
                  <X size={20} />
                </button>
              </div>
              <div className="p-6 overflow-y-auto text-sm text-primary-200 leading-relaxed space-y-4 custom-scrollbar">
                <p><strong className="text-gold-400">1. Algemeen</strong><br/>
                De behandelingen bij Yikang TCM Praktijk zijn gebaseerd op Traditionele Chinese Geneeskunde. Deze behandelingen zijn complementair en vervangen geen reguliere medische zorg. Raadpleeg bij ernstige klachten altijd uw huisarts.</p>
                
                <p><strong className="text-gold-400">2. Afspraken & Annulering</strong><br/>
                Afspraken dienen minimaal 24 uur van tevoren te worden geannuleerd. Bij niet-tijdige annulering zijn wij genoodzaakt de kosten van de gereserveerde tijd in rekening te brengen.</p>
                
                <p><strong className="text-gold-400">3. Betaling</strong><br/>
                Betaling dient direct na de behandeling te geschieden per pin of contant, tenzij anders overeengekomen. U ontvangt een factuur die u (indien van toepassing) kunt indienen bij uw zorgverzekeraar.</p>
                
                <p><strong className="text-gold-400">4. Privacy</strong><br/>
                Wij gaan vertrouwelijk om met uw persoonlijke en medische gegevens conform de AVG wetgeving. Uw dossier is alleen toegankelijk voor de behandelend therapeut.</p>
                
                <p><strong className="text-gold-400">5. Eigen Risico</strong><br/>
                Deelname aan behandelingen (zoals acupunctuur, cupping, moxa) geschiedt op eigen risico. De praktijk is niet aansprakelijk voor schade of letsel ontstaan tijdens of na de behandeling, tenzij er sprake is van grove nalatigheid.</p>
              </div>
              <div className="p-4 bg-primary-800/30 border-t border-primary-800 text-center">
                <button 
                  onClick={() => setIsContractOpen(false)}
                  className="px-6 py-2 bg-gold-600 hover:bg-gold-500 text-white rounded-full text-sm font-bold transition-colors"
                >
                  Ik begrijp het
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
