import React from 'react'
import Product from '../../../components/product/Product'

function ManageProduct() {
  return (
    <div style={{color:"#000"}}>
      <Product admin={true}/>
    </div>
  )
}

export default ManageProduct