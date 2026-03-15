"use client";

import { useEffect, useRef } from "react";

export default function Metrics() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, { threshold: 0.1 });

    const reveals = document.querySelectorAll('#performance .reveal');
    reveals.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="performance" className="py-[clamp(5rem,10vw,10rem)] bg-nw-bone">
      <div className="max-w-[clamp(70rem,95vw,100rem)] mx-auto px-[clamp(1.5rem,5vw,4rem)]">
        
        <div className="mb-[clamp(3rem,6vw,6rem)] max-w-[65ch] reveal">
          <div className="font-mono text-[10px] md:text-xs uppercase track-widest text-nw-graphite mb-6 flex items-center gap-4 before:content-[''] before:w-8 before:h-[1px] before:bg-nw-acid">
            [METRICS]
          </div>
          <h2 className="font-display font-bold text-[clamp(2rem,4vw,3.5rem)] leading-[0.95] track-tightest text-nw-black mb-6">
            The numbers don't lie.
          </h2>


          <p className="font-body text-[clamp(1rem,1.2vw,1.125rem)] text-nw-graphite">
            We don't do "good enough." Every line of code is optimized for performance and stability. If it's not perfect, it's not finished.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border-t border-l border-nw-graphite/20 reveal" style={{ transitionDelay: '0.2s' }}>
          <div className="border-b border-r border-nw-graphite/20 bg-nw-white p-[clamp(2rem,4vw,3.5rem)] hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] hover:border-nw-acid hover:relative hover:z-10 transition-all duration-500 group card">
            <div className="font-display font-bold text-[clamp(3.5rem,6vw,5.5rem)] track-tightest text-nw-black mb-2 flex items-baseline">
              <span className="counter" data-target="100" data-decimals="0">100</span>
            </div>
            <div className="w-12 h-[1px] bg-nw-graphite/50 mb-4 group-hover:bg-nw-acid transition-colors duration-300"></div>
            <div className="font-mono text-xs uppercase track-widest text-nw-graphite group-hover:text-nw-black transition-colors duration-300">Lighthouse Perf. Score</div>
          </div>

          <div className="border-b border-r border-nw-graphite/20 bg-nw-white p-[clamp(2rem,4vw,3.5rem)] hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] hover:border-nw-acid hover:relative hover:z-10 transition-all duration-500 group card">
            <div className="font-display font-bold text-[clamp(3rem,5vw,4.5rem)] track-tightest text-nw-black mb-2 flex items-baseline">

              <span className="counter" data-target="0" data-decimals="0">0</span>
            </div>
            <div className="w-12 h-[1px] bg-nw-graphite/50 mb-4 group-hover:bg-nw-acid transition-colors duration-300"></div>
            <div className="font-mono text-xs uppercase track-widest text-nw-graphite group-hover:text-nw-black transition-colors duration-300">Critical Bugs in Prod</div>
          </div>

          <div className="border-b border-r border-nw-graphite/20 bg-nw-white p-[clamp(2rem,4vw,3.5rem)] hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] hover:border-nw-acid hover:relative hover:z-10 transition-all duration-500 group card">
            <div className="font-display font-bold text-[clamp(3rem,5vw,4.5rem)] track-tightest text-nw-black mb-2 flex items-baseline">

              <span className="counter" data-target="99.9" data-decimals="1">99.9</span>%
            </div>
            <div className="w-12 h-[1px] bg-nw-graphite/50 mb-4 group-hover:bg-nw-acid transition-colors duration-300"></div>
            <div className="font-mono text-xs uppercase track-widest text-nw-graphite group-hover:text-nw-black transition-colors duration-300">Average Uptime SLA</div>
          </div>


        </div>
      </div>
    </section>

  );
}
