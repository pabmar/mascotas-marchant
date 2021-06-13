import React from 'react';
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
 
import Box from '@material-ui/core/Box'; 

const App = props => {
  return <div className="appContainer">
    <div>
    <NavBar/>
    </div>
    <Box mt={2}> 
      <ItemListContainer></ItemListContainer>
    </Box>
    
  </div>
  
}

export default App;



 
 


