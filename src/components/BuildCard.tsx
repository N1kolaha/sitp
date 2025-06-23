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

interface BuildCardProps {
   item: {
        "Код автозапчасти": number,
        "Наименование": string,
        "Цена": number,
        "Количество в наличии": number,

        };
    index: number;
  }
function BuildCard({ item,index }: BuildCardProps) {
   

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
                alt={item["Наименование"]}
                
                sx={{
                    width:'300px',
                    height:'190px',
                    objectFit: 'contain',   // обрезать изображение, чтобы оно заполнило область
                }}
                />
          <CardContent>
            {Object.entries(item).map(([key, value]) => (
              <Typography key={key}>
                <strong>{key}:</strong> {String(value)}  
              </Typography>
            ))}
          </CardContent>


        </Card>

      
    </div>
  );
}

export default BuildCard;