import React, { Component} from 'react'
import Tab from "./Tab";

class Projects extends Component {
    render() {
        const projects = {
            indyCivic : {
                codeLink: '',
                description: '',
                languages: ['Javascript', 'Vuejs', 'NodeJs'],
                name: '',
                videoLink: '',
                photo: ''
            }
        }
        return (
            <div className="projects">
                <div className="pt-5">
                    <h4 className="display-4 text-center pt-2 titles">Projects</h4>
                    <hr className="hr-sections"/>
                    <div className="projectTabs">
                        <Tab/>
                    </div>
                </div>
            </div>
        )
    }
}

export default Projects