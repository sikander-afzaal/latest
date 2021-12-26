import React, { useState } from "react";
import "./section10.css";
function Section10() {
  const [open, setOpen] = useState(false);
  const clickHandler = (e) => {
    const menu = e.target.nextSibling;
    const main = document.querySelector(".section10");
    if (open === false) {
      menu.classList.add("section10-menu-open");
      e.target.classList.add("title-open");
      main.classList.add("gap");
      e.target.lastChild.classList.add("rotate");
      setOpen((prev) => {
        return !prev;
      });
    } else if (open === true) {
      document
        .querySelector(".section10-menu-open")
        .classList.remove("section10-menu-open");
      document.querySelector(".title-open").classList.remove("title-open");
      main.classList.remove("gap");
      document.querySelector(".rotate").classList.remove("rotate");
      setOpen((prev) => {
        return !prev;
      });
    }
  };
  return (
    <div className="section10">
      <div className="section10-main">
        <div onClick={clickHandler} className="section10-title">
          <p>How to fix insufficient output on pancake swap?</p>
          <i className="fas fa-chevron-down"></i>
        </div>
        <div className="section10-menu">
          <p>Increase slippage to 12%</p>
        </div>
      </div>
      <div className="section10-main">
        <div onClick={clickHandler} className="section10-title">
          <p>How Can I Help?</p>
          <i className="fas fa-chevron-down"></i>
        </div>
        <div className="section10-menu">
          <p>
            Tell your friends & family, about baby doge. Social media is a
            wonderful place. You can also email your proposal to
            Partnerships@babydogecoin.com
          </p>
        </div>
      </div>
      <div className="section10-main">
        <div onClick={clickHandler} className="section10-title">
          <p>What is Baby Doge Coin?</p>
          <i className="fas fa-chevron-down"></i>
        </div>
        <div className="section10-menu">
          <p>
            Despite the name Baby Doge Coin is actually a fun collectible token
            protocol built on Binance smart chain. Originally created as a meme
            joke with 420 Quadrillion supply and deflationary mechanics as
            oppose to traditional inflationary/fixed supply. Baby doge supply is
            decreased with each transaction 40% of the supply has been burned so
            far.
          </p>
        </div>
      </div>
      <div className="section10-main">
        <div onClick={clickHandler} className="section10-title">
          <p>What are the fees?</p>
          <i className="fas fa-chevron-down"></i>
        </div>
        <div className="section10-menu">
          <p>
            Every transaction has a 10% fee with 5% going to the holders and 5%
            going to pancake swap liquidity pool.
          </p>
        </div>
      </div>
      <div className="section10-main">
        <div onClick={clickHandler} className="section10-title">
          <p>What do you mean by decentralized?</p>
          <i className="fas fa-chevron-down"></i>
        </div>
        <div className="section10-menu">
          <p>
            It means you don't have to trust any central organization or person
            the way you would a bank. The developers nor team can seize your
            funds, but they also can't return them if you send them to the wrong
            address.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Section10;
