
import React, { useEffect, useRef } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import AnimatedGradientBackground from '../components/AnimatedGradientBackground';

const Aura: React.FC = () => {
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
                  <span className="text-xs uppercase tracking-widest font-medium text-rosso-dark">Berlina di Lusso</span>
                </div>
                <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">Aura</h1>
                <p className="text-lg text-muted-foreground mb-6">
                  Una sofisticata berlina elettrica con comfort impareggiabile e un focus sui materiali di lusso sostenibili.
                </p>
                
                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="px-4 py-3 bg-white/80 backdrop-blur-sm rounded-lg border border-gray-100">
                    <span className="text-sm font-medium">Autonomia: 650 km</span>
                  </div>
                  <div className="px-4 py-3 bg-white/80 backdrop-blur-sm rounded-lg border border-gray-100">
                    <span className="text-sm font-medium">Potenza: 500 cv</span>
                  </div>
                  <div className="px-4 py-3 bg-white/80 backdrop-blur-sm rounded-lg border border-gray-100">
                    <span className="text-sm font-medium">0-100 km/h: 3,6s</span>
                  </div>
                  <div className="px-4 py-3 bg-white/80 backdrop-blur-sm rounded-lg border border-gray-100">
                    <span className="text-sm font-medium">Velocità max: 250 km/h</span>
                  </div>
                </div>
                
                <h2 className="text-2xl font-display font-bold mb-4">Caratteristiche Distintive</h2>
                <ul className="space-y-2 mb-8">
                  <li className="flex items-start">
                    <span className="text-rosso mr-2">•</span>
                    <span>Sistema audio premium con 18 altoparlanti</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-rosso mr-2">•</span>
                    <span>Tetto panoramico con regolazione elettronica dell'opacità</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-rosso mr-2">•</span>
                    <span>Sedili con massaggio e ventilazione</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-rosso mr-2">•</span>
                    <span>Connettività avanzata con hotspot 5G integrato</span>
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
                    src="https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&w=1000&q=80"
                    alt="Aura - Berlina Elettrica di Lusso"
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
                      <span className="font-medium">100 kWh</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Tipo:</span>
                      <span className="font-medium">Litio-ione avanzato</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Ricarica rapida:</span>
                      <span className="font-medium">20 min (20-80%)</span>
                    </li>
                  </ul>
                </div>
                
                <div className="p-6 bg-white/80 backdrop-blur-sm rounded-lg border border-gray-100 shadow-sm">
                  <h3 className="text-lg font-semibold mb-3 text-eco">Comfort</h3>
                  <ul className="space-y-2">
                    <li className="flex justify-between">
                      <span>Climatizzazione:</span>
                      <span className="font-medium">Quadrizona</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Isolamento acustico:</span>
                      <span className="font-medium">Premium</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Sospensioni:</span>
                      <span className="font-medium">Adattive pneumatiche</span>
                    </li>
                  </ul>
                </div>
                
                <div className="p-6 bg-white/80 backdrop-blur-sm rounded-lg border border-gray-100 shadow-sm">
                  <h3 className="text-lg font-semibold mb-3 text-accent">Dimensioni</h3>
                  <ul className="space-y-2">
                    <li className="flex justify-between">
                      <span>Lunghezza:</span>
                      <span className="font-medium">5.050 mm</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Larghezza:</span>
                      <span className="font-medium">1.950 mm</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Altezza:</span>
                      <span className="font-medium">1.450 mm</span>
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

export default Aura;
