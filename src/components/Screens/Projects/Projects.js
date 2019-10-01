import React, { Component} from 'react'
import Tab from "./Tab";
import Onward from './Images/Onward.png'

class Projects extends Component {
    render() {
        const projects = {
            indyCivic : {
                codeLink: 'https://github.com/troyerl/onward',
                description: 'Built as a #indycivichack submission, and allows previously incarcerated citizens to set goals and earn points as they achieve them.',
                languages: ['Javascript', 'Vuejs', 'NodeJs'],
                name: 'Onward!',
                videoLink: 'https://www.youtube.com/watch?v=LrBn0g6g0H4',
                photo: Onward
            }
        }
        return (
            <div className="projects">
                <div className="pt-4">
                    <h4 className="display-4 text-center pt-5 titles project-title">Projects</h4>
                    <hr className="hr-sections"/>
                    <div className="projectTabs">
                        <Tab project={projects.indyCivic}/>
                    </div>
                </div>
            </div>
        )
    }
}

export default Projects