
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
          src="/lovable-uploads/641220f0-f416-46d8-b33f-7057ea223bb8.png"
          alt="Auto concept elettrica G.D.B Motors con illuminazione futuristica"
          className="w-full h-full object-cover lazy-image"
        />
      </div>
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-16 md:pt-24 lg:pt-32">
        <div className="max-w-3xl animate-fade-in">
          <div className="inline-block px-3 py-1 mb-6 rounded-full bg-rosso/10 border border-rosso/20">
            <span className="text-xs uppercase tracking-widest font-medium text-rosso-dark">Reinventare la Mobilità</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold mb-6 hero-text-shadow">
            Il Futuro delle <br />
            <span className="bg-gradient-to-r from-eco via-accent to-rosso bg-clip-text text-transparent animate-gradient-x">Eco-Cars</span> <br />
            è Italiano.
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl hero-text-shadow">
            G.D.B MOTORS ITALIA crea prototipi automobilistici elettrici visionari che ridefiniscono ciò che è possibile nella mobilità di lusso sostenibile.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="#models" 
              className="button-hover px-8 py-3 rounded-lg bg-eco text-white font-medium text-center shadow-lg"
            >
              Esplora i Modelli
            </a>
            <a 
              href="#innovation" 
              className="button-hover px-8 py-3 rounded-lg bg-rosso/90 backdrop-blur text-white font-medium text-center shadow-lg"
            >
              La Nostra Tecnologia
            </a>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-0 right-0 flex justify-center animate-pulse-slow">
        <a 
          href="#about"
          className="flex flex-col items-center"
          aria-label="Scorri verso il basso"
        >
          <span className="text-sm text-muted-foreground mb-2">Scopri</span>
          <div className="w-0.5 h-6 bg-muted-foreground/30" />
        </a>
      </div>
    </section>
  );
};

export default Hero;
