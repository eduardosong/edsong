import React from "react";
import PropTypes from "prop-types";
import "./logos.css";

import css3logo from "./css3logo.png";
import html5logo from "./html5logo.png";
import netlogo from "./netlogo.png";
import reactlogo from "./reactlogo.png";
import reduxlogo from "./reduxlogo.png";
import smsslogo from "./smsslogo.png";

function Logos(props) {
  let logoUrl;
  let logoName;

  switch (props.logoName) {
    case "css3":
      logoUrl = css3logo;
      logoName = "CSS3";
      break;
    case "html5":
      logoUrl = html5logo;
      logoName = "HTML5";
      break;
    case "net":
      logoUrl = netlogo;
      logoName = ".NET";
      break;
    case "react":
      logoUrl = reactlogo;
      logoName = "React.js";
      break;
    case "redux":
      logoUrl = reduxlogo;
      logoName = "Redux";
      break;
    case "smss":
      logoUrl = smsslogo;
      logoName = "SMSS";
      break;
    default:
      break;
  }

  return (
    <li className="tech-wrap">
      <img
        className="tech-icon"
        src={logoUrl}
        alt={`alt of ${props.logoName}`}
      />
      <span>{logoName}</span>
    </li>
  );
}

export default Logos;

Logos.propTypes = {
  logoName: PropTypes.string,
};
