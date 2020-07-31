import React, { Component } from "react";
import Resume from "../reusable/resume/resume.jsx";
import "./header.css";

class Header extends Component {
  state = {
    showResume: false,
  };

  openResume = () => {
    const resVal = !this.state.showResume;
    this.setState({ showResume: resVal });
  };

  closeResume = () => {
    this.setState({ showResume: false });
  };

  render() {
    return (
      <React.Fragment>
        <div className="greeting">
          <span className="title animated fadeIn">
            <strong>Hey!</strong>
          </span>
          <span className="title animated fadeIn name">
            <strong>Eduardo Song</strong>
          </span>
          <span className="title animated fadeIn">
            <strong>here.</strong>
          </span>
        </div>
        <div className="navigation">
          <div className="site-nav">
            <ul className="animated fadeInUpSmall delay-025s">
              <li className="nav-item link-start">
                <button className="link resume-btn" onClick={this.openResume}>
                  View Resume
                </button>
              </li>
            </ul>
          </div>
          <div className="external-link">
            <ul className="animated fadeInUpSmall delay-025s">
              <li className="nav-item">
                <a
                  className="link"
                  href="https://twitter.com/EduardoSong2"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ion-icon name="logo-twitter"></ion-icon>{" "}
                </a>
              </li>
              <li className="nav-item link-end">
                <a
                  className="link"
                  href="https://www.linkedin.com/in/eduardo-song-3902/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ion-icon name="logo-linkedin"></ion-icon>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <Resume show={this.state.showResume} handleClose={this.closeResume} />
      </React.Fragment>
    );
  }
}

export default Header;
