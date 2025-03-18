import React from 'react'
import "./PlaceOrder.css"
import { useContext} from 'react'
import { StoreContext } from '../../context/StoreContext'
const Order = () => {
  const { getTotalCartAmount} = useContext(StoreContext)
  return (
    <form className="place-order">
      <div className="place-order-left">
        <h2 className='title'>Delivery Information</h2>
        <div className="multi-fields">
          <input type="text" placeholder="First Name" />
          <input type="text" placeholder="Last Name " />
        </div>
        <input type="email" placeholder='Email Address' />
        <input type="text" placeholder='Street' />
        <div className="multi-fields">
          <input type="text" placeholder="City" />
          <input type="text" placeholder="State " />
        </div><div className="multi-fields">
          <input type="text" placeholder="Zip Code" />
          <input type="text" placeholder="Country " />
        </div>
        <input type="tel" placeholder='Phone' />
      </div>
      <div className="place-order-right">
      <div className="cart-total">
          <h2>Cart Totals</h2>
          <div>
            <div className="cart-total-details">
              <p>Subtotal</p>
              <p>₹{getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Delivery Fee</p>
              <p>₹{getTotalCartAmount()!==0?20:0}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <b>Total</b>
              <b>₹{getTotalCartAmount()+20}</b>
            </div>
          </div>
          <button> Proceed to Payement</button>
        </div>
      </div>
    </form>
  )
}

export default Order
