import React, { useState } from 'react';
import { Container, Row, Col, ButtonGroup, Button } from 'react-bootstrap';
import MenuItem from '../components/MenuItem';
import menu from '../data/ristorante.json';

const categories = ['Antipasti', 'Primi Piatti', 'Secondi Piatti', 'Contorni', 'Dolci'];

function Restaurant() {
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);

  const filteredMenu = menu.filter(item => item.category === selectedCategory);

  return (
    <Container className="mt-5">
      <Row>
        <Col>
          <h1 className="text-center mb-4">Menù Ristorante</h1>
          <div className="text-center mb-4">
            <ButtonGroup>
              {categories.map(category => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? 'primary' : 'outline-primary'}
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </Button>
              ))}
            </ButtonGroup>
          </div>

          <h2 className="mt-5 mb-3">{selectedCategory}</h2>
          {filteredMenu.length > 0 ? (
            filteredMenu.map((item, index) => (
              <MenuItem
                key={index}
                name={item.name}
                ingredients={item.ingredients}
                price={item.price}
              />
            ))
          ) : (
            <p>Nessun piatto disponibile in questa categoria.</p>
          )}
        </Col>
      </Row>
    </Container>
  );
}

export default Restaurant;