import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { FaInstagram, FaFacebookF } from 'react-icons/fa';
import { HiMenu, HiX } from 'react-icons/hi';
import logo from '../assets/logo.webp';

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinkClasses = ({ isActive }) =>
    `text-lg font-heading hover:text-primary-yellow transition-colors duration-300 ${isActive ? 'text-primary-yellow' : 'text-primary-white'}`;

  return (
    <header className="sticky top-0 z-50 bg-primary-black bg-opacity-80 backdrop-blur-sm shadow-md">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/">
              <img src={logo} alt="I Gladiatori Logo" className="h-12" />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <NavLink to="/" className={navLinkClasses}>Home</NavLink>
            <NavLink to="/pizze-asporto" className={navLinkClasses}>Asporto</NavLink>
            <NavLink to="/ristorante" className={navLinkClasses}>Ristorante</NavLink>
            <NavLink to="/pizzeria" className={navLinkClasses}>Pizzeria</NavLink>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-primary-white hover:text-primary-yellow transition-colors duration-300">
              <FaInstagram size={24} />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-primary-white hover:text-primary-yellow transition-colors duration-300">
              <FaFacebookF size={24} />
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-primary-white">
              {isOpen ? <HiX size={30} /> : <HiMenu size={30} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <nav className="px-2 pt-2 pb-3 space-y-1 sm:px-3 text-center">
            <NavLink to="/" className={navLinkClasses} onClick={() => setIsOpen(false)}>Home</NavLink>
            <NavLink to="/pizze-asporto" className={navLinkClasses} onClick={() => setIsOpen(false)}>Asporto</NavLink>
            <NavLink to="/ristorante" className={navLinkClasses} onClick={() => setIsOpen(false)}>Ristorante</NavLink>
            <NavLink to="/pizzeria" className={navLinkClasses} onClick={() => setIsOpen(false)}>Pizzeria</NavLink>
            <div className="flex justify-center space-x-4 mt-4">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-primary-white hover:text-primary-yellow transition-colors duration-300">
                <FaInstagram size={24} />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-primary-white hover:text-primary-yellow transition-colors duration-300">
                <FaFacebookF size={24} />
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}

export default Header;
