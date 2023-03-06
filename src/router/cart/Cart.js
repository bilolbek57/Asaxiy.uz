import React from 'react'
import { useSelector } from 'react-redux';
function Cart() {
  const cart = useSelector(s => s.cart)
console.log(cart);  
  return (
    <div>
   
    </div>
  )
}

export default Cart