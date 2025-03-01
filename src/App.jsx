import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Home from './screens/Home/Home'
import Cart from './screens/Cart/Cart'
import Order from './screens/PlaceOrder/PlaceOrder'
import { Routes,Route } from 'react-router-dom'
import "./App.css"
const App = () => {
  return (
    <div className="app">
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/order" element={<Order />} />
        </Routes>
    </div>
  )
}

export default App
