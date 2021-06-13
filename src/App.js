import React from 'react';
import NavBar from './components/NavBar/NavBar'
import ItemCount from './components/ItemCount/ItemCount'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import Item from './components/Item/Item'
const App = props => {
  return <div className="appContainer">
    <div>
    <NavBar/>
    </div>
    <ItemCount/>
    <ItemListContainer/>
    <Item></Item>
  </div>
  
}

export default App;



 
 


