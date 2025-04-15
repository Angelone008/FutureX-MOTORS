import React, { useEffect, useRef } from 'react';
import { Leaf, Globe, Battery, Zap } from 'lucide-react';

const features = [
  {
    icon: <Leaf className="h-8 w-8 text-eco" />,
    title: "Materiali Ecologici",
    description: "I nostri prototipi utilizzano materiali sostenibili, tra cui fibra di carbonio riciclata, compositi a base biologica e alternative alla pelle vegana."
  },
  {
    icon: <Battery className="h-8 w-8 text-rosso" />,
    title: "Batterie di Nuova Generazione",
    description: "Tecnologia avanzata agli ioni di litio con densità energetica superiore del 30% e un'autonomia di oltre 500 km con una singola carica."
  },
  {
    icon: <Zap className="h-8 w-8 text-accent" />,
    title: "Ricarica Rapida",
    description: "Il sistema di ricarica ultra-veloce consente l'80% della capacità della batteria in soli 15 minuti presso le stazioni di ricarica compatibili."
  },
  {
    icon: <Globe className="h-8 w-8 text-eco" />,
    title: "Carbon Neutral",
    description: "Processo di produzione progettato per ridurre al minimo l'impronta di carbonio, con energia 100% rinnovabile per alimentare i nostri impianti."
  }
];

const Features: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && sectionRef.current) {
          sectionRef.current.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);
  
  return (
    <section 
      id="about" 
      className="section-padding bg-white"
    >
      <div className="max-w-7xl mx-auto">
        <div 
          ref={sectionRef}
          className="fade-in-section"
        >
          <div className="text-center mb-16">
            <div className="inline-block px-3 py-1 mb-4 rounded-full bg-rosso/20 border border-rosso/30">
              <span className="text-xs uppercase tracking-widest font-medium text-rosso-dark">Chi è FutureX Motors</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">
              Pionieri nel Design Automobilistico Elettrico
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto font-medium">
              FutureX Motors Italia combina l'artigianato italiano con tecnologia elettrica all'avanguardia per creare i veicoli di lusso sostenibili di domani.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="glass-card p-6 rounded-xl transition-all duration-500 hover:shadow-xl"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="mb-4 p-3 inline-block rounded-lg bg-eco/10">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground font-medium">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
