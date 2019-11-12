import React, { Component } from 'react';
import './projects.css';
import '../../../App.css'

class Projects extends Component {
    render () {
        return (
            <React.Fragment>
                <div className='animated fadeIn delay-075s content-item'>
                    <span className='content-title'>Projects</span>
                    <div className='project-box'>
                        <div className='project-item'>
                            <img href='../../../../public/portrait.jpg' alt='test project'/>
                            <p></p>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default Projects;