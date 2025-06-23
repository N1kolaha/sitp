import Navbar from "../components/Navbar";

import BuildCard from "../components/BuildCard";

import Content from "../components/Content";
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import React, { useEffect, useState } from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import Toolbar from '@mui/material/Toolbar';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';



interface startProps {
    onNavigate: (page: 'home' | 'catalog' |'contacts'|'start') => void;    
    onMode:(mode: 'client'|'admin'|'none')   => void;
  }

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
function Startpage  ({ onNavigate,onMode }: startProps)  {
    const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [mode, setMode] = useState<'admin' | 'client' |'none'>('none');
    const setHome = () => {

    }

    const handleLogin = () => {
        let newMode: 'admin' | 'client' | 'none' = 'none';

        if (login === "admin") {
          newMode = "admin";
        } else if (login === "client") {
          newMode = "client";
        } else {
            return;
        }
      
        setMode(newMode);     
        onMode(newMode);    
        onNavigate('home');        
        
      };

      

    return (
      <div>
           <Navbar active="3" mode={mode}  onNavigate={onNavigate}/>
           <Container maxWidth="xl">
           <StyledToolbar sx={{
            marginBottom:'1%'
        }} >

<StyledTypography >
        Мы продаем самый качественный товар от проверенных официальных поставщиков 
</StyledTypography>
</StyledToolbar>

           <StyledToolbar sx={{
            marginBottom:'1%'
        }} >

<TextField
      label="Введите логин"
      type="text"
      value={login}
        onChange={(e) => setLogin(e.target.value)}
      variant="outlined"
      fullWidth
    />
    <TextField
      label="Введите логин"
      type="password"
    placeholder="Пароль"
      value={password}
        onChange={(e) => {
            setPassword(e.target.value);
            
        }}
      variant="outlined"
      fullWidth
    />
     <Button variant="contained" color="info" size="medium" onClick={handleLogin} sx={{
        marginLeft:'1%'
     }}>
           Войти
            </Button>
</StyledToolbar>


               </Container>

      </div>
    );
};
  
  export default Startpage;