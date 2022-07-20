import React from "react";

export const BookShop = React.createContext();


function BookshopContext({children}) {
    const [isShown, setShown] = React.useState(false); 

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
        openShoppingCart
    }}>
        {children}
    </BookShop.Provider>
  )
}


export default BookshopContext;