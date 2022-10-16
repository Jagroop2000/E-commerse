
import React from "react";
import "./Header.css";
import DensityMediumIcon from '@mui/icons-material/DensityMedium';
import CloseIcon from '@mui/icons-material/Close';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useNavigate } from "react-router-dom";
function Header(){
  //  Used for Navigation
  const navigate = useNavigate();

  // This Code Cause Issue as here we are using React due to this Crach Occur.  I will add the code 
  // of Showing Active Button on Header using React .

  // const bar = document.getElementById('bar');
  // const nav = document.getElementById('navbar');


  // if (bar) {
  //   bar.getElementById('click', () => {
  //     nav.classList.add('active');
  //   })
  // }

  const navigateScreen =(screenName)=>{
    navigate(screenName)
  }

    return(
      
      <section id="header">
      <ShoppingCartIcon />
      <div>
       <ul id="navbar"  >
        <li><a onClick={() => navigateScreen('/')}>Home</a></li>
        <li><a>Shop</a></li>
        <li><a>Blog</a></li>
        <li><a onClick={() => navigateScreen('/about-us')} >About Us</a></li>
        <li><a>Contact</a></li>
     
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