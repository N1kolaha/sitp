import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { styled } from '@mui/material/styles';
import React from 'react';

import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import MenuItem from '@mui/material/MenuItem';

import Drawer from '@mui/material/Drawer';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';




interface ComponentProps {
    active: string;
    mode:string;
    onNavigate: (page: 'home' | 'catalog' |'contacts'|'start'|'basket') => void;    
   }

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexShrink: 0,
    borderRadius: `calc(${theme.shape.borderRadius}px + 8px)`,
    border: '1px solid',
    borderColor: theme.palette.divider,
    padding: '8px 12px',
    }));


function Navbar({ active,mode,onNavigate } : ComponentProps) {
        const [open, setOpen] = React.useState(false);
        const toggleDrawer = (newOpen: boolean) => () => {
            setOpen(newOpen);
            };
           
        return (
        <AppBar
        position="static"
        sx={{
        boxShadow: 0,
        bgcolor: 'transparent',
        mt: '28px',
        }}
        >
     <Container maxWidth="xl" sx={{
        marginBottom:'1%'
     }}>

        <StyledToolbar>
            <Typography variant="h6" sx={{ color: '#5d8aa8' }}>
            Магазин Автозапчастей "Гонщик"
            </Typography>
            <Typography variant="h6" sx={{ color: 'lightgrey' }}>
           Продаем запчасти уже 20 лет!
          </Typography>

            
            <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            <Button variant={active=="1" ? "contained":"text"} color="info" size="medium"   onClick={() => onNavigate('home')}>
            Главная
            </Button>
            <Button variant={active=="2" ? "contained":"text"} color="info" size="medium" onClick={() => onNavigate('catalog')}>
            Каталог
            </Button>

            <Box sx={{ display:mode == "none" ? 'flex' : 'none' }}> 
            <Button variant={active=="3" ? "contained":"text"} color="info" size="medium" onClick={() => onNavigate('start')}>
            Авторизация
            </Button>
            </Box>
            <Box sx={{ display:mode == "admin" ? 'flex' : 'none' }}>        
            <Button variant={active=="3" ? "contained":"text"} color="info" size="medium" onClick={() => onNavigate('contacts')}>
            Управление товарами
            </Button>
            </Box>

            <Box sx={{ display:mode == "client" ? 'flex' : 'none' }}>        
            <Button variant={active=="3" ? "contained":"text"} color="info" size="medium" onClick={() => onNavigate('basket')}>
            Корзина
            </Button>
            </Box>

            <Box sx={{ display:(mode == "client")||(mode == "admin") ? 'flex' : 'none' }}>        
            <Button variant={"outlined"} color="info" size="medium" onClick={() => onNavigate('start')}>
            Выйти
            </Button>
            </Box>

           

            </Box>
            <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
  <IconButton aria-label="Menu button" onClick={toggleDrawer(true)}>
    <MenuIcon />
  </IconButton>

  <Drawer anchor="top" open={open} onClose={toggleDrawer(false)}>
    <Box>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'flex-end',
        }}
      >
        <IconButton onClick={toggleDrawer(false)}>
          <CloseRoundedIcon />
        </IconButton>
      </Box>
      <MenuItem 
        selected={active === "1"}
        onClick={() => { onNavigate('home'); toggleDrawer(false)(); }} 
        sx={{ backgroundColor: active === "1" ? '#0288d1' : undefined, '&:hover': { backgroundColor: 'lightblue' } }}
      >
        Главная
      </MenuItem>
      <MenuItem 
        selected={active === "2"}
        onClick={() => { onNavigate('catalog'); toggleDrawer(false)(); }} 
        sx={{ backgroundColor: active === "2" ? '#0288d1' : undefined, '&:hover': { backgroundColor: 'lightblue' } }}
      >
        Каталог
      </MenuItem>
      {mode === "none" && (
        <MenuItem 
          selected={active === "3"}
          onClick={() => { onNavigate('start'); toggleDrawer(false)(); }} 
          sx={{ backgroundColor: active === "3" ? '#0288d1' : undefined, '&:hover': { backgroundColor: 'lightblue' } }}
        >
          Авторизация
        </MenuItem>
      )}
      {mode === "admin" && (
        <MenuItem 
          selected={active === "3"}
          onClick={() => { onNavigate('contacts'); toggleDrawer(false)(); }} 
          sx={{ backgroundColor: active === "3" ? '#0288d1' : undefined, '&:hover': { backgroundColor: 'lightblue' } }}
        >
          Управление товарами
        </MenuItem>
      )}
      {mode === "client" && (
        <MenuItem 
          selected={active === "3"}
          onClick={() => { onNavigate('basket'); toggleDrawer(false)(); }} 
          sx={{ backgroundColor: active === "3" ? '#0288d1' : undefined, '&:hover': { backgroundColor: 'lightblue' } }}
        >
          Корзина
        </MenuItem>
      )}
      {(mode === "client" || mode === "admin") && (
        <MenuItem 
          onClick={() => { onNavigate('start'); toggleDrawer(false)(); }} 
          sx={{ border: '1px solid #0288d1', mt: 1, '&:hover': { backgroundColor: 'lightblue' } }}
        >
          Выйти
        </MenuItem>
      )}
    </Box>
  </Drawer>
</Box>
        </StyledToolbar>

    </Container> 

        </AppBar>



        );
       }
       
export default Navbar;