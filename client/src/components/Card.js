import ExpandCircleDownIcon from '@mui/icons-material/ExpandCircleDown';
import Collapse from '@mui/material/Collapse';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import IconButton from '@mui/material/IconButton';
import { styled } from '@mui/material/styles';

import * as React from 'react';

import CardMedia from '@mui/material/CardMedia';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Divider } from '@mui/material';
import Box from '@mui/material/Box';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';



const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));



const style = {
  width: '100%',
  maxWidth: 360,
  bgcolor: 'background.paper',
};


export default function BasicCard(props) {  
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  
  return (
    <Card sx={{ display: 'flex' }}>
    
    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
    
      <CardContent sx={{ flex: '1 0 auto' }}>
        <Typography style={{paddingLeft:20}} component="span">
        {props.coin.market_cap_rank}
        </Typography>
        <Typography style={{paddingLeft:40}} component="span">
        <sub><sub><img height={25} src={props.coin.image} alt="coinLogo"></img></sub></sub>
        </Typography>
        <Typography style={{paddingLeft:20}} component="span">
        {props.name}  
        </Typography>
        <Typography style={{paddingLeft:20}} component="span">
        $ {props.coin.current_price.toLocaleString()}  
        </Typography>
        <Typography style={{paddingLeft:20}} component="span">
        $ {props.coin.market_cap.toLocaleString()}  
        </Typography>


        
      </CardContent> 
      </Box>
      

    </Card>
  );
}
