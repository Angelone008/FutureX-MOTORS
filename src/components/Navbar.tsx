
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

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
        <a 
          href="#" 
          className="flex items-center gap-2"
        >
          <div className="relative w-10 h-10 flex items-center justify-center rounded-full bg-eco text-white">
            <span className="font-display font-bold text-lg">G</span>
            <div className="absolute -right-1 -bottom-1 w-5 h-5 bg-white rounded-full flex items-center justify-center">
              <div className="w-3 h-3 bg-eco rounded-full" />
            </div>
          </div>
          <div className="flex flex-col">
            <span className="font-display font-bold tracking-tight text-lg leading-none">G.D.B MOTORS</span>
            <span className="text-[10px] tracking-widest text-muted-foreground uppercase">ITALIA</span>
          </div>
        </a>
        
        {/* Desktop menu */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#about" className="nav-link text-sm font-medium py-2">About</a>
          <a href="#models" className="nav-link text-sm font-medium py-2">Models</a>
          <a href="#sustainability" className="nav-link text-sm font-medium py-2">Sustainability</a>
          <a href="#innovation" className="nav-link text-sm font-medium py-2">Innovation</a>
          <a 
            href="#contact" 
            className="button-hover ml-2 px-4 py-2 rounded-full bg-eco text-white text-sm font-medium"
          >
            Contact
          </a>
        </div>
        
        {/* Mobile menu button */}
        <button 
          className="md:hidden" 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
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
              About
            </a>
            <a 
              href="#models" 
              className="text-sm font-medium py-2 border-b border-gray-100"
              onClick={() => setIsMenuOpen(false)}
            >
              Models
            </a>
            <a 
              href="#sustainability" 
              className="text-sm font-medium py-2 border-b border-gray-100"
              onClick={() => setIsMenuOpen(false)}
            >
              Sustainability
            </a>
            <a 
              href="#innovation" 
              className="text-sm font-medium py-2 border-b border-gray-100"
              onClick={() => setIsMenuOpen(false)}
            >
              Innovation
            </a>
            <a 
              href="#contact" 
              className="mt-2 px-4 py-3 rounded-lg bg-eco text-white text-sm font-medium text-center"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
