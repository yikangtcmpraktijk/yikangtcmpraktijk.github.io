
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, X } from 'lucide-react';

type ServiceId = 'acupuncture' | 'tuina' | 'reflexology';

const Services: React.FC = () => {
  const [selectedService, setSelectedService] = useState<ServiceId | null>(null);

  const services = [
    {
      id: 'acupuncture' as ServiceId,
      title: 'Acupunctuur',
      description: "Acupunctuur is een behandelvorm binnen de Traditionele Chinese Geneeskunde waarbij zeer dunne naaldjes op specifieke punten in het lichaam worden geplaatst. Deze techniek ondersteunt de doorstroming van energie, bevordert het natuurlijke herstelvermogen en helpt bij het verminderen van pijn en diverse lichamelijke en emotionele klachten. Acupunctuur is een veilige, effectieve en breed inzetbare therapie voor zowel acute als chronische gezondheidsproblemen.",
      image: 'https://images.unsplash.com/photo-1616341333499-37f39b4513a6?auto=format&fit=crop&q=80&w=800',
      priceFrom: '€30',
      features: ['Intake & Diagnose', 'Klassieke Acupunctuur', 'Ooracupunctuur', 'Combinaties']
    },
    {
      id: 'tuina' as ServiceId,
      title: 'Tui-Na Therapie',
      description: 'Tui Na is een therapeutische massagevorm binnen de Traditionele Chinese Geneeskunde. Door gerichte technieken zoals drukken, kneden en strijken worden blokkades verminderd, de doorbloeding verbeterd en het lichaam in balans gebracht. Tui Na-therapie wordt toegepast bij onder meer pijnklachten, spanning, bewegingsbeperkingen en problemen in de energiedoorstroming. Het is een effectieve methode om zowel fysieke als energetische klachten te behandelen.',
      image: 'https://images.unsplash.com/photo-1519823551278-64ac927ac2fb?auto=format&fit=crop&q=80&w=800',
      priceFrom: '€40',
      features: ['Meridiaanmassage', 'Spierontspanning', '30-90 Minuten Sessies']
    },
    {
      id: 'reflexology' as ServiceId,
      title: 'Chinese Voetreflex',
      description: 'Het is een natuurlijke therapie die ervan uitgaat dat zones op de voet verbonden zijn met organen en systemen in het lichaam. Door druk uit te oefenen op deze reflexzones en op belangrijke acupunctuurpunten op de voeten, probeert men de energie-stroom (qi) te harmoniseren en de bloedcirculatie te verbeteren.',
      image: 'https://images.unsplash.com/photo-1590156424570-698d124ec7dd?auto=format&fit=crop&q=80&w=800',
      priceFrom: '€35',
      features: ['Voetreflexologie', 'Cupping Therapie', 'Gua-Sha Therapie']
    }
  ];

  const pricingData = {
    acupuncture: {
      title: 'Acupunctuur Tarieven',
      subtitle: 'Effectief voor pijn, stress en interne balans.',
      items: [
        { name: 'Intakegesprek', price: '€30.00', note: 'Diagnose en behandelplan' },
        { name: 'Klassieke Acupunctuur', price: '€65.00', note: 'Per behandeling' },
        { name: 'Ooracupunctuur', price: '€40.00', note: 'Per behandeling' },
        { name: 'Acupunctuur met Cupping/Gua-Sha', price: '€75.00', note: 'Gecombineerde behandeling' },
        { name: 'Verblijfsnaalden', price: '€30.00', note: 'Per behandeling' },
        { name: 'Cupping/Gua-Sha', price: '€35.00', note: 'Per behandeling' }
      ]
    },
    tuina: {
      title: 'Tui-Na Therapie Tarieven',
      subtitle: 'Chinese therapeutische massage voor spier- en gewrichtsklachten.',
      items: [
        { name: 'Behandeling 30 min', price: '€40.00', note: 'Focus op specifiek gebied' },
        { name: 'Behandeling 55 min', price: '€65.00', note: 'Volledige sessie' },
        { name: 'Behandeling 90 min', price: '€97.50', note: 'Uitgebreide sessie' }
      ]
    },
    reflexology: {
      title: 'Chinese Voetreflex',
      subtitle: 'Detoxificatie en ontspanningsbehandelingen.',
      items: [
        { name: 'Chinese Voetreflex (55 min)', price: '€65.00', note: 'Reflexologie' }
      ]
    }
  };

  return (
    <section id="services" className="py-24 relative scroll-mt-28">
      {/* Subtle background glow */}
      <div className="absolute top-1/4 left-0 w-1/2 h-1/2 bg-primary-800/30 blur-3xl rounded-full -z-10"></div>

      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-serif text-4xl md:text-5xl text-primary-50 mb-6">Onze Behandelingen</h2>
          <p className="text-primary-300 text-lg font-light leading-relaxed">
            Wij bieden een uitgebreid assortiment aan traditionele therapieën, afgestemd op uw specifieke behoeften. 
            Klik op een behandeling hieronder om onze actuele tarieven te bekijken.
          </p>
        </div>

        {/* Interactive Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {services.map((service) => (
            <button
              key={service.id}
              onClick={() => setSelectedService(service.id)}
              className="relative bg-primary-800/40 backdrop-blur-sm rounded-xl overflow-hidden shadow-2xl border border-primary-700/50 hover:border-gold-500/30 hover:bg-primary-800/60 hover:shadow-[0_10px_40px_-10px_rgba(0,0,0,0.5)] hover:-translate-y-2 transition-all duration-500 flex flex-col text-left group focus:outline-none focus:ring-2 focus:ring-gold-500/50"
            >
              <div className="h-56 overflow-hidden w-full relative">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-80 group-hover:opacity-100 grayscale-[30%] group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-900 via-transparent to-transparent opacity-80" />
                <div className="absolute top-4 right-4 bg-gold-600/90 backdrop-blur text-white px-3 py-1 rounded text-xs font-bold tracking-widest uppercase opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                    Bekijk Prijzen
                </div>
              </div>
              <div className="p-8 flex-grow flex flex-col w-full">
                <h3 className="font-serif text-2xl font-bold mb-3 text-primary-50 group-hover:text-gold-400 transition-colors">
                  {service.title}
                </h3>
                <p className="text-primary-300 mb-6 text-sm leading-relaxed opacity-80 group-hover:opacity-100 transition-opacity">
                  {service.description}
                </p>
                <div className="mt-auto w-full flex justify-between items-end border-t border-primary-700/50 pt-4">
                  <span className="text-xs font-bold text-primary-500 uppercase tracking-wider group-hover:text-primary-400 transition-colors">Meer Details</span>
                  <div className="text-right">
                    <span className="block text-[10px] text-primary-500 uppercase tracking-widest">Vanaf</span>
                    <span className="text-gold-400 font-serif text-xl">{service.priceFrom}</span>
                  </div>
                </div>
              </div>
            </button>
          ))}
        </div>

        {/* Pricing Modal Popup */}
        <AnimatePresence>
          {selectedService && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4"
            >
              {/* Backdrop */}
              <div 
                className="absolute inset-0 bg-primary-950/90 backdrop-blur-md" 
                onClick={() => setSelectedService(null)}
              />
              
              {/* Modal Content */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                transition={{ type: "spring", duration: 0.5, bounce: 0.3 }}
                className="bg-primary-900 rounded-2xl shadow-2xl w-full max-w-2xl z-10 overflow-hidden relative max-h-[90vh] flex flex-col border border-primary-700"
              >
                {/* Close Button */}
                <button 
                  onClick={() => setSelectedService(null)}
                  className="absolute top-4 right-4 p-2 bg-primary-800/50 hover:bg-primary-800 text-primary-300 hover:text-white rounded-full transition-colors z-20"
                >
                  <X size={20} />
                </button>

                <div className="bg-gradient-to-r from-gold-700 to-gold-600 p-8 text-center text-white relative shrink-0">
                  <h3 className="font-serif text-3xl mb-2">{pricingData[selectedService].title}</h3>
                  <p className="text-gold-100 opacity-90 font-light tracking-wide">{pricingData[selectedService].subtitle}</p>
                </div>
                
                <div className="p-6 md:p-8 overflow-y-auto custom-scrollbar bg-primary-900">
                  <div className="space-y-2">
                    {pricingData[selectedService].items.map((item, idx) => (
                      <div key={idx} className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-primary-800/50 last:border-0 pb-4 pt-2 last:pb-0 group hover:bg-primary-800/30 rounded-lg px-3 transition-colors">
                        <div className="mb-2 sm:mb-0 pr-4">
                          <div className="font-medium text-lg text-primary-100 group-hover:text-white transition-colors">{item.name}</div>
                          {item.note && <div className="text-sm text-primary-500 italic group-hover:text-primary-400 transition-colors">{item.note}</div>}
                        </div>
                        <div className="font-serif font-bold text-xl text-gold-500 whitespace-nowrap">{item.price}</div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-8 pt-6 border-t border-primary-800 text-center">
                    <p className="text-primary-500 text-xs uppercase tracking-wider mb-6">
                      Prijzen onder voorbehoud
                    </p>
                    <a 
                      href="#contact" 
                      onClick={() => setSelectedService(null)}
                      className="inline-block px-10 py-3 bg-gold-600 text-white font-bold rounded-full hover:bg-gold-500 transition-colors shadow-lg shadow-gold-900/20 transform hover:-translate-y-0.5 text-sm tracking-wider uppercase"
                    >
                      Maak een Afspraak
                    </a>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
};

export default Services;
