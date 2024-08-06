import React from 'react';
import "../Styles/highlighted.css";

const withHighlight = (WrappedComponent) => {
  return ({ product }) => {
    return (
      <div className="product-wrapper">
        <div className="badge-container">
          {product.new && <span className="badge new">New</span>}
          {product.bestSeller && <span className="badge bestseller">Bestseller</span>}
          {product.beginnersBox && <span className="badge beginners">Beginners Box</span>}
          {product.trustedByMoms && <span className="badge trusted">Trusted by Moms</span>}
          {product.SeniorsFriendly && <span className="badge seniors">Senior Friendly</span>}
        </div>
        <WrappedComponent product={product} />
      </div>
    );
  };
};

export default withHighlight;
