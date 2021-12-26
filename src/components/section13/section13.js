import React from "react";
import "./section13.css";
import img1 from "./img1.webp";
import img2 from "./img2.gif";
import img3 from "./img3.webp";
import img4 from "./img4.webp";
import img5 from "./img5.webp";
function Section13() {
  return (
    <div className="section13">
      <h2>Charity Partners</h2>
      <div className="section13_img">
        <img src={img1} alt="..." />
        <img src={img2} alt="..." />
        <img src={img3} alt="..." />
        <img src={img4} alt="..." />
        <img src={img5} alt="..." />
      </div>
    </div>
  );
}

export default Section13;
