import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Stack } from '@mui/material';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'left',
    color: theme.palette.text.secondary,
  }));

export default function HeaderCard() {  
  return (
    <Stack sx={{
        '& > :not(style)': { m: 0.5, width: '88%' },
      }} >
    <Item>
    <Card sx={{ display: 'flex' }}>
    
    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
    
      <CardContent sx={{ flex: '1 0 auto' }}>
        
        <Typography style={{paddingLeft:0, color:"#01579b"}} component="span">
        Rank
        </Typography>  
        <Typography style={{paddingLeft:25, color:"#01579b"}} component="span">
        Name
        </Typography> 
        <Typography style={{paddingLeft:30, color:"#01579b"}} component="span">
        Price
        </Typography> 
        <Typography style={{paddingLeft:30, color:"#01579b"}} component="span">
        Market Cap
        </Typography>
      </CardContent> 
      </Box>
    </Card>
    </Item>
    </Stack>
  );
}
