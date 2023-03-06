import React, {useState} from 'react'
import "./Navbar.css"
import {BiSearchAlt2} from "react-icons/bi"
import {MdPayment} from "react-icons/md"
import {TbTruckDelivery} from "react-icons/tb"
import {SlBasket} from "react-icons/sl"
import {GrContactInfo, GrFavorite} from "react-icons/gr"
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import { useNavigate, } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import {FiX} from "react-icons/fi"
import { LOG_IN } from "../../context/action/actionType";
function Navbar() {
  const dispatch = useDispatch()
  const [show, setShow] = useState(false);
  const {pathname} = useLocation()
  const navigate = useNavigate()
  const [username, setUsermname] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const auth = useSelector((s) => s.auth);
 
  if(pathname.includes("admin")){
    return <></>
  } 
  const register = () => {
    if (username === "alpha" && password === "2009") {
      dispatch({ type: LOG_IN, payload: { username, password } });
      navigate("/admin");
    } else {
      setError(true);
    }
  };
  const defaultCase = () => {
    setShow(false);
    setUsermname("");
    setPassword("");
    setError(false);
  };
  const checkAdmin = ()=>{
    if (auth) {
      return navigate("/admin")
    }
    setShow(true)
  }
  return (
    <>
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
                <div onClick={()=> checkAdmin} className="nav__item">
                    <GrContactInfo/>
                    <p>Admin</p>
                </div>
            </div>
    </div>
    {show ? (
        <>
          <div onClick={defaultCase} className="nav__shadow"></div>
          <div className="nav__login">
            <FiX onClick={defaultCase} className="nav__close" />
            <span className="error" style={{ opacity: error ? 1 : 0 }}>
              username yoki password xato
            </span>
            <input
              className="ad__inputs"
              value={username}
              onChange={(e) => setUsermname(e.target.value)}
              type="text"
              placeholder="username"
            />
            <input
              className="ad__inputs"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="password"
            />
            <button onClick={register}>Login</button>
          </div>
        </>
      ) : (
        <></>
      )}
    </>

  )
}

export default Navbar