
import React, { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';

const urbanModels = [
  {
    id: 'piccolo',
    name: 'Piccolo',
    category: 'City Car',
    description: 'La soluzione perfetta per la mobilità urbana: compatta, agile e 100% elettrica. Ideale per muoversi nel traffico cittadino con stile e zero emissioni.',
    image: '/lovable-uploads/2a350430-930d-4fc7-bcb6-84fe6a1d5800.png',
    specs: ['Autonomia: 250 km', 'Batteria: 30 kWh', 'Ricarica: 30 min (20-80%)', 'Velocità max: 130 km/h']
  },
  {
    id: 'sole',
    name: 'Sole',
    category: 'Classica Elettrica',
    description: 'Una reinterpretazione elettrica delle iconiche auto d\'epoca italiane. Combina il fascino senza tempo del design classico con la moderna tecnologia di propulsione elettrica.',
    image: '/lovable-uploads/fcbd5bfa-bc54-4944-8dc5-6b1fc56afe96.png',
    specs: ['Autonomia: 400 km', 'Batteria: 60 kWh', 'Ricarica: 25 min (20-80%)', 'Velocità max: 180 km/h']
  }
];

const UrbanMobility: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const imageRefs = useRef<(HTMLImageElement | null)[]>([]);
  const chargingImageRef = useRef<HTMLImageElement>(null);
  
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
    
    // Set up image lazy loading
    const imgObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target as HTMLImageElement;
          img.classList.add('loaded');
          imgObserver.unobserve(img);
        }
      });
    });
    
    imageRefs.current.forEach(img => {
      if (img) imgObserver.observe(img);
    });
    
    if (chargingImageRef.current) {
      imgObserver.observe(chargingImageRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
      imageRefs.current.forEach(img => {
        if (img) imgObserver.unobserve(img);
      });
      if (chargingImageRef.current) {
        imgObserver.unobserve(chargingImageRef.current);
      }
    };
  }, []);
  
  return (
    <section id="urban-mobility" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        <div 
          ref={sectionRef}
          className="fade-in-section"
        >
          <div className="text-center mb-16">
            <div className="inline-block px-3 py-1 mb-4 rounded-full bg-eco/20 border border-eco/30">
              <span className="text-xs uppercase tracking-widest font-medium text-eco-dark">Mobilità Urbana</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">
              Soluzioni Compatte per la Città
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto font-medium">
              Le nostre innovative proposte per la mobilità urbana combinano dimensioni compatte, autonomia eccellente e tecnologie all'avanguardia per affrontare le sfide quotidiane della città.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 mt-12">
            {urbanModels.map((model, index) => (
              <div 
                key={model.id}
                className="glass-card rounded-xl overflow-hidden shadow-xl transition-all duration-300 hover:shadow-2xl"
              >
                <div className="h-[250px] md:h-[300px] relative overflow-hidden">
                  <img
                    ref={el => imageRefs.current[index] = el}
                    src={model.image}
                    alt={`${model.name} - ${model.category} elettrica FutureX-Motors`}
                    className="w-full h-full object-cover lazy-image"
                  />
                </div>
                
                <div className="p-6">
                  <div className="mb-1 text-sm font-medium text-rosso">
                    {model.category}
                  </div>
                  <h3 className="text-2xl font-display font-bold mb-3">
                    {model.name}
                  </h3>
                  <p className="text-muted-foreground mb-6 font-medium">
                    {model.description}
                  </p>
                  
                  <div className="grid grid-cols-2 gap-3 mb-6">
                    {model.specs.map((spec, idx) => (
                      <div 
                        key={idx} 
                        className="px-3 py-2 bg-accent/10 rounded-lg text-sm font-medium"
                      >
                        {spec}
                      </div>
                    ))}
                  </div>
                  
                  <a 
                    href="#contact" 
                    className="flex items-center justify-center space-x-2 w-full py-3 button-hover bg-eco text-white text-center rounded-lg font-medium"
                  >
                    <span>Richiedi Informazioni</span>
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <div className="p-6 md:p-10 bg-gradient-to-br from-rosso/5 to-eco/5 backdrop-blur-sm rounded-xl border border-eco/10 shadow-sm">
              <h3 className="text-2xl md:text-3xl font-display font-bold mb-6">Tecnologia di Ricarica All'avanguardia</h3>
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <img
                    ref={chargingImageRef}
                    src="/lovable-uploads/24091400-0166-49a3-9ac9-a89d2fdca996.png" 
                    alt="Sistema di ricarica ultrarapida FutureX-Motors in ambiente naturale" 
                    className="w-full h-[250px] object-cover rounded-lg shadow-lg lazy-image"
                  />
                </div>
                <div className="text-left">
                  <p className="text-lg mb-4 font-medium">
                    Tutti i nostri modelli sono compatibili con il nostro sistema di ricarica ultrarapida FutureX-Fast, che permette di ricaricare dal 20% all'80% in tempi record, grazie alla nostra tecnologia proprietaria.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <span className="text-rosso mr-2 text-xl">•</span>
                      <span className="font-medium">Rete di ricarica in espansione in tutta Italia</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-rosso mr-2 text-xl">•</span>
                      <span className="font-medium">Compatibilità con tutti gli standard europei</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-rosso mr-2 text-xl">•</span>
                      <span className="font-medium">App dedicata per localizzare e prenotare stazioni</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UrbanMobility;
