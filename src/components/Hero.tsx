"use client";

import { useEffect, useRef } from "react";

export default function Hero() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, { threshold: 0.1 });

    const reveals = document.querySelectorAll('#hero .reveal');
    reveals.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-[5rem] overflow-hidden">

      <div className="absolute inset-0 bg-tech-grid opacity-50 z-0 pointer-events-none"></div>
      <svg className="absolute inset-0 w-full h-full z-0 opacity-20 pointer-events-none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="20%" cy="30%" r="2" fill="var(--color-nw-graphite)" className="grid-node" style={{ animationDelay: '0s' }}></circle>
        <circle cx="80%" cy="40%" r="2" fill="var(--color-nw-graphite)" className="grid-node" style={{ animationDelay: '1s' }}></circle>
        <circle cx="60%" cy="70%" r="2" fill="var(--color-nw-graphite)" className="grid-node" style={{ animationDelay: '2s' }}></circle>
        <circle cx="30%" cy="80%" r="2" fill="var(--color-nw-graphite)" className="grid-node" style={{ animationDelay: '0.5s' }}></circle>
        <line x1="20%" y1="30%" x2="80%" y2="40%" stroke="var(--color-nw-graphite)" strokeWidth="0.5" strokeDasharray="2 2"></line>
        <line x1="80%" y1="40%" x2="60%" y2="70%" stroke="var(--color-nw-graphite)" strokeWidth="0.5" strokeDasharray="2 2"></line>
        <line x1="60%" y1="70%" x2="30%" y2="80%" stroke="var(--color-nw-graphite)" strokeWidth="0.5" strokeDasharray="2 2"></line>
      </svg>


      <div className="max-w-[clamp(70rem,95vw,100rem)] mx-auto px-[clamp(1.5rem,5vw,4rem)] w-full relative z-10 grid grid-cols-12 gap-[clamp(1.5rem,3vw,2.5rem)]">
        <div className="col-span-12 lg:col-span-8 reveal">
          <h1 className="font-display font-bold text-[clamp(3rem,7vw,6.5rem)] leading-[0.9] track-tighter text-nw-black mb-[clamp(1.5rem,3vw,2.5rem)] uppercase">
            BUILD SUPERIOR<br />SOFTWARE.<br />
            <span className="text-nw-acid">DOMINATE YOUR MARKET.</span>
          </h1>
          
          <p className="font-body text-[clamp(1rem,1.2vw,1.125rem)] leading-relaxed text-nw-graphite max-w-[55ch] mb-[clamp(2.5rem,5vw,4rem)]">

            Most agencies sell you "premium" fluff. We just build software that works. High-performance architecture for teams that actually care about their product.
          </p>


          <div className="flex flex-wrap items-center gap-6">
            <a 
              href="#onboarding" 
              className="relative px-[clamp(1.5rem,3vw,2rem)] py-[clamp(0.75rem,2vw,1rem)] font-mono font-medium text-xs uppercase track-widest text-nw-bone bg-nw-black clip-button overflow-hidden group transition-all duration-300 hover:bg-nw-acid hover:-translate-y-1"
            >

              <span className="relative z-10 transition-all duration-300 group-hover:-translate-y-full group-hover:opacity-0 block">
                Fix Your App
              </span>
              <span className="absolute inset-0 flex items-center justify-center translate-y-full transition-all duration-300 group-hover:translate-y-0 group-hover:text-white text-nw-bone">
                IT IS BROKEN...
              </span>
            </a>

            <a 
              href="#services" 
              className="font-mono text-xs uppercase track-widest text-nw-black border-b border-nw-black pb-1 hover:text-nw-acid hover:border-nw-acid transition-all duration-300 relative overflow-hidden group h-[1.2em] inline-block"
            >
              <span className="relative z-10 transition-all duration-300 group-hover:-translate-y-full group-hover:opacity-0 block">
                What we actually do
              </span>
              <span className="absolute inset-0 flex items-center translate-y-full transition-all duration-300 group-hover:translate-y-0 text-nw-acid">
                No nonsense work.
              </span>
            </a>

          </div>

          <div className="mt-[clamp(3rem,6vw,5rem)] flex items-center gap-4 border-t border-nw-graphite/20 pt-6">
            <span className="iconify text-nw-acid text-2xl" data-icon="solar:shield-check-linear"></span>
            <p className="font-mono text-xs uppercase track-widest text-nw-graphite">
              Zero fluff. Total transparency.
            </p>
          </div>
        </div>

        <div className="hidden lg:flex col-span-4 flex-col justify-end pb-12 reveal" style={{ transitionDelay: '0.2s' }}>
          <div className="border-l border-nw-graphite/20 pl-8 space-y-8 relative">
            <div>
              <div className="font-mono text-xs uppercase track-widest text-nw-graphite mb-2">Production Deployments (YTD)</div>
              <div className="font-display font-bold text-[clamp(2rem,3vw,3.5rem)] track-tighter text-nw-acid flex items-baseline gap-1">
                <span className="counter" data-target="428" data-decimals="0">428</span>
                <span className="w-2 h-2 rounded-full bg-nw-acid animate-pulse mb-4"></span>
              </div>

            </div>
            <div>
              <div className="font-mono text-xs uppercase track-widest text-nw-graphite mb-2">Infrastructure Status</div>
              <div className="font-mono text-sm text-nw-black flex items-center gap-2">
                <span className="iconify text-nw-acid" data-icon="solar:server-square-linear"></span>
                Algorithmic Deployment Active
              </div>
            </div>
          </div>
        </div>

      </div>

    </section>
  );
}
