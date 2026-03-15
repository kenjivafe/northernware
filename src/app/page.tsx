import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Expertise from "@/components/Expertise";
import Infrastructure from "@/components/Infrastructure";
import Metrics from "@/components/Metrics";
import Services from "@/components/Services";
import CaseStudy from "@/components/CaseStudy";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Hero />
      <Marquee />
      <Expertise />
      <Infrastructure />
      <Metrics />
      <Services />
      <CaseStudy />
      <Contact />
    </>
  );
}


