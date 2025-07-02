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


interface BasketProps {
  onNavigate: (page: 'home' | 'catalog' |'contacts'|'start'|'basket'|'buys') => void;
     onMode: 'admin' | 'client' |'none';  
  cart: string[];
  cartChange:(cart:string)=>void;
  login:string;
  


  
  }

function Basket({onNavigate,onMode,cart,cartChange,login}: BasketProps) {


    const onDataChange=(key:string[])=>{
        console.log(key+ "   из корзинки");
    }
 const [data, setData] = useState<any[]>([]);

 const [counter, setCounter] = useState<Record<number, number>>({});

 const [price, setPrice] = useState(0);


 const onCounterChange = (count:number)=>{
   cartChange(String(count));
    console.log(count);
 }

 const handleBuy=()=>{
  const tags = cart;
  const tagString = tags.join(',');
  const log = login;
  const url = `http://localhost:3001/addBuy?parts=${encodeURIComponent(tagString)}&login=${log}`;
  fetch(url, { method: 'GET' })
  .then(res => res.json())
  .then(data=>{
    

  })
  .catch((err) => console.error('Ошибка добавления покупки:', err));
 }


 useEffect(() => {
    console.log(cart);
    setCounter({});
    setData([]); // очищаем старые данные при смене корзины  

   const counts: Record<number, number> = {};
  
   for (const item of cart) {
     const num = Number(item);
     counts[num] = (counts[num] || 0) + 1;
   }
 
   setCounter(counts);
   console.log(counts);


   





    const uniqueBasket: number[] = Array.from(new Set(cart.map(Number)));  
   

  //  console.log(uniqueBasket);
    uniqueBasket.forEach((itemCode) => {
      const url = `http://localhost:3001/search?code=${itemCode}`;
      fetch(url)
        .then((res) => res.json())
        .then((newItem) => {
            setData((prevData) => {
                const alreadyExists = prevData.some(
                  (item) => item["Код автозапчасти"] === newItem["Код автозапчасти"]
                );
                return alreadyExists ? prevData : [...prevData, newItem];
              });

                                //console.log(newItem);
                   })
        .catch((err) => console.error('Ошибка поиска автозапчасти:', err));
    });


   

  }, [cart]);

   
  useEffect(() => {
    let sum = 0;
    data.forEach((item) => {
      const count = counter[+item["Код автозапчасти"]] || 0;
      sum += item["Цена"] * count;
    });
    setPrice(sum);
  }, [data, counter]); // ← теперь цена будет обновляться каждый раз, когда меняются товары или их количество


// const itemsPerPage = 8;
//         const [currentPage, setCurrentPage] = useState(1);

//  const totalPages = Math.ceil(data.length / itemsPerPage);
//  const startIndex = (currentPage - 1) * itemsPerPage;
//  const paginatedData = data.slice(startIndex, startIndex + itemsPerPage);


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
    
          display:cart.length === 0 ? 'block' : 'none', 

}}>
<StyledToolbar sx={{
            marginBottom:'1%'
        }} >

<StyledTypography >
       В вашей корзине пока пусто

</StyledTypography>
</StyledToolbar>
</Box>

<Box sx={{
    
    display:cart.length > 0 ? 'block' : 'none', 

}}>
<StyledToolbar sx={{
            marginBottom:'1%'
        }} >

<StyledTypography >
       Общая стоимость товаров в корзине: {price}

</StyledTypography>
<Button variant="contained" color="info" size="medium"
  onClick={handleBuy}
  sx={{
        marginLeft:'35%'

     }}>
           Оформить
            </Button>

</StyledToolbar>
</Box>



    <Grid container spacing={{ xs: 3, md: 6 }}>
    {data.map((item, index) => (
    <Grid key={item["Код автозапчасти"] || index}  size={{ xs: 12, md: 12 }} >
        <BuildBasket item={ item } index={index} onMode={onMode} onDataChange={onDataChange} counter={counter} counterChange={onCounterChange} />
    </Grid>
    ))}
    </Grid>
    {/* <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
      <Pagination
        count={totalPages}
        page={currentPage}
        onChange={(_, value) => {
            setCurrentPage(value);
            window.scrollTo({ top: 0, behavior: 'smooth' }); // Прокрутка вверх
        }}
        color="primary"
      />
    </Box> */}

    </Container>
      </div>
    );
  }
  
  export default Basket;