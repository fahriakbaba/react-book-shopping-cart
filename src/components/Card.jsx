import React from 'react'
import { BookShop } from '../BookshopContext'


function Card({item}) {
  const {addToShopping} = React.useContext(BookShop);


  return (
    <article className='book'>
        <div className="book-image">
            <img src={item.img} alt="" />
        </div>
        <div className="book-info">
            <h3>{item.title}</h3>
            <p>{item.author}</p>
            <span>Price - {item.price}YTL</span>
            <button className='btn-add' onClick={() => addToShopping(item)} >Add to Cart</button>
        </div>

    </article>
  )
}

export default Card