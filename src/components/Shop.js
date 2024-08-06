import React from 'react';
import ProductCard from './ProductCard';
import withHighlight from './withHighlight';
import { products } from '../data';

const Shop = () => {

  const HighlightedProductCard = withHighlight(ProductCard);

  return (
    <div className="shop-all-container">
      <h1>Shop All</h1>
      <div className="products-grid">
        {products.map((product, index) => (
          <HighlightedProductCard key={index} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Shop;
