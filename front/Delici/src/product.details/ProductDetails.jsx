import React from 'react';
import "./ProductDetails.css"; 

const ProductDetail = () => {
  return (
    <div className="wrapper">
      <div className="product-img">
        <img src="https://tfpj-s3.troisfoisparjour.com/app/uploads/2023/05/26120522/21-fev-blogue3593-modifier-l.jpg" height="420" width="327" alt="Harvest Vase" />
      </div>
      <div className="product-info">
        <div className="product-text">
          <h1>Pink Smothie </h1>
          <h2>Freshness</h2>
          <p>Pyunkang Yul Essence Toner is an ingenious, richly hydrating formula designed to deliver 
           nutrient-filled moisture  to skin. <br/>
             91.3% of this toner is astragalus<br />
             membranaceus root extract, full of skin
             -beneficial betaine and minerals. With the<br />
             antioxidant, soothing, nutrient-boosting properties<br/>
              of the root extract, this K-<br />
             beauty favorite toner quickly absorbs to hydrate the skin.<br />

              allowing room for growth.<br/> </p>
        </div>
        <div className="product-price-btn">
          <p><span className='pr'>20</span>dt</p>
          <button type="button">Add to card</button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;