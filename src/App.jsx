import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { PrimeReactProvider } from "primereact/api";
import { HelmetProvider } from "react-helmet-async";
import HomePage from "./pages/HomePage";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import License from "./pages/License";
import NotFound from "./pages/NotFound";
import "primereact/resources/themes/lara-dark-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import "./index.css";
import { SplitText, ScrollTrigger } from "gsap/all";
import { gsap } from "gsap";
import HeroSection from "./components/Home/HeroSection/HeroSection.jsx";
import Header from "./components/Home/Header/Header.jsx";
import DefinitionSection from "./components/Home/DefinitionSection/DefinitionSection.jsx";
import PlatformHighlightsSection from "./components/Home/PlatformHighlightsSection/PlatformHighlightsSection.jsx";
import PlatformCoreSection from "./components/Home/PlatformCoreSection/PlatformCoreSection.jsx";
import Footer from "./components/Home/Footer/Footer.jsx";
import AISupportSection from "./components/Home/AISupportSection/AISupportSection.jsx";
import SuccessStoriesSection from "./components/Home/SuccessStoriesSection/SuccessStoriesSection.jsx";
gsap.registerPlugin(SplitText, ScrollTrigger);

const App = () => (
  <HelmetProvider>
    <PrimeReactProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/license" element={<License />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </PrimeReactProvider>
  </HelmetProvider>
);

export default App;
