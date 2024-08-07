import React from 'react';
import ProductCard from './ProductCard';
import withHighlight from './withHighlight';
import { products } from '../data';

const Shop = () => {

  const HighlightedProductCard = withHighlight(ProductCard);

  return (
    <div className="ml-20">
      <h1 className='font-extrabold text-4xl mt-8'>Shop All</h1>
      <div className="products-grid mt-8">
        {products.map((product, index) => (
          <HighlightedProductCard key={index} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Shop;
