import React, { lazy, Suspense } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import useScrollToTop from './hooks/useScrollToTop';
import './App.css';

// Lazy loading dei componenti per migliorare le prestazioni
const Home = lazy(() => import('./pages/Home'));
const TakeAway = lazy(() => import('./pages/TakeAway'));
const Restaurant = lazy(() => import('./pages/Restaurant'));
const Pizzeria = lazy(() => import('./pages/Pizzeria'));
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy'));

// Componente di loading
const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-cream via-primary-cream to-primary-light">
    <div className="text-center">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-brown mx-auto mb-4"></div>
      <p className="text-secondary-gray-dark font-medium">Caricamento...</p>
    </div>
  </div>
);

function AppContent() {
  const location = useLocation();
  // Scroll to top quando cambia la pagina
  useScrollToTop();

  return (
    <div className="bg-primary-cream text-secondary-gray-dark font-body">
      <Header />
      <main>
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/pizze-asporto" element={<TakeAway />} />
            <Route path="/ristorante" element={<Restaurant />} />
            <Route path="/pizzeria" element={<Pizzeria />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}

function App() {
  return <AppContent />;
}

export default App;
