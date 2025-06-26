import React from 'react';
import Navbar from "../components/Navbar";

import BuildCard from "../components/BuildCard";

import Content from "../components/Content";

interface HomeProps {
  onNavigate: (page: 'home' | 'catalog' |'contacts'|'start'|'basket') => void;    
  onMode: 'admin' | 'client' |'none';  
  onDataChange: (data: string[]) => void; // 👈 добавлено

}


function Home  ({ onNavigate,onMode,onDataChange }: HomeProps)  {
    return (
      <div>
           <Navbar active="1" mode={onMode} onNavigate={onNavigate}/>
           <Content onMode={onMode} onDataChange={onDataChange}/>
           
      </div>
    );
};
  
  export default Home;