
import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Features from '../components/Features';
import Models from '../components/Models';
import ElectricEngine from '../components/ElectricEngine';
import UrbanMobility from '../components/UrbanMobility';
import Sustainability from '../components/Sustainability';
import Footer from '../components/Footer';
import AnimatedGradientBackground from '../components/AnimatedGradientBackground';

const Index: React.FC = () => {
  useEffect(() => {
    // Intersection Observer for fade-in sections
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    // Apply to all fade-in-section elements
    document.querySelectorAll('.fade-in-section').forEach((section) => {
      observer.observe(section);
    });

    return () => {
      document.querySelectorAll('.fade-in-section').forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <AnimatedGradientBackground />
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Models />
        <ElectricEngine />
        <UrbanMobility />
        <Sustainability />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
