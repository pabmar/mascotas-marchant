import React,{useState} from 'react'


export const CartContext = React.createContext([])


export const CartProvider = ({children}) =>{
    const [carro,setCarro] = useState('nuevo')
    

    return <CartContext.Provider value ={[carro,setCarro]}>
        {children}
    </CartContext.Provider>


}