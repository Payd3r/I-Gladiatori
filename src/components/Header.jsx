import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { FaInstagram, FaFacebookF } from 'react-icons/fa';
import { HiMenu, HiX } from 'react-icons/hi';
import logo from '../assets/logo.webp';

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Menù', href: '/pizzeria' },
    { name: 'Ristorante', href: '/ristorante' },
    { name: 'Asporto', href: '/pizze-asporto' },
  ];

  const navLinkClasses = ({ isActive }) =>
    `text-lg font-heading px-2 py-1 rounded transition-colors duration-300 hover:text-primary-yellow hover:bg-primary-cream/40 ${isActive ? 'text-primary-yellow' : 'text-secondary-gray-dark'}`;

  // Preload intelligente delle pagine al hover
  const handleLinkHover = (href) => {
    if (href !== location.pathname) {
      const routeMap = {
        '/': () => import('../pages/Home'),
        '/pizzeria': () => import('../pages/Pizzeria'),
        '/ristorante': () => import('../pages/Restaurant'),
        '/pizze-asporto': () => import('../pages/TakeAway'),
        '/privacy-policy': () => import('../pages/PrivacyPolicy')
      };

      const preloadFunc = routeMap[href];
      if (preloadFunc) {
        preloadFunc().catch(() => {
          // Ignore preload errors
        });
      }
    }
  };

  // Preload delle immagini critiche dopo il mount
  useEffect(() => {
    const criticalImages = [
      '/src/assets/logo.webp',
      '/src/assets/1.jpg',
      '/src/assets/2.jpg',
      '/src/assets/3.jpg'
    ];

    // Preload delle immagini con priorità bassa
    const preloadImages = () => {
      criticalImages.forEach(src => {
        const img = new Image();
        img.src = src;
      });
    };

    // Usa requestIdleCallback se disponibile, altrimenti setTimeout
    if ('requestIdleCallback' in window) {
      requestIdleCallback(preloadImages);
    } else {
      setTimeout(preloadImages, 1000);
    }
  }, []);

  return (
    <header className="sticky top-0 z-50 bg-primary-cream/90 backdrop-blur-md shadow-lg border-b border-secondary-gray-light">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center gap-2">
            <Link to="/" className="flex items-center gap-2">
              <img src={logo} alt="I Gladiatori Logo" className="h-14 w-auto drop-shadow-lg" />
              <span className="font-heading text-2xl text-primary-yellow hidden sm:inline">I Gladiatori</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-4 lg:space-x-8">
            {navigation.map((item) => (
              <NavLink
                key={item.name}
                to={item.href}
                className={navLinkClasses}
                onMouseEnter={() => handleLinkHover(item.href)}
              >
                {item.name}
              </NavLink>
            ))}
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-secondary-gray-dark hover:text-primary-yellow transition-colors duration-300">
              <FaInstagram size={22} />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-secondary-gray-dark hover:text-primary-yellow transition-colors duration-300">
              <FaFacebookF size={22} />
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-secondary-gray-dark focus:outline-none">
              {isOpen ? <HiX size={32} /> : <HiMenu size={32} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-primary-cream/95 border-t border-secondary-gray-light shadow-lg">
          <nav className="px-4 pt-4 pb-6 space-y-2 text-center flex flex-col items-center">
            {navigation.map((item) => (
              <NavLink
                key={item.name}
                to={item.href}
                className={navLinkClasses}
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </NavLink>
            ))}            
            <div className="flex justify-center space-x-6 mt-4">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-secondary-gray-dark hover:text-primary-yellow transition-colors duration-300">
                <FaInstagram size={26} />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-secondary-gray-dark hover:text-primary-yellow transition-colors duration-300">
                <FaFacebookF size={26} />
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}

export default Header;
