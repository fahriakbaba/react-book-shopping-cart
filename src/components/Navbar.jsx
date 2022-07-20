import React from 'react'
import { FaCartPlus } from 'react-icons/fa';
import { BookShop } from '../BookshopContext';


function Navbar() {
  const { openMainPage, openShoppingCart } = React.useContext(BookShop);
  




  return (
    <header className='shopping-navbar'>
      <h2 onClick={() => openMainPage()}>my shopping</h2>
      <div className="cart-icon">
        <FaCartPlus className='icon'  onClick={() => openShoppingCart()} />
        <span className="shopping-number">0</span>
      </div>
    </header>
  )
}

export default Navbar