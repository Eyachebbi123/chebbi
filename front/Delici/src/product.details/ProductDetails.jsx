import React, { useEffect } from 'react';
import "./ProductDetails.css";
import { useParams } from 'react-router-dom';
import { getOneProduct } from '../store/product';
import { useDispatch, useSelector } from 'react-redux';

const ProductDetail = () => {
  const { id } = useParams()

  const product = useSelector((state) => state.product.product)

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getOneProduct(id))
  }, [])
console.log(product,"on");



  return (
    <div className="wrapper">
      <div className="product-img">
        <img src={product.imageURL} height="420" width="327"  />
        
      </div>
      <div className="product-info">
        <div className="product-text">
          <h1>{product.productName}</h1>
          <h2>{product.SubCategoryName}</h2>
          <p>{product.description} </p>
        </div>
        <div className="product-price-btn">
          <p><span className='pr'>{product.price}</span>dt</p>
          <button type="button">Add to card</button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;