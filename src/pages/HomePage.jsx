import React from "react";
import Header from "../components/Home/Header/Header";
import HeroSection from "../components/Home/HeroSection/HeroSection";
import DefinitionSection from "../components/Home/DefinitionSection/DefinitionSection";
import PlatformCoreSection from "../components/Home/PlatformCoreSection/PlatformCoreSection";
import PlatformHighlightsSection from "../components/Home/PlatformHighlightsSection/PlatformHighlightsSection";
import AISupportSection from "../components/Home/AISupportSection/AISupportSection";
import SuccessStoriesSection from "../components/Home/SuccessStoriesSection/SuccessStoriesSection";
import Footer from "../components/Home/Footer/Footer";

const HomePage = () => (
  <>
    <Header />
    <main>
      <HeroSection />
      <DefinitionSection />
      <PlatformCoreSection />
      <PlatformHighlightsSection />
      <AISupportSection />
      <SuccessStoriesSection />
    </main>
    <Footer />
  </>
);

export default HomePage;
