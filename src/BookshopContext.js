import React from "react";
import list from "./components/data";

export const BookShop = React.createContext();


function BookshopContext({ children }) {
    const [items, setItems] = React.useState([]);
    const [isShown, setShown] = React.useState(true);
    const [shops, setShops] = React.useState(() => JSON.parse(localStorage.getItem("shops")) || []);
    const [total, setTotal] =React.useState(0)
    
    React.useEffect(() => {
        setItems(list);
    }, [])

    React.useEffect(() => {
        calculateShops();
    })

    React.useEffect(() => {
        localStorage.setItem("shops", JSON.stringify(shops))
    }, [shops])
    
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

    const increaseAmount = (id) => {
        const findItem = shops.find(shop => (shop.id === id));
        if(findItem.amount === 1) {
            removeItem(id);
            return;
        }
        setShops(shops.map(shop => shop.id===findItem.id ? {...shop, amount: shop.amount -1} : shop) )
    }

    const decreaseAmount = (id) => {
        setShops(prevShop =>{
            return prevShop.map(shop => shop.id === id ? {...shop, amount: shop.amount +1 } : shop)
        });
    }
   


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

    return (
        <BookShop.Provider value={{
            isShown,
            items,
            shops,
            total,
            openMainPage,
            openShoppingCart,
            addToShopping,
            removeItem,
            increaseAmount,
            decreaseAmount
        }}>
            {children}
        </BookShop.Provider>
    )
}

export default BookshopContext;