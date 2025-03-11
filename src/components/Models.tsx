
import React, { useState, useEffect, useRef } from 'react';

const models = [
  {
    id: 'eterno',
    name: 'Eterno GT',
    category: 'Grand Tourer',
    description: 'Our flagship electric grand tourer combines sleek Italian design with 700 km range and 0-100 km/h in 2.8 seconds.',
    specs: ['Range: 700 km', 'Power: 850 hp', '0-100 km/h: 2.8s', 'Top Speed: 330 km/h'],
    image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1000&q=80'
  },
  {
    id: 'aura',
    name: 'Aura',
    category: 'Luxury Sedan',
    description: 'A sophisticated electric sedan with unparalleled comfort and a focus on sustainable luxury materials.',
    specs: ['Range: 650 km', 'Power: 500 hp', '0-100 km/h: 3.6s', 'Top Speed: 250 km/h'],
    image: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&w=1000&q=80'
  },
  {
    id: 'vento',
    name: 'Vento',
    category: 'Sport SUV',
    description: 'Electric performance SUV that combines versatility with the soul of a sports car and zero emissions.',
    specs: ['Range: 580 km', 'Power: 650 hp', '0-100 km/h: 3.4s', 'Top Speed: 240 km/h'],
    image: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1000&q=80'
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
            <div className="inline-block px-3 py-1 mb-4 rounded-full bg-eco/10 border border-eco/20">
              <span className="text-xs uppercase tracking-widest font-medium text-eco-dark">Our Models</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
              Electric Prototype Collection
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Discover our exclusive range of electric prototypes, where innovation meets Italian design excellence.
            </p>
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
                        ? 'bg-eco text-white shadow-md' 
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
                        className="px-4 py-3 bg-white/80 backdrop-blur-sm rounded-lg border border-gray-100"
                      >
                        <span className="text-sm font-medium">{spec}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div>
                    <a 
                      href="#contact" 
                      className="button-hover inline-block px-8 py-3 rounded-lg bg-eco text-white font-medium"
                    >
                      Inquire About {models[activeModel].name}
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
        </div>
      </div>
    </section>
  );
};

export default Models;
