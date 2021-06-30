import React,{useState} from 'react'


export const CountProductosContext = React.createContext([])


export const CountProductosProvider = ({children}) =>{
    const [productos,setProductos] = useState([])

    return <CountProductosContext.Provider value ={[productos,setProductos]}>
        {children}
    </CountProductosContext.Provider>


}