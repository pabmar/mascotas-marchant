import React,{useState} from 'react';
import {Link} from 'react-router-dom';

import CardWidget from '../CarWidget/CardWidget'
 

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu'
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';


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

     const [anchorEl, setAnchorEl] = React.useState(null);

     const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };
    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar className={classes.tb}>
            <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              <Link to={'/'} className={classes.links}>Marchant Mascotas</Link>
              <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
                <p className={classes.links}>Categorias</p>
              </Button>
            </Typography>
            <Menu
                id="Menu-Categorias"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
                className={classes.menus}
            >
              <MenuItem onClick={handleClose}><Link to={'/category/Alimento'} className={classes.menus}>Alimentos</Link></MenuItem>
              <MenuItem onClick={handleClose}><Link to={'/category/Juguete'} className={classes.menus}>Juguetes</Link></MenuItem>
            </Menu>
          
            <CardWidget/>
          </Toolbar>
        </AppBar>
      </div>
    );
  }


export default NavBar;



 




 