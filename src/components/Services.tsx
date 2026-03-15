"use client";

import { useEffect, useState } from "react";
import ScrambleText from "./ScrambleText";

export default function Services() {
  const [hoveredService, setHoveredService] = useState<number | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          const children = entry.target.querySelectorAll('.reveal');
          children.forEach(child => child.classList.add('active'));
        }
      });
    }, { threshold: 0.1 });

    const reveals = document.querySelectorAll('#services .reveal');
    reveals.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const services = [
    {
      id: 1,
      number: "01.",
      icon: "solar:monitor-smartphone-linear",
      title: <>Web <br /> Applications</>,
      normalDesc: "High-performance, accessible, and scalable web apps built with modern frameworks like React and Next.js.",
      honestDesc: "We build websites that actually load before your users die of old age. Yes, we use Next.js, and no, your current site isn't \"fast enough.\"",
    },
    {
      id: 2,
      number: "02.",
      icon: "solar:smartphone-linear",
      title: <>Mobile <br /> Development</>,
      normalDesc: "Native-feeling cross-platform mobile experiences utilizing React Native and robust backend integrations.",
      honestDesc: "Two apps for the price of one. We use Expo so your iOS and Android users can enjoy the same features—and the same rare bugs—simultaneously.",
    },
    {
      id: 3,
      number: "03.",
      icon: "solar:server-square-linear",
      title: <>Cloud <br /> Architecture</>,
      normalDesc: "Serverless infrastructure, microservices, and database design optimized for cost and infinite scalability on Vercel.",
      honestDesc: "We put your code on Vercel so you don't have to hire a DevOps engineer who charges more than your mortgage just to \"keep the lights on.\"",
    },
    {
      id: 4,
      number: "04.",
      icon: "solar:pen-linear",
      title: <>UI/UX <br /> Engineering</>,
      normalDesc: "Translating complex business requirements into intuitive interfaces and robust design systems.",
      honestDesc: "We design buttons people can actually find and click. You get a design that doesn't make your customers want to throw their phones.",
    }
  ];

  return (
    <section id="services" className="py-[clamp(5rem,10vw,10rem)] bg-nw-bone relative overflow-hidden">
      <div className="max-w-[clamp(70rem,95vw,100rem)] mx-auto px-[clamp(1.5rem,5vw,4rem)]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[clamp(2rem,5vw,5rem)] items-center mb-[clamp(4rem,8vw,8rem)]">
          <div className="reveal">
            <div className="font-mono text-[10px] md:text-xs uppercase track-widest text-nw-graphite mb-6 flex items-center gap-4 before:content-[''] before:w-8 before:h-[1px] before:bg-nw-acid">
              [SERVICES]
            </div>
            <h2 className="font-display font-bold text-[clamp(2rem,4vw,3.5rem)] leading-[0.95] track-tightest text-nw-black mb-6">
              We build stuff that works.
            </h2>



            <p className="font-body text-[clamp(1rem,1.2vw,1.125rem)] text-nw-graphite max-w-[50ch]">
              From architecture to deployment, we handle the technical heavy lifting so you can stop worrying about your server melting.
            </p>
          </div>
          <div className="hidden md:flex justify-end reveal" style={{ transitionDelay: '0.2s' }}>
            <div className="w-1/2 h-[1px] bg-nw-graphite/20 relative">
              <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-nw-acid animate-ping"></div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div 
              key={service.id}
              onMouseEnter={() => setHoveredService(service.id)}
              onMouseLeave={() => setHoveredService(null)}
              className="group p-8 bg-nw-white border border-nw-graphite/10 hover:border-nw-acid hover:bg-nw-acid transition-all duration-300 reveal flex flex-col" 
              style={{ transitionDelay: `${(index + 1) * 0.1}s` }}
            >
              <div className="flex justify-between items-start mb-12">
                <div className="font-mono text-xs uppercase track-widest text-nw-graphite group-hover:text-white transition-colors">{service.number}</div>
                <span className="iconify text-3xl text-nw-black group-hover:text-white transition-colors" data-icon={service.icon}></span>
              </div>
              <h3 className="font-display font-bold text-2xl md:text-3xl text-nw-black group-hover:text-white mb-4 track-tightest uppercase transition-colors">
                {service.title}
              </h3>

              <div className="relative overflow-visible flex-grow">
                <div className="grid">
                  <p className={`[grid-area:1/1] font-body text-nw-graphite text-base leading-relaxed transition-all duration-500 ${hoveredService === service.id ? 'opacity-0' : 'opacity-100'}`}>
                    {service.normalDesc}
                  </p>
                  <div className={`[grid-area:1/1] font-body text-white text-base leading-relaxed transition-all duration-300 ${hoveredService === service.id ? 'opacity-100' : 'opacity-0'}`}>
                    <ScrambleText 
                      text={service.honestDesc} 
                      trigger={hoveredService === service.id} 
                      duration={500}
                    />
                  </div>
                </div>

              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

