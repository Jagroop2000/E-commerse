import React, {useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import "./ProductDetail.css";
import StarIcon from "../../assests/star.png";

export default function ProductDetail() {

  const {productId} = useParams();
  console.log("Product Id ",productId)
  const [productDetail,setProductDetail] = useState(null);
  const [btnMsg,setBtnMsg] = useState("ADD TO CART");
  const [wishlistBtnMsg,setWishlistBtnMsg] = useState("ADD TO WISHLIST");

  useEffect(()=>{
    async function fetchProductDetails(){
      fetch(`https://fakestoreapi.com/products/${productId}`)
      .then((res) => res.json())
      .then((data) => {
        setProductDetail(data);
      });
    }
    
    fetchProductDetails();

  },[])
  

  return (
    (!productDetail)?(
    <div style={{width:"100vw",display:"flex",justifyContent:"center",marginTop:100}}>
      <p>Loading...</p>
    </div>
    ):(
    <div className="product-detail">
      <div className='image-div'>
        <img src={productDetail.image} alt="img" />
      </div>

      <div className='detail-div'>
        <h2>{productDetail.title}</h2>
        <div style={{display:"flex",alignItems:"center"}}>
          <span>{productDetail.rating.rate}</span>
          <img src={StarIcon} style={{width:20,marginRight:10}} alt="" />
          <span style={{borderLeft:"2px solid grey",paddingLeft:10}}>{productDetail.rating.count} Reviews</span>
        </div>
        <p>{productDetail.description}</p>
        <p style={{fontSize:"1.5rem",fontWeight:"bold",color:"rgb(45, 188, 45)"}}>$ {productDetail.price}</p>
        <div className='btn-cont'>
          <button className='add-to-cart-btn' onClick={()=>setBtnMsg("ADDED TO CART")}>{btnMsg}</button>
          <button className='add-to-cart-btn add-to-wishlist' onClick={()=>setWishlistBtnMsg("WISHLISTED")}>{wishlistBtnMsg}</button>
        </div>
      </div>
    </div>
    )
  )
}
