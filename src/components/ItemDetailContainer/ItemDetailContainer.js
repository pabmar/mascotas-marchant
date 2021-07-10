import React,{useState, useEffect} from 'react'
import ItemDetail from './ItemDetail/ItemDetail';
import {useParams} from 'react-router-dom';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
 
import ItemCount from './ItemCount/ItemCount';
import CircularProgress from '@material-ui/core/CircularProgress';
 
import { CartContext } from '../Context/CartContext';
import { useContext } from 'react';


import { dataBase } from '../../Firebase/firebase';
import * as firebase from 'firebase/app'
import 'firebase/firestore'




const ItemDetailContainer = props => {

 
  const [carro,setCarro] = useContext(CartContext)
 
 
  const [producto, setProducto] = useState()
 
  const {id} = useParams();

  useEffect( () =>{
    const itemCollection = dataBase.collection("productos");
    (itemCollection.where('id','==',id)).get().then((querySnapshot) =>{
      if(querySnapshot.size === 0){
        console.log('No Result');
      }
      setProducto((querySnapshot.docs.map(doc => doc.data()))[0])
    })
  },[])
 
 

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



