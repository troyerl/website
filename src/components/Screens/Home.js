import React, { Component} from 'react'
import MainScreen from './MainScreen'
import About from "./About";
import Projects from "./Projects/Projects";
import Contact from "./Contact";
import Navbar from "./Navbar";

class Home extends Component {
    render() {
        return (
            <div>
                <div className="section">
                    <MainScreen/>
                </div>
                <div>
                    <Navbar/>
                    <div className="section">
                        <About/>
                    </div>
                    <div className="section">
                        <Projects/>
                    </div>
                    <div className="section">
                        <Contact/>
                    </div>
                </div>
            </div>
        )
    }
}

export default Home