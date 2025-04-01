
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 px-6 lg:px-12 transition-all duration-300 ${
        isScrolled 
          ? 'py-3 bg-white/90 backdrop-blur-md shadow-sm' 
          : 'py-6 bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto flex items-center justify-between">
        <Link 
          to="/" 
          className="flex items-center gap-2"
        >
          <img 
            src="/lovable-uploads/783204d2-32fd-428c-9931-a9295b4f2fba.png" 
            alt="FutureX-motors Logo" 
            className="h-12 w-auto"
          />
        </Link>
        
        {/* Desktop menu */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#about" className="nav-link text-sm font-medium py-2">Chi Siamo</a>
          <a href="#models" className="nav-link text-sm font-medium py-2">Modelli</a>
          <Link to="/eterno-gt" className="nav-link text-sm font-medium py-2">Eterno GT</Link>
          <Link to="/aura" className="nav-link text-sm font-medium py-2">Aura</Link>
          <Link to="/vento" className="nav-link text-sm font-medium py-2">Vento</Link>
          <Link to="/lampo" className="nav-link text-sm font-medium py-2">Lampo</Link>
          <Link to="/stella" className="nav-link text-sm font-medium py-2">Stella</Link>
          <a 
            href="#contact" 
            className="button-hover ml-2 px-4 py-2 rounded-full bg-rosso text-white text-sm font-medium"
          >
            Contattaci
          </a>
        </div>
        
        {/* Mobile menu button */}
        <button 
          className="md:hidden" 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? "Chiudi menu" : "Apri menu"}
        >
          {isMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </nav>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg menu-slide-down">
          <div className="p-6 flex flex-col space-y-4">
            <a 
              href="#about" 
              className="text-sm font-medium py-2 border-b border-gray-100"
              onClick={() => setIsMenuOpen(false)}
            >
              Chi Siamo
            </a>
            <a 
              href="#models" 
              className="text-sm font-medium py-2 border-b border-gray-100"
              onClick={() => setIsMenuOpen(false)}
            >
              Modelli
            </a>
            <Link 
              to="/eterno-gt" 
              className="text-sm font-medium py-2 border-b border-gray-100"
              onClick={() => setIsMenuOpen(false)}
            >
              Eterno GT
            </Link>
            <Link 
              to="/aura" 
              className="text-sm font-medium py-2 border-b border-gray-100"
              onClick={() => setIsMenuOpen(false)}
            >
              Aura
            </Link>
            <Link 
              to="/vento" 
              className="text-sm font-medium py-2 border-b border-gray-100"
              onClick={() => setIsMenuOpen(false)}
            >
              Vento
            </Link>
            <Link 
              to="/lampo" 
              className="text-sm font-medium py-2 border-b border-gray-100"
              onClick={() => setIsMenuOpen(false)}
            >
              Lampo
            </Link>
            <Link 
              to="/stella" 
              className="text-sm font-medium py-2 border-b border-gray-100"
              onClick={() => setIsMenuOpen(false)}
            >
              Stella
            </Link>
            <a 
              href="#contact" 
              className="mt-2 px-4 py-3 rounded-lg bg-rosso text-white text-sm font-medium text-center"
              onClick={() => setIsMenuOpen(false)}
            >
              Contattaci
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
