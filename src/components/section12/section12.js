import React from "react";
import "./section12.css";
function Section12() {
  return (
    <div className="section12">
      <h1 className="invisible">Community</h1>
      <p className="join">
        Join Our <span>Community</span>
      </p>
      <p className="follower_small">480,000+ Twitter Followers</p>
      <p className="follower_small">190,000+ Telegram Members</p>
      <p className="section12_desc">
        Extremely active community that loves our mission and doges! Our
        telegram channel is filled with community members 24/7 that would love
        to help you. Do not trust random messages of people claiming to be
        “support” or ever give out your wallet info to anyone.
      </p>
      <p className="soon">See you soon!</p>
      <div className="section12_social">
        <a href="#">
          <i className="fab fa-telegram-plane"></i>
        </a>
        <a href="#">
          <i className="fab fa-reddit-square"></i>
        </a>
        <a href="#">
          <i className="fab fa-twitter-square"></i>
        </a>
        <a href="#">
          <i className="fab fa-discord"></i>
        </a>
        <a href="#">
          <i className="fab fa-instagram"></i>
        </a>
        <a href="#">
          <i className="fab fa-facebook-square"></i>
        </a>
      </div>
    </div>
  );
}

export default Section12;
