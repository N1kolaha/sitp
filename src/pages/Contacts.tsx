import React, { useEffect, useState } from 'react';
import Navbar from "../components/Navbar";


import Button from '@mui/material/Button';

import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { styled } from '@mui/material/styles';
import Toolbar from '@mui/material/Toolbar';
import TextField from '@mui/material/TextField';

interface HomeProps {
  onNavigate: (page: 'home' | 'catalog' |'contacts'|'start') => void;    
  onMode: 'admin' | 'client' |'none';  
   
    
  }

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


    const StyledTypography = styled(Typography)(({theme})=>({
        color: 'text.secondary',
        textAlign:'center',
        'p': {marginTop: "16px" }
      
    }))

function Contacts  ({ onNavigate,onMode }: HomeProps)  {

    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value);
      };
    
      const onChange = (result: String) =>{
        if(result=="1"){
            console.log("Изменено успешно")
        }
      }

      const handleSubmit = () => {
        const code = inputValue.slice(0,inputValue.search(" "));
        const name=  inputValue.slice(inputValue.search(" ")+1);
        console.log(`${code}   ${name}`);
                const url = `http://localhost:3001/change?code=${code}&name=${name}`;
            fetch(url, { method: 'GET' })
            .then(res => res.json())
            .then(onChange)
            .catch((err) => console.error('Ошибка загрузки цен:', err));
       
      };

    return (
        <>
        <Navbar active="3" mode={onMode} onNavigate={onNavigate}/>
        
        <Container maxWidth="lg">

        <StyledToolbar sx={{
            marginBottom:'1%'
        }} >
            <StyledTypography >
       Изменить название запчасти
</StyledTypography>
           <TextField
      label="Введите Код и новое название (через пробел)"
      type="text"
      value={inputValue}
        onChange={handleInputChange}
      variant="outlined"
      fullWidth
    />
     <Button variant="contained" color="info" size="medium" onClick={handleSubmit} sx={{
        marginLeft:'1%'
     }}>
           Изменить
            </Button>
           </StyledToolbar>
           </Container >
           
           </>
    );
};
  
  export default Contacts;