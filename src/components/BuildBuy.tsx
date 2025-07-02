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
import BuildCard from './BuildCard';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';


interface BuildBuyProps {
  date: string;
  items: any[];
  onMode: 'admin' | 'client' | 'none';
  onDataChange: () => void;
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

function BuildBuy({ date, items, onMode, onDataChange }: BuildBuyProps) {

    const totalSum = items.reduce((sum, item) => {
        return sum + (item.Цена * item.Количество);
      }, 0);

  return (
    <Container maxWidth="xl">
        <StyledToolbar sx={{
            marginBottom:'1%'
        }} >
      <StyledTypography variant="h6" gutterBottom>
      Дата покупки: {date} — Общая сумма: {totalSum}      </StyledTypography>
      </StyledToolbar>

      <Grid container spacing={{ xs: 3, md: 6 }}>
        {items.map((item, index) => (
          <Grid  key={index} size={{xs:12, md: 6}}>
            <BuildCard item={item} index={index} onMode={onMode} onDataChange={onDataChange} />
          </Grid>
        ))}
      </Grid>
      </Container>
    );
}

export default BuildBuy;
