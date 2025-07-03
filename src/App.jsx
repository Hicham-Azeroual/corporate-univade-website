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
import AISupportSection from "./components/Home/AISupportSection/AISupportSection.jsx";
gsap.registerPlugin(SplitText, ScrollTrigger);

const App = () => {
  

  // Animation function for sections


    // Animate child elements with staggered effect
    

  return (
    <PrimeReactProvider>
      <main className="min-h-screen">
        <Header />
        
        {/* Hero Section - Special animation (no ref) */}
        <HeroSection />
        
        {/* Sections with scroll animations */}
          <DefinitionSection />
        
          <PlatformHighlightsSection />
        
          <PlatformCoreSection />
        
          <AISupportSection />


        <Footer />
      </main>
    </PrimeReactProvider>
  );
};

export default App;