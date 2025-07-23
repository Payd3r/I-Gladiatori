import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import TakeAway from './pages/TakeAway';
import Restaurant from './pages/Restaurant';
import Pizzeria from './pages/Pizzeria';
import PrivacyPolicy from './pages/PrivacyPolicy';
import './App.css';

function App() {
  return (
    <div className="bg-primary-black text-primary-white font-body">
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
    </div>
  );
}

export default App;
