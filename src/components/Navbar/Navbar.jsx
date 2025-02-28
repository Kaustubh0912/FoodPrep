import React from 'react'
import { assets } from '../../assets/assets'
import "./Navbar.css"

const Navbar = () => {
  return (
    <div className='navbar'>
        <img className='logo' src={assets.logo} alt='Logo' />
        <ul className='navbar-menu'>
            <li>home</li>
            <li>menu</li>
            <li>contact us</li>
        </ul>
        <div className="navbar-right">
            <div className="basket-dot">
                <img src={assets.basket_icon} alt="cart" />
                <div className="dot"></div>
            </div>
            <button>Sign In</button>
        </div>
      
    </div>
  )
}

export default Navbar
