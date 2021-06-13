import React,{useEffect, useState} from 'react'
import axios from 'axios'
 
const pokeapi = () =>{

    const[listado, setListado] = useState([]);

    const getListado = () =>{

        axios.get('https://pokeapi.co/api/v2/pokemon?limit=10')
         .then(response =>{
             setListado(response.data.results)
         })
         .catch(error => console.log(error))
    }
    useEffect(() =>{
        getListado()
    },[])

    
    return (
        <div>
            <ul>
                {listado.map((p,i)=> <li key={i}>{p.name}</li>)}
            </ul>
            
        </div>
    )
}

export default pokeapi