import React,{useEffect, useState} from 'react'
import ItemList from './ItemList/ItemList';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import { dataBase } from '../../Firebase/firebase'; 
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select'; 
import { itemDetailContainerStyle } from './itemListContainerStyle';
 

const onlyUnique =(value, index, self) => {
  return self.indexOf(value) === index;
}


const useStyles = makeStyles((theme) =>  itemDetailContainerStyle(theme))

const ItemListContainer = props => {
    const classes = useStyles();
    const [productos, setProductos] = useState([])
    const [filtroCategoria,setFiltroCategoria] = useState('Todas')
    const [categoriasDisponibles, setCategoriasDisponibles] = useState([])
    const handleChange = (event) => {
      setFiltroCategoria(event.target.value);
    };
    

    useEffect(()=>{
      const itemCollection = dataBase.collection("productos");
      filtroCategoria==='Todas'?(
         itemCollection.get().then((querySnapshot) =>{
          if(querySnapshot.size === 0){
            console.log('No Result');
          }
          setProductos(querySnapshot.docs.map(doc => doc.data()))
          setCategoriasDisponibles((querySnapshot.docs.map(doc => doc.data().categoria)).filter(onlyUnique))
        
        }).catch((error)=>{
          console.log("error al encontrar productos", error);
        }).finally(()=>{
  
        })

      ):(
        (itemCollection.where('categoria','==',filtroCategoria)).get().then((querySnapshot) =>{
          if(querySnapshot.size === 0){
            console.log('No Result');
          }
          setProductos(querySnapshot.docs.map(doc => doc.data()))
        })
      )
       
    },[filtroCategoria]);
    return <> 
          {productos.length?(
            <Container>
              <FormControl className={classes.formControl}>
                <InputLabel id="filtro_categoria">Categorias</InputLabel>
                <Select
                  labelId="filtro_categoria"
                  id="filtro_categoria"
                  value={filtroCategoria}
                  onChange={handleChange} 
                >
                  <MenuItem value='Todas'>Todas</MenuItem>  
                  {categoriasDisponibles.map((cat,i)=><MenuItem value={cat}>{cat}</MenuItem>)}
                </Select>
              </FormControl>
              
            <ItemList listado={productos}></ItemList>
          </Container>
            
          ):(
            <Box display="flex" justifyContent="center  ">
              <CircularProgress />
           </Box>
          )

          }   
      </>
     
}

export default ItemListContainer;



