import React, { useState,useEffect } from 'react';import logo from './logo.svg';
import './styles/App.css';
import Navbar from "./components/Navbar";

import BuildCard from "./components/BuildCard";

import Content from "./components/Content";

import Home from "./pages/Home"
import Catalog from "./pages/Catalog"
import Contacts from "./pages/Contacts"
import Startpage from "./pages/startpage"
import Basket from "./pages/Basket"
import Buys from "./pages/Buys"






const App = () => {
  const [page, setPage] = useState<'start'|'home' | 'catalog' | 'contacts'|'basket'|'buys'>('start');
  const [mode, setMode] = useState<'admin' | 'client' |'none'>('none');
  const [cartItems, setCartItems] = useState<string[]>([]);
  const [cartBuy, setCartBuy] = useState<string[]>([]);

   const [price, setPrice] = useState(0);
    const [login, setLogin] = useState('');


  useEffect(() => {
    if (page === 'start' && mode !== 'none') {
      setMode('none');
      setCartItems([]);

    }
  }, [page]);


  const handleBasket = (items: string[]) => {
    setCartItems([...cartItems,...items]);

   // console.log(cartItems);
  };

  const removeFromCart = (itemToRemove: string) => {
    setCartItems(prevItems => prevItems.filter(item => item !== itemToRemove));
  };

  const handleLogin = (login:string)=>{
    setLogin(login);
  }


  return (
    <div>
    

       <>      
       {page === 'start' && <Startpage onNavigate={setPage} onMode={setMode} onLogin={handleLogin}/>}

        {page === 'home' && <Home onNavigate={setPage} onMode={mode} onDataChange={handleBasket}/>}
        {page === 'catalog' && <Catalog onNavigate={setPage} onMode={mode} onDataChange={handleBasket}/>}
        {page === 'contacts' && <Contacts onNavigate={setPage} onMode={mode}/>}
        {page === 'basket' && <Basket onNavigate={setPage} onMode={mode} cart={cartItems} cartChange={removeFromCart} login={login}/>}
        {page === 'buys' && <Buys onNavigate={setPage} onMode={mode} login={login}/>}


        </>
            </div>
  );
};

export default App;
