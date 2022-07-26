import React from 'react';
import { BookShop } from '../BookshopContext';
import { FaRegTrashAlt } from 'react-icons/fa';


function ShoppingCart() {
  const {shops, total, removeItem, increaseAmount, decreaseAmount } = React.useContext(BookShop);
  return (
    <article className='list'>
      <ul className='list-group'>
        {
          shops.map(shop => {
            return(
              <li className='list-group-item' key={shop.id}>
                <div className='info-container'>
                  <img src={shop.img} alt="" />
                  <h5>{shop.title}</h5>
                </div>
                <div className='buttons-container'>
                  <button className="btn-decrease" onClick={() => decreaseAmount(shop.id)}>-</button>
                  <h4>{shop.amount}</h4>
                  <button className="btn-increase" onClick={() => increaseAmount(shop.id)}>+</button>
                </div>
                <div className='price-container'>
                  <p className='display-price'>{shop.price} YTL</p>
                  <button onClick={() => removeItem(shop.id)}><FaRegTrashAlt /> </button>
                </div>
              </li>
            )
          })
        }
      </ul>
      {total > 0 ? (
        <h2 className='show-total'>Total: <span>{total} YTL</span></h2>
      ) : (
        <div  className='cart-alert'>
        <h2>
          Your bag
        </h2>
        <p>is currently empty.</p>
        </div>
      )}    
    </article>
  )
}

export default ShoppingCart;