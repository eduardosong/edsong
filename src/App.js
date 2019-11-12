import React from 'react';
import './App.css';
import Header from './components/common/header/header.jsx'
import About from './components/common/about/about.jsx'
import WorkExperience from './components/common/workexperience/workexperience.jsx'
import Projects from './components/common/projects/projects.jsx'
import Footer from './components/common/footer/footer.jsx'

function App() {
  return (
    <React.Fragment>
      <div className="wrapper">
        <div className="page-item hero">
          <Header />
        </div>
        <div className="page-item content">
          <About />
          <WorkExperience />
          <Projects />
        </div>
        <div className="page-item footer">
          <Footer />
        </div>
      </div>


      {/* <div className="wrapper">
        <div className='hero'>
          <Header/>
        </div>
        <div className='content'>
          <About />
        </div>
      </div> */}
      
    </React.Fragment>
  );
}

export default App;
