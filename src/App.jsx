import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import "./index.css";
import { PrimeReactProvider } from "primereact/api";
import { SplitText, ScrollTrigger } from "gsap/all";
import { gsap } from "gsap";
gsap.registerPlugin(SplitText, ScrollTrigger);
const App = () => {
  return (
    <PrimeReactProvider>
      <main className="bg-[#181A2A] min-h-screen">
        <Header />
        <HeroSection />
        {/* Your other content goes here */}
        <div>
          <HeroSection></HeroSection>
        </div>
      </main>
    </PrimeReactProvider>
  );
};

export default App;
