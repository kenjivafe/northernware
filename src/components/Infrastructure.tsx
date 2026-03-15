"use client";

import { useEffect, useRef } from "react";

export default function Infrastructure() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, { threshold: 0.1 });

    const reveals = document.querySelectorAll('#infrastructure .reveal');
    reveals.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="infrastructure" className="py-[clamp(5rem,10vw,10rem)] bg-nw-white border-y border-nw-graphite/20 overflow-hidden relative group">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-nw-bone/50 rounded-full blur-[100px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none z-0"></div>

      <div className="max-w-[clamp(70rem,95vw,100rem)] mx-auto pl-[clamp(1.5rem,5vw,4rem)] grid grid-cols-12 items-center relative z-10">
        <div className="col-span-12 lg:col-span-4 pr-[clamp(1.5rem,5vw,4rem)] pb-12 lg:pb-0 reveal">
          <div className="font-mono text-[10px] md:text-xs uppercase track-widest text-nw-graphite mb-6 flex items-center gap-4 before:content-[''] before:w-8 before:h-[1px] before:bg-nw-acid">
            [INFRASTRUCTURE]
          </div>
          <h2 className="font-display font-bold text-[clamp(2rem,4vw,3.5rem)] leading-[0.95] track-tightest text-nw-black mb-8">
            We have nothing to hide. Neither should you.
          </h2>


          <p className="font-body text-[clamp(1rem,1.2vw,1.125rem)] leading-relaxed text-nw-graphite mb-8">
            Real-time dashboards, staging deployments that actually work, and complete visibility into our velocity. If we're slow, you'll know. If we're fast, you'll see.
          </p>
          <div className="flex items-center gap-4 font-mono text-xs uppercase track-widest text-nw-black">
            <span className="iconify text-nw-acid text-xl" data-icon="solar:programming-linear"></span>
            Radical Transparency
          </div>
        </div>

        <div className="col-span-12 lg:col-span-8 reveal" style={{ transitionDelay: '0.2s' }}>
          <div className="bg-nw-bone border-t border-l border-nw-graphite/20 p-8 shadow-2xl translate-x-[5%] lg:translate-x-0 relative">
            
            <div className="flex justify-between items-center mb-8 border-b border-nw-graphite/20 pb-4">
              <div className="font-mono text-xs text-nw-black uppercase track-widest flex items-center gap-2">
                <span className="iconify" data-icon="solar:branching-paths-up-linear"></span>
                Project Dashboard / Velocity
              </div>
              <div className="flex gap-2">
                <div className="w-3 h-3 bg-nw-graphite rounded-full"></div>
                <div className="w-3 h-3 bg-nw-graphite rounded-full"></div>
                <div className="w-3 h-3 bg-nw-acid rounded-full animate-pulse"></div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-nw-white border border-nw-graphite/20 p-6">
                <div className="font-mono text-[10px] text-nw-graphite uppercase track-widest mb-4">Development Velocity</div>
                <div className="grid grid-cols-4 gap-1 h-32">
                  <div className="bg-nw-black/90"></div><div className="bg-nw-black/80"></div><div className="bg-nw-acid/80"></div><div className="bg-nw-black/70"></div>
                  <div className="bg-nw-black/60"></div><div className="bg-nw-acid/60"></div><div className="bg-nw-black/50"></div><div className="bg-nw-black/80"></div>
                  <div className="bg-nw-acid"></div><div className="bg-nw-black/40"></div><div className="bg-nw-black/70"></div><div className="bg-nw-black/90"></div>
                </div>
              </div>
              
              <div className="bg-nw-white border border-nw-graphite/20 p-6 flex flex-col justify-between">
                <div className="flex justify-between items-start">
                  <div className="font-mono text-[10px] text-nw-graphite uppercase track-widest mb-2">API Latency</div>
                  <span className="text-xs text-nw-acid font-mono bg-nw-acid/10 px-2 py-0.5 rounded-sm">P99 Optimized</span>
                </div>
                <div className="font-display font-bold text-4xl text-nw-black track-tightest">42ms</div>
                <svg className="w-full h-16 mt-4" viewBox="0 0 100 30" preserveAspectRatio="none">
                  <path d="M0,25 L10,22 L20,24 L30,15 L40,18 L50,10 L60,12 L70,8 L80,10 L90,5 L100,8" fill="none" stroke="#FF3800" strokeWidth="1.5" className="dash-anim"></path>
                  <path d="M0,25 L10,22 L20,24 L30,15 L40,18 L50,10 L60,12 L70,8 L80,10 L90,5 L100,8 L100,30 L0,30 Z" fill="url(#grad_infra)" opacity="0.2"></path>
                  <defs>
                    <linearGradient id="grad_infra" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#FF3800"></stop>
                      <stop offset="100%" stopColor="#FF3800" stopOpacity="0"></stop>
                    </linearGradient>
                  </defs>
                </svg>
              </div>

              <div className="col-span-1 md:col-span-2 bg-nw-white border border-nw-graphite/20 p-6">
                <div className="font-mono text-[10px] text-nw-graphite uppercase track-widest mb-4 border-b border-nw-graphite/20 pb-2 flex justify-between">
                  <span>Environment</span><span>Status</span><span>Build</span>
                </div>
                <div className="space-y-3 font-mono text-xs">
                  <div className="flex justify-between items-center"><span className="text-nw-black flex items-center gap-2"><span className="iconify text-nw-graphite" data-icon="solar:rocket-linear"></span> Production</span><span className="text-nw-black flex items-center gap-2 tracking-tighter">Live v2.4.0</span><span className="text-nw-acid font-medium">Synced</span></div>
                  <div className="w-full h-[1px] bg-nw-graphite/10"></div>
                  <div className="flex justify-between items-center"><span className="text-nw-black flex items-center gap-2"><span className="iconify text-nw-graphite" data-icon="solar:monitor-linear"></span> Staging</span><span className="text-nw-graphite flex items-center gap-2">Idle</span><span className="text-nw-graphite">Ready</span></div>
                  <div className="w-full h-[1px] bg-nw-graphite/10"></div>
                  <div className="flex justify-between items-center"><span className="text-nw-black flex items-center gap-2"><span className="iconify text-nw-graphite" data-icon="solar:link-circle-linear"></span> CI/CD Pipeline</span><span className="text-nw-acid flex items-center gap-2 animate-pulse"><div className="w-1.5 h-1.5 rounded-full bg-nw-acid"></div>Active</span><span className="text-nw-graphite">Rolling</span></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>


  );
}
