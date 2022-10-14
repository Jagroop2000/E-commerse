import React  from "react";
import "./Poster.css";

function Poster(){

    return(
        <div id="space">
        <section id="sm-banner" className="section-p1">
          <div className="banner-box">
            <h4>Crazy Deals</h4>
            <h2>Buy 3 Shirts for 1000</h2>
            <span>The Best Sale Every</span>
            <button className="poster-button">Know More</button>
          </div>
          <div className="banner-box bg-box">
            <h4>Suprise</h4>
            <h2>Buy And Get Discount</h2>
            <span>The Best Sale Every</span>
            <button className="poster-button">Grab Now</button>
          </div>
        </section>

        <br/><br/>

        <section id="banner3">
          <div className="banner-box">
            <h2>Sale</h2>
            <h3>50% OFF</h3>
          </div>
          <div className="banner-box banner-box2">
            <h2>Sale</h2>
            <h3>50% OFF</h3>
          </div>
          <div className="banner-box  banner-box3">
            <h2>Sale</h2>
            <h3>50% OFF</h3>
          </div>
        </section>
      </div>
      
    );

}

export default Poster ;