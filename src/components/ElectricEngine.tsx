
import React, { useEffect, useRef } from 'react';
import { Zap, Battery, Activity, Award } from 'lucide-react';

const ElectricEngine: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  
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
    
    const imgObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && imageRef.current) {
          imageRef.current.classList.add('loaded');
          imgObserver.unobserve(entry.target);
        }
      });
    });
    
    if (imageRef.current) {
      imgObserver.observe(imageRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
      if (imageRef.current) {
        imgObserver.unobserve(imageRef.current);
      }
    };
  }, []);
  
  return (
    <section id="innovation" className="section-padding bg-gradient-to-br from-secondary to-secondary/80">
      <div className="max-w-7xl mx-auto">
        <div 
          ref={sectionRef}
          className="fade-in-section"
        >
          <div className="text-center mb-16">
            <div className="inline-block px-3 py-1 mb-4 rounded-full bg-accent/20 border border-accent/30">
              <span className="text-xs uppercase tracking-widest font-medium text-white">Innovazione Tecnologica</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-6 text-white">
              Il Cuore Elettrico delle Nostre Vetture
            </h2>
            <p className="text-lg text-white/90 max-w-3xl mx-auto font-medium">
              La vera rivoluzione delle nostre auto è il motore elettrico GDB-Power, un'innovazione ingegneristica che stabilisce nuovi standard nel settore della mobilità elettrica.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="rounded-xl overflow-hidden shadow-2xl">
              <img
                ref={imageRef}
                src="/lovable-uploads/9f7e5e87-6061-497b-8b5f-d922f1a34ed3.png"
                alt="Architettura del motore elettrico GDB-Power"
                className="w-full h-auto lazy-image"
              />
            </div>
            
            <div className="space-y-8">
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border-l-4 border-accent">
                <h3 className="flex items-center gap-3 text-2xl font-bold text-white mb-3">
                  <Zap className="h-7 w-7 text-accent" />
                  Tecnologia Dual-Motor
                </h3>
                <p className="text-white/90 text-lg font-medium">
                  Il sistema propulsivo avanzato GDB-Power è dotato di due motori sincroni a magneti permanenti che offrono una distribuzione perfetta della potenza e una coppia istantanea senza precedenti.
                </p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border-l-4 border-eco">
                <h3 className="flex items-center gap-3 text-2xl font-bold text-white mb-3">
                  <Battery className="h-7 w-7 text-eco" />
                  Efficienza Superiore
                </h3>
                <p className="text-white/90 text-lg font-medium">
                  Il nostro motore elettrico raggiunge un'efficienza del 96%, convertendo quasi tutta l'energia della batteria in movimento, minimizzando le dispersioni e massimizzando l'autonomia.
                </p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border-l-4 border-rosso">
                <h3 className="flex items-center gap-3 text-2xl font-bold text-white mb-3">
                  <Activity className="h-7 w-7 text-rosso" />
                  Performance Eccezionali
                </h3>
                <p className="text-white/90 text-lg font-medium">
                  La straordinaria potenza di 450 kW e la coppia di 900 Nm consentono accelerazioni fulminee (0-100 km/h in soli 3,2 secondi) mantenendo un controllo preciso in ogni condizione.
                </p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border-l-4 border-accent">
                <h3 className="flex items-center gap-3 text-2xl font-bold text-white mb-3">
                  <Award className="h-7 w-7 text-accent" />
                  Brevetto Italiano
                </h3>
                <p className="text-white/90 text-lg font-medium">
                  Il sistema di raffreddamento a liquido brevettato permette prestazioni costanti anche durante l'uso intensivo e una durata operativa superiore rispetto ai motori elettrici tradizionali.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ElectricEngine;
