import React from "react";
import "./Footer.css";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';

const Footer = () => {
  return (
   
    <footer className="section-p1">
    <div className="col">
      <img
        className="logo"
        src="https://cdn.logo.com/hotlink-ok/logo-social.png"
      />
      <h4>Contact</h4>
      <p>
        <strong>Address </strong>:Lorem Ipsum is simply dummy text of the printing
        and typesetting industry. Lorem Ipsum
      </p>
      <div className="follow">
        <h4>Follow Us :</h4>
        <div className="icon">
          <FacebookIcon />
          <InstagramIcon />
          <TwitterIcon />
        </div>
      </div>
    </div>
    <div className="col">
      <h4>About</h4>
      <a href="#">About Us</a>
      <a href="#">Delivery Information</a>
      <a href="#">Privarcy Policy</a>
      <a href="#">Terms &amp; Condition </a>
      <a href="#">Contact Us</a>
    </div>
    <div className="col">
      <h4>Account</h4>
      <a href="#">Account</a>
      <a href="#">View Cart</a>
      <a href="#">My WishList</a>
      <a href="#">Track my Order </a>
      <a href="#">Help</a>
    </div>
    <div className="copyright">
      <p>Designed and Coded by Sahil Borkar</p>
    </div>
  </footer>
  
   
  );
};

export default Footer;













// <footer className=" bg-dark text-white pt-5 pb-4">
// <div className=" container text-md-left">
//   <div className="fl row text-md-left">
//     <div className="col mt-3" style={{ color: "#808080" }}>
//       <h5 className="text-uppercase mb-4 font-weight-bold">Get to know us</h5>
//       <p>
//         <a
//           href="./about.html"
//           className="text-white"
//           style={{ textDecoration: "none" }}
//         >
//           About us
//         </a>
//       </p>
//       <p>
//         <a
//           href="./career.html"
//           className="text-white"
//           style={{ textDecoration: "none" }}
//         >
//           Careers
//         </a>
//       </p>
//       <p>
//         <a href="" className="text-white" style={{ textDecoration: "none" }}>
//           Press releases
//         </a>
//       </p>
//       <p>
//         <a
//           href="./Partner Stores.html"
//           className="text-white"
//           style={{ textDecoration: "none" }}
//         >
//           Our Partners
//         </a>
//       </p>
//     </div>
//     <div className="col mt-3" style={{ color: "#808080" }}>
//       <h5 className="text-uppercase mb-4 font-weight-bold">
//         Let us help you
//       </h5>
//       <p>
//         <a
//           href="./paypolicy.html"
//           className="text-white"
//           style={{ textDecoration: "none" }}
//         >
//           Payments
//         </a>
//       </p>
//       <p>
//         <a
//           href="./shippolicy.html"
//           className="text-white"
//           style={{ textDecoration: "none" }}
//         >
//           Shipping
//         </a>
//       </p>
//       <p>
//         <a href="" className="text-white" style={{ textDecoration: "none" }}>
//           Cancellation and Returns
//         </a>
//       </p>
//       <p>
//         <a href="" className="text-white" style={{ textDecoration: "none" }}>
//           Report an issue
//         </a>
//       </p>
//       <p>
//         <a
//           href="./contactus.html"
//           className="text-white"
//           style={{ textDecoration: "none" }}
//         >
//           Contact us
//         </a>
//       </p>
//     </div>
//     <div className="col mt-3" style={{ color: "#808080" }}>
//       <h5 className="text-uppercase mb-4 font-weight-bold">Policy</h5>
//       <p>
//         <a href="" className="text-white" style={{ textDecoration: "none" }}>
//           Return policy
//         </a>
//       </p>
//       <p>
//         <a href="" className="text-white" style={{ textDecoration: "none" }}>
//           Time of use
//         </a>
//       </p>
//       <p>
//         <a
//           href="./privacy.html"
//           className="text-white"
//           style={{ textDecoration: "none" }}
//         >
//           Privacy
//         </a>
//       </p>
//     </div>
//     <div className="col mt-3" style={{ color: "#808080" }}>
//       <h5 className="text-uppercase mb-4 font-weight-bold">
//         Make money with us
//       </h5>
//       <p>
//         <a href="" className="text-white" style={{ textDecoration: "none" }}>
//           Sell on Shoppers Stop
//         </a>
//       </p>
//       <p>
//         <a href="" className="text-white" style={{ textDecoration: "none" }}>
//           Advertise your products
//         </a>
//       </p>
//       <p>
//         <a
//           href="./Partner Stores.html"
//           className="text-white"
//           style={{ textDecoration: "none" }}
//         >
//           Become our partner
//         </a>
//       </p>
//       <p>
//         <a href="" className="text-white" style={{ textDecoration: "none" }}>
//           Join our mission
//         </a>
//       </p>
//     </div>
//     <div className="col mt-3" style={{ color: "#808080" }}>
//       <h5 className="text-uppercase mb-4 font-weight-bold">
//         Connect with us
//       </h5>
//       <p>
//         <a
//           href="https://www.facebook.com"
//           className="text-white"
//           style={{ textDecoration: "none" }}
//         >
//           <FacebookIcon />
//           <i className="fab fa-facebook-square" />
//           Facebook
//         </a>
//       </p>
//       <p>
//         <a
//           href="https://twitter.com"
//           className="text-white"
//           style={{ textDecoration: "none" }}
//         >
//           <TwitterIcon />
//           <i className="fab fa-twitter-square" />
//           Twitter
//         </a>
//       </p>
//       <p>
//         <a
//           href="https://instagram.com"
//           className="text-white"
//           style={{ textDecoration: "none" }}
//         >
//           <InstagramIcon />
//           <i className="fab fa-instagram-square" />
//           Instagram
//         </a>
//       </p>
//     </div>
//   </div>
//   <hr className="mb-4" />
//   <div className="ft row align-items-center ">
//     <div className="text-center">
//       Copyright © and ® Since 2022 Designed and coded by @borkarSahil
//     </div>
//   </div>
// </div>
// </footer>