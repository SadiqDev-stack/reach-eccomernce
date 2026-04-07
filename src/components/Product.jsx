import React from 'react';
import { useNavigate } from 'react-router-dom';

 
const Product = ({ product, noAction = false }) => {
  const navigate = useNavigate();

  const openProduct = id => {
    navigate(`/product/${id}`)
  }
    

  return (
    <div className="product">
        <img lazy alt={product.name} src={product.photo} className="photo" />
        <div className="name">{product.name}</div>
        <div className="description">{ product.description }</div>
        <div className="price">${product.price.toFixed(2)}</div>
        {!noAction &&
        <div className="actions">
          <button onClick={() => openProduct(product.id)}   className="view">view</button>
          <button  className="cart">add to cart</button>
        </div> 
}
    </div>
  )
}

export default Product