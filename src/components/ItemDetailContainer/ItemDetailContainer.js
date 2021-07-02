import React,{useState, useEffect} from 'react'
import ItemDetail from '../ItemDetail/ItemDetail';
import {useParams} from 'react-router-dom';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
 
import ItemCount from '../ItemCount/ItemCount';
import CircularProgress from '@material-ui/core/CircularProgress';
 
import { CartContext } from '../Context/CartContext';
import { useContext } from 'react';


const dataProductos = () =>{

  return new Promise ((resolve,reject) =>{

    setTimeout(() => {
      resolve(
        [
          {
            id:'1',
            img: 'https://image.freepik.com/foto-gratis/comida-perro_74190-4075.jpg',
            titulo:'Alimento 1',
            alt:'alimento 1',
            resumen:'este es el primer alimento',
            precio:'1990',
            categoria:'Alimento',
            infoAdicional:'aca esta la informacion adicional',
            stock:'23'
        
          },
          {
            id:'2',
            img: 'https://image.freepik.com/foto-gratis/comida-perro_74190-4075.jpg',
            titulo:'Alimento 2',
            alt:'alimento 2',
            resumen:'este es el 2do alimento',
            precio:'2100',
            categoria:'Alimento',
            infoAdicional:'aca esta la informacion adicional',
            stock:'33'
            
         
          },
          {
              id:'3',
              img: 'https://image.freepik.com/foto-gratis/comida-perro_74190-4075.jpg',
              titulo:'Alimento 3',
              alt:'alimento 3',
              resumen:'este es el 3er alimento',
              precio:'2300'
              ,categoria:'Alimento',
              infoAdicional:'aca esta la informacion adicional',
              stock:'53'
          },
          {
              id:'4',
              img: 'https://image.freepik.com/foto-gratis/comida-perro_74190-4075.jpg',
              titulo:'Alimento 4',
              alt:'alimento 4',
              resumen:'este es el primer alimento',
              precio:'1990'
              ,categoria:'Alimento',
              infoAdicional:'aca esta la informacion adicional',
              stock:'35'
         
            },
            {
              id:'5',
              img: 'https://cdn.pixabay.com/photo/2018/03/20/13/25/dog-bowl-3243272_960_720.jpg',
              titulo:'juguete 1',
              alt:'juguete 1',
              resumen:'este es el primer juguete',
              precio:'2100',
              categoria:'Juguete',
              infoAdicional:'aca esta la informacion adicional',
              stock:'13'
           
            },
            {
                id:'6',
                img: 'https://cdn.pixabay.com/photo/2018/03/20/13/25/dog-bowl-3243272_960_720.jpg',
                titulo:'juguete 2',
                alt:'juguete 2',
                resumen:'este es el 2do juguete',
                precio:'2300',
                categoria:'Juguete',
                infoAdicional:'aca esta la informacion adicional',
                stock:'83'
            }
        ])
    },3000);
 
  })

} 
 



const ItemDetailContainer = props => {

 
  const [carro,setCarro] = useContext(CartContext)
 
 
  const [producto, setProducto] = useState()
 
  const {id} = useParams();

  useEffect( () =>{
    llamarProductos();
  },[])
 
  const llamarProductos  = () =>{
 
    dataProductos().then(data =>{
      const dataMostrar = data.filter(data => (data.id === id) )
      setProducto(dataMostrar[0])
      })
    
  }

  const actualizarCarro =() =>{

    cantidad?setCarro([...carro,{...producto,cantidadProducto:cantidad}]):console.log("stock")
    
     
  }
  
  
 
    const [cantidad, setCount] = useState(0);
    const aumentarCantidad = () => {
        cantidad<producto.stock?setCount(cantidad + 1):console.log(cantidad)
        
    }
    const restarCantidad = () => {
        cantidad>0?setCount(cantidad - 1):console.log(cantidad)
    }
   
 
   
    
    
      return <>
          {producto?(
            <Container>
              <ItemDetail item={producto}><ItemCount restarCantidad={restarCantidad} aumentarCantidad={aumentarCantidad} cantidad={cantidad} confirmarComprar={actualizarCarro}/></ItemDetail>
            </Container>
          ):(
            <Box display="flex" justifyContent="center  ">
              <CircularProgress />
            </Box>
          )

          }   
      </>
     
}

export default ItemDetailContainer;



