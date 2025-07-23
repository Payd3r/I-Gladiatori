import React from 'react';
import { FaInstagram, FaFacebookF, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="bg-secondary-gray-dark text-white py-14 mt-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* About Section */}
          <div>
            <h3 className="font-heading text-2xl mb-6">I Gladiatori</h3>
            <p className="text-primary-gray mb-4">
              La vera cucina romana dal 1985. Tradizione, qualità e passione in ogni piatto.
            </p>
            <div className="flex space-x-4">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-primary-yellow transition-colors">
                <FaInstagram size={32} />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-primary-yellow transition-colors">
                <FaFacebookF size={32} />
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-heading text-2xl mb-6">Contatti</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <FaPhone className="text-primary-yellow" />
                <span>+39 06 1234 5678</span>
              </div>
              <div className="flex items-center space-x-3">
                <FaEnvelope className="text-primary-yellow" />
                <span>info@igladiatori.it</span>
              </div>
              <div className="flex items-center space-x-3">
                <FaMapMarkerAlt className="text-primary-yellow" />
                <span>Via Roma 123, Roma</span>
              </div>
            </div>
          </div>

          {/* Opening Hours */}
          <div>
            <h3 className="font-heading text-2xl mb-6">Orari</h3>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span>Lunedì - Venerdì</span>
                <span>12:00 - 23:00</span>
              </div>
              <div className="flex justify-between">
                <span>Sabato - Domenica</span>
                <span>12:00 - 00:00</span>
              </div>
            </div>
          </div>
          
        </div>

        <div className="border-t border-secondary-gray mt-12 pt-8 text-center">
          <p className="text-secondary-gray">
            © 2024 I Gladiatori. Tutti i diritti riservati.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
