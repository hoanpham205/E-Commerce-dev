import React from 'react';
import { Route, Routes } from 'react-router';
import Cart from '../Cart/cart.js';
import Contact from '../Contact/contact.js';
import Home from '../Home/home.js';
import Shop from './../Shop/shop';

const Rout = ({shop, Filter, allcatefilter, addtocart, cart, setCart}) => {
  return (
    <>
    <Routes>
        <Route path='/' element={<Home addtocart={addtocart}/>}/>
        <Route path='/cart' element={<Cart cart={cart} setCart ={setCart}/>} />
        <Route path='shop' element={<Shop shop={shop} Filter={Filter} allcatefilter={allcatefilter} addtocart={addtocart}/>} />
        <Route path='/contact' element={<Contact />} />
    </Routes>
    </>
  )
}

export default Rout