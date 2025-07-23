import React from 'react';

function MenuItem({ name, ingredients, price }) {
  return (
    <div className="menu-item mb-4">
      <div className="d-flex justify-content-between">
        <h5 className="mb-1">{name}</h5>
        <span className="text-primary fw-bold">{price}</span>
      </div>
      <p className="mb-1 fst-italic">{ingredients}</p>
    </div>
  );
}

export default MenuItem;
