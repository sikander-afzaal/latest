import { eventWrapper } from "@testing-library/user-event/dist/utils";
import React from "react";
import "./section11.css";
function Section11() {
  return (
    <div className="section11">
      <div className="section11_top">
        <h2>Contact Us</h2>
        <p>Write us in the form below</p>
      </div>
      <form action="#" className="form">
        <div className="top_form">
          <input type="text" placeholder="What is your Name" />
          <input type="email" placeholder="What is your Email" />
        </div>
        <textarea
          placeholder="Your Message"
          name="text"
          id=""
          cols="30"
          rows="10"
        ></textarea>
        <button
          onClick={(e) => {
            e.preventDefault();
          }}
          className="submit"
        >
          Send
        </button>
      </form>
    </div>
  );
}

export default Section11;
