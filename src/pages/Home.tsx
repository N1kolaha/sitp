import React from 'react';
import Navbar from "../components/Navbar";

import BuildCard from "../components/BuildCard";

import Content from "../components/Content";

interface HomeProps {
  onNavigate: (page: 'home' | 'catalog' |'contacts'|'start') => void;    
  onMode: 'admin' | 'client' |'none';  }


function Home  ({ onNavigate,onMode }: HomeProps)  {
    return (
      <div>
           <Navbar active="1" mode={onMode} onNavigate={onNavigate}/>
           <Content/>
           
      </div>
    );
};
  
  export default Home;