import React, { useContext } from 'react';
import Product from '../components/Product.jsx';
import productData from '../data/product.js'
import dummyData from '../data/product.js';
import product from '../components/Product.jsx';
import { AuthContext } from '../context/authContext.jsx';
import { useNavigate } from 'react-router-dom';

const Home = () => {
const {
  user,
  login,
  logout
} = useContext(AuthContext)

const navigate = useNavigate()

  return (
    <>
      <h1 className="title">
        welcome to shop wise
      </h1>
      <div className="authInfo">
       {
        user.isAuth ? 
        <div className="authInfo">
          <b className='text-black font-bold text-2xl m-5'>{ `welcome ${user.email}`}</b>
           <button className='bg-amber-600 m-5 p-2 rounded-md' onClick={logout}> logout</button>
        </div> : 
        <div className="authAction">
          <button className='bg-amber-600 m-5 p-2 rounded-md' onClick={() => navigate('/login')}> login</button>
        </div>
       }
      </div>

      <div className="description">
        buy all the product you want at an affordable prices,
        get them instant without pressure 
      </div>

      <div className="products">
      {
        productData.map(pd => {
          return <Product product={pd} key={pd.id} />
        })
      }
      </div>

      <div className="footer">
        shopwise @2025 copy right
      </div>
    </>
  )
}

export default Home