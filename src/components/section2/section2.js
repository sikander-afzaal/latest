import React from "react";
import "./section2.css";
import pic from "./auth.png";
import img1 from "./img1.png";
import img2 from "./img2.png";
import img3 from "./img3.png";
import img4 from "./img4.png";
import img5 from "./img5.png";

function Section2() {
  return (
    <>
      <div className="section2">
        <div className="section2_top">
          <img className="auth" src={pic} alt="..." />
          <div className="section2_btn-div">
            <button className="section2_btn">Baby Doge Swap</button>
            <button className="section2_btn">View Chart</button>
            <button className="section2_btn">Check BSC Scan</button>
            <button className="section2_btn">How To Buy Guide</button>
            <button className="section2_btn">Wallet Tracker</button>
          </div>
        </div>
        <div className="section2_bottom">
          <p className="seen">As Seen In</p>
          <div className="images-div">
            <img src={img1} alt="..." className="section2_image" />
            <img src={img2} alt="..." className="section2_image" />
            <img src={img3} alt="..." className="section2_image" />
            <img src={img4} alt="..." className="section2_image" />
            <img src={img5} alt="..." className="section2_image" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Section2;
