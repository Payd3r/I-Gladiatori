import React, { useState } from 'react';
import { FaUtensils, FaWineGlass, FaCoffee, FaStar } from 'react-icons/fa';
import menu from '../data/ristorante.json';

function Restaurant() {
  const [selectedCategory, setSelectedCategory] = useState('Antipasti');

  // Estrai tutte le categorie uniche dal menu
  const categories = [...new Set(menu.map(item => item.category))];

  // Filtra il menu in base alla categoria selezionata
  const filteredMenu = menu.filter(item => item.category === selectedCategory);

  return (
    <div className="bg-primary-cream min-h-screen">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-primary-yellow to-secondary-orange-light py-16">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <FaUtensils className="text-4xl text-primary-black" />
            <h1 className="font-heading text-5xl md:text-6xl text-primary-black">Menù Ristorante</h1>
          </div>
          <p className="text-xl text-primary-black/90 max-w-2xl mx-auto">
            Scopri la nostra cucina tradizionale romana con piatti preparati con ingredienti freschi e passione
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        {/* Category Filters */}
        <div className="mb-12">
          <div className="text-center mb-8">
            <h2 className="font-heading text-3xl text-secondary-gray-dark mb-4">Scegli la Categoria</h2>
            <div className="w-24 h-1 bg-primary-yellow mx-auto"></div>
          </div>
          
          <div className="flex flex-wrap gap-4 justify-center">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full font-bold transition-all duration-300 flex items-center gap-2 ${
                  selectedCategory === category
                    ? 'bg-primary-yellow text-primary-black shadow-lg'
                    : 'bg-white text-secondary-gray-dark hover:bg-primary-yellow/20 border border-secondary-gray-light'
                }`}
              >
                {category === 'Antipasti' && <FaUtensils />}
                {category === 'Primi Piatti' && <FaUtensils />}
                {category === 'Secondi Piatti' && <FaUtensils />}
                {category === 'Contorni' && <FaUtensils />}
                {category === 'Dolci' && <FaStar />}
                {category === 'Bevande' && <FaWineGlass />}
                {category === 'Caffè' && <FaCoffee />}
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Menu Section */}
        <div className="mb-12">
          <div className="text-center mb-12">
            <h2 className="font-heading text-4xl text-secondary-gray-dark mb-4">{selectedCategory}</h2>
            <div className="w-24 h-1 bg-primary-yellow mx-auto"></div>
            <p className="text-secondary-gray mt-4">
              {selectedCategory === 'Antipasti' && 'Inizia il tuo pasto con i nostri antipasti tradizionali'}
              {selectedCategory === 'Primi Piatti' && 'I nostri primi piatti della tradizione romana'}
              {selectedCategory === 'Secondi Piatti' && 'Secondi piatti preparati con ingredienti freschi'}
              {selectedCategory === 'Contorni' && 'Contorni freschi e saporiti'}
              {selectedCategory === 'Dolci' && 'Dolci fatti in casa per concludere il pasto'}
              {selectedCategory === 'Bevande' && 'Bevande e vini selezionati'}
              {selectedCategory === 'Caffè' && 'Caffè e bevande calde'}
            </p>
          </div>

          {filteredMenu.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredMenu.map((item, index) => (
                <div key={index} className="bg-white border border-secondary-gray-light rounded-2xl overflow-hidden shadow-xl transform hover:-translate-y-2 transition-all duration-500 hover:shadow-2xl">
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="font-heading text-2xl text-secondary-gray-dark">{item.name}</h3>
                      <p className="font-bold text-2xl text-accent-red ml-4">{item.price}</p>
                    </div>
                    <p className="text-secondary-gray text-sm leading-relaxed mb-0">{item.ingredients}</p>                    
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <div className="bg-white/80 rounded-2xl p-12 border border-secondary-gray-light">
                <FaUtensils className="text-6xl text-secondary-gray mx-auto mb-6" />
                <h3 className="font-heading text-2xl text-secondary-gray-dark mb-4">Nessun piatto disponibile</h3>
                <p className="text-secondary-gray">
                  Al momento non ci sono piatti disponibili in questa categoria.
                </p>
              </div>
            </div>
          )}
        </div>
        

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-primary-yellow to-secondary-orange-light p-8 rounded-2xl">
            <h3 className="font-heading text-3xl text-primary-black mb-4">Prenota il tuo tavolo</h3>
            <p className="text-primary-black/90 mb-6">Vieni a gustare la vera cucina romana nel nostro ristorante!</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">              
              <button className="bg-primary-black text-primary-white font-bold font-heading px-8 py-4 rounded-full hover:bg-secondary-gray-dark transition-all duration-300">
                Chiama per Info
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Restaurant;