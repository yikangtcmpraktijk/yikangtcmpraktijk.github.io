
import React from 'react';
import { MapPin, Phone, Mail, Clock, MessageCircle } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-primary-900 scroll-mt-28">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl text-white mb-6">Bezoek Yikang TCM Praktijk</h2>
            <p className="text-primary-200 text-lg leading-relaxed max-w-2xl mx-auto">
              Wij geloven in een persoonlijke benadering. Neem contact met ons op via telefoon, WhatsApp of e-mail om uw afspraak te plannen.
            </p>
        </div>

        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8">
            {/* Location */}
            <div className="bg-primary-800 p-8 rounded-3xl text-center border border-primary-700 hover:border-gold-500/30 hover:shadow-lg transition-all group">
                <div className="w-16 h-16 bg-primary-700 text-gold-400 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary-600 transition-colors">
                  <MapPin size={32} />
                </div>
                <h3 className="font-serif text-xl font-bold text-primary-50 mb-4">Adres</h3>
                <p className="text-primary-300 leading-relaxed">
                  Amsterdamse Veerkade 17<br/>
                  2512AG Den Haag
                </p>
            </div>

            {/* Phone/Booking */}
            <div className="bg-gradient-to-br from-gold-500 to-gold-700 p-8 rounded-3xl text-center text-white shadow-xl transform md:-translate-y-4 border border-gold-400/20">
                <div className="w-16 h-16 bg-white/20 text-white rounded-full flex items-center justify-center mx-auto mb-6 backdrop-blur-sm">
                  <Phone size={32} />
                </div>
                <h3 className="font-serif text-xl font-bold mb-4">Contact</h3>
                
                <div className="mb-4">
                  <p className="text-gold-100 text-sm mb-1">Telefoon</p>
                  <a href="tel:0707851183" className="text-xl font-bold hover:text-white/80 transition-colors block">
                    070-7851183
                  </a>
                </div>

                <div>
                  <p className="text-gold-100 text-sm mb-1 flex items-center justify-center gap-1">
                    <MessageCircle size={14} /> WhatsApp
                  </p>
                  <a href="https://wa.me/31615674988" target="_blank" rel="noopener noreferrer" className="text-xl font-bold hover:text-white/80 transition-colors block">
                    06-15674988
                  </a>
                </div>
            </div>

            {/* Email */}
            <div className="bg-primary-800 p-8 rounded-3xl text-center border border-primary-700 hover:border-gold-500/30 hover:shadow-lg transition-all group">
                <div className="w-16 h-16 bg-primary-700 text-gold-400 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary-600 transition-colors">
                  <Mail size={32} />
                </div>
                <h3 className="font-serif text-xl font-bold text-primary-50 mb-4">E-mail</h3>
                <p className="text-primary-300 mb-6 leading-relaxed">
                </p>
                <a href="mailto:info@yikangtcmpraktijk.com" className="text-gold-400 font-medium hover:text-gold-300 underline break-all transition-colors">
                  info@yikangtcmpraktijk.com
                </a>
            </div>
        </div>

        {/* Hours */}
        <div className="max-w-3xl mx-auto mt-16 p-8 bg-primary-800 rounded-2xl border border-primary-700 shadow-lg">
          <div className="flex items-center justify-center gap-3 mb-6 text-primary-50">
            <Clock className="text-gold-500" />
            <h3 className="font-bold text-xl uppercase tracking-wider">Openingstijden</h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 text-center text-primary-200">
             <div className="bg-primary-700/50 p-3 rounded-lg border border-primary-600">
               <span className="block font-bold text-gold-400 text-sm uppercase mb-1">Ma, Di, Do, Vr</span>
               <span>9:00 - 19:00</span>
             </div>
             <div className="bg-primary-700/50 p-3 rounded-lg border border-primary-600">
               <span className="block font-bold text-gold-400 text-sm uppercase mb-1">Zaterdag</span>
               <span>9:00 - 19:00</span>
             </div>
             <div className="bg-primary-900/50 p-3 rounded-lg border border-primary-800 text-primary-500">
               <span className="block font-bold text-primary-400 text-sm uppercase mb-1">Woensdag</span>
               <span>Gesloten</span>
             </div>
             <div className="bg-primary-900/50 p-3 rounded-lg border border-primary-800 text-primary-500">
               <span className="block font-bold text-primary-400 text-sm uppercase mb-1">Zondag</span>
               <span>Gesloten</span>
             </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Contact;
