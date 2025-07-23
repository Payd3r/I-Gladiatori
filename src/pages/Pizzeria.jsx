import React, { useState, useMemo } from 'react';
import { FaPizzaSlice, FaFilter, FaTimes, FaStar } from 'react-icons/fa';
import pizze from '../data/pizze.json';

function Pizzeria() {
  const [selectedCategory, setSelectedCategory] = useState('Tutte');
  const [selectedIngredients, setSelectedIngredients] = useState([]);

  // Estrai tutte le categorie uniche
  const categories = useMemo(() => {
    const cats = [...new Set(pizze.map(pizza => pizza.category))];
    return ['Tutte', ...cats];
  }, []);

  // Estrai tutti gli ingredienti unici
  const allIngredients = useMemo(() => {
    const ingredients = pizze.flatMap(pizza => 
      pizza.ingredients.split(', ').map(ing => ing.trim())
    );
    return [...new Set(ingredients)].sort();
  }, []);

  // Filtra le pizze
  const filteredPizze = useMemo(() => {
    return pizze.filter(pizza => {
      const categoryMatch = selectedCategory === 'Tutte' || pizza.category === selectedCategory;
      const ingredientMatch = selectedIngredients.length === 0 || 
        selectedIngredients.every(ing => 
          pizza.ingredients.toLowerCase().includes(ing.toLowerCase())
        );
      return categoryMatch && ingredientMatch;
    });
  }, [selectedCategory, selectedIngredients]);

  const addIngredient = (ingredient) => {
    if (!selectedIngredients.includes(ingredient)) {
      setSelectedIngredients([...selectedIngredients, ingredient]);
    }
  };

  const removeIngredient = (ingredient) => {
    setSelectedIngredients(selectedIngredients.filter(ing => ing !== ingredient));
  };

  return (
    <div className="min-h-screen bg-primary-cream">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-primary-yellow to-secondary-orange-light">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center mb-6">
            <FaPizzaSlice className="text-4xl text-primary-black mr-4" />
            <h1 className="font-heading text-5xl text-primary-black">Pizzeria</h1>
          </div>
          <p className="text-xl text-primary-black/80 max-w-2xl mx-auto">
            Scopri la nostra selezione di pizze tradizionali romane, cotte nel forno a legna 
            con ingredienti freschi e di qualità.
          </p>
        </div>
      </section>

      {/* Category Filters */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="font-heading text-3xl text-secondary-gray-dark mb-4">Categorie</h2>
            <div className="w-24 h-1 bg-primary-yellow mx-auto"></div>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full font-bold transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-primary-yellow text-primary-black shadow-lg'
                    : 'bg-secondary-gray-light text-secondary-gray-dark hover:bg-primary-yellow/20'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Ingredient Filters */}
      <section className="py-12 bg-primary-cream">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <div className="flex items-center justify-center mb-4">
              <FaFilter className="text-2xl text-secondary-gray-dark mr-2" />
              <h2 className="font-heading text-3xl text-secondary-gray-dark">Filtra per Ingredienti</h2>
            </div>
            <div className="w-24 h-1 bg-primary-yellow mx-auto"></div>
          </div>

          {/* Selected Ingredients */}
          {selectedIngredients.length > 0 && (
            <div className="mb-8">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-bold text-secondary-gray-dark">
                  Ingredienti selezionati ({selectedIngredients.length})
                </h3>
                <button
                  onClick={() => setSelectedIngredients([])}
                  className="text-accent-red hover:text-accent-red/80 font-bold"
                >
                  Rimuovi tutti
                </button>
              </div>
              <div className="flex flex-wrap gap-2">
                {selectedIngredients.map((ingredient) => (
                  <div
                    key={ingredient}
                    className="flex items-center bg-primary-yellow text-primary-black px-3 py-1 rounded-full"
                  >
                    <span className="mr-2">{ingredient}</span>
                    <button
                      onClick={() => removeIngredient(ingredient)}
                      className="hover:text-accent-red"
                    >
                      <FaTimes size={12} />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* All Ingredients */}
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3">
            {allIngredients.map((ingredient) => (
              <button
                key={ingredient}
                onClick={() => addIngredient(ingredient)}
                disabled={selectedIngredients.includes(ingredient)}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                  selectedIngredients.includes(ingredient)
                    ? 'bg-primary-yellow text-primary-black cursor-not-allowed'
                    : 'bg-white text-secondary-gray-dark hover:bg-primary-yellow/20 hover:text-primary-black border border-secondary-gray-light'
                }`}
              >
                {ingredient}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Pizza Grid */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="font-heading text-3xl text-secondary-gray-dark mb-4">
              {filteredPizze.length} Pizze Disponibili
            </h2>
            <div className="w-24 h-1 bg-primary-yellow mx-auto"></div>
          </div>

          {filteredPizze.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPizze.map((pizza, index) => (
                <div key={index} className="bg-white border border-secondary-gray-light rounded-2xl overflow-hidden shadow-xl transform hover:-translate-y-2 transition-all duration-500 hover:shadow-2xl">
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="font-heading text-2xl text-secondary-gray-dark">{pizza.name}</h3>
                      {pizza.best_seller && (
                        <div className="flex items-center text-primary-yellow">
                          <FaStar />
                          <span className="ml-1 text-sm font-bold">BEST</span>
                        </div>
                      )}
                    </div>
                    <p className="text-secondary-gray text-sm leading-relaxed mb-4">{pizza.ingredients}</p>
                    <div className="flex justify-between items-center">
                      <p className="font-bold text-2xl text-accent-red">{pizza.price}</p>
                      <button className="bg-primary-yellow text-primary-black font-bold py-2 px-4 rounded-full hover:bg-secondary-orange-light transition-colors flex items-center gap-2">
                        <FaPizzaSlice />
                        Ordina
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <div className="bg-secondary-gray-light/20 rounded-2xl p-12">
                <FaPizzaSlice className="text-6xl text-secondary-gray mx-auto mb-6" />
                <h3 className="font-heading text-2xl text-secondary-gray-dark mb-4">Nessuna pizza trovata</h3>
                <p className="text-secondary-gray">
                  Prova a modificare i filtri per trovare la pizza perfetta per te.
                </p>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-accent-red to-accent-red/70">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-heading text-3xl text-white mb-4">Hai fame di pizza?</h2>
          <p className="text-white/90 mb-6">Vieni a gustare la vera pizza romana nel nostro ristorante!</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-primary-yellow text-primary-black font-bold font-heading px-8 py-4 rounded-full hover:bg-secondary-orange-light transition-all duration-300">
              Chiama Ora
            </button>
            <button className="border-2 border-white text-white font-bold font-heading px-8 py-4 rounded-full hover:bg-white hover:text-primary-black transition-all duration-300">
              Vieni a Ritirare
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Pizzeria;