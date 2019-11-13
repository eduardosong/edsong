import React, { Component } from 'react'
import './header.css'

class Header extends Component{
    render () {
        return (
            <React.Fragment>
                <div className="greeting">
                    <span className='title animated fadeIn'>Hey!</span>
                    <span className='title animated fadeIn name'>Eduardo Song</span>
                    <span className='title animated fadeIn'>here.</span>
                </div>
                <div className="navigation">
                    <div className='site-nav'>
                        <ul className='animated fadeInDown delay-025s'>
                            <li className='nav-item link-start'><a className='link' href="/">Home</a></li>
                            <li className='nav-item'><a className='link' href='/blog'>Blog</a></li>
                        </ul>
                    </div>
                    <div className="external-link">
                        <ul className='animated fadeInDown delay-025s'>
                            <li className='nav-item'><a className='link' href='https://twitter.com/EduardoSong2' target='_blank' rel="noopener noreferrer">Twitter</a></li>
                            <li className='nav-item link-end'><a className='link' href='https://www.linkedin.com/in/eduardo-song-3902/' target='_blank' rel="noopener noreferrer">LinkedIn</a></li>
                        </ul>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default Header;