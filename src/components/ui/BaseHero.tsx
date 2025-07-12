import React, { ReactNode } from 'react';

interface Particle {
  left: string;
  top: string;
  animationDelay: string;
  animationDuration: string;
}

interface BaseHeroProps {
  backgroundClass?: string; // Use CSS class instead of dynamic background
  className?: string;
  children: ReactNode;
  particleCount?: number;
  overlay?: 'luxury' | 'aviation' | 'dark';
}

const BaseHero: React.FC<BaseHeroProps> = ({
  backgroundClass = 'bg-hero-default',
  className = '',
  children,
  particleCount = 25,
  overlay = 'luxury'
}) => {
  // Generate floating particles positions
  const particles: Particle[] = Array.from({ length: particleCount }, () => ({
    left: `${Math.random() * 100}%`,
    top: `${Math.random() * 100}%`,
    animationDelay: `${Math.random() * 5}s`,
    animationDuration: `${5 + Math.random() * 5}s`,
  }));

  const overlayClasses = {
    luxury: 'bg-luxury-gradient',
    aviation: 'bg-aviation-gradient',
    dark: 'bg-gradient-to-r from-slate-900/85 to-slate-800/85'
  };

  return (
    <div
      className={`relative overflow-hidden ${backgroundClass} py-16 md:py-20 ${className}`}
    >
      {/* Background Overlay */}
      <div className={`absolute inset-0 ${overlayClasses[overlay]} pointer-events-none`} />

      {/* Aviation Gold Glow Orbs */}
      <div className="absolute -top-1/2 right-0 h-[600px] w-[600px] animate-pulse rounded-full bg-gradient-to-r from-aviationGold/10 via-yellow-500/10 to-orange-500/10 blur-3xl" />
      <div className="absolute -bottom-1/2 left-0 h-[600px] w-[600px] animate-pulse rounded-full bg-gradient-to-r from-orange-500/10 via-aviationGold/10 to-yellow-500/10 blur-3xl" />

      {/* Floating Particles */}
      <div className="absolute inset-0">
        {particles.map((particle, i) => (
          <div
            key={i}
            className="absolute h-1 w-1 rounded-full bg-aviationGold/20 animate-float"
            style={particle}
          />
        ))}
      </div>

      {/* Subtle Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(194,165,66,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(194,165,66,0.02)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

      {/* Content Container */}
      <div className="relative relaxed-container text-center">
        {children}
      </div>
    </div>
  );
};

export default BaseHero;
export type { BaseHeroProps };
