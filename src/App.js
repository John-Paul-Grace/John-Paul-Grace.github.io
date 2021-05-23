import React from "react";
import "./App.css";
import Header from "./components/Header";
import AboutMe from "./components/AboutMe";
import PortfolioSection from "./components/PortfolioSection";
import Footer from "./components/Footer";

function App() {
  return (
      <div className="background">
        <Header />
        <AboutMe />
        <PortfolioSection />
        <Footer />
      </div>
  );
}

export default App;
