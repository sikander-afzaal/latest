import React from "react";
import "./section10.css";
function Section10() {
  const data = [
    {
      question: "How to fix insufficient output on pancake swap?",
      answer: "Increase slippage to 12%",
    },
    {
      question: "How Can I Help?",
      answer: `Tell your friends & family, about baby doge. Social media is a
            wonderful place. You can also email your proposal to
            Partnerships@babydogecoin.com`,
    },
    {
      question: "What is Baby Doge Coin?",
      answer: ` Despite the name Baby Doge Coin is actually a fun collectible token
            protocol built on Binance smart chain. Originally created as a meme
            joke with 420 Quadrillion supply and deflationary mechanics as
            oppose to traditional inflationary/fixed supply. Baby doge supply is
            decreased with each transaction 40% of the supply has been burned so
            far.`,
    },
    {
      question: "What are the fees?",
      answer: `Every transaction has a 10% fee with 5% going to the holders and 5%
            going to pancake swap liquidity pool.`,
    },
    {
      question: "What do you mean by decentralized?",
      answer: `It means you don't have to trust any central organization or person
            the way you would a bank. The developers nor team can seize your
            funds, but they also can't return them if you send them to the wrong
            address.`,
    },
  ];
  return (
    <div>
      <div className="content">
        {data.map((elem, index) => {
          return (
            <div key={index} className="custom_accordion">
              <input
                type="checkbox"
                id={index}
                name="q"
                className="questions"
              />
              <i className="fas fa-chevron-down plus"></i>
              <label htmlFor={index} className="question">
                {elem.question}
              </label>
              <div className="answers">{elem.answer}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Section10;
