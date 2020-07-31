import React, { Component } from "react";
import Logos from "../logos/logos.jsx";
import LogoList from "../logos/logolist.jsx";
import "./about.css";
import "../../../App.css";

class About extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="animated fadeIn delay-075s content-item about">
          <img
            className="portrait"
            src="portrait.jpg"
            alt="Eduardo Song portrait"
          />
          <div className="ed-info">
            <p className="info-text">
              I am a Web Developer based in Orange County, California,
              experienced with both front and back end technologies.
            </p>
            <p className="info-text">
              Here's a short list of the technologies I've been using in my work
              and projects:
            </p>
            <LogoList>
              <Logos logoName="react" />
              <Logos logoName="redux" />
              <Logos logoName="html5" />
              <Logos logoName="css3" />
              <Logos logoName="net" />
              <Logos logoName="smss" />
            </LogoList>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default About;
