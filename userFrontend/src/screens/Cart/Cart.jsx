import { useContext } from 'react';
import './Cart.css';
import {StoreContext} from '../../context/StoreContext';
import { assets } from '../../assets/assets';

const Cart = () => 
{
    const { cartItems, addToCart, removeFromCart, food_list } = useContext(StoreContext);

    return (
        <div className="cart">
            <div className="cart-items-title">
                <p>Items</p>
                <p>Title</p>
                <p>Price</p>
                <p>Quantity</p>
                <p>Total</p>
                <p>Modify</p>
            </div>
            <br />
            <hr />

            {food_list.map((food) => 
                cartItems[food._id] > 0 ? (
                    <div key={food._id} className="cart-items-item">
                        <img src={food.image} alt='' />
                        <p>{food.name}</p>
                        <p>${food.price}</p>
                        <p>{cartItems[food._id]}</p>
                        <p>${food.price * cartItems[food._id]}</p>
                        <div className="cart-counter food-item-counter">
                            <img src={assets.remove_icon_red} alt="Remove" onClick={() => removeFromCart(food._id)} />
                            <span>{cartItems[food._id]}</span>
                            <img src={assets.add_icon_green} alt="Add" onClick={() => addToCart(food._id)} />
                        </div>
                    </div>
                ) : null
            )}
        </div>
    );
};

export default Cart;
