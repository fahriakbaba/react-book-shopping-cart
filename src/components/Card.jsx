import React from 'react'

function Card({ author, img, price, title }) {
  return (
    <article>
        <div className="book-image">
            <img src={img} alt="" />
        </div>
        <div className="book-info">
            <h3>{title}</h3>
            <p>{author}</p>
            <span>Price - {price}$</span>
        </div>

    </article>
  )
}

export default Card