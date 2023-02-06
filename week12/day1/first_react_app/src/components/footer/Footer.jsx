import React from "react";
import "./Footer.css";
import ReactLogo from "../../assets/react.svg";

export const Footer = (props) => {
  return (
    <div className="Footer">
      <img src={ReactLogo} alt="react_logo" />
      <h3>{props.studentName}</h3>
      <img src={ReactLogo} alt="react_logo" />
    </div>
  );
};
