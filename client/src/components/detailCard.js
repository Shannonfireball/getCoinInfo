
import * as React from 'react';


import Card from '@mui/material/Card';

import CardContent from '@mui/material/CardContent';

import Typography from '@mui/material/Typography';

import Box from '@mui/material/Box';


import { Divider } from '@mui/material';








export default function DetailCard(props) {  
  function replaceURLs(message) {
    if (!message) return;
   
    var urlRegex = /(<a(?:\s[^>]*)?>[\s\S]*?<\/a>)|(?:(?:https?|ftp|file):\/\/|www\.|ftp\.)(?:\([-A-Z0-9+&@#\/%=~_|$?!:,.]*\)|[-A-Z0-9+&@#\/%=~_|$?!:,.])*(?:\([-A-Z0-9+&@#\/%=~_|$?!:,.]*\)|[A-Z0-9+&@#\/%=~_|$])/gi;
    return message.replace(urlRegex, function (url, tag) {
      if (tag) return url;
   
      var hyperlink = url;
      if (!hyperlink.match('^https?:\/\/')) {
        hyperlink = 'http://' + hyperlink;
      }
      return '<a href="' + hyperlink + '" target="_blank" rel="noopener noreferrer">' + url + '</a>'
    });
  }
  console.log()
  return (
    <Card sx={{ display: 'flex' }}>
    
    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
    
      <CardContent sx={{ flex: '1 0 auto' }}>

        <Typography style={{paddingLeft:20}} component="span">
        <sub><sub><img height={40} src={props.coin.image.large} alt="coinLogo"></img></sub></sub>
        </Typography>
        <Typography style={{paddingLeft:10}} component="span" variant='h4'>
        {props.coin.name}  
        </Typography>
        <Typography color='text.secondary' style={{paddingLeft:10}} component="span" variant='h6'>
        {props.coin.symbol}
        </Typography>
        <Divider />
        <br/>
        <Typography style={{paddingLeft:40, color:"#01579b"}} component="div">
        Price: ${props.coin.market_data.current_price.usd.toLocaleString()}  
        </Typography>
        <br/>
    
        <Typography style={{paddingLeft:40}} component="div">
        <h4>Description:</h4> {props.coin.description.en.replace(/(<a(?:\s[^>]*)?>[\s\S]*?<\/a>)/gi,'')}  
        </Typography>
        <br/>
        <Typography style={{paddingLeft:60}} component="span">
        <h4>Market Capital:</h4> ${props.coin.market_data.market_cap.usd.toLocaleString()}  
        </Typography>
        <Typography style={{paddingLeft:100}} component="span">
        <h4>Max Supply:</h4> ${props.coin.market_data.max_supply?.toLocaleString()}  
        </Typography>


        
      </CardContent> 
      </Box>
      

    </Card>
  );
}
