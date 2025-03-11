
import React, { useEffect, useRef } from 'react';
import { Leaf, Globe, Battery, Zap } from 'lucide-react';

const features = [
  {
    icon: <Leaf className="h-8 w-8 text-eco" />,
    title: "Eco-Friendly Materials",
    description: "Our prototypes use sustainable materials including recycled carbon fiber, bio-based composites, and vegan leather alternatives."
  },
  {
    icon: <Battery className="h-8 w-8 text-eco" />,
    title: "Next-Gen Battery Tech",
    description: "Advanced lithium-ion technology with 30% greater energy density and a 500+ km range on a single charge."
  },
  {
    icon: <Zap className="h-8 w-8 text-eco" />,
    title: "Rapid Charging",
    description: "Ultra-fast charging system allows 80% battery capacity in just 15 minutes at compatible charging stations."
  },
  {
    icon: <Globe className="h-8 w-8 text-eco" />,
    title: "Carbon Neutral",
    description: "Manufacturing process designed to minimize carbon footprint, with 100% renewable energy powering our facilities."
  }
];

const Features: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
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
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);
  
  return (
    <section 
      id="about" 
      className="section-padding bg-white"
    >
      <div className="max-w-7xl mx-auto">
        <div 
          ref={sectionRef}
          className="fade-in-section"
        >
          <div className="text-center mb-16">
            <div className="inline-block px-3 py-1 mb-4 rounded-full bg-eco/10 border border-eco/20">
              <span className="text-xs uppercase tracking-widest font-medium text-eco-dark">About G.D.B Motors</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
              Pioneer in Electric Automotive Design
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              G.D.B MOTORS ITALIA combines Italian craftsmanship with cutting-edge electric technology to create the sustainable luxury vehicles of tomorrow.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="glass-card p-6 rounded-xl transition-all duration-500 hover:shadow-xl"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="mb-4 p-3 inline-block rounded-lg bg-eco/10">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
