import React from "react";
import "./Background.css";
import whitearrow from "../../../assets/dark-arrow.png";

function Background() {
  return (
    <>
      <div className="Background container">
        <div className="backgroundText">
          <h1>We Ensure Better Education For A Better World</h1>
          <p>
            To become a Total Quality Institute and contribute effectively
            towards national development in the era of rapidly changing global
            economy and ensure prosperity for the mankind at large
          </p>
          <button className="btn">
            Explore more<img className="darkArrow" src={whitearrow}></img>
          </button>
        </div>
      </div>
    </>
  );
}

export default Background;
