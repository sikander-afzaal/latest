import React from "react";
import "./section8.css";
import img from "./img.webp";
function Section8() {
  return (
    <div className="section8">
      <div className="section8_left">
        <img src={img} alt="" />
      </div>
      <div className="section8_right">
        <h1>E-commerce</h1>
        <p>
          Baby Doge has partnered with CoinPayments.net to allow merchants
          across the globe to accept baby doge as a payment if they choose.
        </p>
      </div>
    </div>
  );
}

export default Section8;
