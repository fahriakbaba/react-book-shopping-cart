import React from "react";
import list from "./components/data";

export const BookShop = React.createContext();


function BookshopContext({ children }) {
    const [items, setItems] = React.useState(list)
    const [isShown, setShown] = React.useState(true);
    const [shops, setShops] = React.useState([]);
    const [total, setTotal] =React.useState(0)


    React.useEffect(() => {
        calculateShops();
    }, [shops])



    const removeItem = (id) => {
        setShops(prevState => {
            return prevState.filter(shop => shop.id !== id);
        })
    }

    const openMainPage = () => {
        setShown(true);
    }

    const openShoppingCart = () => {
        setShown(false);
    }

    const addToShopping = (item) => {

        const findItem = shops.find(shop => shop.id === item.id);
        if (findItem) {
            setShops(shops.map(shop => shop.id === findItem.id ? { ...shop, amount: shop.amount + 1 } : shop)
            )
        } else {
            setShops(prev => {
                return [...prev, item];
            })
        }
    }


    const calculateShops = () => {
        let total = 0;
        if(shops.length === 0) {
            total = 0;
            setTotal(total);
            return;
        }
        shops.forEach(item => {
            total += item.price * item.amount;
            setTotal(total)
        })
    }

    console.log(total);

    return (
        <BookShop.Provider value={{
            isShown,
            openMainPage,
            openShoppingCart,
            items,
            addToShopping,
            shops,
            total,
            removeItem,

        }}>
            {children}
        </BookShop.Provider>
    )
}


export default BookshopContext;