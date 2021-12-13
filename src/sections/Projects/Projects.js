import React, { Component} from "react";
import "./Projects.css";
import covidTrackGif from '../../gifs/covidTrackGif.gif';
import capAirlinesGif from '../../gifs/capAirlinesGif.gif';

// import svg logos
import {ReactComponent as LinkedInLogo} from '../../icons/iconmonstr-linkedin-3.svg';
import {ReactComponent as GitHubLogo} from '../../icons/iconmonstr-github-3.svg';

class Projects extends Component {
  render() {
    return (
      <div className="projectsView" id="projects">
        <h1 id='projectTitle'>Projects</h1>
        <div id='projectContents'>
          <this.covidTrackProject/>
          <this.capAirlinesProject/>
        </div>
      </div>
    )
  }

  covidTrackProject() {
    return(
      <div className='covidTrackProject'>
          <div id='covidProjectText'>
            <h1 className='covidProjectTitle'><span>1. </span>CovidTrack</h1>
            <p id='covidProjectP1'>COVID-19 app which provides up-to-date data on Coronavirus cases across the country and throughout the world. Also acts as a symptom tracker, and provides resources and information on how to remain healthy through the pandemic.</p>
            <p id='covidProjectP2'>Written with Swift UI and UIkit, the app utilizes Core Data to manage queried data courtesy of the New York Times.</p>
            <div className='projectSocialIcons'>
              <nav className='socialIcons'>
                <ul className='mainSocialIcons'>
                  <li className='mainSocialIcon'>
                    <a href='https://github.com/dakotaKirkbride/CovidTrack' className='iconButton'><GitHubLogo/></a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
          <img id='covidGif'src={covidTrackGif}></img>
      </div>
    )
  }

  capAirlinesProject() {
    return(
      <div className='capAirlinesProject'>

          <img id='capGif' src={capAirlinesGif}/>
          <div className='capProjectText'>
            <h1 id='capProjectTitle'><span>2.</span> Capital Airlines</h1>
            <p id='capProjectP1'>An airline seating simulation that receives user input for passenger type and seating preference, and chooses the most ideal seating arrangement for the user. Users can log in to view their seats at a later time using their account credentials. </p>
            <p id='capProjectP2'>Written Python with the Graphics.py module used for the GUI. Persistence is achieved by reading/writing to an external csv file.</p>
            <div className='projectSocialIcons'>
              <nav className='socialIcons'>
                <ul className='mainSocialIcons'>
                  <li className='mainSocialIcon'>
                    <a href='https://github.com/dakotaKirkbride/CapitalAirlines' className='iconButton'><GitHubLogo/></a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>


      </div>
    )
  }
}

export default Projects;
