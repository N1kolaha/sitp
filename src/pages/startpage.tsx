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
    onNavigate: (page: 'home' | 'catalog' |'contacts'|'start'|'basket') => void;    
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
          setMode("admin");
          onMode("admin");   

          onNavigate('home');

        } else if (/^[a-zA-Z0-9]+$/.test(login)) {


          const url = `http://localhost:3001/client?login=${encodeURIComponent(login)}&password=${encodeURIComponent(password)}`; 
           fetch(url)
           .then(response => {
            if (!response.ok) {
              throw new Error(`Сервер ответил статусом ${response.status}`);
            }
            return response.json();       
          })
          .then(result => {
           
            if (result === 1) {
              console.log("Успешный вход");
              setMode("client"); 
          onMode("client");   
              onNavigate('home');
           
              newMode = "client";
              console.log(mode);


            } else if (result === -1) {
              alert("Неверный пароль");
              console.log("Неверный пароль");
            } else if (result === 0) {



              const url = `http://localhost:3001/registr?login=${encodeURIComponent(login)}&password=${encodeURIComponent(password)}`; 
              fetch(url, { method: 'GET' })
              .then(res => res.json())
              .then(data=>{
                

              })
              .catch((err) => console.error('Ошибка регистрации клиента:', err));







             alert("Успешно регистрация");
            }
          })
          .catch(err => console.error('Ошибка загрузки пользователя', err));



          //newMode = "client";
        } else {
            return;
        }
      //  console.log(newMode);
       // setMode(newMode);     
      //  onMode(newMode);    
                
        
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
      label="Введите пароль"
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