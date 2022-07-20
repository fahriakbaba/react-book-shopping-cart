import React from 'react';
import Card from './Card';
import { BookShop } from '../BookshopContext';


function MainPage() {
  const {items} = React.useContext(BookShop);

  console.log(items);

  return (
    <section>
        {
            items.map(item => {
                return(
                    <Card key={item.id} {...item} />
                )
            })
        }
    </section>
  )
}

export default MainPage;