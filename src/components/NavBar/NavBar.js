import React,{useState} from 'react';
import {Link} from 'react-router-dom';

import CardWidget from '../CarWidget/CardWidget'
 

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu'


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  tb:{
    backgroundColor: "orange",
  },
  links:{
    textDecoration: 'none',
    color: 'white'
  },
  menus:{
     
     color:'black',
     textDecoration:'none',
  },
}));


const NavBar = props => {
     const classes = useStyles();

    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar className={classes.tb}>
            <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              <Link to={'/'} className={classes.links}>Marchant Mascotas</Link>
            </Typography>
            <Link to={'/cart'} className={classes.menus}><CardWidget/></Link>
          </Toolbar>
        </AppBar>
      </div>
    );
  }


export default NavBar;



 




 