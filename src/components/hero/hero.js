import React, { useState } from "react";
import "./hero.css";
import logo from "./logo.png";
import bsc from "./bsc.png";
import heroImg from "./hero-img.png";
function Hero() {
  return (
    <section className="hero">
      <header>
        <img className="logo" src={logo} alt="..." />
        <ul className="nav">
          <li
            onClick={() => {
              document.querySelector(".nav").classList.remove("open");
              document.querySelector("BODY").classList.remove("overflow");
            }}
            className="nav-mobile cross"
          >
            <i className="fas fa-times"></i>
          </li>
          <li>
            <img className="logo mid nav-mobile" src={logo} alt="..." />
          </li>
          <li className="nav-item first">
            <a href="#">Card</a>
          </li>
          <li className="nav-item">
            <a href="#">Tokenomics</a>
          </li>
          <li className="nav-item">
            <a href="#">Charity</a>
          </li>
          <li className="nav-item">
            <a href="#">Documents</a>
          </li>
          <li className="nav-item">
            <a href="#">Roadmap</a>
          </li>
          <li className="nav-item">
            <a href="#">Contact</a>
          </li>
        </ul>
        <a className="buy-btn" href="#">
          BUY ON UNISWAP
        </a>
        <i
          onClick={() => {
            document.querySelector(".nav").classList.add("open");
            document.querySelector("BODY").classList.add("overflow");
          }}
          className="nav-mobile fas fa-bars"
        ></i>
      </header>
      <div className="hero_bottom">
        <div className="bottom_left">
          <p className="p1">The Birth of Baby Doge!</p>
          <h1>World's Best Community Coin</h1>
          <p className="desc">
            Baby Doge Coin has learned a few tricks and lessons from his meme
            father, Doge. A new crypto birthed by fans of the Doge Meme online
            community. Baby Doge seeks to impress his father by showing his new
            improved transaction speeds & adorableness. He is Hyper-deflationary
            with static reflection that rewards holders, so more baby doge coins
            are being automatically added to your wallet each transaction.
            Simply Love, pet, and hold as 5% from each transaction is
            automatically redistributed to baby doge holders.
          </p>
          <img className="mobile middle-img" src={heroImg} alt="..." />
          <div className="id">
            <p className="id-p">
              <span>
                <img src={bsc} />
                ETH
              </span>
              <input
                disabled=""
                type="text"
                placeholder="0xc748673057861a797275cd8a068abb95a902e8de"
              />
            </p>
            <button className="id-btn">Copy Address</button>
          </div>
          <div className="social-div">
            <a href="#">
              <i className="fab fa-telegram-plane"></i>
              Telegram
            </a>
            <a href="#">
              <i className="fab fa-reddit-square"></i>
              Reddit
            </a>
            <a href="#">
              <i className="fab fa-twitter-square"></i>
              Twitter
            </a>
            <a href="#">
              <i className="fab fa-discord"></i>
              Discord
            </a>
            <a href="#">
              <i className="fab fa-instagram"></i>
              Instagram
            </a>
            <a href="#">
              <i className="fab fa-facebook-square"></i>
              Facebook
            </a>
          </div>
        </div>
        <div className="bottom_right desktop">
          <img src={heroImg} alt="..." />
        </div>
      </div>
    </section>
  );
}

export default Hero;
