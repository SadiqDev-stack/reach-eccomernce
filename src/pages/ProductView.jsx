import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import productData from '../data/product.js'
import Product from '../components/Product';


const ProductView = () => {
   const {id} = useParams();
   const [product, setProduct] = useState({});
   const navigate = useNavigate()
  

   useEffect(() => {
     setProduct(() => {
      const findProduct = productData.find(p => p.id == id);
      return findProduct || { dontExist: true }
     })
   }, [id])

  return (
   <div className="productView">
    {
      !product.dontExist ? 
      <Product noAction={true} key={id} product={product}/> :
      <div className="notFound">
        <b>
          this product dont exist
        </b>
      </div>
    }

    <button onClick={() => {
      navigate('/')
    }} className="action p-2 rounded-md bg-cyan-500 text-black m-10">
      Go Back
    </button>
   </div>
  )
}

export default ProductView