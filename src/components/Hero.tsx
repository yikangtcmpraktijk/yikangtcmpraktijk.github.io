import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import logo2 from "../assets/logo2.jpg";

const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1600334019640-46d97136b3b3?auto=format&fit=crop&q=80&w=2070"
          alt="Peaceful Acupuncture Setting" 
          className="w-full h-full object-cover opacity-30 mix-blend-overlay"
        />
        {/* Gradient overlay to blend with body background */}
        <div className="absolute inset-0 bg-gradient-to-b from-primary-900/80 via-primary-900/90 to-primary-950"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10 flex flex-col items-center mt-16">
        
        {/* Logo and Title Lockup */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12 mb-16"
        >
        {/* Large Logo */}
          <div className="w-32 h-32 md:w-48 md:h-48 relative shrink-0 flex items-center justify-center">
            <div className="absolute inset-0 bg-gradient-to-br from-gold-400 to-gold-700 rounded-full opacity-20 blur-2xl animate-pulse"></div>
                 <img 
                   src={logo2} 
                   alt="YIKANG Logo" 
                   className="w-full h-full object-contain relative z-10 drop-shadow-2xl"
                 />
          </div>

          {/* Title Text */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <h1 className="font-serif text-6xl md:text-8xl lg:text-9xl font-bold tracking-wide text-primary-50 leading-none drop-shadow-2xl">
              YIKANG
            </h1>
            <motion.span 
              initial={{ opacity: 0, letterSpacing: "0.1em" }}
              animate={{ opacity: 1, letterSpacing: "0.5em" }}
              transition={{ duration: 1.5, delay: 0.5 }}
              className="font-sans text-xl md:text-3xl font-medium text-gold-500 uppercase mt-2 md:mt-4 pl-[0.2em] md:pl-[0.5em]"
            >
              TCM Praktijk
            </motion.span>
          </div>
        </motion.div>
        
        {/* Buttons */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="flex flex-col sm:flex-row gap-6 justify-center w-full"
        >
          <a 
            href="#contact" 
            className="px-10 py-4 bg-gold-600 text-white rounded-full font-bold text-base tracking-wider hover:bg-gold-500 transition-all shadow-[0_0_30px_-5px_rgba(198,144,88,0.3)] hover:shadow-[0_0_40px_-5px_rgba(198,144,88,0.5)] hover:-translate-y-1 text-center"
          >
            Maak Afspraak
          </a>
          <a 
            href="#services" 
            className="px-10 py-4 bg-transparent text-primary-200 border border-primary-600 rounded-full font-medium text-base tracking-wider hover:bg-primary-800/50 transition-all hover:border-gold-500/50 hover:text-gold-400 text-center"
          >
            Onze Diensten
          </a>
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-gold-500/50 animate-pulse"
      >
        <ArrowDown size={24} />
      </motion.div>
    </section>
  );
};

export default Hero;
