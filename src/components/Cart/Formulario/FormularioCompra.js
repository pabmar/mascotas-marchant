import React, { useState } from "react";

import AccountCircle from "@material-ui/icons/AccountCircle";
import { makeStyles } from "@material-ui/core/styles";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
import Button from "@material-ui/core/Button";
import PhoneAndroidIcon from "@material-ui/icons/PhoneAndroid";
import EmailIcon from "@material-ui/icons/Email";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

import { FormularioCompraStyle } from "./FormularioCompraStyle";
import validator from "validator";
import { dataBase } from "../../../Firebase/firebase";
import "firebase/firestore";

const useStyles = makeStyles((theme) => FormularioCompraStyle(theme));

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const FormularioCompra = ({ carroCompras, totalPago }) => {
  const carro = carroCompras;
  const total = totalPago;
  const classes = useStyles();
  const [nombre, setNombre] = useState([]);
  const [telefono, setTelefono] = useState([]);
  const [email, setEmail] = useState([]);
  const [emailError, setEmailError] = useState(false);
  const [fonoError, setFonoError] = useState(false);
  const [nombreError, setNombreError] = useState(false);
  const batch = dataBase.batch();

  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const finalizarCompra = () => {
    const cliente = { nombre: nombre, email: email, telefono: telefono };
    emailError && fonoError && nombreError
      ? crearNuevoPedido(cliente, carro, total)
      : handleClick();
  };

  const validarEmail = (e) => {
    if (validator.isEmail(e)) {
      setEmailError(true);
      setEmail(e);
    } else {
      setEmailError(false);
    }
  };

  const validarTelefono = (e) => {
    if (validator.isNumeric(e) && e.length === 8) {
      setFonoError(true);
      setTelefono(e);
    } else {
      setFonoError(false);
    }
  };
  const validarNombre = (e) => {
    if (e.length > 3) {
      setNombreError(true);
      setNombre(e);
    } else {
      setNombreError(false);
    }
  };
  const crearNuevoPedido = (cliente, productos, total) => {
    const fecha = new Date();
    const nuevoPedido = dataBase.collection("pedidos");
    const pedidoGenerado = {
      cliente,
      productos,
      fecha,
      total,
    };
    nuevoPedido
      .add(pedidoGenerado)
      .then(({ id }) => {
        console.log(id);
      })
      .catch((err) => {})
      .finally(() => {
        //aca finaly
      });

    // batch.set(nuevoPedido,{
    //   cliente,
    //   productos,
    //   fecha,
    //   total
    // });
    // batch.commit().then(dat =>{
    //   console.log(nuevoPedido)
    // });
  };
  return (
    <Card className={classes.root}>
      <Typography gutterBottom variant="h5" component="h2">
        Datos de Compra
      </Typography>
      <CardContent>
        <Grid container spacing={6} alignItems="flex-end">
          <Grid container alignItems="flex-end">
            <Grid item>
              <AccountCircle />
            </Grid>
            <Grid item>
              <TextField
                id="input"
                label="Nombre Completo"
                onKeyUp={(e) => validarNombre(e.target.value)}
                error={!nombreError}
                helperText={nombreError ? true : "ingrese Nombre valido"}
              />
            </Grid>
          </Grid>
          <Grid container alignItems="flex-end">
            <Grid item>
              <PhoneAndroidIcon />
            </Grid>
            <Grid item>
              <TextField
                id="input"
                label="Telefono"
                onKeyUp={(e) => validarTelefono(e.target.value)}
                error={!fonoError}
                helperText={fonoError ? true : "ingrese Fono valido"}
              />
            </Grid>
          </Grid>
          <Grid container alignItems="flex-end">
            <Grid item>
              <EmailIcon />
            </Grid>
            <Grid item className={classes.grid}>
              <TextField
                id="input"
                label="Email"
                onKeyUp={(e) => validarEmail(e.target.value)}
                error={!emailError}
                helperText={emailError ? true : "ingrese correo valido"}
              />
            </Grid>
          </Grid>

          <Grid item>
            <Button
              onClick={() => {
                finalizarCompra();
              }}
              variant="contained"
              color="primary"
            >
              Finalizar Compra
            </Button>
          </Grid>
        </Grid>
      </CardContent>
      <Snackbar open={open} autoHideDuration={5000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="error">
          Complete correctamente el formulario
        </Alert>
      </Snackbar>
    </Card>
  );
};

export default FormularioCompra;
