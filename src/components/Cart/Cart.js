import React from 'react';
import { CartContext } from '../Context/CartContext';
import { useContext } from 'react';


const Cart = props => {

  
    const [carro,setCarro] = useContext(CartContext)



    return <>
    <p></p>
    {console.log(carro)}

 
    </>
}

export default Cart
