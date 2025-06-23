import Navbar from "../components/Navbar";
import Table from "../components/Table"

interface HomeProps {
  onNavigate: (page: 'home' | 'catalog' |'contacts'|'start') => void;    
  onMode: 'admin' | 'client' |'none';  
  
  }

function Catalog({onNavigate,onMode}: HomeProps) {
    return (
      <div>
           <Navbar active="2" mode={onMode} onNavigate={onNavigate}/>
           <Table/>
           
      </div>
    );
  }
  
  export default Catalog;