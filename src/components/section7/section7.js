import React from "react";
import "./section7.css";
import img1 from "./img1.jpg";
function Section7() {
  return (
    <div className="section7">
      <h1>Interesting Articles</h1>
      <div className="section7_box-div">
        <div className="section7_box">
          <img src={img1} alt="" />
          <h2>Tweeted By Elon Musk</h2>
          <p>
            Elon Musk aka "Doge Father" AKA Worlds Smartest Man Recognized Baby
            Doge Coin Only 1 Month After Launch View Tweet
          </p>
        </div>
        <div className="section7_box">
          <img src={img1} alt="" />
          <h2>Tweeted By Elon Musk</h2>
          <p>
            Elon Musk aka "Doge Father" AKA Worlds Smartest Man Recognized Baby
            Doge Coin Only 1 Month After Launch View Tweet
          </p>
        </div>
        <div className="section7_box">
          <img src={img1} alt="" />
          <h2>Tweeted By Elon Musk</h2>
          <p>
            Elon Musk aka "Doge Father" AKA Worlds Smartest Man Recognized Baby
            Doge Coin Only 1 Month After Launch View Tweet
          </p>
        </div>
      </div>
    </div>
  );
}

export default Section7;
