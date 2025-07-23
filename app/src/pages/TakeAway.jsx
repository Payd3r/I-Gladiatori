import React, { useState, useMemo } from 'react';
import { Container, Row, Col, Alert, Button } from 'react-bootstrap';
import MenuItem from '../components/MenuItem';
import pizze from '../data/pizze.json';

function TakeAway() {
  const [selectedIngredients, setSelectedIngredients] = useState([]);

  const allIngredients = useMemo(() => {
    const ingredientsSet = new Set();
    pizze.forEach(pizza => {
      const ingredients = pizza.ingredients.split(',').map(i => i.trim());
      ingredients.forEach(ingredient => ingredientsSet.add(ingredient));
    });
    return Array.from(ingredientsSet).sort();
  }, []);

  const handleIngredientClick = (ingredient) => {
    setSelectedIngredients(prev =>
      prev.includes(ingredient)
        ? prev.filter(i => i !== ingredient)
        : [...prev, ingredient]
    );
  };

  const filteredPizzas = useMemo(() => {
    if (selectedIngredients.length === 0) {
      return pizze;
    }
    return pizze.filter(pizza =>
      selectedIngredients.every(ingredient =>
        pizza.ingredients.toLowerCase().includes(ingredient.toLowerCase())
      )
    );
  }, [selectedIngredients]);

  return (
    <Container className="mt-5">
      <h1 className="text-center mb-4">Pizze d'asporto</h1>
      <Alert variant="info" className="text-center">
        Tutte le nostre pizze sono disponibili anche con impasto <strong>Pinsa</strong>, <strong>Integrale</strong> o <strong>Senza Glutine</strong> (con un supplemento).
      </Alert>

      <div className="p-3 mb-4 bg-light rounded-3 border">
        <h5 className="mb-3">Filtra per Ingredienti</h5>
        <div className="d-flex flex-wrap gap-2">
          {allIngredients.map(ingredient => (
            <Button
              key={ingredient}
              variant={selectedIngredients.includes(ingredient) ? 'primary' : 'outline-secondary'}
              onClick={() => handleIngredientClick(ingredient)}
              size="sm"
            >
              {ingredient}
            </Button>
          ))}
        </div>
        {selectedIngredients.length > 0 && (
          <Button
            variant="link"
            size="sm"
            className="mt-3 p-0"
            onClick={() => setSelectedIngredients([])}
          >
            Resetta Filtri
          </Button>
        )}
      </div>

      <div>
        {filteredPizzas.length > 0 ? (
          filteredPizzas.map((pizza, index) => (
            <MenuItem
              key={index}
              name={pizza.name}
              ingredients={pizza.ingredients}
              price={pizza.price}
            />
          ))
        ) : (
          <p className="text-center mt-4">Nessuna pizza trovata con gli ingredienti selezionati.</p>
        )}
      </div>
    </Container>
  );
}

export default TakeAway;
