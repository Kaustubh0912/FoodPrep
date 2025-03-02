import {React,useState} from 'react'
import { assets } from '../../assets/assets'
import "./Navbar.css"

const Navbar = () => {
  const [menu, setMenu] = useState("home")
  return (
    <div className='navbar'>
        <img className='logo' src={assets.logo} alt='Logo' />
        <ul className='navbar-menu'>
            <li onClick = {()=>setMenu("home")} className={menu==="home"?"active":""}>home</li>
            <li onClick = {()=>setMenu("menu")} className={menu==="menu"?"active":""}>menu</li>
            <li onClick = {()=>setMenu("contact-us")} className={menu==="contact-us"?"active":""}>contact us</li>
        </ul>
        <div className="navbar-right">
            <div className="basket-dot">
                <img src={assets.basket_icon} alt="cart" />
                <div className="dot"></div>
            </div>
            <button>sign up</button>
        </div>
      
    </div>
  )
}

export default Navbar
