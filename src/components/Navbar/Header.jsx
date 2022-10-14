
import React from "react";
import "./Header.css";
import DensityMediumIcon from '@mui/icons-material/DensityMedium';
import CloseIcon from '@mui/icons-material/Close';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
function Header(){

  const bar = document.getElementById('bar');
  const nav = document.getElementById('navbar');

  if (bar) {
    bar.getElementById('click', () => {
      nav.classList.add('active');
    })
  }

    return(
      
      <section id="header">
      <ShoppingCartIcon />
      <div>
       <ul id="navbar"  >
        <li><a class="active" >Home</a></li>
        <li><a href="#" >Shop</a></li>
        <li><a href="#">Blog</a></li>
        <li><a href="#">About Us</a></li>
        <li><a href="#">Contact</a></li>
     
       </ul> 
      </div>

    <div id="mobile">
    <i id="bar" className="active"><DensityMediumIcon /></i>
    </div>
    
    </section>


    );

}

export default Header ;

   // <CloseIcon id="close" />