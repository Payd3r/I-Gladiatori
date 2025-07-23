import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import useScrollToTop from './hooks/useScrollToTop';
import Home from './pages/Home';
import TakeAway from './pages/TakeAway';
import Restaurant from './pages/Restaurant';
import Pizzeria from './pages/Pizzeria';
import PrivacyPolicy from './pages/PrivacyPolicy';
import './App.css';

function App() {
  // Scroll to top quando cambia la pagina
  useScrollToTop();

  return (
    <div className="bg-primary-cream text-secondary-gray-dark font-body">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pizze-asporto" element={<TakeAway />} />
          <Route path="/ristorante" element={<Restaurant />} />
          <Route path="/pizzeria" element={<Pizzeria />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        </Routes>
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default App;
