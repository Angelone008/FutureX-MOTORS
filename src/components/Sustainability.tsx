
import React, { useEffect, useRef } from 'react';
import { Recycle, TreePine, Cloud, Droplets } from 'lucide-react';

const initiatives = [
  {
    icon: <Recycle className="h-6 w-6 text-white" />,
    title: "Zero Waste Production",
    description: "Our manufacturing process aims for zero waste with 96% of materials either used in vehicles or recycled."
  },
  {
    icon: <TreePine className="h-6 w-6 text-white" />,
    title: "Reforestation Program",
    description: "For every vehicle produced, we plant 100 trees through our partnership with global reforestation initiatives."
  },
  {
    icon: <Cloud className="h-6 w-6 text-white" />,
    title: "Clean Energy Commitment",
    description: "Our facilities are powered by 100% renewable energy from solar, wind and hydroelectric sources."
  },
  {
    icon: <Droplets className="h-6 w-6 text-white" />,
    title: "Water Conservation",
    description: "Advanced water recycling systems reduce our manufacturing water usage by 85% compared to industry standards."
  }
];

const Sustainability: React.FC = () => {
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
    
    // Set up image lazy loading
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
    <section 
      id="sustainability" 
      className="section-padding overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        <div 
          ref={sectionRef}
          className="fade-in-section"
        >
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block px-3 py-1 mb-4 rounded-full bg-eco/10 border border-eco/20">
                <span className="text-xs uppercase tracking-widest font-medium text-eco-dark">Eco Commitment</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
                Sustainable Innovation at Every Step
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Our commitment to sustainability goes beyond zero-emission vehicles. We're dedicated to environmentally responsible practices across our entire operation, from design to manufacturing to the lifecycle of our vehicles.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                {initiatives.map((initiative, index) => (
                  <div 
                    key={index}
                    className="flex gap-4 p-4 rounded-xl eco-gradient text-white"
                  >
                    <div className="shrink-0 p-2 bg-black/10 rounded-lg">
                      {initiative.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">{initiative.title}</h3>
                      <p className="text-sm text-white/90">{initiative.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <a 
                href="#"
                className="button-hover inline-flex items-center px-6 py-3 rounded-lg bg-white border border-gray-200 font-medium"
              >
                <span>Learn more about our eco initiatives</span>
                <svg className="ml-2 w-4 h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            </div>
            
            <div className="relative">
              <div className="absolute -left-16 -right-16 top-1/2 h-60 -translate-y-1/2 bg-eco/10 rounded-full blur-3xl"></div>
              <div className="relative bg-white p-4 rounded-2xl shadow-xl">
                <div className="aspect-[4/3] rounded-xl overflow-hidden">
                  <img
                    ref={imageRef}
                    src="https://images.unsplash.com/photo-1507208773393-40d9fc670acf?auto=format&fit=crop&w=1000&q=80"
                    alt="Sustainable manufacturing at G.D.B Motors"
                    className="w-full h-full object-cover lazy-image"
                  />
                </div>
                <div className="absolute bottom-8 left-8 right-8 glass-card p-4 rounded-lg">
                  <p className="text-sm font-medium">
                    Our manufacturing facility in Northern Italy, powered by 100% renewable energy and featuring living green walls.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sustainability;
