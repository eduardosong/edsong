import React, { Component } from "react";
import "./workexperience.css";
import "../../../App.css";

class WorkExperience extends Component {
  state = {
    currJob: "nextround",
  };

  updateDispJob = (e) => {
    const selectJob = e.target.value;

    this.setState({ currJob: selectJob });
  };

  render() {
    return (
      <React.Fragment>
        <div className="animated fadeIn delay-075s content-item work-experience">
          <p className="content-title">Work Experience</p>
          <div className="work-nav">
            {this.state.currJob === "nextround" ? (
              <button
                className="work-btn selected-btn"
                value="nextround"
                onClick={this.updateDispJob}
              >
                NextRound
              </button>
            ) : (
              <button
                className="work-btn "
                value="nextround"
                onClick={this.updateDispJob}
              >
                NextRound
              </button>
            )}
          </div>
          {this.state.currJob === "nextround" ? (
            <div className="job-detail">
              <div className="animated fadeIn detail-box">
                <span className="job-title">
                  Web Developer | June - August 2019
                </span>
                <ul className="detail-list">
                  <li>
                    <p>
                      Designed and implemented a tournament bracket module for
                      the front and back end that generates and displays
                      tournaments.
                    </p>
                  </li>
                  <li>
                    <p>
                      Collaborated closely with a team of other developers,
                      communicating requirements and receiving tasks in an
                      Agile/Scrum environment.
                    </p>
                  </li>
                  <li>
                    <p>
                      Assisted in other minor tasks such as creating UI for
                      different sections in the front end and creating API end
                      points.
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          ) : (
            <div />
          )}
        </div>
      </React.Fragment>
    );
  }
}

export default WorkExperience;
