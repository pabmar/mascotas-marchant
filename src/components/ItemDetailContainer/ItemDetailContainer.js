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
 
import 'firebase/firestore'




const ItemDetailContainer = props => {

 
  const [carro,setCarro] = useContext(CartContext)
 
  const prePedido = dataBase.collection('prePedido')
  const prePedidoEspecifico = dataBase.collection('prePedido').doc(carro.id)
  const itemCollection = dataBase.collection("productos")
  const [cantidad, setCount] = useState(0);
  const [producto, setProducto] = useState()
  const [estadoProducto, setEstadoProducto] = useState(false)
  const [productoCarro, setProductoCarro] = useState({})
  const {id} = useParams();

  useEffect( () =>{
    (itemCollection.where('id','==',id)).get().then((querySnapshot) =>{
      if(querySnapshot.size === 0){
        console.log('No Result');
      }
      setProducto((querySnapshot.docs.map(doc => doc.data()))[0])
    })
    carro.id==='nuevo'?(console.log("carro nuevo")):(validarItem())
    
     
  },[])
  useEffect (() =>{
    setProductoCarro({items:[{cantidad:cantidad,producto:producto,}]})
  },[cantidad])


  const actualizarCarro =() =>{
    
    carro.id==='nuevo'?(
      nuevoPedido()
    ):(
      estadoProducto?(updateProducto()):(updatePedido())
      
      )
      
  }
  
  const nuevoPedido = () =>{
    prePedido.add(productoCarro).then(({id}) =>{
      setCarro({id:id,productos:1})
    }).catch(err =>{
      console.log(err)
    }).finally(()=>{
      //aca finaly
    })
  }

  const updatePedido = () =>{

    prePedidoEspecifico.get().then((querySnapshot) =>{
      if(querySnapshot.size === 0){
        console.log('No Result');
      }
      const carroCompras = [...productoCarro.items,...querySnapshot.data().items]
    
      prePedidoEspecifico.update({
        
        items:carroCompras
      }).then(()=>{
        console.log("producto agregado")
        setCarro({id:carro.id,productos:carro.productos+1})
      }).catch((err) =>{
        console.log(err)
      })
     
     })
  }
  const updateProducto = () =>{

    prePedidoEspecifico.get().then((querySnapshot) =>{
      if(querySnapshot.size === 0){
        console.log('No Result');
      }
      const carroCompras = [...productoCarro.items,...(querySnapshot.data().items.filter(i =>   i.producto.id !== id))]
      console.log(carroCompras)
      prePedidoEspecifico.update({
        
        items:carroCompras
      }).then(()=>{
        console.log("producto agregado")
      }).catch((err) =>{
        console.log(err)
      })
     
     })
  }

  const validarItem = () =>{
     
    prePedidoEspecifico.get().then((querySnapshot) =>{
      if(querySnapshot.size === 0){
        console.log('No Result');
      }
      querySnapshot.data().items.map(item => {
        item.producto.id === id?(setEstadoProducto(true)):(<></>)
      })
     })
  }
  
  
 
    
    const aumentarCantidad = () => {
        cantidad<producto.stock?setCount(cantidad + 1):console.log(cantidad)
        
    }
    const restarCantidad = () => {
        cantidad>0?setCount(cantidad - 1):console.log(cantidad)
    }
   
 
   
    
    
      return <>  
          {producto?(
            <Container>
              <ItemDetail item={producto} estadoProducto ={estadoProducto}><ItemCount restarCantidad={restarCantidad} aumentarCantidad={aumentarCantidad} cantidad={cantidad} confirmarComprar={actualizarCarro} stock={producto.stock}/></ItemDetail>
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



