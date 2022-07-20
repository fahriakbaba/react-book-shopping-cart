import React from 'react'
import { FaCartPlus } from 'react-icons/fa';
import { BookShop } from '../BookshopContext';


function Navbar() {
  const {isShown} = React.useContext(BookShop);
  console.log(isShown);
  return (
    <header className='shopping-navbar'>
      <h2>my shopping</h2>
      <div className="cart-icon">
        <FaCartPlus className='icon' />
        <span className="shopping-number">0</span>
      </div>
    </header>
  )
}

export default Navbar