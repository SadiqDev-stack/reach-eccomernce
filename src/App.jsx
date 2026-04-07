import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Cart from './pages/Cart';
import Login from './pages/Login';
import ProductView from './pages/ProductView';
import { AuthProvider } from './context/authContext';


const App = () => {



  return (
    <AuthProvider>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/cart' element={<Cart></Cart>}></Route>
        <Route path='/product/:id' element={<ProductView></ProductView>}></Route>
      </Routes>
    </BrowserRouter>
    </AuthProvider>
  )
}

export default App