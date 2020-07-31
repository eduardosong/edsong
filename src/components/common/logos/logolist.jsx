import React from "react";
import "./logolist.css";

function logoList(props) {
  return <ul className="tech-list">{props.children}</ul>;
}

export default logoList;
