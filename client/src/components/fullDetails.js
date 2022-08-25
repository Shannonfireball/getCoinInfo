import React,{useEffect,useState} from 'react'
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'
import {loadCoin} from '../slice/getCoin';

import LinearProgress from '@mui/material/LinearProgress';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import { Stack } from '@mui/material';

import DetailCard from './detailCard';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'left',
  color: theme.palette.text.secondary,
}));



export default function FullDetails() {
  const [loading,setLoading]=useState(true);
  let params = useParams();
  const coin = useSelector(state => state.find.coin);
  const dispatch = useDispatch()

  
  useEffect(()=>{
    dispatch(loadCoin(params.details.toLowerCase())).finally(()=>setLoading(false))
  },[dispatch])
  
  console.log(coin)

  if(loading) return <LinearProgress/>

  return (  
    <div>
    <Container maxWidth="md"> 
      <Stack sx={{
        '& > :not(style)': { m: 0.5, width: '90%' },
      }} >
      <Item><DetailCard coin={coin} /></Item>    
      </Stack>
    </Container>
    </div>
  )
}
