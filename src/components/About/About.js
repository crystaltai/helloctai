import React, { Component } from 'react';
import './About.css';

class About extends Component {
  render() {
    return(
      <div className="About">
        {/* SECTION -- ABOUT -- */}
        <div className="section-about">
          <img src="img/Headshot1.png" alt="" className="profile-pic"/>
          <p className="intro">Hello, I'm Crystal Tai</p>
        </div>
      
        {/* SECTION -- EXPERIENCE -- */}
        <div className="main-inner">  
          <div className="section-experience">
            <h1 className="exp-label">Experience</h1>
            <br/>
            <p>
              <img src="img/EY.png" alt="" className="exp-icon"/>
              <b>EY</b>
              <span className="right">Jul 2018 - Present</span>
              <br/>
              <span>Assistant Director - Global Corporate Development</span>
              <span className="right"><em>Los Angeles, CA</em></span>
            </p>
            <br/>
            <br/>
            <p>
              <img src="img/EY.png" alt="" className="exp-icon"/>
              <b>EY</b>
              <span className="right">Oct 2016 - Jun 2018</span>
              <br/>
              <span>Strategy Development & Planning Associate - Global Corporate Development</span>
              <span className="right"><em>Los Angeles, CA</em></span>
            </p>
            <br/>
            <br/>
            <p>
              <img src="img/EWB.png" alt="" className="exp-icon"/>
              <b>East West Bank</b>
              <span className="right">Dec 2015 - Sep 2016</span>
              <br/>
              <span>Assistant Vice President - Financial Sponsors & Leveraged Finance</span>
              <span className="right"><em>Los Angeles, CA</em></span>
            </p>
            <br/>
            <br/>
            <p>
              <img src="img/HL.png" alt="" className="exp-icon"/>
              <b>Houlihan Lokey</b>
              <span className="right">Jul 2013 - Dec 2015</span>
              <br/>
              <span>Financial Analyst</span>
              <span className="right"><em>Los Angeles, CA</em></span>
            </p>
            <br/>
            <br/>
            <h1 className="exp-label">Education</h1>
            <br/>
            <p>
              <img src="img/UCLA.png" alt="" className="exp-icon"/>
              <b>UCLA</b>
              <span className="right">Sep 2009 - Jun 2013</span>
              <br/>
              <span>Bachelor of Arts, Economics</span>
              <span className="right"><em>Los Angeles, CA</em></span>
            </p>
            <br/>
            <br/>
            <p>
              <img src="img/HKU.png" alt="" className="exp-icon"/>
              <b>The University of Hong Kong</b>
              <span className="right">Aug 2011 - Dec 2011</span>
              <br/>
              <span>UCEAP Study Abroad Program</span>
              <span className="right"><em>Pokfulam, Hong Kong</em></span>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default About;