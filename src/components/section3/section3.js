import React from "react";
import "./section3.css";
import img1 from "./img1.webp";
import img2 from "./img2.webp";
import img3 from "./img3.webp";
import img4 from "./img4.webp";
function Section3() {
  return (
    <div className="section3">
      <div className="section3_top">
        <h1>Baby Doge Protocolol</h1>
        <p>
          Baby Doge is cute but with a lot of BITE! $Baby Doge is a deflationary
          token designed to become more scarce over time. All holders of Baby
          Doge will earn more baby doge that is automatically sent to your
          wallet by simply holding Baby Doge coins in your wallet. Watch the
          amount of baby doge grow in your wallet as baby doge coin holders
          automatically receive a 5% fee from every transaction that happens on
          the Baby Doge network. The community receives more baby doge coins
          from the fees generated each transaction.
        </p>
      </div>
      <div className="section3_bottom">
        <div className="box">
          <img src={img1} alt="..." />
          <h3>Auto & Manual Burns</h3>
          <p>
            We have burned 40%+ of the supply. That means out of the 5% of the
            redistribution 37% will be distributed to the dead wallet. Coins are
            burned with every transaction.
          </p>
        </div>
        <div className="box">
          <img src={img2} alt="..." />
          <h3>Auto-reflections</h3>
          <p>
            5% fee of each transaction is redistributed to token holders. That
            means you can earn more Baby Doge Coins by just holding them in your
            wallet. (centralized exchanges/wallets may not apply tokenomics)
          </p>
        </div>
        <div className="box">
          <img src={img3} alt="..." />
          <h3>Locked Liquidty</h3>
          <p>Majority of initial LP tokens locked & some burned.</p>
        </div>
        <div className="box">
          <img src={img4} alt="..." />
          <h3>Charity Wallet</h3>
          <p>
            We have a designated charity wallet that receives redistributions
            that are used to support our charity partners.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Section3;
