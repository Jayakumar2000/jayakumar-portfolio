import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { Home } from "./Home";
import { CaseStudies } from "./CaseStudies";
import { Skills } from "./Skills";
import { Story } from "./Story";

function ScrollToTop() {
  const { pathname } = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  
  return null;
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-surface flex flex-col selection:bg-brand selection:text-white">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/case-studies" element={<CaseStudies />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/story" element={<Story />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
