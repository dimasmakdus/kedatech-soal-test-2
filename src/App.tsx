import React, { useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Pricing from "./components/Pricing";
import Stats from "./components/Stats";
import CTA from "./components/CTA";
import Footer from "./components/Footer";
import LoginModal from "./components/LoginModal";
import "./styles/global.scss";
import Contact from "./components/Contact";
import About from "./components/About";

const App: React.FC = () => {
  const [showLogin, setShowLogin] = useState(false);

  return (
    <>
      <Header onLogin={() => setShowLogin(true)} />
      <main>
        <Hero onLogin={() => setShowLogin(true)} />
        <Features />
        <Pricing />
        <Stats />
        <CTA onLogin={() => setShowLogin(true)} />
        <About />
        <Contact />
      </main>
      <Footer />
      {showLogin && <LoginModal onClose={() => setShowLogin(false)} />}
    </>
  );
};

export default App;