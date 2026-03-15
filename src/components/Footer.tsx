"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function Footer() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <footer className="border-t border-nw-graphite/20 bg-nw-black pt-20 relative overflow-hidden">
      <div className="max-w-[clamp(70rem,95vw,100rem)] mx-auto px-[clamp(1.5rem,5vw,4rem)] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-24 relative z-10">
        
        <div className="space-y-6">
          <a href="#" className="flex items-center gap-3 group">
            <div className="relative w-8 h-8 filter dark:invert">
              <Image 
                src="/northernware-logo.png" 
                alt="Northernware Logo" 
                fill 
                className="object-contain"
              />
            </div>
            <span className="font-display font-bold text-2xl track-tightest text-nw-bone group-hover:text-nw-acid transition-colors duration-300">
              northernware<span className="text-nw-acid">®</span>
            </span>
          </a>


          <p className="font-mono text-xs uppercase track-widest text-nw-bone leading-relaxed">
            Premium Engineering.<br />Northern Luzon, PH.
          </p>
        </div>

        <div>
          <h4 className="font-mono text-[10px] uppercase track-widest text-nw-acid mb-6">Capabilities</h4>
          <ul className="space-y-4 font-mono text-xs text-nw-bone uppercase track-widest">
            <li><a href="#" className="hover:text-nw-bone transition-colors">Architecture</a></li>
            <li><a href="#" className="hover:text-nw-bone transition-colors">Development</a></li>
            <li><a href="#" className="hover:text-nw-bone transition-colors">Infrastructure</a></li>
            <li><a href="#" className="hover:text-nw-bone transition-colors">Optimization</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-mono text-[10px] uppercase track-widest text-nw-acid mb-6">Internal</h4>
          <ul className="space-y-4 font-mono text-xs text-nw-bone uppercase track-widest">
            <li><a href="#" className="hover:text-nw-bone transition-colors">Our Ethos</a></li>
            <li><a href="#" className="hover:text-nw-bone transition-colors">Legal Truth</a></li>
            <li><a href="#" className="hover:text-nw-bone transition-colors">Open Source</a></li>
            <li><a href="#" className="hover:text-nw-bone transition-colors">Contact</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-mono text-[10px] uppercase track-widest text-nw-acid mb-6">Pipeline</h4>
          <p className="font-body text-xs text-nw-bone mb-6 leading-relaxed">Subscribe to our unbuffered technical updates.</p>
          <form className="flex items-center border-b border-nw-bone/30 pb-3 group focus-within:border-nw-acid transition-colors">
            <input type="email" placeholder="dev@company.com" className="bg-transparent border-none outline-none font-mono text-xs text-nw-bone placeholder:text-nw-bone w-full" required />
            <button type="submit" className="text-nw-bone group-hover:text-nw-acid transition-colors">
              {mounted && <span className="iconify text-xl" data-icon="solar:arrow-right-linear"></span>}
            </button>
          </form>
          
          <div className="mt-10 flex gap-6">
                <a href="https://github.com/kenjivafe/northernware" target="_blank" rel="noopener noreferrer" className="text-nw-bone hover:text-nw-acid transition-colors">
                  {mounted && <span className="iconify text-2xl" data-icon="simple-icons:github"></span>}
                </a>
                <a href="#" className="text-nw-bone hover:text-nw-acid transition-colors">
                  {mounted && <span className="iconify text-2xl" data-icon="simple-icons:figma"></span>}
                </a>
                <a href="#" className="text-nw-bone hover:text-nw-acid transition-colors">
                  {mounted && <span className="iconify text-2xl" data-icon="simple-icons:linkedin"></span>}
                </a>
          </div>

        </div>
      </div>

      <div className="relative z-10 border-t border-nw-bone/10 py-8 text-center font-mono text-[10px] uppercase track-widest text-nw-bone">
        © 2026 Northernware Software Development Services. Engineering Reality.
      </div>

      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-[40%] w-full text-center overflow-hidden pointer-events-none z-0 opacity-[0.03]">
        <h1 className="font-display font-bold text-[clamp(10rem,13vw,20rem)] leading-none track-tightest text-nw-bone select-none m-0 p-0">
          NORTHERNWARE
        </h1>


      </div>


    </footer>

  );
}
