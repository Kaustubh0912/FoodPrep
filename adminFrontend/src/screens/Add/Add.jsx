import React from 'react'
import './Add.css'
import {assets} from '../../assets/assets'
const Add = () => {
  return (
    <div className='screen'>
      <div className="container">
        <form >
          <div className="add-img-upload">
            <p>Upload Image</p>
            <label htmlFor="image">
              <img src={assets.upload_area} alt="" />
            </label>
            <input type="file" id="image" hidden required />
          </div>
          <div className="add-product-name">
            <p>Name</p>
            <input type="text" placeholder='Type here' />
          </div>
          <div className="add-product-name">
            <p>Name</p>
            <textarea rows='6' placeholder='Write content here' ></textarea>
          </div>
          <div className="add-category-price">
            <div className="add-category">
              <p>Category</p>
              <select name="category">
                <option value="Salad">Salad</option>
                <option value="Rolls">Rolls</option>
                <option value="Deserts">Deserts</option>
                <option value="Sandwich">Sandwich</option>
                <option value="Cake">Cake</option>
                <option value="Pure Veg">Pure Veg</option>
                <option value="Pasta">Pasta</option>
                <option value="Noodles">Noodles</option>
              </select>
            </div>
            <div className="add-price">
              <p>Price</p>
              <input type="number" placeholder='₹0' />
            </div>
          </div>
          <button type="submit"className="add-btn">Add Product</button>
        </form>
      </div>
    </div>
  )
}

export default Add
