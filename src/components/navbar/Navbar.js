import React from 'react'
import "./Navbar.css"
import {BiSearchAlt2} from "react-icons/bi"
import {MdPayment} from "react-icons/md"
import {TbTruckDelivery} from "react-icons/tb"
import {SlBasket} from "react-icons/sl"
import {GrContactInfo, GrFavorite} from "react-icons/gr"
import { Link } from 'react-router-dom'
function Navbar() {
  return (
    <div className='navbar container'>
        <Link  to={"/"} className="nav__logo">
            <img src="https://asaxiy.uz/custom-assets/images/logos/asaxiy-logo.svg" alt="" />
        </Link>
        <div className="nav__search">
              <input type="text" placeholder="Qidirish..." />
              <button>
                <BiSearchAlt2 />  
              </button>
            </div>

            <div className="nav__items">
                <Link to={"/tolov"} className="nav__item">
                    <MdPayment/>
                    <p>To'lov</p>
                </Link>
                <Link to={"/trek"} className="nav__item">
                    <TbTruckDelivery/>
                    <p>Trek</p>
                </Link>
                <Link to={"/savatcha"} className="nav__item">
                <SlBasket/>
                <p>Savatcha</p>
                </Link>
                <Link to={"/like"} className="nav__item">
                    <GrFavorite/>
                    <p>Sevimlilar</p>
                </Link>
                <div className="nav__item">
                    <GrContactInfo/>
                    <p>Admin</p>
                </div>
            </div>
    </div>
  )
}

export default Navbar