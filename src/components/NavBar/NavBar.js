import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import SvgIcon from '@material-ui/core/SvgIcon';
import ButtonGroup from '@material-ui/core/ButtonGroup';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  barraMenu: {
    backgroundColor: '#F8B628',
  },
}));

function HomeIcon(props) {
  return (
    <SvgIcon {...props}>
      <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
    </SvgIcon>
  );
}

export const NavBar = () => {

  const classes = useStyles();
  return <div className={classes.root}>
  <AppBar position="static" className={classes.barraMenu}>
    <Toolbar>

        <ButtonGroup size="small" aria-label="small outlined button group">
          <Button>Conejos</Button>
          <Button>Camadas</Button>
          <Button>Alimentos</Button>
        </ButtonGroup>

      <Typography variant="h6" className={classes.title}>
         
      </Typography>
      <Button color="inherit">
    
      </Button>
      <HomeIcon color="primary" />
    </Toolbar>
  </AppBar>
</div>
   
}

 



