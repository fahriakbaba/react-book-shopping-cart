import React from "react";
import { BookShop } from "./BookshopContext";
import MainPage from "./components/MainPage";
import Navbar from "./components/Navbar";
import ShoppingCart from "./components/ShoppingCart";



function App() {
  const {isShown} = React.useContext(BookShop);



  return (
    <main className="App">
      <Navbar />
    {
      isShown ? <MainPage /> : <ShoppingCart />
    }
    </main>
  );
}

export default App;
