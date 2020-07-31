import React, { Component } from "react";
import "./projects.css";
import "../../../App.css";
import ProjectObject from "./projectobject";
import edsongWebImg from "./edsongweb.jpg";
import mitsisWebImg from "./mitsisweb.jpg";

class Projects extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="animated fadeIn delay-075s content-item">
          <p className="content-title">Projects</p>
          <div className="projects-wrapper">
            <ProjectObject
              imgUrl={mitsisWebImg}
              title="Mitsis"
              description="A simple web app that keeps a running list of terms as you search for their definitions. Uses the Merriam Webster API."
              gitHubUrl="https://github.com/eduardosong/mitsis_v2"
              siteUrl="https://mitsisv2.netlify.app/"
              techUsed="css3,html5,react"
            />
            <ProjectObject
              imgUrl={edsongWebImg}
              title="Personal Website"
              description="The very website you're on. Designed to be simple and sleek
    while being easy on the eyes."
              gitHubUrl="https://github.com/eduardosong/edsong"
              siteUrl="https://edsong.netlify.app/"
              techUsed="css3,html5,react"
            />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Projects;
