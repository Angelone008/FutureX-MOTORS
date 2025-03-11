
import React, { useEffect, useRef } from 'react';

const AnimatedGradientBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    let width = window.innerWidth;
    let height = window.innerHeight;
    
    const resizeCanvas = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };
    
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    
    const particles: {
      x: number;
      y: number;
      radius: number;
      color: string;
      speedX: number;
      speedY: number;
    }[] = [];
    
    const colors = [
      'rgba(76, 175, 80, 0.05)',
      'rgba(46, 125, 50, 0.05)',
      'rgba(200, 230, 201, 0.05)',
      'rgba(232, 245, 233, 0.05)'
    ];
    
    const createParticles = () => {
      for (let i = 0; i < 50; i++) {
        const radius = Math.random() * 80 + 20;
        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          radius,
          color: colors[Math.floor(Math.random() * colors.length)],
          speedX: (Math.random() - 0.5) * 0.3,
          speedY: (Math.random() - 0.5) * 0.3
        });
      }
    };
    
    createParticles();
    
    const animate = () => {
      ctx.clearRect(0, 0, width, height);
      
      particles.forEach(particle => {
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        ctx.fillStyle = particle.color;
        ctx.fill();
        
        particle.x += particle.speedX;
        particle.y += particle.speedY;
        
        if (particle.x > width + particle.radius) {
          particle.x = -particle.radius;
        } else if (particle.x < -particle.radius) {
          particle.x = width + particle.radius;
        }
        
        if (particle.y > height + particle.radius) {
          particle.y = -particle.radius;
        } else if (particle.y < -particle.radius) {
          particle.y = height + particle.radius;
        }
      });
      
      requestAnimationFrame(animate);
    };
    
    animate();
    
    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);
  
  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full -z-10"
      style={{ pointerEvents: 'none' }}
    />
  );
};

export default AnimatedGradientBackground;
