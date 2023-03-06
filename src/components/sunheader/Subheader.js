import React from "react";
import "./Subheader.css"
import {AiOutlineMenu} from "react-icons/ai"
import { useLocation } from "react-router-dom";
function Subheader() {
  const {pathname} = useLocation()
  if(pathname.includes("admin")){
    return <></>
  } 
  return (
    <div className="sub container">
      <p><AiOutlineMenu/>
Barcha bo'limlar</p>
<p>Yangiliklar</p>
<p>Yangi kelganlar</p>
<p>Chegirmalar</p>
<p>Kitoblar</p>
<p>Telefonlar va gadjetlar</p>
<p>Televizorlar</p>
<p>Sport buyumlari</p>
    </div>
  );
}

export default Subheader;
