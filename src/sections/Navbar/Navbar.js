import React, { Component } from "react";
import "./Navbar.css";

import { Link, animateScroll as scroll } from "react-scroll";
import logo from "../../images/icons8-code-96-2.png";
import Resume from '../../files/DakotaKirkbrideResume.pdf';


export default class NavBar extends Component {
  scrollToTop = () => {
    scroll.scrollToTop();
    this.setClickFalse();
  };

  state = {clicked: false}

  handleClick = () => {
    this.setState({ clicked: !this.state.clicked})
  }

  setClickFalse = () => {
    this.setState({ clicked: false});
  }

  render() {
    return(
      <nav className="nav" id="navbar">
        <div className='navContent'>
          <img
            src={logo}
            className="navLogo"
            alt="Logo"
            onClick={this.scrollToTop}/>

          <div className="navBarIcon" onClick={this.handleClick}>
            <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}/>
          </div>

          <ul className={this.state.clicked ? 'navItems active': 'navItems'}>

            <li className='navItem'>
              <Link
                activeClass="active"
                to="aboutMe"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                onClick={this.setClickFalse}
              ><span>1. </span>About Me</Link>
            </li>

            <li className='navItem'>
              <Link
                activeClass="active"
                to="projects"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                onClick={this.setClickFalse}
              ><span>2. </span>Projects</Link>
            </li>

            <li className='navItem'>
              <Link
                activeClass="active"
                to="skills"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                onClick={this.setClickFalse}
              ><span>3. </span>Skills</Link>
            </li>

            <li className='navItem'>
              <Link
                activeClass="active"
                to="contact"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                onClick={this.setClickFalse}
              ><span>4. </span>Contact</Link>
            </li>
            <li className="navItem" id='resumeBttn'>
                <a href={Resume} without rel='noopener noreferrer' target='_blank'>Resume</a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

// export default NavBar;




