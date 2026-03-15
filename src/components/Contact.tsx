"use client";

import { useEffect, useRef } from "react";

export default function Contact() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, { threshold: 0.1 });

    const reveals = document.querySelectorAll('#onboarding .reveal');
    reveals.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="onboarding" className="py-[clamp(6rem,12vw,12rem)] bg-nw-bone relative overflow-hidden">
      <div className="absolute inset-0 bg-tech-grid opacity-30 z-0 pointer-events-none" style={{ backgroundSize: '30px 30px' }}></div>

      <div className="max-w-[clamp(70rem,95vw,100rem)] mx-auto px-[clamp(1.5rem,5vw,4rem)] relative z-10 text-center flex flex-col items-center reveal">
        <h2 className="font-display font-bold text-[clamp(3rem,8vw,7rem)] leading-[0.9] track-tightest text-nw-black mb-10 uppercase">
          Ready to stop<br />wasting <span className="text-nw-acid">everyone's time?</span>
        </h2>


        
        <p className="font-body text-[clamp(1rem,1.3vw,1.35rem)] text-nw-graphite max-w-[50ch] mb-12">
          If you're serious about your product, we're serious about building it. If you just want to talk about "synergy," go somewhere else.
        </p>

        <a 
          href="#" 
          className="relative px-[clamp(2rem,4vw,3.5rem)] py-[clamp(1rem,2vw,1.5rem)] font-mono font-medium text-sm md:text-base uppercase track-widest text-nw-bone bg-nw-black clip-button overflow-hidden transition-all duration-500 hover:bg-nw-acid hover:-translate-y-2 group inline-flex items-center justify-center min-w-[280px]"
        >
          <span className="relative z-10 transition-all duration-500 group-hover:-translate-y-full group-hover:opacity-0 block whitespace-nowrap">
            Talk to us
          </span>
          <span className="absolute inset-0 flex items-center justify-center translate-y-full transition-all duration-500 group-hover:translate-y-0 group-hover:text-white text-nw-bone whitespace-nowrap">
            Get a reality check
          </span>
        </a>



        <div className="mt-12 font-mono text-[10px] md:text-xs uppercase track-widest text-nw-graphite flex items-center gap-3">
          <span className="iconify text-nw-acid" data-icon="solar:info-circle-linear"></span>
          Typical engagement starts at $2k. Don't ask for a discount.
        </div>
      </div>
    </section>

  );
}
