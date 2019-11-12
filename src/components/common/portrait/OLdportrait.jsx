import React, { Component } from 'react';
import './portrait.css'

class Portrait extends Component {
    render () {
        return (
            <React.Fragment>
                    <img className='user-portrait'src='portrait.jpg' alt='Eduardo Song'/>
            </React.Fragment>
        )
    }
}

export default Portrait;