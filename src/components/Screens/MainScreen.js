import React, { Component} from 'react'
import { Link } from 'react-scroll'
import IosArrowDown from "react-ionicons/lib/IosArrowDown"

class MainScreen extends Component {
    render() {
        return (
            <div className="mainScreen">
                <div className="vertical">
                    <h4 className="display-4 screen-size text-center upper-title titles">Hello, I'm Logan Troyer.</h4>
                    <h4 className="display-4 screen-size text-center lower-title titles">I am a Front End Developer</h4>
                    <hr className="main-hr"/>
                    <div className="footer-social-links">
                        <a href="https://www.facebook.com/people/Logan-Troyer/100010308850368" target="_blank" rel = "noopener noreferrer" title="Facebook"><i className="fa fa-facebook"> </i></a>
                        <a href="https://twitter.com/troyer_logan21?lang=en" target="_blank" rel = "noopener noreferrer" title="Twitter"><i className="fa fa-twitter"> </i></a>
                        <a href="https://github.com/troyerl" target="_blank" rel = "noopener noreferrer" title="Github"><i className="fa fa-github"> </i></a>
                        <a href="https://www.linkedin.com/in/logan-troyer-97038014a/" target="_blank" rel = "noopener noreferrer" title="LinkedIn+"><i className="fa fa-linkedin"> </i></a>
                        <a href="https://www.instagram.com/troyer_logan21/?hl=en" target="_blank" rel = "noopener noreferrer" title="Instagram"><i className="fa fa-instagram"> </i></a>
                    </div>
                    <div className="footer">
                        <Link activeClass="active"
                              to="about"
                              spy={true}
                              smooth={true}
                              offset={-32}
                              duration={800}
                        >
                            <p className="text-center scroll-down">scroll down</p>
                            <IosArrowDown className="down-icon " color="white" fontSize="25px"/>
                        </Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default MainScreen