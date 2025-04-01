
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import AnimatedGradientBackground from '../components/AnimatedGradientBackground';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const Stella = () => {
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
              <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">Stella</h1>
              <div className="mb-4 inline-block px-3 py-1 rounded-md bg-rosso/10 border border-rosso/20">
                <span className="text-sm font-medium text-rosso-dark">Roadster Elettrica</span>
              </div>
              
              <p className="text-lg text-muted-foreground mb-8">
                Un'esperienza di guida a cielo aperto che unisce le emozioni di una roadster classica con le prestazioni e la sostenibilità della propulsione elettrica. Design affascinante, prestazioni eccezionali e precisione di guida impareggiabile.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="p-5 rounded-lg bg-accent/5 border border-accent/10">
                  <h3 className="text-sm font-semibold text-muted-foreground mb-4">Specifiche Tecniche</h3>
                  <ul className="space-y-3">
                    <li className="flex items-center justify-between">
                      <span className="text-sm">Autonomia</span>
                      <span className="text-sm font-medium">480 km</span>
                    </li>
                    <li className="flex items-center justify-between">
                      <span className="text-sm">Potenza</span>
                      <span className="text-sm font-medium">720 cv</span>
                    </li>
                    <li className="flex items-center justify-between">
                      <span className="text-sm">0-100 km/h</span>
                      <span className="text-sm font-medium">2,5s</span>
                    </li>
                    <li className="flex items-center justify-between">
                      <span className="text-sm">Velocità max</span>
                      <span className="text-sm font-medium">310 km/h</span>
                    </li>
                    <li className="flex items-center justify-between">
                      <span className="text-sm">Batteria</span>
                      <span className="text-sm font-medium">85 kWh</span>
                    </li>
                  </ul>
                </div>
                
                <div className="p-5 rounded-lg bg-eco/5 border border-eco/10">
                  <h3 className="text-sm font-semibold text-muted-foreground mb-4">Caratteristiche</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="text-eco mr-2 text-lg">•</span>
                      <span className="text-sm">Capote elettrica in tessuto premium</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-eco mr-2 text-lg">•</span>
                      <span className="text-sm">Interni in pelle sostenibile</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-eco mr-2 text-lg">•</span>
                      <span className="text-sm">Sistema audio immersivo da 1200W</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-eco mr-2 text-lg">•</span>
                      <span className="text-sm">Sospensioni adattive con modalità Track</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-eco mr-2 text-lg">•</span>
                      <span className="text-sm">Impianto frenante carboceramico</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="p-6 bg-rosso/5 rounded-xl mb-8">
                <h3 className="text-lg font-display font-bold mb-3">L'Esperienza Roadster</h3>
                <p className="text-sm text-muted-foreground">
                  La Stella è progettata per offrire il massimo piacere di guida a cielo aperto. Il suo telaio rinforzato garantisce rigidità torsionale ai vertici della categoria, mentre il baricentro basso assicura una maneggevolezza eccezionale e un handling preciso anche nelle situazioni più impegnative.
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
                  src="/lovable-uploads/fcbd5bfa-bc54-4944-8dc5-6b1fc56afe96.png" 
                  alt="FutureX-Motors Stella Roadster Elettrica" 
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="p-6 bg-white/80 backdrop-blur-sm rounded-xl border border-accent/10">
                <h3 className="text-xl font-display font-bold mb-4">Sostenibilità e Prestazioni</h3>
                <p className="text-muted-foreground mb-4">
                  La Stella combina l'emozione di guida tipica delle roadster tradizionali con l'accelerazione istantanea e la fluidità di marcia dei motori elettrici. Il tutto senza emissioni e con un livello di efficienza energetica ai vertici della categoria.
                </p>
                <p className="text-muted-foreground">
                  Gli interni sono realizzati con materiali eco-sostenibili di altissima qualità, ottenuti da fonti rinnovabili o riciclate, senza compromettere il lusso e l'eleganza che ci si aspetta da una roadster di questo calibro.
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

export default Stella;
