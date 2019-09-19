import React, { Component} from 'react'

class Skills extends Component {
    render() {
        return (
            <div className="skills">
                <div className="pt-5 justify-content-center">
                    <h4 className="display-4 text-center pt-2 titles">Skills</h4>
                    <hr className="hr-sections"/>
                    <div className="outer-tab mt-4">
                        <h4 className="pt-3 pl-3">HTML/CSS</h4>
                        <hr/>
                    </div>
                    <div className="outer-tab mt-4">
                        <h4 className="pt-3 pl-3">Frameworks</h4>
                        <hr/>
                    </div>
                    <div className="outer-tab mt-4">
                        <h4 className="pt-3 pl-3">Languages</h4>
                        <hr/>
                    </div>
                    <div className="outer-tab mt-4 mb-5">
                        <h4 className="pt-3 pl-3">Other</h4>
                        <hr/>
                    </div>
                </div>
            </div>
        )
    }
}

export default Skills