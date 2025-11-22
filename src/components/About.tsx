
import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-primary-900 relative overflow-hidden">
      {/* Subtle background texture */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold-500/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Image Side */}
          <div className="w-full lg:w-1/2 relative">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl border border-primary-700 relative z-10">
              <img 
                src="https://images.unsplash.com/photo-1512290923902-8a92d1d0495e?auto=format&fit=crop&q=80&w=1000"
                alt="Holistic TCM Treatments" 
                className="w-full h-full object-cover opacity-90 hover:scale-105 transition-transform duration-700"
              />
            </div>
            {/* Decorative background shape */}
            <div className="absolute -bottom-6 -right-6 w-full h-full bg-primary-800 rounded-2xl -z-0 border border-primary-700"></div>
          </div>

          {/* Text Side */}
          <div className="w-full lg:w-1/2">
            <div className="inline-block px-3 py-1 bg-gold-500/10 text-gold-400 text-xs font-bold tracking-widest uppercase rounded-full mb-4 border border-gold-500/20">
              Onze Filosofie
            </div>
            <p className="text-primary-200 mb-8 leading-relaxed text-lg">
              Welkom bij Yikang TCM Praktijk. Wij bieden deskundige behandelingen op basis van de Traditionele Chinese Geneeskunde (TCM), gericht op het bevorderen van gezondheid, het herstellen van balans en het ondersteunen van het natuurlijke herstelvermogen.
            </p>
            <div className="text-primary-200 mb-8 leading-relaxed text-lg">
            <strong>Welke klachten behandelen wij?</strong>
            <p className="mt-2">
              TCM kan ondersteuning bieden bij diverse klachten, waaronder:
            </p>

            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>
                <strong>Pijnklachten:</strong> rug-, nek-, schouder- en gewrichtspijn, hoofdpijn
              </li>
              <li>
                <strong>Stress & slaap:</strong> stress, spanning, vermoeidheid, slaapproblemen
              </li>
              <li>
                <strong>Spijsvertering:</strong> buikpijn, opgeblazen gevoel, verstoring van de stoelgang
              </li>
              <li>
                <strong>Hormonale klachten:</strong> menstruatie- en overgangsklachten
              </li>
              <li>
                <strong>Luchtwegen & weerstand:</strong> allergieën, terugkerende verkoudheden
              </li>
            </ul>
            <p className="mt-4">
              TCM is een aanvullende behandelwijze. Bij ernstige of acute klachten is overleg met een arts noodzakelijk.
            </p>
          </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
