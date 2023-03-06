import React from 'react'
import "./Trek.css"
function Trek() {
  return (
    <div className='trek'>
      <div className="trek__righ">
        <h1>Buyurtma holati</h1>
        <p>Buyurtmani ko'rish uchun kerakli maydonlarni to'ldiring. Buyurtma raqami sizning raqamingizga SMS-xabar shaklida yuborilgan</p>
        <p>Buyurtma raqami*</p>
        <input type="text"/>
        <p>Buyurtma berilgandagi telefon raqami *</p>
        <input type="text" />
        <br />  
        <button className="btn">
      <p>Korinish</p>
    </button>
        </div>
      <div className="trek__left">
        <img src="https://asaxiy.uz/custom-assets/images/tracking.svg" alt="" />
      </div>
    </div>
  )
}

export default Trek