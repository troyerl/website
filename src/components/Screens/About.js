import React, { Component} from 'react'
import ProfilePicture from '../Images/IMG_6919.jpeg'
import Resume from '../Images/Resume.pdf'
import Fade from 'react-reveal/Fade'
import config from 'react-reveal/globals';

class About extends Component {
    render() {
        let languages = [ ['ReactJs', 60], ['HTML', 70], ['Python', 50], ['JavaScript', 60] , ['Java', 40], ['CSS', 70] , ['VueJs', 50] ];
        config({ ssrFadeout: true });
        return (
            <div className="about">
                <div className="pt-5">
                    <h4 className="display-4 text-center pt-2 titles">About</h4>
                    <hr className="hr-sections"/>
                </div>
                <Fade left ssrFadeout>
                    <div className="split left-side">
                        <img src = {ProfilePicture} className = "profilePic text-center" alt = "test"/>
                        <h1>Who am I?</h1>
                        <p>I am currently majoring in Computer Science with a minor in Mathematics </p>
                        <p className="aboutText">at Indiana University-Purdue University Indianapolis (IUPUI).</p>
                        <p className="aboutText">I am passionate about creating top of the line applications to fulfill</p>
                        <p className="aboutText">customer needs!</p>
                        <a href={Resume} target="_blank" rel = "noopener noreferrer"><button className="btn resumeButton">Resume</button></a>
                    </div>
                </Fade>
                    <div className="split right-side">
                        {
                            languages.map((lang, idx) => {
                                return (
                                    <Fade left delay={(idx+2) +'00'}>
                                        <div className="langs">
                                            <div className="outerBar">
                                                <div className="barTitle">
                                                    <p>{lang[0]}</p>
                                                </div>
                                                <div className="innerBar">
                                                        <div className="progressBar" style={{width: lang[1] + '%'}}>
                                                            <p>{lang[1]}%</p>
                                                        </div>
                                                </div>
                                            </div>
                                        </div>
                                    </Fade>
                                )
                            })
                        }
                    </div>
            </div>
        )
    }
}

export default About