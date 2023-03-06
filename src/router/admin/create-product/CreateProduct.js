import React, { useState } from 'react'
import "./CreateProduct.css"
import { db } from "../../../server"
import { collection, addDocx, addDoc } from "firebase/firestore"

// array (javascript) = collection (database)

function CreateProduct() {
  const [name, setName] = useState("")
  const [price, setPrice] = useState("")
  const [img, setImg] = useState("")
  const [desc, setDesc] = useState("")
  const [category, setCategory] = useState("phone")
  const [loading, setLoading] = useState(false)
  const productsColRef = collection ( db, "products" )
  const createProduct = async (e)=>{
    e.preventDefault()
    setLoading(true)
    let newProduct = {
      name,
      price: +price,
      img: [img],
      desc,
      category
    }
    await addDoc(productsColRef, newProduct)
    .then(res=> {console.log(res)
      setName("")    
      setPrice("")
      setImg("")
      setDesc("")
      setCategory("phone")
      setLoading(false)
      alert("Product has e been created")
    })
    .catch(err=> console.log(err))
  }

  return (
    <div className='creat_pro'>
      <h2>CreateProduct</h2>
      <form onSubmit={createProduct} action='' className='create__form'>
        <input required value={name} onChange={e => setName(e.target.value)} type="text" placeholder='title' />
        <input required value={price} onChange={e => setPrice(e.target.value)} type="number" placeholder='price' />
        <input required value={img} onChange={e => setImg(e.target.value)} type="text" placeholder='urls' />
        <input required value={desc} onChange={e => setDesc(e.target.value)} type="text" placeholder='desc' />
        <select value={category} onChange={e => setCategory(e.target.value)} name="" id="">
          {/* <option value="" >tanlang</option> */}
          <option value="phone" >phone</option>
          <option value="tv" >televizor</option>
          <option value="laptop" >laptop</option>
        </select>
        <button className='cre__btn' disabled={loading} type="submit">{loading ? "loading..." : "Create Product"}</button>
      </form>
    </div>
  )
}

export default CreateProduct