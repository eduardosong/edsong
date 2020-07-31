import React, { Component } from "react";
import PropTypes from "prop-types";
import "./projectobject.css";
import "../../../App.css";
import Logos from "../logos/logos.jsx";
import LogoList from "../logos/logolist.jsx";

class ProjectObject extends Component {
  state = {
    techArray: [],
  };

  componentDidMount() {
    this.parseTech();
  }

  parseTech = () => {
    const techString = this.props.techUsed;
    const techArray = [];
    let selectedTech = "";
    let techJsx = "";

    if (techString.length > 0) {
      for (let i = 0; i < techString.length; i++) {
        if (techString[i] === ",") {
          techJsx = <Logos logoName={selectedTech} />;
          techArray.push(techJsx);
          techJsx = "";
          selectedTech = "";
        } else if (i === techString.length - 1) {
          selectedTech += techString[i];
          techJsx = <Logos logoName={selectedTech} />;
          techArray.push(techJsx);
        } else {
          selectedTech += techString[i];
        }
      }

      this.setState({
        techArray,
      });
    }
  };

  render() {
    return (
      <React.Fragment>
        <div className="project-box">
          <div className="animated project-item">
            <img
              className="project-img"
              src={this.props.imgUrl}
              alt={`Snapshot of ${this.props.title}`}
            ></img>

            <div className="project-info">
              <div className="project-title-nav">
                <h2>{this.props.title}</h2>
                <ul className="project-nav">
                  <li className="proj-nav-item">
                    <a
                      href={this.props.gitHubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      title="Open project github"
                    >
                      <ion-icon name="logo-github"></ion-icon>
                    </a>
                  </li>
                  <li className="proj-nav-item">
                    <a
                      href={this.props.siteUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      title="Open project website"
                    >
                      <ion-icon name="open"></ion-icon>{" "}
                    </a>
                  </li>
                </ul>
              </div>
              <p className="project-text">{this.props.description}</p>
              <LogoList>{this.state.techArray}</LogoList>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default ProjectObject;

ProjectObject.propTypes = {
  imgUrl: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  gitHubUrl: PropTypes.string,
  siteUrl: PropTypes.string,
  techUsed: PropTypes.string,
};
