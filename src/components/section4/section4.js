import React from "react";
import "./section4.css";
import card from "./card.webp";
function Section4() {
  return (
    <div className="section4">
      <div className="section4_left">
        <h2>Baby Doge Crypto Card</h2>
        <p>
          Baby Doge application that will be available on iOS and Android. The
          application will have the following features:
        </p>
        <ul>
          <li>Ability to Buy Cryptocurrencies</li>
          <li> Ability to send Cryptocurrencies</li>
          <li>Ability to exchange crypto currencies for fiat</li>
          <li>
            Will have new TextBit technology meaning the users can text BabyDoge
            to anyone anywhere in the world using a telephone number
            (restrictions apply)
          </li>
        </ul>
        <p className="terms">*initially only in EEA & UK*</p>
      </div>
      <div className="section4_right">
        <img src={card} alt="" />
      </div>
    </div>
  );
}

export default Section4;
