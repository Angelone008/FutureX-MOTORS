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
                  La nostra ammiraglia elettrica grand tourer rappresenta l'apice dell'eleganza italiana e dell'innovazione tecnologica. Ogni dettaglio è stato progettato per offrire un'esperienza di guida senza precedenti, combinando prestazioni eccezionali con un comfort lussuoso e sostenibilità ambientale.
                </p>
                
            {/* Change the brand mention */}
            <div className="bg-white/80 backdrop-blur-sm p-4 rounded-lg shadow-lg border-l-4 border-rosso mb-8">
              <p className="text-lg font-display italic font-medium text-rosso-dark">
                "Percorri la strada del futuro, con FutureX Motors, più verde e sostenibile!"
              </p>
            </div>
                
                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="px-4 py-3 bg-white/80 backdrop-blur-sm rounded-lg border border-gray-100 shadow-md">
                    <span className="text-sm font-medium">Autonomia: 700 km</span>
                  </div>
                  <div className="px-4 py-3 bg-white/80 backdrop-blur-sm rounded-lg border border-gray-100 shadow-md">
                    <span className="text-sm font-medium">Potenza: 850 cv</span>
                  </div>
                  <div className="px-4 py-3 bg-white/80 backdrop-blur-sm rounded-lg border border-gray-100 shadow-md">
                    <span className="text-sm font-medium">0-100 km/h: 2,8s</span>
                  </div>
                  <div className="px-4 py-3 bg-white/80 backdrop-blur-sm rounded-lg border border-gray-100 shadow-md">
                    <span className="text-sm font-medium">Velocità max: 330 km/h</span>
                  </div>
                </div>
                
                <h2 className="text-2xl font-display font-bold mb-4">Caratteristiche Distintive</h2>
                <ul className="space-y-3 mb-8 text-base">
                  <li className="flex items-start">
                    <span className="text-rosso mr-2 text-xl">•</span>
                    <span>Carrozzeria in fibra di carbonio riciclata con tecnologia proprietaria per ridurre il peso e aumentare la rigidità strutturale</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-rosso mr-2 text-xl">•</span>
                    <span>Sistema di ricarica ultra-veloce con tecnologia brevettata che permette di ricaricare dal 10% all'80% in soli 15 minuti</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-rosso mr-2 text-xl">•</span>
                    <span>Interni in pelle vegana di lusso prodotta con materiali riciclati e processi a basso impatto ambientale</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-rosso mr-2 text-xl">•</span>
                    <span>Sistema di assistenza alla guida autonoma di livello 3 con 12 sensori LiDAR e intelligenza artificiale adattiva</span>
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
                    src="/lovable-uploads/05ed10e9-f686-4de9-a2ff-0530a185ca93.png"
                    alt="Eterno GT - Grand Tourer Elettrica di lusso in design futuristico"
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
