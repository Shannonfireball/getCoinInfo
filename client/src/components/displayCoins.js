import React, { useEffect } from 'react'
import LinearProgress from '@mui/material/LinearProgress';
import { Stack } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux'
import { loadCoins } from '../slice/loadCoins';
import BasicCard from './Card';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import {Button} from '@mui/material';


import { Outlet, Link } from 'react-router-dom';
import {
  useLocation,
  NavLink,
  useSearchParams,
} from 'react-router-dom';
function QueryNavLink({ to, ...props }) {
  let location = useLocation();
  return <NavLink to={to + location.search} {...props} />;
}



const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'left',
  color: theme.palette.text.secondary,
}));

export default function DisplayWords() {
    
    const coins = useSelector(state => state.load.coins);
    const dispatch = useDispatch()
    
    useEffect(()=>{
      dispatch(loadCoins())
    },[dispatch])
    const search = useSelector(state => state.search);
    const filteredNewCoins = coins.filter(coins=>{
      return coins.name.toLowerCase().includes(search.toLowerCase())
    })
    // const filterecwords = useSelector(selectFilteredWords);
    // console.log(filteredNewWords);
    const display = filteredNewCoins.length<=0
    console.log(coins)
  return (
    <div>
    {display&&<LinearProgress/>}
    {filteredNewCoins.map(coin =>(
      <Stack sx={{
        '& > :not(style)': { m: 0.5, width: '90%' },
      }} >
      
      <QueryNavLink key={coin.name} to={`/details/${coin.id}`}>
      <Item><BasicCard name={coin.name} coin={coin} /></Item>
      </QueryNavLink>
      <Outlet />
      
      
      </Stack>
    ))}
    </div>
  )
}
