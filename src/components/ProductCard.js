import React from 'react';
import '../Styles/productCard.css';
import { useNavigate } from 'react-router-dom';

const ProductCard = ({ product }) => {
    const {
        proteinName,
        flavour,
        totalServings,
        rating,
        productPrice,
        discountedPrice,
        offerPercentage,
        outOfStock,
        bestSeller,
        new: isNew,
        beginnersBox,
        trustedByMoms,
        SeniorsFriendly,
        imagesProducts,
        id
    } = product;

    const navigate = useNavigate();

    const renderRating = (rating) => {
        return (
            <span className={`rating-star ${rating > 0 ? 'rating-filled' : 'rating-empty'}`}>
                ★
            </span>
        );
    };

    const handleCardClick = () => {
        navigate(`/product/${id}`);
    };

    return (
        <div className="product-card cursor-pointer" onClick={handleCardClick} 
        style={{ 
            boxShadow: '0 0 0 0 transparent', 
            transition: 'all 0.3s ease-in-out' 
          }} 
          onMouseEnter={(e) => {
            e.currentTarget.style.boxShadow = '8px 8px 15px rgba(255, 140, 0)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.boxShadow = '0 0 0 rgba(255, 87, 34, 0)';
          }}>
            {bestSeller && <div className="product-label best-seller">BESTSELLER</div>}
            {isNew && <div className="new">NEW</div>}
            {beginnersBox && <div className="product-label beginners-box">BEGINNERS BOX</div>}
            {trustedByMoms && <div className="product-label trusted-by-moms">TRUSTED BY MOMS</div>}
            {SeniorsFriendly && <div className="product-label seniors-friendly">SENIOR FRIENDLY</div>}

            <img src={imagesProducts} alt='productsimage' className='images' />

            {rating !== null && <p>
                <span className='rating'>{renderRating(rating)} {rating}</span>
                {totalServings !== null && totalServings !== 0 &&
                    <span className='serving'> {totalServings} Servings</span>}
            </p>}
            <h3 className='productname'>{proteinName}</h3>
            {flavour && <p className='flavour'> {flavour}</p>}
            {productPrice !== null && productPrice !== 0 && <p> <span className={`${discountedPrice ? 'price' : 'oriprice'}`}> ₹{productPrice}</span> {discountedPrice !== null && discountedPrice !== 0 && (
                <span className='discount'>
                    ₹{discountedPrice}<span className='offer'> {offerPercentage ? `(${offerPercentage}% off)` : ''}</span>
                </span>
            )}</p>}

            {outOfStock ? (
                <button className="out-of-stock-button" disabled>Out of Stock</button>
            ) : (
                <button className="add-to-cart-button">Add to Cart</button>
            )}
        </div>
    );
};

export default ProductCard;
