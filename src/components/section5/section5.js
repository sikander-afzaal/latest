import React from "react";
import "./section5.css";
import img1 from "./img1.webp";
import img2 from "./img2.webp";
import img3 from "./img3.webp";
import img4 from "./img4.webp";
import img5 from "./img5.webp";
import img6 from "./img6.webp";
function Section5() {
  return (
    <div className="section5">
      <h4>Friends of Baby Doge</h4>
      <p>Exchanges</p>

      <div className="slider">
        <img src={img1} alt="..." />
        <img src={img2} alt="..." />
        <img src={img3} alt="..." />
        <img src={img4} alt="..." />
        <img src={img5} alt="..." />
        <img src={img6} alt="..." />
      </div>
    </div>
  );
}

export default Section5;
