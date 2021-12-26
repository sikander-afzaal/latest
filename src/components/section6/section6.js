import React, { useState } from "react";
import "./section6.css";
import bone from "./bone.webp";
import house from "./house.webp";
import video from "./video.mp4";
function Section6() {
  const [videoOpen, setVideo] = useState(false);
  const openVideo = (e) => {
    if (videoOpen === false) {
      document.querySelector(".video").classList.add("block");
    } else {
      document.querySelector(".video").classList.remove("block");
    }
    setVideo((prev) => {
      return !prev;
    });
  };
  return (
    <div className="section6">
      <div className="video">
        <div className="overlay"></div>
        <div className="video-div">
          <i onClick={openVideo} className="close-btn fas fa-times"></i>
          <video controls={true} src={video}></video>
        </div>
      </div>
      <h2>Our Tokenomics</h2>
      <div className="section6_mid">
        <div className="section6_left flex">
          <span>
            <img src={bone} alt="" />
            <p>5%</p>
          </span>
          <p className="section6_desc">
            Of Each Transaction Added to Liquidity Pool
          </p>
        </div>
        <div className="section6_right flex">
          <span>
            <img src={house} alt="" />
            <p>5%</p>
          </span>
          <p className="section6_desc">
            Of Each Transaction ReDistributed to Holders
          </p>
        </div>
      </div>
      <button onClick={openVideo} className="watch">
        <i className="fas fa-play"></i>
        <p style={{ pointerEvents: "none" }}>Watch Video</p>
      </button>
      <div className="documents-div">
        <h1 className="docu-h1">Our Documents</h1>
        <div className="document_btn-div">
          <button className="docu-btn watch">
            Woof Paper
            <i className="fas fa-eye"></i>
          </button>
          <button className="docu-btn watch">
            Audit I<i className="fas fa-eye"></i>
          </button>
          <button className="docu-btn watch">
            Audit II
            <i className="fas fa-eye"></i>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Section6;
