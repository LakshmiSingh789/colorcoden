import React, { useState } from 'react';
import ProductCard from './ProductCard';
import withHighlight from './withHighlight';
import { products } from '../data';

const Shop = () => {
  const [selectedItem, setSelectedItem] = useState(0);
  const HighlightedProductCard = withHighlight(ProductCard);

  const categoriesImages = [
    "https://cdn.shortpixel.ai/spai/q_lossy+ex_1+ret_img+to_webp/originnutrition.in/wp-content/uploads/2023/03/Cat_All.png",
    "https://cdn.shortpixel.ai/spai/q_lossy+ex_1+ret_img+to_webp/originnutrition.in/wp-content/uploads/2023/03/Cat_Daily.png",
    "https://cdn.shortpixel.ai/spai/q_lossy+ex_1+ret_img+to_webp/originnutrition.in/wp-content/uploads/2023/03/Cat_Wellness.png",
    "https://cdn.shortpixel.ai/spai/q_lossy+ex_1+ret_img+to_webp/originnutrition.in/wp-content/uploads/2023/03/Cat_New.png",
    "https://cdn.shortpixel.ai/spai/q_lossy+ex_1+ret_img+to_webp/originnutrition.in/wp-content/uploads/2023/08/Cat_Kids_blue.jpg",
    "https://cdn.shortpixel.ai/spai/q_lossy+ex_1+ret_img+to_webp/originnutrition.in/wp-content/uploads/2023/07/Cat_Mojo.jpeg",
    "https://cdn.shortpixel.ai/spai/q_lossy+ex_1+ret_img+to_webp/originnutrition.in/wp-content/uploads/2023/03/Cat_Shaker.png"
  ];

  const categoriesName = [
    "SHOP ALL",
    "DAILY PLANT PROTEINS",
    "SPECIALTY NUTRITION",
    "NEW LAUNCHES",
    "KIDS' MULTI NUTRITIONAL DRINK",
    "MOJO POPS PROTEIN CHIPS",
    "SHAKERS"
  ];

  const handleImageClick = (index) => {
    setSelectedItem(index);
  }

  return (
    <>
      <div className='flex space-x-4 bg-orange-100 pl-20 pb-10 pr-20'>
        {categoriesImages.map((item, index) => (
          <div
            key={index}
            className='text-center hover:cursor-pointer'
            style={{
              transition: 'all 0.3s ease-in-out'
            }}
          >
            <img
              src={item}
              alt='categories'
              className='h-36 w-36 mx-auto rounded-xl'
              style={{
                boxShadow: selectedItem === index ? '8px 8px 15px rgba(255, 140, 0)' : '0 0 0 rgba(255, 87, 34, 0)',
                border: selectedItem === index ? '1px solid rgba(255, 87, 34, 1)' : '1px solid transparent',
                transition: 'all 0.3s ease-in-out',
              }}
              onMouseEnter={(e) => {
                if (selectedItem !== index) {
                  e.currentTarget.style.boxShadow = '8px 8px 15px rgba(255, 140, 0)';
                  e.currentTarget.style.border = '1px solid orange'
                }
              }}
              onMouseLeave={(e) => {
                if (selectedItem !== index) {
                  e.currentTarget.style.boxShadow = '0 0 0 rgba(255, 87, 34, 0)';
                }
              }}
              onClick={() => handleImageClick(index)}
            />
            <p className={`mt-5 text-sm ${selectedItem === index ? 'font-extrabold' : 'font-semibold'}`}>
              {categoriesName[index]}
            </p>
          </div>
        ))}
      </div>
      <div className="ml-20">
        <h1 className='font-extrabold text-4xl mt-8'>Shop All</h1>
        <div className="products-grid mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product, index) => (
            <HighlightedProductCard key={index} product={product} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Shop;
