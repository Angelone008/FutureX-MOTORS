
import React, { useEffect, useRef } from 'react';

const Hero: React.FC = () => {
  const imageRef = useRef<HTMLImageElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && imageRef.current) {
          imageRef.current.classList.add('loaded');
          observer.unobserve(entry.target);
        }
      });
    });
    
    if (imageRef.current) {
      observer.observe(imageRef.current);
    }
    
    return () => {
      if (imageRef.current) {
        observer.unobserve(imageRef.current);
      }
    };
  }, []);
  
  return (
    <section className="relative min-h-screen pt-24 overflow-hidden">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div 
          className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background z-10"
        />
        <img
          ref={imageRef}
          src="https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?auto=format&fit=crop&w=1920&q=80"
          alt="Electric concept car illuminated by blue light"
          className="w-full h-full object-cover lazy-image"
        />
      </div>
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-16 md:pt-24 lg:pt-32">
        <div className="max-w-3xl animate-fade-in">
          <div className="inline-block px-3 py-1 mb-6 rounded-full bg-eco/10 border border-eco/20">
            <span className="text-xs uppercase tracking-widest font-medium text-eco-dark">Reinventing Mobility</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold mb-6 hero-text-shadow">
            The Future of <br />
            <span className="bg-gradient-to-r from-eco to-accent bg-clip-text text-transparent animate-gradient-x">Eco-Cars</span> <br />
            is Italian.
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl hero-text-shadow">
            G.D.B MOTORS ITALIA creates visionary electric automotive prototypes that redefine what's possible in sustainable luxury mobility.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="#models" 
              className="button-hover px-8 py-3 rounded-lg bg-eco text-white font-medium text-center"
            >
              Explore Models
            </a>
            <a 
              href="#innovation" 
              className="button-hover px-8 py-3 rounded-lg bg-white/90 backdrop-blur border border-gray-200 font-medium text-center"
            >
              Our Technology
            </a>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-0 right-0 flex justify-center animate-pulse-slow">
        <a 
          href="#about"
          className="flex flex-col items-center"
          aria-label="Scroll down"
        >
          <span className="text-sm text-muted-foreground mb-2">Discover</span>
          <div className="w-0.5 h-6 bg-muted-foreground/30" />
        </a>
      </div>
    </section>
  );
};

export default Hero;
