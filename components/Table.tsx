import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import BuildCard from  "../components/BuildCard";
import React, { useEffect, useState } from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import Toolbar from '@mui/material/Toolbar';
import { Pagination } from '@mui/material';
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

    interface TableProps {
        onMode: 'admin' | 'client' |'none';  
        onDataChange: (data: string[]) => void; // 👈 добавлено

        }


       
        

function Table({onMode,onDataChange}: TableProps) {
 const [data, setData] = useState<any[]>([]);


 

 const itemsPerPage = 8;
        const [currentPage, setCurrentPage] = useState(1);

 const totalPages = Math.ceil(data.length / itemsPerPage);
 const startIndex = (currentPage - 1) * itemsPerPage;
 const paginatedData = data.slice(startIndex, startIndex + itemsPerPage);



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
        Мы продаем самый качественный товар от проверенных официальных поставщиков

</StyledTypography>
</StyledToolbar>
<StyledTypography variant='h5' sx={{
    marginBottom:'2%'
}}>
        Каталог нашего магазина
</StyledTypography>

    <Grid container spacing={{ xs: 3, md: 6 }}>
    {paginatedData.map((item, index) => (
    <Grid key={item["Код автозапчасти"] || index}  size={{ xs: 12, md: 12 }} >
        <BuildCard item={ item } index={index} onMode={onMode} onDataChange={onDataChange}/>
    </Grid>
    ))}
    </Grid>
    <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
      <Pagination
        count={totalPages}
        page={currentPage}
        onChange={(_, value) => {
            setCurrentPage(value);
            window.scrollTo({ top: 0, behavior: 'smooth' }); // Прокрутка вверх
        }}
        color="primary"
      />
    </Box>

    </Container>
    );
   }
   export default Table;
