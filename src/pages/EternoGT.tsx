
import React, { useEffect, useRef } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import AnimatedGradientBackground from '../components/AnimatedGradientBackground';

const EternoGT: React.FC = () => {
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
    <div className="flex flex-col min-h-screen">
      <AnimatedGradientBackground />
      <Navbar />
      <main className="pt-24">
        <section className="section-padding">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-block px-3 py-1 mb-4 rounded-full bg-rosso/10 border border-rosso/20">
                  <span className="text-xs uppercase tracking-widest font-medium text-rosso-dark">Gran Turismo Elettrica</span>
                </div>
                <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">Eterno GT</h1>
                <p className="text-lg text-muted-foreground mb-6">
                  La nostra ammiraglia elettrica grand tourer combina un elegante design italiano con un'autonomia di 700 km e un'accelerazione da 0 a 100 km/h in 2,8 secondi.
                </p>
                
                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="px-4 py-3 bg-white/80 backdrop-blur-sm rounded-lg border border-gray-100">
                    <span className="text-sm font-medium">Autonomia: 700 km</span>
                  </div>
                  <div className="px-4 py-3 bg-white/80 backdrop-blur-sm rounded-lg border border-gray-100">
                    <span className="text-sm font-medium">Potenza: 850 cv</span>
                  </div>
                  <div className="px-4 py-3 bg-white/80 backdrop-blur-sm rounded-lg border border-gray-100">
                    <span className="text-sm font-medium">0-100 km/h: 2,8s</span>
                  </div>
                  <div className="px-4 py-3 bg-white/80 backdrop-blur-sm rounded-lg border border-gray-100">
                    <span className="text-sm font-medium">Velocità max: 330 km/h</span>
                  </div>
                </div>
                
                <h2 className="text-2xl font-display font-bold mb-4">Caratteristiche Distintive</h2>
                <ul className="space-y-2 mb-8">
                  <li className="flex items-start">
                    <span className="text-rosso mr-2">•</span>
                    <span>Carrozzeria in fibra di carbonio riciclata</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-rosso mr-2">•</span>
                    <span>Sistema di ricarica ultra-veloce (15 min all'80%)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-rosso mr-2">•</span>
                    <span>Interni in pelle vegana di lusso</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-rosso mr-2">•</span>
                    <span>Sistema di assistenza alla guida autonoma di livello 3</span>
                  </li>
                </ul>
                
                <div>
                  <a 
                    href="#contact" 
                    className="button-hover inline-block px-8 py-3 rounded-lg bg-rosso text-white font-medium"
                  >
                    Richiedi Informazioni
                  </a>
                </div>
              </div>
              
              <div className="h-[300px] md:h-[500px] lg:h-[600px]">
                <div className="relative w-full h-full overflow-hidden rounded-2xl shadow-2xl">
                  <img
                    ref={imageRef}
                    src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1000&q=80"
                    alt="Eterno GT - Grand Tourer Elettrica"
                    className="w-full h-full object-cover object-center lazy-image"
                  />
                </div>
              </div>
            </div>
            
            <div className="mt-16">
              <h2 className="text-2xl font-display font-bold mb-6 text-center">Specifiche Tecniche</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="p-6 bg-white/80 backdrop-blur-sm rounded-lg border border-gray-100 shadow-sm">
                  <h3 className="text-lg font-semibold mb-3 text-rosso">Batteria e Ricarica</h3>
                  <ul className="space-y-2">
                    <li className="flex justify-between">
                      <span>Capacità batteria:</span>
                      <span className="font-medium">120 kWh</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Tipo:</span>
                      <span className="font-medium">Litio-stato solido</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Ricarica rapida:</span>
                      <span className="font-medium">15 min (20-80%)</span>
                    </li>
                  </ul>
                </div>
                
                <div className="p-6 bg-white/80 backdrop-blur-sm rounded-lg border border-gray-100 shadow-sm">
                  <h3 className="text-lg font-semibold mb-3 text-eco">Prestazioni</h3>
                  <ul className="space-y-2">
                    <li className="flex justify-between">
                      <span>Motori:</span>
                      <span className="font-medium">4 motori indipendenti</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Trazione:</span>
                      <span className="font-medium">Integrale</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Coppia:</span>
                      <span className="font-medium">1.100 Nm</span>
                    </li>
                  </ul>
                </div>
                
                <div className="p-6 bg-white/80 backdrop-blur-sm rounded-lg border border-gray-100 shadow-sm">
                  <h3 className="text-lg font-semibold mb-3 text-accent">Dimensioni</h3>
                  <ul className="space-y-2">
                    <li className="flex justify-between">
                      <span>Lunghezza:</span>
                      <span className="font-medium">4.850 mm</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Larghezza:</span>
                      <span className="font-medium">2.050 mm</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Altezza:</span>
                      <span className="font-medium">1.250 mm</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default EternoGT;
