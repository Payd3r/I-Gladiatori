import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { FaInstagram, FaFacebookF } from 'react-icons/fa';
import { HiMenu, HiX } from 'react-icons/hi';
import logo from '../assets/logo.webp';

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinkClasses = ({ isActive }) =>
    `text-lg font-heading px-2 py-1 rounded transition-colors duration-300 hover:text-primary-yellow hover:bg-primary-cream/40 ${isActive ? 'text-primary-yellow' : 'text-secondary-gray-dark'}`;

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
            <NavLink to="/" className={navLinkClasses}>Home</NavLink>
            <NavLink to="/pizzeria" className={navLinkClasses}>Menù</NavLink>
            <NavLink to="/ristorante" className={navLinkClasses}>Ristorante</NavLink>
            <NavLink to="/pizze-asporto" className={navLinkClasses}>Asporto</NavLink>
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
            <NavLink to="/" className={navLinkClasses} onClick={() => setIsOpen(false)}>Home</NavLink>
            <NavLink to="/pizzeria" className={navLinkClasses} onClick={() => setIsOpen(false)}>Menù</NavLink>
            <NavLink to="/ristorante" className={navLinkClasses} onClick={() => setIsOpen(false)}>Ristorante</NavLink>
            <NavLink to="/pizze-asporto" className={navLinkClasses} onClick={() => setIsOpen(false)}>Asporto</NavLink>            
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
