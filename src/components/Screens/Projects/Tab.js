import React, { Component} from 'react'

class Tab extends Component {
    render() {
        const {project} = this.props;
        return (
            <div className="tab shadow rounded-lg">
                <img src={project.photo} alt="project" className="image rounded-lg"/>
                <div className="overlay rounded-lg d-flex flex-column justify-content-center">
                    <div className="tab-title">{project.name}</div>
                    <div className="tab-description">{project.description}</div>
                    <div className="tab-languages">
                        <p style={{display: 'inline'}}>Languages: </p>
                        {
                            project.languages.map((lang, idx) => {
                                if(idx+1 === project.languages.length){
                                    return (
                                        <p key={idx} className="text-center" style={{display: 'inline'}}>{lang} </p>
                                    )
                                }else {
                                    return (
                                        <p key={idx} className="text-center" style={{display: 'inline'}}>{lang}, </p>
                                    )
                                }
                            })
                        }
                    </div>
                  <div className="text-center">
                    <button className="arrow"><a href={project.codeLink} target="_blank" rel = "noopener noreferrer">Source Code</a></button>
                  </div>
                </div>
            </div>
        )
    }
}

export default Tab