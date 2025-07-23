import React, { useState, useMemo } from 'react';
import { FaPizzaSlice, FaFilter, FaTimes, FaShoppingCart } from 'react-icons/fa';
import pizze from '../data/pizze.json';

function TakeAway() {
  const [selectedIngredients, setSelectedIngredients] = useState([]);

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
      return selectedIngredients.length === 0 || 
        selectedIngredients.every(ing => 
          pizza.ingredients.toLowerCase().includes(ing.toLowerCase())
        );
    });
  }, [selectedIngredients]);

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
            <h1 className="font-heading text-5xl text-primary-black">Pizze d'Asporto</h1>
          </div>
          <p className="text-xl text-primary-black/90 max-w-2xl mx-auto">
            Ordina la tua pizza preferita e te la portiamo a casa in pochi minuti!
          </p>
        </div>
      </section>

      {/* Ingredient Filters */}
      <section className="py-12 bg-white">
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
                    : 'bg-primary-cream text-secondary-gray-dark hover:bg-primary-yellow/20 hover:text-primary-black border border-secondary-gray-light'
                }`}
              >
                {ingredient}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Pizza Grid */}
      <section className="py-12 bg-primary-cream">
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
                      <p className="font-bold text-2xl text-accent-red ml-4">{pizza.price}</p>
                    </div>
                    <p className="text-secondary-gray text-sm leading-relaxed mb-0">{pizza.ingredients}</p>                    
                    
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <div className="bg-white/80 rounded-2xl p-12 border border-secondary-gray-light">
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
      <section className="py-16 bg-gradient-to-r from-primary-yellow to-secondary-orange-light">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-heading text-3xl text-primary-black mb-4">Pronto per ordinare?</h2>
          <p className="text-primary-black/90 mb-6">Chiamaci o vieni a ritirare la tua pizza!</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-primary-black text-primary-white font-bold font-heading px-8 py-4 rounded-full hover:bg-secondary-gray-dark transition-all duration-300">
              Chiama Ora
            </button>
            <button className="border-2 border-primary-black text-primary-black font-bold font-heading px-8 py-4 rounded-full hover:bg-primary-black hover:text-primary-white transition-all duration-300">
              Vieni a Ritirare
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default TakeAway;
