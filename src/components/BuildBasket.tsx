import React, { useEffect, useState } from 'react';
import { Typography } from '@mui/material';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import image1 from './images/81374.jpg';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';


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

interface BuildBasketProps {
   item: {
        "Код автозапчасти": number,
        "Наименование": string,
        "Цена": number,
        "Количество в наличии": number,

        };
    index: number;
    

    onMode: 'admin' | 'client' |'none'; 
    onDataChange: (data: string[]) => void; 
    counter: Record<number, number>;
    counterChange:(counter: number)=>void;
    
  }
function BuildBasket({ item,index,onMode,onDataChange,counter,counterChange }: BuildBasketProps) {
 const [data, setData] = useState<string[]>([]);


 



   const handleAdd = (event: React.MouseEvent<HTMLButtonElement>) => {
    const key = +(event.currentTarget.getAttribute('data-key')||0);
    
    counterChange(key);
   }




  return (
    <div>

        <Card key={index} sx={{ 
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
            alignItems: 'flex-start', // выравнивание по верху
            mb: 2, // отступ снизу
        }}>

                <CardMedia
                component="img"
                image={`/images/${item["Код автозапчасти"]}.jpg`}
                alt={item["Код автозапчасти"]+" "+item["Наименование"]}
                
                sx={{
                    width:'300px',
                    height:'190px',
                    objectFit: 'contain',   // обрезать изображение, чтобы оно заполнило область
                }}
                />
          <CardContent sx={{ width: '100%' }}>
            {Object.entries(item).map(([key, value]) => (
              <Typography key={key}>
                <strong>{key}:</strong> {String(value)}  
              </Typography>
            ))}
            <Typography>
                <strong>Количество:</strong> {counter[+Object.values(item)[0]]}
            </Typography>
            
              <Box sx={{ 
      display: 'flex', 
      justifyContent: 'flex-end', 
      mt: 2 
    }}>
      <Button 
        data-key={Object.values(item)[0]}
        variant="contained" 
        color="info" 
        size="medium"
        onClick={ handleAdd}
      >
       Убрать из корзины
      </Button>
    </Box>
          </CardContent>


        </Card>

      
    </div>
  );
}

export default BuildBasket;