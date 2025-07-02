import "./index.css";
import { PrimeReactProvider } from "primereact/api";
import { SplitText, ScrollTrigger } from "gsap/all";
import { gsap } from "gsap";
import HeroSection from "./components/Home/HeroSection/HeroSection.jsx";
import Header from "./components/Home/Header/Header.jsx";
gsap.registerPlugin(SplitText, ScrollTrigger);
const App = () => {
  return (
    <PrimeReactProvider>
      <main className="bg-[#181A2A] min-h-screen">
        {/* Your other content goes here */}
        <Header />
        <HeroSection />
        <div>
         
        </div>
      </main>
    </PrimeReactProvider>
  );
};

export default App;
