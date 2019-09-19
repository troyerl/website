import React, { Component} from 'react'
import {Link} from "react-router-dom";
import routes from "../../../config/routes";

class Tab extends Component {
    render() {
        const {project} = this.props;
        return (
            <div className="tab shadow rounded-lg">
                <img src={project.photo} alt="project" className="image rounded-lg"/>
                <div className="overlay rounded-lg">
                    <div className="tab-title">{project.name}</div>
                    <div className="tab-description">{project.description}</div>
                    <div className="tab-languages">
                        <p style={{display: 'inline'}}>Languages: </p>
                        {
                            project.languages.map((lang, idx) => {
                                if(idx+1 === project.languages.length){
                                    return (
                                        <p className="text-center" style={{display: 'inline'}}>{lang} </p>
                                    )
                                }else {
                                    return (
                                        <p className="text-center" style={{display: 'inline'}}>{lang}, </p>
                                    )
                                }
                            })
                        }
                    </div>
                    <div className="arrow"><Link to={{pathname: `${routes.projectDetails}/${project.name}`, state: {project}}}>Learn More &#x2192;</Link></div>
                </div>
            </div>
        )
    }
}

export default Tab