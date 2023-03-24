import React from 'react';
import {  Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import Products from './Components/Products';
import About from './Components/About';
import Product from './Components/Product';
import Cart from './Components/Cart';
import Contact from './Components/Contact';

function App() {
  return (
    <>
      
        <Navbar />
        <Routes>
        <Route exact path='/' element={< Home />}></Route>
        <Route exact path='/products' element={< Products/>}></Route>
        <Route exact path='/about' element={< About />}></Route>
        <Route exact path='/products/:id' element={< Product />}></Route>
        <Route exact path='/cart' element={< Cart />}></Route>
        <Route exact path='/contact' element={< Contact />}></Route>
        </Routes>
      
    </>
  );
}

export default App;
