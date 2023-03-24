import React from 'react'
import  '../App.css'
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';


const Navbar = () => {
 

  
  
  const state = useSelector((state) => state.handleCart);
  const cartCount = state?.length || 0;
  console.log(cartCount)
    
  return (
    <nav className="navbar navbar-expand-lg  py-3 shadow " height='50px' >
    <div className="container">
      <NavLink className="navbar-brand  fw-bold fs-4" to="#">K&T Collection</NavLink>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <NavLink className="nav-link " aria-current="page" to="/">Home</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/products">Proudcts</NavLink>
          </li>
        
          <li className="nav-item">
            <NavLink className="nav-link" to="/about">About</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/contact">Contact</NavLink>
          </li>
        </ul>
          <div className="buttons">
            <NavLink to="/Login" className='btn btn-outline-dark'>
                <i className='fa fa-sign-in px-1'> Sign-in</i>
            </NavLink>
            <NavLink to="/Register" className='btn btn-outline-dark ms-2'>
                <i className='fa fa-user-plus px-1 '> Register</i>
            </NavLink>
            <NavLink to="/cart" className='btn btn-outline-dark ms-2'>
                <i className='fa fa-shopping-cart px-1'></i>Cart({cartCount})
            </NavLink>
          </div>
      </div>
    </div>
  </nav>
  )
}

export default Navbar