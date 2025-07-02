import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import BuildBasket from  "../components/BuildBasket";
import React, { useEffect, useState } from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import Toolbar from '@mui/material/Toolbar';
import { Pagination } from '@mui/material';
import Navbar from "../components/Navbar";
import Button from '@mui/material/Button';
import BuildCard from  "../components/BuildCard";
import BuildBuy from "../components/BuildBuy"; 



const StyledTypography = styled(Typography)(({theme})=>({
    color: 'text.secondary',
    textAlign:'center',
    'p': {marginTop: "16px" }
  
}))

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'center',     // Горизонтальное выравнивание
    alignItems: 'center',         // Вертикальное выравнивание
    textAlign: 'center',    flexShrink: 0,
    borderRadius: `calc(${theme.shape.borderRadius}px + 8px)`,
    border: '1px solid',
    borderColor: theme.palette.divider,
    padding: '1px 12px',
    }));


interface BuysProps {
    onNavigate: (page: 'home' | 'catalog' |'contacts'|'start'|'basket'|'buys') => void;
       onMode: 'admin' | 'client' |'none';  
  login:string;
  


  
  }

function Buys({onNavigate,onMode,login}: BuysProps) {
onMode="admin";
     const [data, setData] = useState<any[]>([]);
    
     const onDataChange=()=>{

     }

  useEffect(() => {
        const url = `http://localhost:3001/Buys?login=${login}`;
    fetch(url)
    .then(res => res.json())
    .then(setData)
    .catch((err) => console.error('Ошибка загрузки купленных товаров:', err));
  }, [login]);


  const sortedData = [...data].sort((a, b) => {
    return b["Дата"].localeCompare(a["Дата"]);
  });


  const groupedByDate = sortedData.reduce((acc, item) => {
    const date = item["Дата"];
    if (!acc[date]) acc[date] = [];
    acc[date].push(item);
    return acc;
  }, {} as { [key: string]: any[] });


    return (
      <div>
           <Navbar active="3" mode={onMode} onNavigate={onNavigate}/>
           <Container maxWidth="xl">
        <StyledToolbar sx={{
            marginBottom:'1%'
        }} >

<StyledTypography >
        Мы продаем самый качественный товар от проверенных официальных поставщиков

</StyledTypography>
</StyledToolbar>
<Box sx={{
    
    display:data.length === 0 ? 'block' : 'none', 

}}>
<StyledToolbar sx={{
      marginBottom:'1%'
  }} >

<StyledTypography >
 У вас нет оформленных покупок

</StyledTypography>
</StyledToolbar>
</Box>
   


{Object.entries(groupedByDate).map(([date, items]) => (
  <BuildBuy
    key={date}
    date={date}
    items={items as any[]}
    onMode={onMode}
    onDataChange={onDataChange}
  />
))}

    </Container>
      </div>
    );
  }
  
  export default Buys;