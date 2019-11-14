import React from 'react'
import './resume.css'

const Resume = ({ handleClose, show }) => {
    const showHideClassName = show ? "modal display" : "modal display-none";
  
    return (
      <div className={showHideClassName}>
        <section className="animated fadeIn modal-main">
            <iframe title='resume' className='resume' src="https://drive.google.com/file/d/1atSP0SWmZ8TJEr-eZQlqrB0rBz6QtsiP/preview"></iframe>
            <div className='resume-options'>
              <button onClick={handleClose}>close</button>
            </div>
        </section>
      </div>
    );
  };

  export default Resume;