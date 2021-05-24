import React from "react";
import Header from "./components/Header";
import Introduction from "./components/Introduction";
import PortfolioSection from "./components/PortfolioSection";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <div className="background px-3 pb-32">
        <Header />
        <Introduction />
        <PortfolioSection />
      </div>
      <Footer />
    </div>
  );
}

export default App;
