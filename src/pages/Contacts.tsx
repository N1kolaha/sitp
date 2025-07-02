import React, { useEffect, useState,forwardRef } from 'react';
import Navbar from "../components/Navbar";


import Button from '@mui/material/Button';

import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { styled } from '@mui/material/styles';
import Toolbar from '@mui/material/Toolbar';
import TextField from '@mui/material/TextField';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert, { AlertProps } from '@mui/material/Alert';

const Alert = forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref
) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

interface HomeProps {
  onNavigate: (page: 'home' | 'catalog' |'contacts'|'start'|'basket'|'buys') => void; 
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

    const [inputValueChange1, setInputValueChange1] = useState('');
    const [inputValueChange2, setInputValueChange2] = useState('');

    const [inputValueChange3, setInputValueChange3] = useState('');
    const [inputValueChange4, setInputValueChange4] = useState('');

    const [inputValueChange5, setInputValueChange5] = useState('');


    const [inputValueAdd1, setInputValueAdd1] = useState('');
    const [inputValueAdd2, setInputValueAdd2] = useState('');
    const [inputValueAdd3, setInputValueAdd3] = useState('');

    const [openSuccess, setOpenSuccess] = useState(false);
    const [openError, setOpenError] = useState(false);
    const [message, setMessage] = useState('');


    const handleInputChange1 = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputValueChange1(event.target.value);
      };
      const handleInputChange2 = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputValueChange2(event.target.value);
      };
      const handleInputChange3 = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputValueChange3(event.target.value);
      };
      const handleInputChange4 = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputValueChange4(event.target.value);
      };
      const handleInputChange5 = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputValueChange5(event.target.value);
      };



    const handleInputAdd1 = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputValueAdd1(event.target.value);
      };
    const handleInputAdd2 = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputValueAdd2(event.target.value);
      };
    const handleInputAdd3 = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputValueAdd3(event.target.value);
      };


    
      const onChange = (result: String) =>{
        if(result=="1"){
            console.log("Изменено успешно")
        }
      }

      const onAdd = (result: String) =>{
        if(result=="1"){
            console.log("Добавлено успешно")
        }
      }

      const handleSubmitChangeName = () => {
        const code = inputValueChange1;
        const name=  inputValueChange2;
        console.log(`${code}   ${name}`);
                const url = `http://localhost:3001/change?code=${code}&name=${name}&price=${0}`;
            fetch(url, { method: 'GET' })
            .then(res => res.json())
            .then(data=>{
              onChange(data);
              setMessage(`Название запчасти с кодом ${code} изменено на ${name}`)
              setOpenSuccess(true);
            })
            .catch((err) => console.error('Ошибка загрузки:', err));
       
      };



      const handleSubmitChangePrice = () => {
        const code = inputValueChange3;
        const price=  inputValueChange4;
        console.log(`${code}   ${price}`);
                const url = `http://localhost:3001/change?code=${code}&price=${price}&name=${""}`;
            fetch(url, { method: 'GET' })
            .then(res => res.json())
            .then(data=>{
              onChange(data);
              setMessage(`Цена запчасти с кодом ${code} изменено на ${price}`)
              setOpenSuccess(true);
            })
            .catch((err) => console.error('Ошибка загрузки:', err));
       
      };

      const handleSubmitDelete = () => {
        const code = inputValueChange5;
        console.log(`${code} `);
                const url = `http://localhost:3001/delete?code=${code}`;
            fetch(url, { method: 'GET' })
            .then(res => res.json())
            .then(data=>{
              onChange(data);
              setMessage(`Запчасть с кодом ${code} удалена`)
              setOpenSuccess(true);
            })
            .catch((err) => console.error('Ошибка загрузки:', err));
       
      };



      function generateAutoCode()  {
        let min=10000;
        let max=99999;
        return Math.floor(Math.random()*((max - min) + 1)) + min;
      }

      const handleSubmitAdd = () => {
        const code = generateAutoCode();
        const name = inputValueAdd1;
        const price=  inputValueAdd2;
        const value=  inputValueAdd3;

        console.log(`${name}   ${price}   ${value}`);
                const url = `http://localhost:3001/add?code=${code}&name=${name}&price=${price}&value=${value}`;
            fetch(url, { method: 'GET' })
            .then(res => res.json())
            .then(data=>{
              onAdd(data);
              setMessage(`Добавлена запчасть: ${code} ${name}  ${price}  ${value}
                Не забудьте добавить изображение с названием ${code}
                `)
              setOpenSuccess(true);
            })
            .catch((err) => console.error('Ошибка загрузки:', err));
       
      };


      const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
        if (reason === 'clickaway') {
          return;
        }
        setOpenSuccess(false);
        setOpenError(false);
      };



    return (
        <>
        <Navbar active="3" mode={onMode} onNavigate={onNavigate}/>
        
        <Container maxWidth="lg">



        <StyledToolbar sx={{
            marginBottom:'1%',
            alignItems: 'center',
            justifyContent: 'space-between',
        }} >
            <StyledTypography >
       Добавить новую автозапчасть
</StyledTypography>
           <TextField
      label="Наименование"
      type="text"
      value={inputValueAdd1}
        onChange={handleInputAdd1}
      variant="outlined"
     
    />
    <TextField
      label="Цена"
      type="number"
      value={inputValueAdd2}
        onChange={handleInputAdd2}
      variant="outlined"
     
    />
     <TextField
      label="Количество"
      type="number"
      value={inputValueAdd3}
        onChange={handleInputAdd3}
      variant="outlined"
     
    />
     <Button variant="contained" color="info" size="medium" onClick={handleSubmitAdd} sx={{
        marginLeft:'1%'
     }}>
           Добавить
            </Button>
           </StyledToolbar>




        <StyledToolbar sx={{
            marginBottom:'1%',
            alignItems: 'center',
            justifyContent: 'space-between',
        }} >
            <StyledTypography >
       Изменить название запчасти
</StyledTypography>
           <TextField
      label="Код"
      type="text"
      value={inputValueChange1}
        onChange={handleInputChange1}
      variant="outlined"
     
    />
    <TextField
      label="Новое название"
      type="text"
      value={inputValueChange2}
        onChange={handleInputChange2}
      variant="outlined"
     
    />
     <Button variant="contained" color="info" size="medium" onClick={handleSubmitChangeName} sx={{
        marginLeft:'1%'
     }}>
           Изменить
            </Button>
           </StyledToolbar>




           <StyledToolbar sx={{
            marginBottom:'1%',
            alignItems: 'center',
            justifyContent: 'space-between',
        }} >
            <StyledTypography >
       Изменить цену запчасти
</StyledTypography>
           <TextField
      label="Код"
      type="text"
      value={inputValueChange3}
        onChange={handleInputChange3}
      variant="outlined"
     
    />
    <TextField
      label="Новая цена"
      type="text"
      value={inputValueChange4}
        onChange={handleInputChange4}
      variant="outlined"
     
    />
     <Button variant="contained" color="info" size="medium" onClick={handleSubmitChangePrice} sx={{
        marginLeft:'1%'
     }}>
           Изменить
            </Button>
           </StyledToolbar>




           <StyledToolbar sx={{
            marginBottom:'1%',
            alignItems: 'center',
            justifyContent: 'space-between',
        }} >
            <StyledTypography >
       Удалить запчасть
</StyledTypography>
           <TextField
      label="Код"
      type="text"
      value={inputValueChange5}
        onChange={handleInputChange5}
      variant="outlined"
     
    />
  
     <Button variant="contained" color="info" size="medium" onClick={handleSubmitDelete} sx={{
        marginLeft:'1%'
     }}>
           Удалить
            </Button>
           </StyledToolbar>



           </Container >


           <Snackbar 
        open={openSuccess} 
        autoHideDuration={3000} 
        onClose={handleClose}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      >
        <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
          {message}
        </Alert>
      </Snackbar>

      <Snackbar 
        open={openError} 
        autoHideDuration={3000} 
        onClose={handleClose}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      >
        <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
          {message}
        </Alert>
      </Snackbar>
    </>
           
    );
};
  
  export default Contacts;