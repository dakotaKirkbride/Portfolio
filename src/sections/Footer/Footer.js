
import React, { Component } from "react";
import './Footer.css';

// import svg logos
import {ReactComponent as LinkedInLogo} from '../../icons/iconmonstr-linkedin-3.svg';
import {ReactComponent as GitHubLogo} from '../../icons/iconmonstr-github-3.svg';

class Footer extends Component {

  render() {
    return (
      <nav className='footer'>
        <div className="footerComponents">
          <this.socialIcons/>
          <p id="designedBy">Designed and Developed by Dakota Kirkbride</p>
          <p>dakotakirkbride8@gmail.com</p>
        </div>
      </nav>
    )
  }


  socialIcons() {
    return(
      <nav className='socialIcons'>
        <ul className='mainSocialIcons'>
          <li className='mainSocialIcon'>
            <a href='https://www.linkedin.com/in/dakotakirkbride/' className='iconButton'><LinkedInLogo/></a>
          </li>
          <li className='mainSocialIcon'>
            <a href='https://github.com/dakotaKirkbride' className='iconButton'><GitHubLogo/></a>
          </li>
        </ul>
      </nav>
    )
  }
}

export default Footer;