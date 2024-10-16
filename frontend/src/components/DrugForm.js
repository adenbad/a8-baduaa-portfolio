// src/components/DrugForm.js
import React, { useState } from 'react';

const DrugForm = ({ addDrug }) => {
  const [drugName, setDrugName] = useState('');
  const [quantity, setQuantity] = useState('');
  const [expirationDate, setExpirationDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addDrug({ drugName, quantity, expirationDate });
    setDrugName('');
    setQuantity('');
    setExpirationDate('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Drug Name:</label>
        <input
          type="text"
          value={drugName}
          onChange={(e) => setDrugName(e.target.value)}
        />
      </div>
      <div>
        <label>Quantity:</label>
        <input
          type="number"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
        />
      </div>
      <div>
        <label>Expiration Date:</label>
        <input
          type="date"
          value={expirationDate}
          onChange={(e) => setExpirationDate(e.target.value)}
        />
      </div>
      <button type="submit">Add Drug</button>
    </form>
  );
};

export default DrugForm;
