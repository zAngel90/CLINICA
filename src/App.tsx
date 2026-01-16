import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { WhatsAppFloat } from './components/ui/WhatsAppFloat';
import { Home } from './pages/Home';
import { FacialHarmonization } from './pages/FacialHarmonization';
import { EEG } from './pages/EEG';
import { Ozone } from './pages/Ozone';

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col font-sans text-slate-900 bg-white">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/armonizacion" element={<FacialHarmonization />} />
            <Route path="/electroencefalogramas" element={<EEG />} />
            <Route path="/ozono" element={<Ozone />} />
          </Routes>
        </main>
        <Footer />
        <WhatsAppFloat />
      </div>
    </Router>
  );
}

export default App;
