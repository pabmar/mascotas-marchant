import React from 'react'

 
import AccountCircle from '@material-ui/icons/AccountCircle';
import { makeStyles } from '@material-ui/core/styles';

import Button from '@material-ui/core/Button';
import PhoneAndroidIcon from '@material-ui/icons/PhoneAndroid';
import EmailIcon from '@material-ui/icons/Email';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';

import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

import { FormularioCompraStyle } from './FormularioCompraStyle';

const useStyles = makeStyles((theme) => FormularioCompraStyle(theme));

   

const FormularioCompra = props =>{
    const completarCompra = {props}
    const classes = useStyles();
    
    return <Card className={classes.root}>
          
    <Typography gutterBottom variant="h5" component="h2">
        Datos de Compra
        </Typography>
      <CardContent>
        
        <Grid container spacing={1} alignItems="flex-end">
        <Grid item>
          <AccountCircle />
        </Grid>
        <Grid item>
          <TextField id="input" label="Nombre Completo" />
        </Grid>
        </Grid>
        <Grid container spacing={1} alignItems="flex-end">
        <Grid item>
          <PhoneAndroidIcon />
        </Grid>
        <Grid item>
          <TextField id="input" label="Telefono" />
        </Grid>
        </Grid>
        <Grid container spacing={1} alignItems="flex-end">
        <Grid item>
          <EmailIcon />
        </Grid>
        <Grid item>
          <TextField id="input" label="Email" />
        </Grid>
        </Grid>
        <Grid container spacing={1} alignItems="flex-end">
         
        <Grid item>
        <Button onClick={completarCompra} variant="contained" color="primary">
            Finalizar Compra
          </Button>
        </Grid>
        </Grid>

        
      </CardContent>

    <CardActions>
    
      
    </CardActions>
  </Card>

}

export default FormularioCompra