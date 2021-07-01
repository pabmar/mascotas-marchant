import React,{useEffect, useState} from 'react'
import ItemList from '../ItemList/ItemList';
import {useParams} from 'react-router-dom';


import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';

import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
 


const dataProductos = () =>{

  return new Promise ((resolve,reject) =>{

    setTimeout(() => {
      resolve(
        [
          {
            id:1,
            img: 'https://image.freepik.com/foto-gratis/comida-perro_74190-4075.jpg',
            titulo:'Alimento 1',
            alt:'alimento 1',
            resumen:'este es el primer alimento',
            precio:'1990',
            categoria:'Alimento',
            infoAdicional:'aca esta la informacion adicional'
        
          },
          {
            id:2,
            img: 'https://image.freepik.com/foto-gratis/comida-perro_74190-4075.jpg',
            titulo:'Alimento 2',
            alt:'alimento 2',
            resumen:'este es el 2do alimento',
            precio:'2100',
            categoria:'Alimento',
            infoAdicional:'aca esta la informacion adicional'
            
         
          },
          {
              id:3,
              img: 'https://image.freepik.com/foto-gratis/comida-perro_74190-4075.jpg',
              titulo:'Alimento 3',
              alt:'alimento 3',
              resumen:'este es el 3er alimento',
              precio:'2300'
              ,categoria:'Alimento',
              infoAdicional:'aca esta la informacion adicional'
          },
          {
              id:4,
              img: 'https://image.freepik.com/foto-gratis/comida-perro_74190-4075.jpg',
              titulo:'Alimento 4',
              alt:'alimento 4',
              resumen:'este es el primer alimento',
              precio:'1990'
              ,categoria:'Alimento',
              infoAdicional:'aca esta la informacion adicional'
         
            },
            {
              id:5,
              img: 'https://cdn.pixabay.com/photo/2018/03/20/13/25/dog-bowl-3243272_960_720.jpg',
              titulo:'juguete 1',
              alt:'juguete 1',
              resumen:'este es el primer juguete',
              precio:'2100',
              categoria:'Juguete',
              infoAdicional:'aca esta la informacion adicional'
           
            },
            {
                id:6,
                img: 'https://cdn.pixabay.com/photo/2018/03/20/13/25/dog-bowl-3243272_960_720.jpg',
                titulo:'juguete 2',
                alt:'juguete 2',
                resumen:'este es el 2do juguete',
                precio:'2300',
                categoria:'Juguete',
                infoAdicional:'aca esta la informacion adicional'
            }
        ])
    },3000);
 
  })

} 
 
 

const ItemListContainer = props => {
 
    const [productos, setProductos] = useState([])
    const [validador, setValidador] = useState(true)
    const {categoria} = useParams();
    console.log(categoria)
    

    const llamarProductos  = () =>{
      setValidador(true)
      console.log(validador)
      dataProductos().then(data =>{const dataMostrar = data 
      setProductos(dataMostrar)
      setValidador(false)})
      
    }
    const llamarProductosPorCategoria  = () =>{
      setValidador(true)
      dataProductos().then(data =>{const dataMostrar = data.filter(data => (data.categoria === categoria) )
      setProductos(dataMostrar)
      setValidador(false)})
      
      
    }
    useEffect(() =>{
      categoria===undefined?llamarProductos():llamarProductosPorCategoria();
       
    },[categoria])
 
    return <>
          {validador?(
            <Box display="flex" justifyContent="center  ">
              <CircularProgress />
           </Box>
          ):(
            <Container>
            <ItemList listado={productos}></ItemList>
          </Container>
          )

          }   
      </>
     
}

export default ItemListContainer;



