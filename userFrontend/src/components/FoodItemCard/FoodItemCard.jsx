import { useContext } from 'react';
import { assets } from '../../assets/assets';
import { StoreContext } from '../../context/StoreContext';
import './FoodItemCard.css';

const FoodItemCard = ({ id, name, price, description, image }) => 
{
    const { cartItems,addToCart, removeFromCart } = useContext(StoreContext);
    const itemCount = cartItems[id] || 0;

    return (
        <div className='food-item'>
            <div className="food-item-image-container">
                <img className='food-item-image' src={image} alt={name} />
                {
                    itemCount === 0 ?
                    <img className="add" src={assets.add_icon_white} alt="Add" onClick={() => addToCart(id)} />
                    :
                    <div className="food-item-counter">
                        <img src={assets.remove_icon_red} alt="Remove" onClick={() => removeFromCart(id)} />
                        <span>{itemCount}</span>
                        <img src={assets.add_icon_green} alt="Add" onClick={() => addToCart(id)} />
                    </div>
                }
            </div>
            <div className="food-info">
                <p className='food-item-name'>{name}</p>
                <p className='food-item-description'>{description}</p>
                <div className="price-rating">
                    <p className='food-item-price'> ₹{price}</p>
                    <img src={assets.rating_starts} alt="Rating" />
                </div>
            </div>
        </div>
    );
};

export default FoodItemCard;
