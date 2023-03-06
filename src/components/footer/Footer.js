import React from 'react'
import "./Footer.css"
import {AiOutlineMobile} from "react-icons/ai"
import {MdOutgoingMail} from "react-icons/md"
import {CiLocationOn} from "react-icons/ci"

import {FaFacebookF} from "react-icons/fa"
import {FaTelegramPlane} from "react-icons/fa"
import {BsInstagram} from "react-icons/bs" 
import {BsYoutube} from "react-icons/bs"
import {FaRss} from "react-icons/fa"

import { useLocation } from 'react-router-dom'
function Footer() {
    const {pathname} = useLocation()
    if(pathname.includes("admin")){
      return <></>
    } 
  return (
    <div className='footer'>
        <div className="footer__verh">
            <div className="footer__one">
                <img src="https://asaxiy.uz/custom-assets/images/icons/market.svg" alt="" />
                <div>
                <h3>Endi bozorga borishga hojat yo'q</h3>
                <p>Bizda qulay narxlar va uyga yetkazib berish mavjud</p>
                </div>
            </div>
            <div className="footer__one">
                <img src="https://asaxiy.uz/custom-assets/images/icons/fast-delivery.svg" alt="" />
                <div>
                <h3>Tez yetkazib berish</h3>
                <p>Bizning xizmatimiz sizni ajablantiradi</p>
                </div>
            </div>
            <div className="footer__one">
                <img src="https://asaxiy.uz/custom-assets/images/icons/return.svg" alt="" />
                <div>
                <h3>Siz uchun qulayliklar</h3>
                <p>Nosozlik yuzaga kelganda tez rasmiylashtirish va qaytarish kafolati</p>
                </div>
            </div>
            <div className="footer__one">
                <img src="https://asaxiy.uz/custom-assets/images/icons/card.svg" alt="" />
                <div>
                <h3>Bo'lib to'lash</h3>
                <p>3, 6, 9 va 12 oy davomida oldindan to'lovsiz</p>
                </div>
            </div>
        </div>
        <div className="footer__center">
            <div className="footer__malumot">
                <h2>Ma'lumotlar</h2>
                <p>Ommaviy oferta (Foydalanuvchi bitimi)</p>
                <p>Muddatli toʻlov asosida sotib olishning umumiy qoidalari</p>
                <p>Muddatli to'lov shartlari</p>
                <p>Buyurtma qanday beriladi?</p>
                <p>Tovarlarni yetkazib berish va toʻlov turlari</p>
                <p>Buyurtmani bekor qilish va tovarni qaytarish</p>
                <p>Biz haqimizda</p>
                <p>Promo Kod (Kupon) ni qanday aktivlashtiringiz mumkin!</p>
            </div>
            <div className="footer__aloqa">
                <h2>Biz bilan aloqa</h2>
                <a href=""><AiOutlineMobile/>938155857</a>
                <p><MdOutgoingMail/>info@asaxiy.uz</p>      
                {/* <p><CiLocationOn/>Chilonzor 3, Toshkent</p> */}
            </div>
            <div className="footer__tarmoq">
                <h2>Biz ijtimoiy tarmoqlarda :</h2>
                <FaFacebookF/>
                <FaTelegramPlane/>
                <BsInstagram/>
                <BsYoutube/>
                <FaRss/>
            </div>
        </div>
<div className='foo__hr'></div>
        <div className="footer__tolovtur">
            <h3>To'lov turlari :</h3>
            <img src="https://logobank.uz:8005/media/logos_preview/Apelsin-01.png" alt="" />
            <img src="https://logobank.uz:8005/media/logos_preview/payme-01.png" alt="" />
            <img src="https://logobank.uz:8005/media/logos_preview/Click-01.png" alt="" />
            <img src="https://logobank.uz:8005/media/logos_preview/Humo-01.jpg" alt="" />
            <img src="https://logobank.uz:8005/media/logos_preview/Uzcard-01.png" alt="" />
        </div>
        <div className="foo__hr"></div>
        <div className="footer__top">
            <p>2015-2022 Internet-do’kon asaxiy.uz: Maishiy texnikalar va boshqalar.Mahsulotni yetkazib berish barcha viloyatlarda amalga oshiriladi. Barcha huquqlar himoyalangan.</p>
        </div>
    </div>
  )
}

export default Footer