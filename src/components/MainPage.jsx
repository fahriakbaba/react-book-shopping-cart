import React from 'react';
import Card from './Card';
import { BookShop } from '../BookshopContext';


function MainPage() {
  const {items} = React.useContext(BookShop);
 

  return (
    <section className='container'>
        {
            items.map(item => {
                return(
                    <Card key={item.id} item={item} />
                )
            })
        }
    </section>
  )
}

export default MainPage;