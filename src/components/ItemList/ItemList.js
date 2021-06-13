import React,{useEffect, useState}from 'react';
import Item from '../Item/Item'

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
 

const data = [
    {
      img: 'https://image.freepik.com/foto-gratis/comida-perro_74190-4075.jpg',
      titulo:'Alimento 1',
      alt:'alimento 1',
      resumen:'este es el primer alimento',
      precio:'1990'
 
    },
    {
      img: 'https://image.freepik.com/foto-gratis/comida-perro_74190-4075.jpg',
      titulo:'Alimento 2',
      alt:'alimento 2',
      resumen:'este es el 2do alimento',
      precio:'2100'
   
    },
    {
        img: 'https://image.freepik.com/foto-gratis/comida-perro_74190-4075.jpg',
        titulo:'Alimento 3',
        alt:'alimento 3',
        resumen:'este es el 3er alimento',
        precio:'2300'
    },
    {
        img: 'https://image.freepik.com/foto-gratis/comida-perro_74190-4075.jpg',
        titulo:'Alimento 4',
        alt:'alimento 4',
        resumen:'este es el primer alimento',
        precio:'1990'
   
      },
      {
        img: 'https://image.freepik.com/foto-gratis/comida-perro_74190-4075.jpg',
        titulo:'Alimento 5',
        alt:'alimento 5',
        resumen:'este es el 2do alimento',
        precio:'2100'
     
      },
      {
          img: 'https://image.freepik.com/foto-gratis/comida-perro_74190-4075.jpg',
          titulo:'Alimento 6',
          alt:'alimento 6',
          resumen:'este es el 3er alimento',
          precio:'2300'
      }
  ]
  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      height: 140,
      width: 100,
    },
    control: {
      padding: theme.spacing(2),
    },
  }));


const ItemList =  props => {

    const[listado, setListado] = useState([]);
 
    const classes = useStyles();

    

    const getListado = () =>{

       
             setListado(data)
        
    }
    useEffect(() =>{
        getListado()
    },[])

 
    return (
 
        <Grid container justify="center" spacing={5}>
        {listado.map((p,i)=><Grid item><Item key={i} titulo={p.titulo} resumen={p.resumen} precio={p.precio} imagen={p.img} alt={p.alt}></Item></Grid>)}
        </Grid>
   
    )
    
}


export default ItemList