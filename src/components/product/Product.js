import React, {useState} from 'react'
import "./Product.css"
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import {AiOutlineHeart, AiFillHeart} from "react-icons/ai"
import {AiFillStar} from "react-icons/ai"
import {BsFillCartFill} from "react-icons/bs"
import { ADD_TO_LIKE, REMOVE_LIKE, ADD_TO_CART } from "../../context/action/actionType"
import { Link, useParams } from 'react-router-dom'
import { db } from '../../server'
import {collection, deleteDoc, doc, getDocs} from "firebase/firestore"
function Product({admin}) {
  const dispatch = useDispatch()
  const params = useParams()
  const like = useSelector(s => s.heart)
  const cart = useSelector(s => s.cart)
  const [refersh, setRefresh] = useState(false)
  const [data, setData] = useState([])
  const productsColRef = collection(db, "products")


  
  useEffect(() => {
    const getProduct = async () => {
      const product = await getDocs(productsColRef)
      setData(product.docs.map((pro) => ({ ...pro.data(), id: pro.id })))

    }
    getProduct()
  }, [refersh])
  const addHaert = (item) => {
    let index = like.findIndex(i => i.id === item.id)
    if (index > -1) {
      return
    }
    dispatch({ type: ADD_TO_LIKE, payload: item })
  }
  const addToCart = (item) => {
    let index = cart.findIndex(i => i.id === item.id)
    if (index < 0) {
      return dispatch({ type: ADD_TO_CART, payload: [...cart, { ...item, qty: 1 }] })
    }
    let newCart = cart.map((pro, inx) => inx === index ? { ...pro, qty: pro.qty + 1 } : pro)
    dispatch({ type: ADD_TO_CART, payload: newCart })
  }
  const deleProduct = async (id) => {
    await deleteDoc(doc(db, "products", id))
      .then(res => {
        console.log(res)
        setRefresh(!refersh)
      })
      .catch(err => console.log(err))
  }

  return (
    <div className='products'>
      {
       data?.map((item, inx)=><div key={inx} className='pro__item'>
          <BsFillCartFill onClick={()=> addToCart} className='pro__shop'/>
      <AiOutlineHeart onClick={()=> addHaert} className='pro__heart'/>
        <p className='pro__cheg'>CHEGIRMALAR</p>
          <Link to={"/single-router"}>
          <img className='pro__img' src={item?.img} alt="" />
          </Link>
          <p>{item?.name}</p>
          <div className='stars'>
          <AiFillStar/>
          <AiFillStar/>
          <AiFillStar/>
          <AiFillStar/>
          <AiFillStar/>
          </div>
          <del>{item?.price + 100} so'm</del>
          <p>{item?.price} so'm</p>
          {
            admin?
            <button onClick={()=> deleProduct(item.id)} className='btn btn2'><p>Delete</p></button>
            :
          <button className='btn btn2'><p>Bir klikda olish</p></button>
          }
        </div>)
      }
    </div>
  )
}

export default Product