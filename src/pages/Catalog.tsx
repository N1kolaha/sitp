import Navbar from "../components/Navbar";
import Table from "../components/Table"

interface HomeProps {
  onNavigate: (page: 'home' | 'catalog' |'contacts'|'start'|'basket'|'buys') => void;
     onMode: 'admin' | 'client' |'none';  
  onDataChange: (data: string[]) => void; // 👈 добавлено

  }

function Catalog({onNavigate,onMode,onDataChange}: HomeProps) {
    return (
      <div>
           <Navbar active="2" mode={onMode} onNavigate={onNavigate}/>
           <Table onMode={onMode} onDataChange={onDataChange}/>
           
      </div>
    );
  }
  
  export default Catalog;