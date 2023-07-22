import React from "react";
import "../CSS/Welcome.css";

import { useNavigate } from "react-router-dom";
import Navbar1 from "./Navbar1";

export default function Welcome() {
  let navigate = useNavigate();
  
  return (
    <div class="container-fluid" >
     <Navbar1 />
      <div className="Entry-Caption ">
            <h1>Hi, Welcome to The CRM!</h1>
         
           
        </div>
        </div>
  );
}

