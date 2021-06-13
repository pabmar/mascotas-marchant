import React,{useState, useEffect} from 'react'
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton'
import CloseIcon from '@material-ui/icons/Close'



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
        <Snackbar open={showError} autoHideDuration={6000} message={error}
        action={
            <IconButton arial-label="close" color="inerith" onClick={() => setShowError(false)}>
                <CloseIcon/>
            </IconButton>
        }></Snackbar>
    )
}

export default ItemListContainer;



