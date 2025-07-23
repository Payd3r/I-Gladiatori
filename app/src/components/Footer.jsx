import React from 'react';
import { Link } from 'react-router-dom';
import { FaInstagram, FaFacebookF } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="bg-primary-black border-t border-secondary-gray py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          {/* Contatti */}
          <div>
            <h5 className="font-heading text-xl text-primary-yellow mb-4">Contatti</h5>
            <p className="text-secondary-gray-light">Via Roma, 123 - 00100 Roma (RM)</p>
            <p className="text-secondary-gray-light">info@igladiatori.it</p>
            <p className="text-secondary-gray-light">+39 012 345 6789</p>
          </div>

          {/* Informazioni */}
          <div>
            <h5 className="font-heading text-xl text-primary-yellow mb-4">Informazioni</h5>
            <p className="text-secondary-gray-light">P.IVA: 12345678901</p>
            <Link to="/privacy-policy" className="text-secondary-gray-light hover:text-primary-yellow transition-colors duration-300">
              Privacy Policy
            </Link>
          </div>

          {/* Social */}
          <div>
            <h5 className="font-heading text-xl text-primary-yellow mb-4">Seguici</h5>
            <div className="flex justify-center md:justify-start space-x-6">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-primary-white hover:text-primary-yellow transition-colors duration-300">
                <FaInstagram size={28} />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-primary-white hover:text-primary-yellow transition-colors duration-300">
                <FaFacebookF size={28} />
              </a>
            </div>
          </div>
        </div>

        <div className="text-center text-secondary-gray border-t border-secondary-gray mt-8 pt-8">
          <p>&copy; {new Date().getFullYear()} Pizzeria I Gladiatori. Tutti i diritti riservati.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
