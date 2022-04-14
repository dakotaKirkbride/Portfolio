import mePhoto from '../../images/mePicture.png';

import './AboutMe.css';


import React, { Component} from "react";

class AboutMe extends Component {
  
  state = {
    div1Shown: true,
    div2Shown: false,
    div3Shown: false
  }

  render() {
    return (

      <div className="aboutMeView" id='aboutMe'>
        <h1 id='aboutMeTitle'>About Me</h1>
        <div id='aboutMeContents'>
        <div className='aboutMeTopContents'>
          <div className='aboutMeTopText'>
            <h2><span>1.</span> Intro</h2>
            <p className='aboutMeP'>
              Hello! My name is Dakota, and I'm senior computer science and business student at Capital Univesity. Before coming to Capital, I had my eyes set on management or finance as potential career choices; while I'm still passionate about growing my business acumen, I've found a new passion for software engineering during my time in school. So far, I've gained a strong knowledge of many back-end development concepts using Python, C++, and C#. 
            </p>
            <p className='aboutMeP'>
              In addition, my internship experience at both SafeAuto and Avanade have tremendously helped me to grow my knowledge of Software Development, Business Analysis, and IT support within a business context. As I move through my final year of college, I'm excited to grow my skillsets in front-end/app development and data science.
            </p>
          </div>
          <div className='aboutMeTopPicture'>
            <img id='mePhoto' src={mePhoto}/>
          </div>
        </div>
        <div id='workDiv'>
          <h2><span>2.</span> Work Experience</h2>
          <ul className='aboutButtons'>
            <li> <button className='aboutButton' onClick={() => this.handleButton1Click()}>Avanade</button></li>
            {
              this.state.div1Shown ?
                (<this.displayDiv1/>)
                : (<div></div>)
            }
            <li><button className='aboutButton' onClick={() => this.handleButton2Click()}>SafeAuto</button></li>
            {
              this.state.div2Shown ?
                (<this.displayDiv2/>)
                : (<div></div>)
            }
            <li><button className='aboutButton' onClick={() => this.handleButton3Click()}>Capital</button></li>
            {
              this.state.div3Shown ?
                (<this.displayDiv3/>)
                : (<div></div>)
            } 
          </ul>
      </div>
        </div>
      </div>
    );
  }

  handleButton1Click() {
    this.setState({
      div1Shown: true,
      div2Shown: false,
      div3Shown: false
    });
  }

  handleButton2Click() {
    this.setState({
      div1Shown: false,
      div2Shown: true,
      div3Shown: false
    });
  }

  handleButton3Click() {
    this.setState({
      div1Shown: false,
      div2Shown: false,
      div3Shown: true
    });
  }

  displayDiv1() {
    return (
      <div className='workExpDiv'>
        <h1 className='workExpTitle'>Software Developer Intern at <a href='https://www.avanade.com/en-us' id='avanadeLink'>Avanade</a></h1>
        <h3>June 2021 – August 2021</h3>
        <ul className='workBullets'>
          <li className='workBullet'>Developed business-critical solutions within Dynamics 365 Finance and Operations for company clients</li>
          <li className='workBullet'>Coordinated with development team to determine best practices for handling incoming client issues</li>
          <li className='workBullet'>Leveraged Azure DevOps for code version control and testing throughout development cycles for client projects</li>
        </ul>
      </div>
    )
  }

  displayDiv2() {
    return (
      <div className='workExpDiv'>
        <h1 className='workExpTitle'>Junior Systems Engineer at <a href='https://safeauto.com' id='safeAutoLink'>SafeAuto</a></h1>
        <h3>May 2020 – May 2021</h3>
        <ul className='workBullets'>
          <li className='workBullet'>Helped shift the company towards full-virtualization using VMware Horizon desktop pool and server farm implementation to meet the demands of extended work-from-home</li>
          <li className='workBullet'>Assisted team with numerous tasks including: hardware imaging, software roll outs to end users, and designing VDI architecture</li>
          <li className='workBullet'>Balanced academic course-load with everyday duties as a member of the End-User Compute team on a part-time basis</li>
        </ul>
    </div>
    )
  }

  displayDiv3() {
    return (
      <div className='workExpDiv'>
        <h1 className='workExpTitle'>IT Helpdesk Assistant at <a href='https://www.capital.edu' id='capitalLink'>Capital University</a></h1>
        <h3>January 2020 – May 2020</h3>
        <ul className='workBullets'>
          <li className='workBullet'>Provided maintenance, technical support, and troubleshooting of desktop computers, printers, telephones, and other devices to ensure effective use of resources among students and faculty</li>
          <li className='workBullet'>Utilized strong communication skills when answering calls and acknowledging Helpdesk emails</li>
        </ul>
    </div>
    )
  }

}

export default AboutMe;