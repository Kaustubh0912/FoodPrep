import React from 'react'
import { assets } from '../../assets/assets'
const FoodItemCard = ({id,name,price,description,image}) => {
  return (
    <div>
      <div className="food-item-image-container">
        <img className='food-item-image' src={image} alt={name} />
      </div>
      <p>{name}</p>
      <p className='food-item-description'>{description}</p>
      <div className="price-rating">
        <p className='food-item-price'> ₹{price}</p>
        <img src={assets.rating_starts} alt="" />
      </div>
    </div>
  )
}

export default FoodItemCard
