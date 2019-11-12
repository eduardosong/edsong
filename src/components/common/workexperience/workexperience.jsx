import React, { Component } from 'react';
import './workexperience.css';
import '../../../App.css'

class WorkExperience extends Component {

    state = {
        currJob: 'nextround'
    }

    updateDispJob = e => {
        const selectJob = e.target.value;

        this.setState({currJob:selectJob});
    }

    render () {
        return (
            <React.Fragment>
                <div className='animated fadeIn delay-075s content-item work-experience'>
                    <span className='content-title'>Work Experience</span>
                    <div className='work-nav'>
                        {this.state.currJob==='nextround'? (
                            <button className='work-btn selected-btn' value='nextround' onClick={this.updateDispJob} autofocus='true'>NextRound</button>
                        ):(
                            <button className='work-btn ' value='nextround' onClick={this.updateDispJob} autofocus='true'>NextRound</button>
                        )}

                        {this.state.currJob==='scones'? (
                            <button className='work-btn selected-btn' value='scones' onClick={this.updateDispJob} autofocus='true'>Scones</button>
                        ):(
                            <button className='work-btn ' value='scones' onClick={this.updateDispJob} autofocus='true'>Scones</button>
                        )}
                    </div>
                    {this.state.currJob==='nextround'? (
                        <div className='job-detail'>
                            <div className='animated fadeIn detail-box'>
                                <span className='job-title'>Web Developer | June - August 2019</span>
                                <ul className="detail-list">
                                    <li>
                                        <p>Worked in a team coding, and worked with front end people to translate back end ideas</p>  
                                    </li>
                                    <li>
                                        <p>Created back end work, then created front end work for it</p>
                                    </li>
                                    <li>
                                        <p>Designed and implemented stuff</p>
                                    </li>
                                </ul>
                            </div>
                        </div>

                    ):(<div/>)}
                    {this.state.currJob==='scones'? (
                        <div className='job-detail'>
                        <div className='animated fadeIn detail-box'>
                            <span className='job-title'> Test Job | June - August 2019</span>
                            <ul className="detail-list">
                                <li>
                                    <p>Buttered scones</p>  
                                </li>
                                <li>
                                    <p>Watched the scones</p>
                                </li>
                                <li>
                                    <p>Sometimes ate the scones</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                    ):(<div/>)}
                </div>
            </React.Fragment>
        )
    }
}

export default WorkExperience;