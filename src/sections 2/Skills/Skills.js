
// import svg logos
import {ReactComponent as PythonLogo} from '../../icons/pythonLogo.svg';
import {ReactComponent as CPlusPLusLogo} from '../../icons/cPlusPlusLogo.svg';
import {ReactComponent as MySQLLogo} from '../../icons/icons8-mysql-logo.svg';
import {ReactComponent as CSharpLogo} from '../../icons/icons8-c-sharp-logo.svg';
import {ReactComponent as HTMLLogo} from '../../icons/icons8-html-5.svg';
import {ReactComponent as CSSLogo} from '../../icons/icons8-css3.svg';
import {ReactComponent as JavaScriptLogo} from '../../icons/icons8-javascript.svg';
import {ReactComponent as ReactLogo} from '../../icons/icons8-react-native.svg';
import {ReactComponent as AzureFundsLogo} from '../../icons/azureFunds.svg';
import {ReactComponent as DBFundsLogo} from '../../icons/dbFunds.svg';
import {ReactComponent as D365Logo} from '../../icons/d365Cert.svg';
import {ReactComponent as SwiftLogo} from '../../icons/icons8-swift.svg'
import {ReactComponent as VMWareLogo} from '../../icons/icons8-vmware.svg';
import {ReactComponent as GitLogo} from '../../icons/icons8-git.svg';
import {ReactComponent as AzureLogo} from '../../icons/icons8-azure.svg';

import React, { Component} from "react";
import "./Skills.css"

class Skills extends Component {
  render() {
    return (
      <div className="skillsView" id="skills">
        <h1 id='skillsTitle'>Skills</h1>
        <div className='skillsViewContents'>
          <div className='skillCards'>
            <div id='skillCardsLeft'>
              <this.backEndskillCard/>
              <this.frontEndskillCard/>
            </div>
            <div id='skillCardsRight'>
              <this.miscSkillCard/>
              <this.certsSkillCard/>
            </div>
          </div>
        </div>
      </div>
    )
  }

  backEndskillCard() {
    return(
      <div className='skillCard' id='skillCardBackend'>
        <h1 className='skillCardTitle'>Back-End</h1>
        <div className='skillCardLogos'>
          <a className='skillCardLogo' href='#'><PythonLogo/></a>
          <h4 className='skillCardLogoLabel'>Python</h4>


          <a className='skillCardLogo' href='#'><CPlusPLusLogo/></a>
          <h4 className='skillCardLogoLabel'>C ++</h4>


          <a className='skillCardLogo' href='#'><CSharpLogo/></a>
          <h4 className='skillCardLogoLabel'>C #</h4>

          <a className='skillCardLogo' href='#'><MySQLLogo/></a>
          <h4 className='skillCardLogoLabel'>MySQL</h4>
        </div>
        
      </div>
    )
  }

  miscSkillCard() {
    return(
      <div className='skillCard' id='skillCardOther'>
        <h1 className='skillCardTitle'>Other</h1>
        <div className='skillCardLogos'>
          <a className='skillCardLogo' href='#'><SwiftLogo/></a>
          <h4 className='skillCardLogoLabel'>Swift</h4>


          <a className='skillCardLogo' href='#'><VMWareLogo/></a>
          <h4 className='skillCardLogoLabel'>VMware</h4>


          <a className='skillCardLogo' href='#'><GitLogo/></a>
          <h4 className='skillCardLogoLabel'>Git</h4>

          <a className='skillCardLogo' href='#'><AzureLogo/></a>
          <h4 className='skillCardLogoLabel'>Azure</h4>
        </div>
        
      </div>
    )
  }

  frontEndskillCard() {
    return(
      <div className='skillCard' id='skillCardFrontend'>
        <h1 className='skillCardTitle'>Front-End</h1>
        <div className='skillCardLogos'>
          <a className='skillCardLogo' href='#'><HTMLLogo/></a>
          <h4 className='skillCardLogoLabel'>HTML</h4>


          <a className='skillCardLogo' href='#'><CSSLogo/></a>
          <h4 className='skillCardLogoLabel'>CSS</h4>


          <a className='skillCardLogo' href='#'><JavaScriptLogo/></a>
          <h4 className='skillCardLogoLabel'>JavaScript</h4>

          <a className='skillCardLogo' href='#'><ReactLogo/></a>
          <h4 className='skillCardLogoLabel'>React</h4>
        </div>
        
      </div>
    )
  }

  certsSkillCard() {
    return(
      <div className='skillCard' id='skillCardCerts'>
        <h1 className='skillCardTitle'>Certs</h1>
        <div className='skillCardLogos'>
          <a className='skillCardLogo' href='https://www.credly.com/badges/4ab81b8d-dbd2-4aea-a56f-54d64bb6e094/public_url'><AzureFundsLogo/></a>
          <h4 className='skillCardLogoLabel'>AZ-900</h4>


          <a className='skillCardLogo' href='https://www.credly.com/badges/fa7f1e7b-58dc-490d-915a-2e0b2106f55b/public_url'><D365Logo/></a>
          <h4 className='skillCardLogoLabel'>MB-920</h4>


          <a className='skillCardLogo' href='https://www.credly.com/badges/7c9253c4-5825-4ebf-9479-fe5a7fffa6b0/public_url'><DBFundsLogo/></a>
          <h4 className='skillCardLogoLabel'>MTA 98-364</h4>

        </div>
        
      </div>
    )
  }

}
export default Skills;


{/* <a href='https://www.credly.com/badges/4ab81b8d-dbd2-4aea-a56f-54d64bb6e094/public_url'>
<AzureFundsLogo/>
</a>

<a href='https://www.credly.com/badges/fa7f1e7b-58dc-490d-915a-2e0b2106f55b/public_url'>
<D365Logo/>
</a>


<a href='https://www.credly.com/badges/7c9253c4-5825-4ebf-9479-fe5a7fffa6b0/public_url'>
<DBFundsLogo/>
</a> */}