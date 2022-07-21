import React from 'react';
import { BookShop } from '../BookshopContext';


function ShoppingCart() {
  const {shops, total, removeItem } = React.useContext(BookShop);
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
                  <button className="btn-decrease">-</button>
                  <h4>{shop.amount}</h4>
                  <button className="btn-increase">+</button>
                </div>
                <div className='price-container'>
                  <p>{shop.price} YTL</p>
                  <button onClick={() => removeItem(shop.id)}>remove</button>
                </div>
              </li>
            )
          })
        }
      </ul>
      <h2 className='show-total'>Total: <span>{total} YTL</span></h2>
    </article>
  )
}

export default ShoppingCart;