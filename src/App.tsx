import React, { useState } from 'react';import logo from './logo.svg';
import './styles/App.css';
import Navbar from "./components/Navbar";

import BuildCard from "./components/BuildCard";

import Content from "./components/Content";

import Home from "./pages/Home"
import Catalog from "./pages/Catalog"
import Contacts from "./pages/Contacts"
import Startpage from "./pages/startpage"




const App = () => {
  const [page, setPage] = useState<'start'|'home' | 'catalog' | 'contacts'>('start');
  const [mode, setMode] = useState<'admin' | 'client' |'none'>('none');


  return (
    <div>
    

       <>      
       {page === 'start' && <Startpage onNavigate={setPage} onMode={setMode}/>}

        {page === 'home' && <Home onNavigate={setPage} onMode={mode}/>}
        {page === 'catalog' && <Catalog onNavigate={setPage} onMode={mode}/>}
        {page === 'contacts' && <Contacts onNavigate={setPage} onMode={mode}/>}

        </>
            </div>
  );
};

export default App;
