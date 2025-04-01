
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import AnimatedGradientBackground from '../components/AnimatedGradientBackground';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const Lampo = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <AnimatedGradientBackground />
      <Navbar />
      
      <main className="pt-24 flex-grow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
          <Link to="/" className="inline-flex items-center mb-8 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Torna alla Home
          </Link>
          
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">Lampo</h1>
              <div className="mb-4 inline-block px-3 py-1 rounded-md bg-rosso/10 border border-rosso/20">
                <span className="text-sm font-medium text-rosso-dark">Hypercar Elettrica</span>
              </div>
              
              <p className="text-lg text-muted-foreground mb-8">
                La nostra hypercar di punta, un'esclusiva opera d'arte tecnologica prodotta in soli 25 esemplari. Con prestazioni da record mondiale, la Lampo ridefinisce il concetto di automobile elettrica estrema combinando potenza, leggerezza e design futuristico.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="p-5 rounded-lg bg-accent/5 border border-accent/10">
                  <h3 className="text-sm font-semibold text-muted-foreground mb-4">Specifiche Tecniche</h3>
                  <ul className="space-y-3">
                    <li className="flex items-center justify-between">
                      <span className="text-sm">Autonomia</span>
                      <span className="text-sm font-medium">450 km</span>
                    </li>
                    <li className="flex items-center justify-between">
                      <span className="text-sm">Potenza</span>
                      <span className="text-sm font-medium">1800 cv</span>
                    </li>
                    <li className="flex items-center justify-between">
                      <span className="text-sm">0-100 km/h</span>
                      <span className="text-sm font-medium">1,6s</span>
                    </li>
                    <li className="flex items-center justify-between">
                      <span className="text-sm">Velocità max</span>
                      <span className="text-sm font-medium">420 km/h</span>
                    </li>
                    <li className="flex items-center justify-between">
                      <span className="text-sm">Batteria</span>
                      <span className="text-sm font-medium">120 kWh</span>
                    </li>
                  </ul>
                </div>
                
                <div className="p-5 rounded-lg bg-eco/5 border border-eco/10">
                  <h3 className="text-sm font-semibold text-muted-foreground mb-4">Caratteristiche</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="text-eco mr-2 text-lg">•</span>
                      <span className="text-sm">Telaio monoscocca in fibra di carbonio</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-eco mr-2 text-lg">•</span>
                      <span className="text-sm">Sistema aerodinamico attivo</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-eco mr-2 text-lg">•</span>
                      <span className="text-sm">Quattro motori elettrici indipendenti</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-eco mr-2 text-lg">•</span>
                      <span className="text-sm">Ricarica ultra-rapida (10-80% in 15 min)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-eco mr-2 text-lg">•</span>
                      <span className="text-sm">Display digitale con realtà aumentata</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="p-6 bg-rosso/5 rounded-xl mb-8">
                <h3 className="text-lg font-display font-bold mb-3">Edizione Limitata</h3>
                <p className="text-sm text-muted-foreground">
                  La Lampo è un'esclusiva supercar elettrica prodotta in soli 25 esemplari numerati. Ogni vettura è realizzata su misura secondo le specifiche del cliente e include un programma di assistenza dedicato.
                </p>
              </div>
              
              <a 
                href="#contact" 
                className="w-full py-3 px-8 bg-rosso text-white rounded-lg font-medium inline-block text-center button-hover"
              >
                Richiedi Informazioni
              </a>
            </div>
            
            <div className="space-y-6">
              <div className="h-[400px] rounded-xl overflow-hidden shadow-xl">
                <img 
                  src="/lovable-uploads/641220f0-f416-46d8-b33f-7057ea223bb8.png" 
                  alt="FutureX-Motors Lampo Hypercar Elettrica" 
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="p-6 bg-white/80 backdrop-blur-sm rounded-xl border border-accent/10">
                <h3 className="text-xl font-display font-bold mb-4">Tecnologia all'avanguardia</h3>
                <p className="text-muted-foreground mb-4">
                  La Lampo utilizza la nostra più avanzata tecnologia di propulsione elettrica: quattro motori indipendenti, uno per ruota, che garantiscono un controllo vettoriale della coppia senza precedenti e prestazioni straordinarie.
                </p>
                <p className="text-muted-foreground">
                  Il pacco batterie, sviluppato in collaborazione con i leader mondiali del settore, offre la più alta densità energetica mai vista su un'auto di produzione, garantendo allo stesso tempo un'eccellente gestione termica e ricarica ultra-rapida.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Lampo;
