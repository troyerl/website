import React, { Component} from 'react'
import ReactPlayer from 'react-player'

class ProjectDetails extends Component {
    state = {
        project: this.props.location.state
    }
    render() {
        const opts = {
            height: '390',
            width: '640',
            playerVars: { // https://developers.google.com/youtube/player_parameters
                autoplay: 1
            }
        };
        return (
            <div className="projectDetails">
                <h1 className="text-center pt-5 display-3">{this.state.project.project.name}</h1>
                <hr className="hr-sections"/>
                <p className="text-center pd-p">Description: {this.state.project.project.description}</p>
                <div className="description-area">
                    <ReactPlayer
                        className='react-player'
                        url={this.state.project.project.videoLink}
                        controls={true}
                    />
                </div>
                <div className="buttons mt-4">
                    <a href={this.state.project.project.codeLink} className="mr-4 pd-button"><button>View Code</button></a>
                    <a href={this.state.project.project.codeLink}><button>View Code</button></a>
                </div>
            </div>
        )
    }
}

export default ProjectDetails