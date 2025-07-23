import React from 'react';
import { FaStar, FaHeart } from 'react-icons/fa';

function MenuItem({ name, ingredients, price, isSpecial = false, showActions = true }) {
  return (
    <div className={`bg-white border border-secondary-gray-light rounded-2xl overflow-hidden shadow-lg transform hover:-translate-y-2 transition-all duration-500 hover:shadow-2xl ${isSpecial ? 'ring-2 ring-primary-yellow' : ''}`}>
      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <div className="flex-1">
            <h3 className="font-heading text-2xl text-secondary-gray-dark mb-2">{name}</h3>
            {isSpecial && (
              <div className="inline-flex items-center gap-1 bg-primary-yellow/20 text-primary-yellow px-2 py-1 rounded-full text-xs font-bold mb-2">
                <FaStar className="text-xs" />
                SPECIALE
              </div>
            )}
          </div>
          <p className="font-bold text-2xl text-accent-red ml-4">{price}</p>
        </div>
        
        <p className="text-secondary-gray text-sm leading-relaxed mb-6">{ingredients}</p>
        
        {showActions && (
          <div className="flex gap-3">
            <button className="flex-1 bg-primary-yellow text-primary-black font-bold py-3 px-4 rounded-full hover:bg-secondary-orange-light transition-colors flex items-center justify-center gap-2">
              <FaStar />
              Ordina
            </button>
            <button className="px-4 py-3 border border-primary-yellow text-primary-yellow rounded-full hover:bg-primary-yellow hover:text-primary-black transition-colors">
              <FaHeart />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default MenuItem;
