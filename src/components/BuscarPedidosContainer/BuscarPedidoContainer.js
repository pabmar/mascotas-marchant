import React, { useEffect, useState } from "react";
import Container from "@material-ui/core/Container";
import IconButton from "@material-ui/core/IconButton";
import InputBase from "@material-ui/core/InputBase";
import SearchIcon from "@material-ui/icons/Search";
import { dataBase } from "../../Firebase/firebase";
import "firebase/firestore";

import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";

import Typography from "@material-ui/core/Typography";

import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemText from "@material-ui/core/ListItemText";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
import DeleteIcon from "@material-ui/icons/Delete";

import { useParams } from "react-router-dom";

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  input: {
    flex: 1,
  },
});

const BuscarPedidoContainer = (props) => {
  const { codigo } = useParams();
  const [open, setOpen] = React.useState(false);
  const [pedido, setPedido] = useState('');
  const [carroCompras, setCarroCompras] = useState([]);
  const [comprador, setComprador] = useState([]);
  const [totalPagar, setTotalPagar] = useState(0);
  const [mostrar, setMostrar] = useState(false);
  const classes = useStyles();
  const pedidos = dataBase.collection("pedidos");

  useEffect(() => {
          if(codigo){
                  setPedido(codigo)
                  llamarPedido(codigo)
          }
 
  }, []);
 

 

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const llamarPedido = (ped) => {
    pedidos
      .doc(ped)
      .get()
      .then((querySnapshot) => {
        if (querySnapshot.size === 0) {
          console.log("No Result");
        }
        if (querySnapshot.data()) {
          setCarroCompras(querySnapshot.data().productos);
          setComprador(querySnapshot.data().cliente);
          setTotalPagar(querySnapshot.data().total);
          setMostrar(true) 
        } else {
          setMostrar(false);
          handleClick();
        }
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {});
  };

  return (
    <Container fixed>
      <Card className={classes.root}>
        <CardContent>
          <IconButton
            type="submit"
            className={classes.iconButton}
            aria-label="search"
            onClick={() => {
                llamarPedido(pedido);
            }}
          >
            <SearchIcon />
          </IconButton>
          <InputBase
            onBlur={(e) => setPedido(e.target.value)}
            placeholder="Número de pedido"
            inputProps={{ "aria-label": "buscar por numero de pedido" }}
          />
        </CardContent>
      </Card>
      <Card className={classes.root}>
        <CardContent>
          {mostrar ? (
            <>
              <Typography variant="h5">{`Pedido: ${pedido} `}</Typography>
              <Typography variant="h5">{`Cliente: ${comprador.nombre}.- Total: $${totalPagar}.-`}</Typography>
            </>
          ) : (
            <></>
          )}
          {mostrar ? (
            carroCompras.map((item, i) => (
              <ListItem>
                <ListItemAvatar> 
                  <Avatar alt={item.producto.alt} src={item.producto.img1} />
                </ListItemAvatar>
                <ListItemText
                  primary={item.titulo}
                  secondary={`Cantidad: ${item.cantidad} Precio: $${
                    item.producto.precio
                  }.- Total: $${item.producto.precio * item.cantidad}.-`}
                />
              </ListItem>
            ))
          ) : (
            <></>
          )}
        </CardContent>
      </Card>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="warning">
          Pedido no encontrado revisa si el codigo es correcto
        </Alert>
      </Snackbar>
    </Container>
  );
};

export default BuscarPedidoContainer;
