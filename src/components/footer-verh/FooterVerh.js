import React from "react";
import "./FooterVerh.css";
import { AiFillApple } from "react-icons/ai";
import { FaGooglePlay } from "react-icons/fa";
import { useLocation } from "react-router-dom";
function FooterVerh() {
  const {pathname} = useLocation()
  if(pathname.includes("admin")){
    return <></>
  } 
  return (
    <div className="footerV container">
      <div className="footerv__img">
        <img
          src="https://asaxiy.uz/custom-assets/images/asaxiy-app.png"
          alt=""
        />
      </div>
      <div className="footerv__inter">
        <img
          src="https://asaxiy.uz/custom-assets/images/logos/asaxiy-logo-white.svg"
          alt=""
        />
        <p>Sizning internet do'koningiz</p>
        <div className="apps">
          <div className="app__google">
            <AiFillApple />
            <p>App Story</p>
          </div>
          <div className="app__google">
            <FaGooglePlay />
            <p>App Story</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FooterVerh;
