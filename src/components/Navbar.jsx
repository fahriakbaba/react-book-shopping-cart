import React from 'react'
import { FaCartPlus } from 'react-icons/fa';
import { BookShop } from '../BookshopContext';


function Navbar() {
  const { openMainPage, openShoppingCart, shops } = React.useContext(BookShop);
  
  const shopAmount = shops.reduce((acc, shop) => acc+shop.amount,0)


  return (
    <header className='shopping-navbar'>
      <h2 onClick={() => openMainPage()}>my shopping</h2>
      <div className="cart-icon">
        <FaCartPlus className='icon'  onClick={() => openShoppingCart()} />
        <span className="shopping-number">{shopAmount}</span>
      </div>
    </header>
  )
}

export default Navbar;