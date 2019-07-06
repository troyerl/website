import React, { Component} from 'react'
import ProfilePicture from '../Images/IMG_6919.jpeg'
import Resume from '../Images/Resume.pdf'
import Fade from 'react-reveal/Fade'
import config from 'react-reveal/globals';

class About extends Component {
    render() {
        let languages = [ ['React', 50], ['HTML', 70], ['Python', 40], ['JavaScript', 60] , ['Java', 40], ['CSS', 70] , ['C++', 40] ];
        config({ ssrFadeout: true });
        return (
            <div className="about">
                <div className="pt-5">
                    <h4 className="display-4 text-center pt-2 titles">About</h4>
                    <hr className="hr-sections"/>
                </div>
                <Fade left ssrFadeout>
                    <div className="split left-side">
                        <img src = {ProfilePicture} className = "profilePic" alt = "test"/>
                        <h1>Who am I?</h1>
                        <p>I am currently majoring in Computer Science with a minor in Mathematics </p>
                        <p className="aboutText">at Indiana University-Purdue University Indianapolis (IUPUI).</p>
                        <p className="aboutText">I am passionate about creating top of the line applications to fulfill</p>
                        <p className="aboutText">customer needs!</p>
                        <a href={Resume} target="_blank" rel = "noopener noreferrer"><button className="resumeButton">Resume</button></a>
                    </div>
                </Fade>
                <Fade right delay={400} ssrFadeout>
                    <div className="split right-side">
                        <div className="outer-graph">
                            {languages.map(lang => {
                                return(
                                    <div className="graph">
                                        <div className="graphLang">
                                            <p><strong>{lang[0]}</strong></p>
                                        </div>
                                        <Fade left cascade>
                                            <div className="graphLength" style={{width: lang[1]-10 + '%'}}>
                                                <p>{(lang[1]+20) + '%'}</p>
                                            </div>
                                        </Fade>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </Fade>
            </div>
        )
    }
}

export default About