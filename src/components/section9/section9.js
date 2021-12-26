import React, { useState } from "react";
import "./section9.css";
function Section9() {
  const data = [
    {
      phase: "1 - Birth",
      content: [
        "Marketing push to spread awareness",
        "Website launch",
        "5000 telegram members",
        "Meme development",
        "Meme development",
      ],
    },
    {
      phase: "2 - Crawl",
      content: [
        "Influencer marketing push",
        "Influencer marketing push",
        "Listing on coin market cap",
        "25,000 telegram members",
        "25,000 holders",
        "Third party audit",
        "Voluntary donation for community + charity partnership",
      ],
    },
    {
      phase: "3 - Walk",
      content: [
        "100,000 holders",
        "100,000 telegram members",
        "Air drop ",
        "Large influencer marketing push",
        "More memes from community",
        "Baby Doge Swap Credit Card For Crypto Integration.",
      ],
    },
    {
      phase: "4 - Run",
      content: [
        "150,000 holders",
        "increase marketing",
        "Baby Doge Swap",
        "Add way more memes",
        "Website Redesign",
        "Baby Doge Paw (Paw wallet tracker )",
      ],
    },
    {
      phase: "5 - Jump",
      content: [
        `300,000 Holders
        Release Baby Doge Swap.
        Release NFT market place, NFT collection.
        Give away Tesla to community`,
        `Memes. Everywhere.
        $350k/$750k total donations to dog shelters`,
      ],
    },
  ];
  const [phase, setPhase] = useState(1);
  const [open, setOpen] = useState(false);

  const clickHandler = (e) => {
    const activeBtn = document.querySelector(".active");
    const phaseNumber = e.target.dataset.phase;
    activeBtn.classList.remove("active");
    e.target.classList.add("active");
    setPhase(parseInt(phaseNumber));
  };
  const openHandler = (e) => {
    const menu = e.target.nextSibling;
    if (open === false) {
      menu.classList.add("active-menu");
      e.target.lastChild.classList.remove("fa-plus");
      e.target.lastChild.classList.add("fa-minus");
      setOpen((prev) => {
        return !prev;
      });
    } else if (open === true) {
      document.querySelector(".active-menu").classList.remove("active-menu");
      e.target.lastChild.classList.add("fa-plus");
      e.target.lastChild.classList.remove("fa-minus");
      setOpen((prev) => {
        return !prev;
      });
    }
    // const menu = e.target.nextSibling;

    // if (document.querySelector(".active-menu") != null) {
    //   document.querySelector(".active-menu").classList.remove("active-menu");
    //   menu.classList.add("active-menu");
    // } else if (menu.classList.contains("acitve-menu")) {
    //   menu.classList.remove("active-menu");
    // } else {
    //   menu.classList.add("active-menu");
    // }
  };
  return (
    <div className="section9">
      <div className="section9_top">
        <h1>Baby Doge Coin Board</h1>
        <p>
          Baby Doge Coin Board (note: check mark does not mean completed or not
          completed)
        </p>
      </div>
      <div className="section9_box desktop-box">
        <div className="box_left">
          <button
            onClick={clickHandler}
            data-phase="1"
            className="section9_btn active"
          >
            Phase 1
          </button>
          <button
            onClick={clickHandler}
            data-phase="2"
            className="section9_btn"
          >
            Phase 2
          </button>
          <button
            onClick={clickHandler}
            data-phase="3"
            className="section9_btn"
          >
            Phase 3
          </button>
          <button
            onClick={clickHandler}
            data-phase="4"
            className="section9_btn"
          >
            Phase 4
          </button>
          <button
            onClick={clickHandler}
            data-phase="5"
            className="section9_btn"
          >
            Phase 5
          </button>
        </div>
        <div className="box_right">
          <h3>Phase {data[phase - 1].phase}</h3>
          {data[phase - 1].content.map((type, index) => {
            return (
              <span key={index} className="pointer">
                <i className="fas fa-check"></i>
                <p className="phase_desc">{type}</p>
              </span>
            );
          })}
        </div>
      </div>
      <div className="mobile-box">
        <div className="content_acc">
          {data.map((elem, index) => {
            return (
              <div key={index} className="phase_acc">
                <input
                  type="checkbox"
                  id={`phase${index}`}
                  name="q"
                  className="questions_acc"
                />
                <i className="fas fa-plus plus_acc"></i>
                <label htmlFor={`phase${index}`} className="question_acc">
                  {`Phase ${index + 1}`}
                </label>
                <div className="answers_acc">
                  <p className="menu-first">{elem.phase}</p>
                  {elem.content.map((elem_data, index) => {
                    return (
                      <span key={index} className="pointer">
                        <i className="fas fa-check"></i>
                        <p className="phase_desc">{elem_data}</p>
                      </span>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
        {/* <div className="line">
          <div onClick={openHandler} className="title">
            <p>Phase 2</p>
            <i className="fas fa-plus"></i>
          </div>
          <div className="menu">
            <p className="menu-first">Phase 2 - Crawl</p>
            {data[1].content.map((type, index) => {
              return (
                <span key={index} className="pointer">
                  <i className="fas fa-check"></i>
                  <p className="phase_desc">{type}</p>
                </span>
              );
            })}
          </div>
        </div>
        <div className="line">
          <div onClick={openHandler} className="title">
            <p>Phase 3</p>
            <i className="fas fa-plus"></i>
          </div>
          <div className="menu">
            <p className="menu-first">Phase 3 - Walk</p>
            {data[2].content.map((type, index) => {
              return (
                <span key={index} className="pointer">
                  <i className="fas fa-check"></i>
                  <p className="phase_desc">{type}</p>
                </span>
              );
            })}
          </div>
        </div>
        <div className="line">
          <div onClick={openHandler} className="title">
            <p>Phase 4</p>
            <i className="fas fa-plus"></i>
          </div>
          <div className="menu">
            <p className="menu-first">Phase 4 - Run</p>
            {data[3].content.map((type, index) => {
              return (
                <span key={index} className="pointer">
                  <i className="fas fa-check"></i>
                  <p className="phase_desc">{type}</p>
                </span>
              );
            })}
          </div>
        </div>
        <div className="line">
          <div onClick={openHandler} className="title">
            <p>Phase 5</p>
            <i className="fas fa-plus"></i>
          </div>
          <div className="menu">
            <p className="menu-first">Phase 5 - Jump</p>
            {data[4].content.map((type, index) => {
              return (
                <span key={index} className="pointer">
                  <i className="fas fa-check"></i>
                  <p className="phase_desc">{type}</p>
                </span>
              );
            })}
          </div> */}
      </div>
    </div>
  );
}

export default Section9;
