import React, { useState, useEffect } from 'react';
import { Menu, X, Flower } from 'lucide-react';
import logo from "../assets/logo.png";


const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [imageError, setImageError] = useState(false);
  const [showNotice, setShowNotice] = useState(true); //for notice banner

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'Over Ons', href: '#about' },
    { name: 'Behandelingen', href: '#services' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header 
    //   className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
    //     isScrolled ? 'bg-primary-950/95 backdrop-blur-md shadow-2xl py-3 border-b border-primary-800/50' : 'bg-transparent py-8'
    //   }`}
    // >
    //   <div className="container mx-auto px-4 md:px-8 flex items-center justify-between">
    className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 flex flex-col ${
        isScrolled ? 'bg-primary-950/95 backdrop-blur-md shadow-2xl border-b border-primary-800/50' : 'bg-transparent'
      }`}
    >
      {/* Holiday Notice Banner */}
      {showNotice && (
        <div className="bg-gradient-to-r from-gold-700 to-gold-500 text-white text-xs md:text-sm py-2 px-8 text-center relative w-full z-50">
          <p className="font-medium tracking-wide">
            🎄 <span className="font-bold">Kerstsluiting:</span> Wij zijn gesloten op 25.26 en 27 december 2025. Fijne feestdagen!
          </p>
          <button 
            onClick={() => setShowNotice(false)} 
            className="absolute right-2 top-1/2 -translate-y-1/2 p-1 hover:bg-gold-800/20 rounded-full transition-colors"
            aria-label="Sluit melding"
          >
            <X size={16} />
          </button>
        </div>
      )}

      <div className={`container mx-auto px-4 md:px-8 flex items-center justify-between transition-all duration-500 ${isScrolled ? 'py-3' : 'py-6'}`}>


        {/* Logo */}
        <a href="#" className="flex items-center gap-4 group">
          <div className="w-12 h-12 relative">
             <div className="absolute inset-0 bg-gradient-to-br from-gold-400 to-gold-700 rounded-full opacity-20 group-hover:opacity-30 transition-opacity blur-md"></div>
             <div className="relative w-full h-full border border-gold-500/30 rounded-full flex items-center justify-center text-gold-400 group-hover:scale-105 transition-transform duration-500 bg-primary-900/50 backdrop-blur-sm p-1">
               {imageError ? (
                 <Flower className="w-3/4 h-3/4 text-gold-400" strokeWidth={1.5} />
               ) : (
                 <img 
                   src={logo} 
                   alt="YIKANG Logo" 
                   className="w-full h-full object-contain rounded-full"
                   onError={() => setImageError(true)}
                 />
               )}
             </div>
          </div>
          <div className="flex flex-col">
            <span className="font-serif text-2xl font-bold tracking-wide text-gold-100 leading-none group-hover:text-white transition-colors">
              YIKANG
            </span>
            <span className="font-sans text-xs font-medium tracking-[0.3em] text-gold-500 uppercase mt-1 group-hover:text-gold-400 transition-colors">
              TCM Praktijk
            </span>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="text-sm font-medium text-primary-300 hover:text-gold-400 transition-colors uppercase tracking-widest relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[1px] after:bg-gold-500 after:transition-all hover:after:w-full"
            >
              {link.name}
            </a>
          ))}
          <a 
            href="#contact"
            className="px-7 py-2 bg-gradient-to-r from-gold-600 to-gold-500 text-white text-sm font-bold rounded-full hover:from-gold-500 hover:to-gold-400 transition-all shadow-lg shadow-gold-900/50 hover:shadow-gold-500/20 border border-gold-400/20"
          >
            Maak Afspraak
          </a>
        </nav>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden text-gold-400 hover:text-white transition-colors"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-primary-950/95 backdrop-blur-xl border-t border-primary-800 shadow-2xl p-6 flex flex-col gap-4 min-h-screen">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-lg font-serif text-primary-200 hover:text-gold-400 py-3 border-b border-primary-800/50 flex justify-between items-center group"
            >
              {link.name}
              <span className="text-gold-500/0 group-hover:text-gold-500 transition-all opacity-0 group-hover:opacity-100">→</span>
            </a>
          ))}
          <a 
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="w-full text-center px-5 py-4 bg-gold-600 text-white text-base font-bold rounded-lg mt-4 shadow-lg"
          >
            Maak Afspraak
          </a>
        </div>
      )}
    </header>
  );
};

export default Header;
