import React,{useEffect, useState} from 'react'
import ItemList from '../ItemList/ItemList';


import Container from '@material-ui/core/Container';



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

 

const ItemListContainer = props => {
 
    const [error,setError] = useState('');
    const [showError,setShowError] = useState(false)
    useEffect(() =>{
        const myPromise = new Promise ((resolve,reject) =>{
            reject("La Quedo")
        })
        myPromise.catch((error)=>{
            setError(error);
            setShowError(true);
        })
     
    },[])
 
    return (
              
          <Container>
            <ItemList listado={data}></ItemList>
          </Container>
 
      ); 
     
}

export default ItemListContainer;



