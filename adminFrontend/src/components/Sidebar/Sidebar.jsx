import React from 'react'
import './Sidebar.css'
import { assets } from '../../assets/assets'

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <div className="sidebar-options">
        <div className="sidebar-option">
          <img src={assets.add_icon} className='add-icon'/>
          <p>Add Items</p>
        </div>
        <div className="sidebar-option ">
          <img src={assets.list_icon} className='list-icon'/>
          <p>List Items</p>
        </div><div className="sidebar-option">
          <img src={assets.order_icon} className='order-icon' />
          <p>Orders</p>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
