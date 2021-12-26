import React from "react";
import "./section6.css";
import bone from "./bone.webp";
import house from "./house.webp";
function Section6() {
  return (
    <div className="section6">
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
      <button className="watch">
        <i className="fas fa-play"></i>
        Watch Video
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
