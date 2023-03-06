import React from 'react'
import "./Tolov.css"
function Tolov() {
  return (
    <div className='tolov'>
      <div className="kirish">
      <h1>To'lov</h1>
      <p>Buyurtma yoki shaxsiy ID raqamingizni bexato kiriting</p>
      <input type="text" placeholder='Namuna: A777 yoki B999 yoki M333'/>
      <p>'Buyurtma raqami' toldirish shay emas</p>
   <button className="btn">
      <p>Tasdiqlash</p>
    </button>   
      <p>B - buyurtma uchun</p>
      <p>A - akkount uchun</p>
      <p>M - rassrochkani so'ndirish uchun</p>
      </div>
    </div>
  )
}

export default Tolov