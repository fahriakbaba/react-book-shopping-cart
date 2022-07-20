import React from "react";
import list from "./components/data";

export const BookShop = React.createContext();


function BookshopContext({children}) {
    const [items, setItems] = React.useState(list)
    const [isShown, setShown] = React.useState(true); 
    const [shoppingList, setShoppingList] = React.useState([]);



    console.log(items);


    const openMainPage = () => {
        setShown(true);
    }

    const openShoppingCart = () => {
        setShown(false);
    }
    
  return (
    <BookShop.Provider value={{
        isShown,
        openMainPage,
        openShoppingCart,
        items,
    }}>
        {children}
    </BookShop.Provider>
  )
}


export default BookshopContext;