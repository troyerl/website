import React, { Component} from 'react'
import ReactPlayer from 'react-player'
import routes from '../../../config/routes'
import {Link} from "react-router-dom";

class ProjectDetails extends Component {
    state = {
        project: this.props.location.state
    }
    render() {
        return (
            <div className="projectDetails">
                <h1 className="text-center pt-4 display-3">{this.state.project.project.name}</h1>
                <hr className="hr-sections"/>
                <p className="text-center pd-p"><strong>Description:</strong> {this.state.project.project.description}</p>
                <div className="mb-2 text-center">
                    <p className="text-center pd-lang"><strong>Languages: </strong></p>
                    {
                        this.state.project.project.languages.map((lang, idx) => {
                            if(idx+1 === this.state.project.project.languages.length){
                                return (
                                    <p className="text-center pd-lang">{lang} </p>
                                )
                            }else {
                                return (
                                    <p className="text-center pd-lang">{lang}, </p>
                                )
                            }
                        })
                    }
                </div>
                <div className="description-area">
                    <ReactPlayer
                        className='react-player'
                        url={this.state.project.project.videoLink}
                        controls={true}
                    />
                </div>
                <div className="buttons mt-4">
                    <a href={this.state.project.project.codeLink} className="mr-4"><button className="pd-button">View Code</button></a>
                    <Link to={routes.root}><button className="pd-button">Back to Homepage</button></Link>
                </div>
            </div>
        )
    }
}

export default ProjectDetails