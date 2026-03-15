"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import Image from "next/image";



export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  return (
    <nav className={`fixed top-0 left-0 w-full z-40 backdrop-blur-md border-b transition-all duration-300 ${
      isScrolled 
        ? "bg-nw-bone/95 border-nw-graphite/20 h-20" 
        : "bg-nw-bone/90 border-transparent h-20"
    }`}>
      <div className="max-w-[clamp(70rem,95vw,100rem)] mx-auto px-[clamp(1.5rem,5vw,4rem)] h-full flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 group">
          <div className="relative w-8 h-8 filter dark:invert">
            <Image 
              src="/northernware-logo.png" 
              alt="Northernware Logo" 
              fill 
              className="object-contain"
            />
          </div>
          <span className="font-display font-bold text-[clamp(1.25rem,2vw,1.5rem)] track-tighter text-nw-black group-hover:text-nw-acid transition-colors duration-300">
            northernware<span className="text-nw-acid">.ph</span>
          </span>
        </a>



        <div className="hidden md:flex items-center gap-8 font-mono text-xs uppercase track-widest text-nw-graphite">
          <a href="#expertise" className="hover:text-nw-black transition-colors">Expertise</a>
          <a href="#performance" className="hover:text-nw-black transition-colors">Performance</a>
          <a href="#services" className="hover:text-nw-black transition-colors">Services</a>
          <a href="#stack" className="hover:text-nw-black transition-colors">Stack</a>
        </div>

        <div className="flex items-center gap-4">
          <a 
            href="#onboarding" 
            className="hidden sm:inline-block relative px-[clamp(1.5rem,3vw,2rem)] py-[clamp(0.75rem,2vw,1rem)] font-mono font-medium text-xs uppercase track-widest text-nw-bone bg-nw-black clip-button overflow-hidden group transition-all duration-300 hover:bg-nw-acid"
          >

            <span className="relative z-10 transition-all duration-300 group-hover:-translate-y-full group-hover:opacity-0 block">
              Initialize Project
            </span>
            <span className="absolute inset-0 flex items-center justify-center translate-y-full transition-all duration-300 group-hover:translate-y-0 group-hover:text-white text-nw-bone">
              Stop Wasting Time
            </span>
          </a>



          <button className="md:hidden text-nw-black text-2xl flex items-center">
            <span className="iconify" data-icon="solar:hamburger-menu-linear" data-inline="false"></span>
          </button>
        </div>

      </div>
    </nav>


  );
}
