import React from "react"
import "./MovingHeader.css";

const MovingHeader = () => {
  const message = " watch all courses for just $12/mounth";
  
  return (
    <div className="header-container">
      <div className="scrolling-track">
        <div className="scrolling-text">
          <span><i className="fa-light fa-face-smile"></i>{message} &nbsp;&nbsp;&nbsp;<strong>The Creative Pass</strong></span> 
          <span><i className="fa-light fa-face-smile"></i>{message}&nbsp;&nbsp;&nbsp;<strong>The Creative Pass</strong></span>
          <span><i className="fa-light fa-face-smile"></i>{message}&nbsp;&nbsp;&nbsp;<strong>The Creative Pass</strong></span>
          <span><i className="fa-light fa-face-smile"></i>{message}&nbsp;&nbsp;&nbsp;<strong>The Creative Pass</strong></span>
        </div>
        <div className="scrolling-text" aria-hidden="true">
          <span><i className="fa-light fa-face-smile"></i>{message}&nbsp;&nbsp;&nbsp;<strong>The Creative Pass</strong></span>
          <span><i className="fa-light fa-face-smile"></i>{message}&nbsp;&nbsp;&nbsp;<strong>The Creative Pass</strong></span>
          <span><i className="fa-light fa-face-smile"></i>{message}&nbsp;&nbsp;&nbsp;<strong>The Creative Pass</strong></span>
          <span><i className="fa-light fa-face-smile"></i>{message}&nbsp;&nbsp;&nbsp;<strong>The Creative Pass</strong></span>
        </div>
      </div>
    </div>
  );
};

export default MovingHeader;
