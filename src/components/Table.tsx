import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import BuildCard from  "../components/BuildCard";
import React, { useEffect, useState } from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import Toolbar from '@mui/material/Toolbar';

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


function Table() {
 const [data, setData] = useState<any[]>([]);
   //   const column = 'Цена'; // Можно менять на 'Название', 'Количество', и т.п.
 //const limit = 4;
      useEffect(() => {
        const url = `http://localhost:3001/catalog`;
    fetch(url)
    .then(res => res.json())
    .then(setData)
    .catch((err) => console.error('Ошибка загрузки цен:', err));
  }, []);


    return (
        
    <Container maxWidth="xl">
        <StyledToolbar sx={{
            marginBottom:'1%'
        }} >

<StyledTypography >
        Мы продаем самый качественный товар от проверенных официальных поставщиков бубубу...

</StyledTypography>
</StyledToolbar>
<StyledTypography variant='h5' sx={{
    marginBottom:'2%'
}}>
         Список ваще всех товаров
</StyledTypography>

    <Grid container spacing={{ xs: 3, md: 6 }}>
    {data.map((item, index) => (
    <Grid key={index} size={{ xs: 12, md: 12 }} >
        <BuildCard item={ item } index={index}/>
    </Grid>
    ))}
    </Grid>
    </Container>
    );
   }
   export default Table;
