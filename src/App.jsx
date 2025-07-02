import React, { useState } from "react";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import "./index.css";
import { PrimeReactProvider } from "primereact/api";
import { SplitText, ScrollTrigger } from "gsap/all";
import { gsap } from "gsap";
import AppLoader from "./components/AppLoader";

gsap.registerPlugin(SplitText, ScrollTrigger);
const App = () => {
  const [loading, setLoading] = useState(true);

  return (
    <PrimeReactProvider>
      <main className="bg-[#181A2A] min-h-screen">
        {loading && <AppLoader onFinish={() => setLoading(false)} />}
        {!loading && (
          <>
            <Header />
            <HeroSection />
            {/* Your other content goes here */}
            <div>
              <HeroSection></HeroSection>
            </div>
          </>
        )}
      </main>
    </PrimeReactProvider>
  );
};

export default App;
