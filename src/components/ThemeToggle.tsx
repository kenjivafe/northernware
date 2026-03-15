"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const modes = [
    { id: "light", icon: "solar:sun-linear", label: "Light" },
    { id: "system", icon: "solar:monitor-linear", label: "System" },
    { id: "dark", icon: "solar:moon-linear", label: "Dark" },
  ];

  return (
    <div className={`
      fixed z-50 transition-all duration-300
      /* Mobile: Top Right, Horizontal, clearly visible */
      top-4 right-14 md:right-6 flex flex-row items-center gap-2 py-2 px-3
      md:top-1/2 md:-translate-y-1/2 md:flex-col md:gap-4 md:py-3 md:px-3
      bg-nw-graphite/80 dark:bg-nw-white/80 backdrop-blur-xl border border-nw-graphite/20 rounded-full shadow-2xl
    `}>
      <div className="flex flex-row md:flex-col gap-1.5 md:gap-3">
        {modes.map((mode) => (
          <button
            key={mode.id}
            onClick={() => setTheme(mode.id)}
            className="group relative flex flex-col items-center transition-all duration-300"
          >
            <div className={`p-2 md:p-3.5 rounded-full transition-all duration-300 relative ${
              theme === mode.id 
                ? "bg-nw-acid text-white shadow-lg shadow-nw-acid/20 scale-105 md:scale-110" 
                : "text-nw-graphite hover:text-nw-black dark:hover:text-nw-white hover:bg-nw-graphite/5"
            }`}>
              <span className="iconify text-base md:text-xl" data-icon={mode.icon}></span>
            </div>
          </button>
        ))}
      </div>
    </div>



  );
}




