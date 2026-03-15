"use client";

import { useEffect, useRef } from "react";

export default function CaseStudy() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, { threshold: 0.1 });

    const reveals = document.querySelectorAll('#stack .reveal');
    reveals.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="stack" className="py-[clamp(6rem,12vw,12rem)] bg-nw-black text-nw-bone relative overflow-hidden dark-section z-20">
      <div className="bg-noise absolute inset-0 opacity-10"></div>
      
      <div className="max-w-[clamp(70rem,95vw,100rem)] mx-auto px-[clamp(1.5rem,5vw,4rem)] relative z-10 grid grid-cols-12">
        <div className="col-span-12 lg:col-span-10 lg:col-start-2 text-center flex flex-col items-center reveal">
          <div className="font-mono text-[10px] md:text-xs uppercase track-widest text-nw-white mb-8 flex items-center justify-center gap-6 before:content-[''] before:w-12 before:h-[1px] before:bg-nw-acid after:content-[''] after:w-12 after:h-[1px] after:bg-nw-acid">
            WE ACTUALLY SHIP STUFF
          </div>
          
          <h2 className="font-display font-bold text-[clamp(2rem,5vw,4.5rem)] leading-[0.95] track-tightest mb-6">
            The stuff we build. <br />
            <span className="text-nw-acid">And why it's better.</span>
          </h2>



          
          <p className="font-body text-[clamp(1rem,1.3vw,1.25rem)] text-nw-bone max-w-[55ch] mb-12">
            We don't hide behind NDAs to cover up bad work. We're proud of what we build because it's built to last. Check the source. Check the performance. Check the results.
          </p>

          <a href="#" className="relative px-[clamp(2rem,4vw,3.5rem)] py-[clamp(1rem,2vw,1.5rem)] font-mono font-medium text-xs md:text-sm uppercase track-widest bg-nw-white clip-button overflow-hidden transition-all duration-300 hover:bg-nw-acid group text-center">
            <span className="relative z-10 transition-all duration-300 group-hover:-translate-y-[150%] group-hover:opacity-0 flex items-center justify-center gap-3 text-nw-black">
              See Our Work
              <span className="iconify text-xl" data-icon="solar:arrow-right-linear"></span>
            </span>
            <span className="absolute inset-0 flex items-center justify-center translate-y-full transition-all duration-300 group-hover:translate-y-0 group-hover:text-white text-nw-black font-bold">
              Prove Us Wrong
            </span>
          </a>



        </div>
      </div>
    </section>


  );
}
