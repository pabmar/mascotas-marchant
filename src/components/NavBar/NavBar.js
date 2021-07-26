import React from "react";
import { Link } from "react-router-dom";

import CartWidget from "./CartWidget/CardWidget";

import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { NavBarStyle } from "./NavBarStyle";

const useStyles = makeStyles((theme) => NavBarStyle(theme));

const NavBar = (props) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar className={classes.tb}>
       
          <Typography variant="h6" className={classes.title}>
            <Link to={"/"} className={classes.links}>
              Marchant Mascotas
            </Link>
          </Typography>
          <Typography variant="h6" className={classes.title}>
            <Link to={"/buscarPedido/"} className={classes.links}>
              Ver Pedidos
            </Link>
          </Typography>
          <Link to={"/cart"} className={classes.menus}>
            <CartWidget />
          </Link>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default NavBar;
