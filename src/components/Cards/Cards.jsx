import React from "react";
import "./Cards.css";
import CheckIcon from '@mui/icons-material/Check';

function Cards(){
    return(
   
      <div id="space">
  <section id="products1" className="section-p1">
    <h2>Products</h2>
    <p>Special Price for each Products</p>
    <div className="pro-container">
      <div className="pro">
        <img src="https://cdn1.vectorstock.com/i/1000x1000/20/20/worker-cartoon-site-under-construction-vector-11162020.jpg" />
        <div className="des">
          <span>Loading</span>
          <h5>Under Construction</h5>
          <div className="star">
            <i className="fas fa-star" />
          </div>
          <h4>$100</h4>
        </div>
        <a href="#">
        <CheckIcon className="s-cart" />
        </a>
      </div>
      <div className="pro">
        <img src="https://cdn1.vectorstock.com/i/1000x1000/20/20/worker-cartoon-site-under-construction-vector-11162020.jpg" />
        <div className="des">
          <span>Loading</span>
          <h5>Under Construction</h5>
          <div className="star">
            <i className="fas fa-star" />
          </div>
          <h4>$100</h4>
        </div>
        <a href="#">
        <CheckIcon className="s-cart" />
        </a>
      </div>
      <div className="pro">
        <img src="https://cdn1.vectorstock.com/i/1000x1000/20/20/worker-cartoon-site-under-construction-vector-11162020.jpg" />
        <div className="des">
          <span>Loading</span>
          <h5>Under Construction</h5>
          <div className="star">
            <i className="fas fa-star" />
          </div>
          <h4>$100</h4>
        </div>
        <a href="#">
        <CheckIcon className="s-cart" />
        </a>
      </div>
      <div className="pro">
        <img src="https://cdn1.vectorstock.com/i/1000x1000/20/20/worker-cartoon-site-under-construction-vector-11162020.jpg" />
        <div className="des">
          <span>Loading</span>
          <h5>Under Construction</h5>
          <div className="star">
            <i className="fas fa-star" />
          </div>
          <h4>$100</h4>
        </div>
        <a href="#">
        <CheckIcon className="s-cart" />
        </a>
      </div>
    </div>
  </section>
</div>

       
    );
};

export default Cards;