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
import { Button } from "primereact/button";
import Footer from "./components/Home/Footer/Footer.jsx";
/* import Footer from "./components/Home/Footer/Footer.jsx";
 */gsap.registerPlugin(SplitText, ScrollTrigger);
const App = () => {
  return (
    <PrimeReactProvider  >
      <main className=" min-h-screen">
        {/* Your other content goes here */}
        <Header />
        <HeroSection />
        <DefinitionSection></DefinitionSection>
        <PlatformHighlightsSection></PlatformHighlightsSection>
        <PlatformCoreSection></PlatformCoreSection>
        <Footer></Footer>
{/*         <Footer></Footer>
 */}        <div>
         
        </div>
      </main>
    </PrimeReactProvider>
  );
};

export default App;
