import React from 'react';
import '../Styles/productCard.css';

const ProductCard = ({ product }) => {
    const {
        proteinName,
        shaker,
        proteinChips,
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
        imagesProducts
    } = product;

    const renderRating = (rating) => {
        return (
            <span className={`rating-star ${rating > 0 ? 'rating-filled' : 'rating-empty'}`}>
                ★
            </span>
        );
    };

    return (
        <div className="product-card">
            {bestSeller && <div className="product-label best-seller">Best Seller</div>}
            {isNew && <div className="product-label new">New</div>}
            {beginnersBox && <div className="product-label beginners-box">Beginners Box</div>}
            {trustedByMoms && <div className="product-label trusted-by-moms">Trusted by Moms</div>}
            {SeniorsFriendly && <div className="product-label seniors-friendly">Senior Friendly</div>}

            <img src={imagesProducts} alt='productsimage' className='images' />

            {rating !== null && <p>
                <span className='rating'>{renderRating(rating)} {rating}</span>
                {totalServings !== null && totalServings !== 0 &&
                    <span className='serving'> {totalServings} Servings</span>}
            </p>}
            <h3 className='productname'>{proteinName || shaker || proteinChips}</h3>
            {flavour && <p className='flavour'> {flavour}</p>}
            {productPrice !== null && productPrice !== 0 && <p> <span className='price'>₹{productPrice}</span> {discountedPrice !== null && discountedPrice !== 0 && (
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
