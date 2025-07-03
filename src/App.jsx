import { useEffect, useRef } from "react";
import "primereact/resources/themes/lara-dark-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import "./index.css";
import { PrimeReactProvider } from "primereact/api";
import { SplitText, ScrollTrigger } from "gsap/all";
import { gsap } from "gsap";
import HeroSection from "./components/Home/HeroSection/HeroSection.jsx";
import Header from "./components/Home/Header/Header.jsx";
import DefinitionSection from "./components/Home/DefinitionSection/DefinitionSection.jsx";
import PlatformHighlightsSection from "./components/Home/PlatformHighlightsSection/PlatformHighlightsSection.jsx";
import PlatformCoreSection from "./components/Home/PlatformCoreSection/PlatformCoreSection.jsx";
import Footer from "./components/Home/Footer/Footer.jsx";

gsap.registerPlugin(SplitText, ScrollTrigger);

const App = () => {
  const sectionRefs = useRef([]);
  sectionRefs.current = [];

  // Add refs to our array
  const addToRefs = (el) => {
    if (el && !sectionRefs.current.includes(el)) {
      sectionRefs.current.push(el);
    }
  };

  useEffect(() => {
    // Initialize animations when component mounts
    sectionRefs.current.forEach((section, index) => {
      const delay = index * 0.1;
      
      // Set initial state (hidden)
      gsap.set(section, { 
        opacity: 0,
        y: 50 
      });

      // Create ScrollTrigger for each section
      ScrollTrigger.create({
        trigger: section,
        start: "top 80%", // When top of section hits 80% of viewport
        onEnter: () => animateSection(section, delay),
        onEnterBack: () => animateSection(section, delay),
        once: true // Only animate once
      });
    });

    // Clean up ScrollTriggers on unmount
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  // Animation function for sections
  const animateSection = (section, delay) => {
    gsap.to(section, {
      opacity: 1,
      y: 0,
      duration: 1,
      delay: delay,
      ease: "power3.out",
      overwrite: "auto"
    });

    // Animate child elements with staggered effect
    const headings = section.querySelectorAll("h1, h2, h3");
    const paragraphs = section.querySelectorAll("p");
    const buttons = section.querySelectorAll(".p-button");
    const images = section.querySelectorAll("img");

    gsap.from(headings, {
      y: 30,
      opacity: 0,
      duration: 0.8,
      delay: delay + 0.2,
      stagger: 0.1,
      ease: "power3.out"
    });

    gsap.from(paragraphs, {
      y: 20,
      opacity: 0,
      duration: 0.8,
      delay: delay + 0.3,
      stagger: 0.05,
      ease: "power3.out"
    });

    gsap.from(buttons, {
      y: 20,
      opacity: 0,
      duration: 0.6,
      delay: delay + 0.4,
      stagger: 0.1,
      ease: "back.out(1.7)"
    });

    gsap.from(images, {
      y: 40,
      opacity: 0,
      duration: 1,
      delay: delay + 0.2,
      ease: "power3.out"
    });
  };

  return (
    <PrimeReactProvider>
      <main className="min-h-screen">
        <Header />
        
        {/* Hero Section - Special animation (no ref) */}
        <HeroSection />
        
        {/* Sections with scroll animations */}
        <div ref={addToRefs}>
          <DefinitionSection />
        </div>
        
        <div ref={addToRefs}>
          <PlatformHighlightsSection />
        </div>
        
        <div ref={addToRefs}>
          <PlatformCoreSection />
        </div>
        
        <Footer />
      </main>
    </PrimeReactProvider>
  );
};

export default App;