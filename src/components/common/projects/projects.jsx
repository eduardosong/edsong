import React, { Component } from 'react';
import './projects.css';
import '../../../App.css'
// import EdSongWeb from './edsongweb.jpg';

class Projects extends Component {
    render () {
        return (
            <React.Fragment>
                <div className='animated fadeIn delay-075s content-item'>
                    <p className='content-title'>Projects</p>
                    <div className='project-box'>
                        <div className='animated project-item'>
                            <div className='project-img'/>
                            <div className="project-title-nav">
                                <h3>Personal Website</h3>
                                <ul className='project-nav'>
                                    <li className='proj-nav-item'>
                                        <a href='https://github.com/eduardosong/edsong' target='_blank' rel="noopener noreferrer">Github</a>
                                    </li>
                                    <li className='proj-nav-item'>
                                        <a href='https://dreamy-yonath-b0ccf0.netlify.com/' target='_blank' rel="noopener noreferrer">Live</a>
                                    </li>
                                </ul>
                            </div>
                            <p className='project-text'>The very website you're on. Designed to be simple and sleek while being easy on the eyes. 
                            </p>
                            <ul className='tech-list'>
                                <li className='tech-wrap'>
                                    <img className='tech-icon' src='https://bit.ly/2NWyPFj' alt='logo of reactjs'/>
                                    <span>React.js</span>
                                </li>
                                <li className='tech-wrap'>
                                    <img className='tech-icon' src='https://bit.ly/2CrLZVu' alt='logo of html5'/>
                                    <span>HTML5</span>
                                </li>
                                <li className='tech-wrap'>
                                    <img className='tech-icon' src='https://bit.ly/36OM2Zx' alt='logo of css3'/>
                                    <span>CSS3</span>
                                </li>

                            </ul>
                        </div>
                    </div>
                    
                </div>
            </React.Fragment>
        )
    }
}

export default Projects;