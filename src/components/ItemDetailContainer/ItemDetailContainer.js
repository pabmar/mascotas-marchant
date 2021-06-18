import React,{useEffect, useState} from 'react'
import ItemDetail from '../ItemDetail/ItemDetail';


import Container from '@material-ui/core/Container';



const data = [
  {
    img: 'https://image.freepik.com/foto-gratis/comida-perro_74190-4075.jpg',
    titulo:'Alimento 1',
    alt:'alimento 1',
    resumen:'este es el primer alimento',
    precio:'1990',
    categoria:'Alimento',
    infoAdicional:'aca esta la informacion adicional'

  },
  {
    img: 'https://image.freepik.com/foto-gratis/comida-perro_74190-4075.jpg',
    titulo:'Alimento 2',
    alt:'alimento 2',
    resumen:'este es el 2do alimento',
    precio:'2100',
    categoria:'Alimento',
    infoAdicional:'aca esta la informacion adicional'
    
 
  },
  {
      img: 'https://image.freepik.com/foto-gratis/comida-perro_74190-4075.jpg',
      titulo:'Alimento 3',
      alt:'alimento 3',
      resumen:'este es el 3er alimento',
      precio:'2300'
      ,categoria:'Alimento',
      infoAdicional:'aca esta la informacion adicional'
  },
  {
      img: 'https://image.freepik.com/foto-gratis/comida-perro_74190-4075.jpg',
      titulo:'Alimento 4',
      alt:'alimento 4',
      resumen:'este es el primer alimento',
      precio:'1990'
      ,categoria:'Alimento',
      infoAdicional:'aca esta la informacion adicional'
 
    },
    {
      img: 'https://cdn.pixabay.com/photo/2018/03/20/13/25/dog-bowl-3243272_960_720.jpg',
      titulo:'juguete 1',
      alt:'juguete 1',
      resumen:'este es el primer juguete',
      precio:'2100',
      categoria:'Juguete',
      infoAdicional:'aca esta la informacion adicional'
   
    },
    {
        img: 'https://cdn.pixabay.com/photo/2018/03/20/13/25/dog-bowl-3243272_960_720.jpg',
        titulo:'juguete 2',
        alt:'juguete 2',
        resumen:'este es el 2do juguete',
        precio:'2300',
        categoria:'Juguete',
        infoAdicional:'aca esta la informacion adicional'
    }
]

 

const ItemDetailContainer = props => {
 
    
    const producto = data.[0]
    console.log(producto)
    return (
            
          <Container>
              <ItemDetail item={producto}></ItemDetail>
          </Container>
 
      ); 
     
}

export default ItemDetailContainer;



