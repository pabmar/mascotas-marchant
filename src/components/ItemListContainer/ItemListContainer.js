import React,{useEffect, useState} from 'react'
import ItemList from '../ItemList/ItemList';

import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import CircularProgress from '@material-ui/core/CircularProgress';


const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      '& > * + *': {
        marginLeft: theme.spacing(2),
      },
    },
  }));

const ItemListContainer = props => {
    const classes = useStyles();

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
            <ItemList ></ItemList>
          </Container>
 
      ); 
     
}

export default ItemListContainer;



