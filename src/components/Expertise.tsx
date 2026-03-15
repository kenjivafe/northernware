"use client";

import { useEffect, useRef } from "react";

export default function Expertise() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, { threshold: 0.1 });

    const reveals = document.querySelectorAll('#expertise .reveal, #expertise .scroll-trigger');
    reveals.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);


  return (
    <section id="expertise" className="py-[clamp(5rem,10vw,10rem)] relative">
      <div className="max-w-[clamp(70rem,95vw,100rem)] mx-auto px-[clamp(1.5rem,5vw,4rem)] grid grid-cols-12 gap-[clamp(1.5rem,3vw,2.5rem)] relative">
        
        <div className="absolute left-[clamp(1.5rem,5vw,4rem)] top-0 bottom-0 w-[1px] bg-nw-graphite/20 hidden lg:block">
          <div className="w-full bg-nw-acid draw-line-y scroll-trigger"></div>
        </div>

        <div className="col-span-12 lg:col-span-4 lg:pl-12 reveal">
          <div className="font-mono text-[10px] md:text-xs uppercase track-widest text-nw-graphite mb-6 flex items-center gap-4 before:content-[''] before:w-8 before:h-[1px] before:bg-nw-acid">
            [THE REALITY CHECK]
          </div>
        </div>

        <div className="col-span-12 lg:col-span-8 reveal" style={{ transitionDelay: '0.1s' }}>
          <h2 className="font-display font-bold text-[clamp(2rem,5vw,4rem)] leading-[1] track-tightest text-nw-black mb-[clamp(2rem,4vw,3rem)]">
            Technical debt is a <span className="scramble inline-block cursor-crosshair transition-colors duration-200">Cancer.</span>
          </h2>

          <div className="w-full h-[1px] bg-nw-graphite/20 mb-[clamp(2rem,4vw,3rem)]">
            <div className="h-full bg-nw-graphite draw-line scroll-trigger"></div>
          </div>
          <p className="font-body text-[clamp(1rem,1.2vw,1.125rem)] leading-relaxed text-nw-graphite max-w-[55ch]">
            Most "modern" web apps are built on sand. Shaky architectures, bloated dependencies, and zero focus on persistence. We don't do that. We build for the long game.
          </p>
        </div>

      </div>
    </section>

  );
}
