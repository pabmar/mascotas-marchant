import React from 'react';
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
 
import Box from '@material-ui/core/Box'; 

const App = props => {
  return <div className="appContainer">
    <div>
    <NavBar/>
    </div>
    <Box mt={2}> 
      <ItemListContainer></ItemListContainer>
      {/* <ItemDetailContainer></ItemDetailContainer> */}
      
    </Box>
    
  </div>
  
}

export default App;



 
 


