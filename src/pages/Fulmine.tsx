
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import AnimatedGradientBackground from '../components/AnimatedGradientBackground';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const Fulmine = () => {
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
              <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">Fulmine</h1>
              <div className="mb-4 inline-block px-3 py-1 rounded-md bg-rosso/10 border border-rosso/20">
                <span className="text-sm font-medium text-rosso-dark">Supercar Elettrica</span>
              </div>
              
              <p className="text-lg text-muted-foreground mb-8">
                La nostra supercar più estrema, progettata per offrire prestazioni senza compromessi. Con quattro motori elettrici indipendenti, telaio in fibra di carbonio e aerodinamica attiva, la Fulmine è l'apice dell'innovazione automobilistica elettrica.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="p-5 rounded-lg bg-accent/5 border border-accent/10">
                  <h3 className="text-sm font-semibold text-muted-foreground mb-4">Specifiche Tecniche</h3>
                  <ul className="space-y-3">
                    <li className="flex items-center justify-between">
                      <span className="text-sm">Autonomia</span>
                      <span className="text-sm font-medium">520 km</span>
                    </li>
                    <li className="flex items-center justify-between">
                      <span className="text-sm">Potenza</span>
                      <span className="text-sm font-medium">1200 cv</span>
                    </li>
                    <li className="flex items-center justify-between">
                      <span className="text-sm">0-100 km/h</span>
                      <span className="text-sm font-medium">1,9s</span>
                    </li>
                    <li className="flex items-center justify-between">
                      <span className="text-sm">Velocità max</span>
                      <span className="text-sm font-medium">350 km/h</span>
                    </li>
                    <li className="flex items-center justify-between">
                      <span className="text-sm">Batteria</span>
                      <span className="text-sm font-medium">100 kWh</span>
                    </li>
                  </ul>
                </div>
                
                <div className="p-5 rounded-lg bg-eco/5 border border-eco/10">
                  <h3 className="text-sm font-semibold text-muted-foreground mb-4">Caratteristiche</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="text-eco mr-2 text-lg">•</span>
                      <span className="text-sm">Controllo vettoriale della coppia</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-eco mr-2 text-lg">•</span>
                      <span className="text-sm">Modalità pista con boost di potenza</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-eco mr-2 text-lg">•</span>
                      <span className="text-sm">Alettone posteriore attivo</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-eco mr-2 text-lg">•</span>
                      <span className="text-sm">Diffusore aerodinamico avanzato</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-eco mr-2 text-lg">•</span>
                      <span className="text-sm">Abitacolo tipo monoposto F1</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="p-6 bg-rosso/5 rounded-xl mb-8">
                <h3 className="text-lg font-display font-bold mb-3">Prestazioni da Record</h3>
                <p className="text-sm text-muted-foreground">
                  La Fulmine è progettata per stabilire nuovi record su pista. Il suo sistema di propulsione elettrica multimotore offre una risposta istantanea e un'accelerazione bruciante, mentre il suo telaio in fibra di carbonio garantisce leggerezza e rigidità torsionale ai vertici della categoria.
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
                  src="/lovable-uploads/8e543a9c-ec0d-4f9d-a52f-8aaf74c1faa1.png" 
                  alt="FutureX-Motors Fulmine Supercar Elettrica" 
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="p-6 bg-white/80 backdrop-blur-sm rounded-xl border border-accent/10">
                <h3 className="text-xl font-display font-bold mb-4">Tecnologia da Competizione</h3>
                <p className="text-muted-foreground mb-4">
                  La Fulmine incorpora soluzioni tecniche derivate direttamente dal mondo delle competizioni. Il suo sistema di raffreddamento avanzato garantisce prestazioni costanti anche nelle condizioni più estreme.
                </p>
                <p className="text-muted-foreground">
                  Il telaio, sviluppato in collaborazione con i migliori ingegneri della Formula E, è ottimizzato per garantire la massima rigidità con il minimo peso. Ogni componente è stato progettato con l'obiettivo di massimizzare le prestazioni e l'efficienza.
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

export default Fulmine;
