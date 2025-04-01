
import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

const models = [
  {
    id: 'eterno',
    name: 'Eterno GT',
    category: 'Gran Turismo',
    description: 'Il nostro fiore all\'occhiello: una Grand Tourer elettrica che ridefinisce il concetto di eleganza italiana. Con un\'autonomia di 700 km e un\'accelerazione da 0 a 100 km/h in soli 2,8 secondi, rappresenta il perfetto equilibrio tra lusso sostenibile e prestazioni straordinarie.',
    specs: ['Autonomia: 700 km', 'Potenza: 850 cv', '0-100 km/h: 2,8s', 'Velocità max: 330 km/h'],
    image: '/lovable-uploads/24091400-0166-49a3-9ac9-a89d2fdca996.png',
    path: '/eterno-gt'
  },
  {
    id: 'aura',
    name: 'Aura',
    category: 'Berlina di Lusso',
    description: 'Una sofisticata berlina elettrica con comfort impareggiabile, realizzata con materiali eco-sostenibili di altissima qualità. Tecnologia all\'avanguardia, interni spaziosi e un\'autonomia di 650 km per viaggiare nel massimo comfort con zero emissioni.',
    specs: ['Autonomia: 650 km', 'Potenza: 500 cv', '0-100 km/h: 3,6s', 'Velocità max: 250 km/h'],
    image: '/lovable-uploads/9befbdf0-bec1-4ee9-a3be-4b99b0c430f2.png',
    path: '/aura'
  },
  {
    id: 'vento',
    name: 'Vento',
    category: 'SUV Sportivo',
    description: 'Il nostro rivoluzionario SUV elettrico che unisce versatilità, prestazioni sportive e tecnologia eco-friendly. Con sistema di trazione integrale intelligente, capacità fuoristrada avanzate e un\'autonomia di 580 km, il Vento ridefinisce ciò che un SUV può fare.',
    specs: ['Autonomia: 580 km', 'Potenza: 650 cv', '0-100 km/h: 3,4s', 'Velocità max: 240 km/h'],
    image: '/lovable-uploads/52de88f3-94ba-46b5-91f0-5922c69b027f.png',
    path: '/vento'
  },
  {
    id: 'fulmine',
    name: 'Fulmine',
    category: 'Supercar Elettrica',
    description: 'La nostra supercar più estrema, progettata per offrire prestazioni senza compromessi. Con quattro motori elettrici indipendenti, telaio in fibra di carbonio e aerodinamica attiva, la Fulmine è l\'apice dell\'innovazione automobilistica elettrica.',
    specs: ['Autonomia: 520 km', 'Potenza: 1200 cv', '0-100 km/h: 1,9s', 'Velocità max: 350 km/h'],
    image: '/lovable-uploads/8e543a9c-ec0d-4f9d-a52f-8aaf74c1faa1.png',
    path: '/fulmine'
  },
  {
    id: 'stella',
    name: 'Stella',
    category: 'Roadster Elettrica',
    description: 'Un\'esperienza di guida a cielo aperto che unisce le emozioni di una roadster classica con le prestazioni e la sostenibilità della propulsione elettrica. Design affascinante, prestazioni eccezionali e precisione di guida impareggiabile.',
    specs: ['Autonomia: 480 km', 'Potenza: 720 cv', '0-100 km/h: 2,5s', 'Velocità max: 310 km/h'],
    image: '/lovable-uploads/fcbd5bfa-bc54-4944-8dc5-6b1fc56afe96.png',
    path: '/stella'
  },
  {
    id: 'lampo',
    name: 'Lampo',
    category: 'Hypercar Elettrica',
    description: 'La nostra hypercar di punta, un\'esclusiva opera d\'arte tecnologica prodotta in soli 25 esemplari. Con prestazioni da record mondiale, la Lampo ridefinisce il concetto di automobile elettrica estrema combinando potenza, leggerezza e design futuristico.',
    specs: ['Autonomia: 450 km', 'Potenza: 1800 cv', '0-100 km/h: 1,6s', 'Velocità max: 420 km/h'],
    image: '/lovable-uploads/641220f0-f416-46d8-b33f-7057ea223bb8.png',
    path: '/lampo'
  }
];

const Models: React.FC = () => {
  const [activeModel, setActiveModel] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const imageRefs = useRef<(HTMLImageElement | null)[]>([]);
  
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
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
      imageRefs.current.forEach(img => {
        if (img) imgObserver.unobserve(img);
      });
    };
  }, []);
  
  return (
    <section 
      id="models" 
      className="section-padding bg-gradient-to-b from-white to-eco-light/30"
    >
      <div className="max-w-7xl mx-auto">
        <div 
          ref={sectionRef}
          className="fade-in-section"
        >
          <div className="text-center mb-16">
            <div className="inline-block px-3 py-1 mb-4 rounded-full bg-rosso/10 border border-rosso/20">
              <span className="text-xs uppercase tracking-widest font-medium text-rosso-dark">I Nostri Modelli</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
              Collezione di Prototipi Elettrici
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Scopri la nostra esclusiva gamma di prototipi elettrici, dove l'innovazione tecnologica incontra l'eccellenza del design italiano per una mobilità sostenibile e di lusso.
            </p>
            
            <div className="bg-white/80 backdrop-blur-sm p-4 rounded-lg shadow-lg border-l-4 border-rosso my-8 max-w-2xl mx-auto">
              <p className="text-lg font-display italic font-medium text-rosso-dark">
                "Percorri la strada del futuro, con FutureX-Motors, più verde e sostenibile!"
              </p>
            </div>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <nav className="flex flex-wrap mb-8">
                {models.map((model, index) => (
                  <button
                    key={model.id}
                    onClick={() => setActiveModel(index)}
                    className={`mr-2 mb-2 px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                      activeModel === index 
                        ? 'bg-rosso text-white shadow-md' 
                        : 'bg-white border border-gray-200 hover:bg-gray-50'
                    }`}
                  >
                    {model.name}
                  </button>
                ))}
              </nav>
              
              <div>
                <div className="flex flex-col animate-fade-in" key={models[activeModel].name}>
                  <div className="mb-1 text-sm font-medium text-muted-foreground">
                    {models[activeModel].category}
                  </div>
                  <h3 className="text-3xl font-display font-bold mb-4">
                    {models[activeModel].name}
                  </h3>
                  <p className="text-lg text-muted-foreground mb-6">
                    {models[activeModel].description}
                  </p>
                  
                  <div className="grid grid-cols-2 gap-4 mb-8">
                    {models[activeModel].specs.map((spec, index) => (
                      <div 
                        key={index} 
                        className="px-4 py-3 bg-white/80 backdrop-blur-sm rounded-lg border border-gray-100 shadow-sm"
                      >
                        <span className="text-sm font-medium">{spec}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="flex gap-4 flex-wrap">
                    <Link 
                      to={models[activeModel].path}
                      className="button-hover inline-block px-8 py-3 rounded-lg bg-eco text-white font-medium"
                    >
                      Scopri {models[activeModel].name}
                    </Link>
                    <a 
                      href="#contact" 
                      className="button-hover inline-block px-8 py-3 rounded-lg bg-rosso text-white font-medium"
                    >
                      Richiedi Informazioni
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="order-1 lg:order-2 h-[300px] md:h-[400px] lg:h-[500px]">
              <div className="relative w-full h-full overflow-hidden rounded-2xl shadow-2xl">
                {models.map((model, index) => (
                  <div 
                    key={model.id}
                    className={`absolute inset-0 transition-opacity duration-500 ${
                      activeModel === index ? 'opacity-100 z-10' : 'opacity-0 z-0'
                    }`}
                  >
                    <img
                      ref={el => imageRefs.current[index] = el}
                      src={model.image}
                      alt={model.name}
                      className="w-full h-full object-cover object-center lazy-image"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-16 grid md:grid-cols-3 gap-6">
            {[3, 4, 5].map((index) => (
              <div key={models[index].id} className="glass-card rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300">
                <div className="h-[200px] relative overflow-hidden">
                  <img 
                    src={models[index].image} 
                    alt={models[index].name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-5">
                  <h3 className="text-xl font-display font-bold mb-2">{models[index].name}</h3>
                  <p className="text-sm text-muted-foreground mb-3 line-clamp-2">{models[index].description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-xs font-medium text-rosso-dark">{models[index].category}</span>
                    <Link 
                      to={models[index].path}
                      className="text-sm font-medium text-eco hover:text-eco-dark transition-colors"
                    >
                      Scopri di più →
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Models;
