import React, { Component} from 'react'
import Tab from "./Tab";
import Onward from './Images/Onward.png'

class Projects extends Component {
    render() {
        const projects = {
            indyCivic : {
                codeLink: 'https://github.com/djpeach/civichack',
                description: 'This is a test description that is very long and will show me where the put everything. I dont know if this will be centered but I am gonna see.',
                languages: ['Javascript', 'Vuejs', 'NodeJs'],
                name: 'Onward!',
                videoLink: 'https://www.youtube.com/watch?v=LrBn0g6g0H4',
                photo: Onward
            }
        }
        return (
            <div className="projects">
                <div className="pt-5">
                    <h4 className="display-4 text-center pt-2 titles">Projects</h4>
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