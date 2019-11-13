import React, { Component } from 'react';
import './about.css'
import '../../../App.css'

class About extends Component {
    render () {
        return (
            <React.Fragment>
                <div className='animated fadeIn delay-075s content-item about'>
                    <img className='portrait' src='portrait.jpg' alt='Eduardo Song portrait'/>
                    <div className="ed-info">
                        
                        <p className='info-text'>I am a Full Stack Developer based in Orange County, California, well versed in both front and back end technologies. I can build a web app from the ground up, creating a structured database paired with a responsive user interface that seamlessly retrieves and displays stored information. </p>
                        <p className='info-text'>Here's a short list of the technologies I've been using in my work and projects:</p>
                        <ul className='skills-list'>
                                <li className='skills-wrap'>
                                    <img className='skills-icon' src='https://bit.ly/2NWyPFj' alt='logo of reactjs'/>
                                    <span>React.js</span>
                                </li>
                                <li className='skills-wrap'>
                                    <img className='skills-icon' src='https://bit.ly/33AwjuT' alt='logo of redux'/>
                                    <span>Redux</span>
                                </li>
                                <li className='skills-wrap'>
                                    <img className='skills-icon' src='https://bit.ly/32zj2Se' alt='logo of .net'/>
                                    <span>.NET</span>
                                </li>
                                <li className='skills-wrap'>
                                    <img className='skills-icon' src='https://bit.ly/2CrLZVu' alt='logo of html5'/>
                                    <span>HTML5</span>
                                </li>
                                <li className='skills-wrap'>
                                    <img className='skills-icon' src='https://bit.ly/36OM2Zx' alt='logo of css3'/>
                                    <span>CSS3</span>
                                </li>
                                <li className='skills-wrap'>
                                    <img className='skills-icon' src='https://bit.ly/2qb94ZU' alt='logo of ssms'/>
                                    <span>SSMS</span>
                                </li>
                            </ul>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default About;