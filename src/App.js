import React from "react";
import "./App.css";
import Header from "./components/Header";
import Introduction from "./components/Introduction";
import PortfolioSection from "./components/PortfolioSection";
import Footer from "./components/Footer";

function App() {
  return (
      <div className="background">
        <Header />
        <Introduction />
        <PortfolioSection />
        <Footer />
      </div>
  );
}

export default App;
