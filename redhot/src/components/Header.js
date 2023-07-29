import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import image from '../images/logo.png'
export default function Header() {
  return (
    <div className="header">
         <div className="row1">
          <div className="col1 logo">
            <img src = {image} />
          </div>
          <div className="col1">
            <a href="">Home</a>
            <a href="">Red Hot Property</a>
            <a href="">Contact Us</a>
            <a href="">About Dubai</a>
            <a href="">Blog</a>

          </div>
         </div>
         
    </div>
  );
}
