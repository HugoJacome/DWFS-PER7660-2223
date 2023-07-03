import React from 'react';
import ProductCard from './components/ProductCard';
import "./App.css";
import "./styles/card.css";
const products = [
  {
    id: 1,
    name: 'Card 1',
    image: 'imagen.png',
  },
  {
    id: 2,
    name: 'Card 2',
    image: 'imagen.png',
  },
];

const App = () => {
  return (
    <div className="App">
      <h1>Cards</h1>
      <div className="product-container">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default App;