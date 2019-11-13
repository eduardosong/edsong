import React, { Component } from 'react';
import './projects.css';
import '../../../App.css'
import PersWebImg from './edsongweb.jpg'

class Projects extends Component {
    render () {
        return (
            <React.Fragment>
                <div className='animated fadeIn delay-075s content-item'>
                    <p className='content-title'>Projects</p>
                    <div className='project-box'>
                        <div className='project-item'>
                            <img href={PersWebImg} alt='eduardo song web site'/>
                            <div className="project-title-nav">
                                <h3>Personal Website</h3>
                                <ul className='project-nav'>
                                    <li className='proj-nav-item'>
                                        <a href='/'>Github</a>
                                    </li>
                                    <li className='proj-nav-item'>
                                        <a href='/'>Live</a>
                                    </li>
                                </ul>
                            </div>
                            <p className='project-text'>This is a website I created. This is a website I created. This is a website I created. This is a website I created. This is a website I created. This is a website I created. 
                            This is a website I created. This is a website I created. This is a website I created. This is a website I created. This is a website I created. This is a website I created. 
                            </p>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default Projects;