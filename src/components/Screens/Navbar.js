import React from 'react'
import { Link } from 'react-scroll'


const Navbar = () =>{
    return (
        <div className="nav justify-content-center">
            <Link activeClass="active"
                  className = "element first"
                  to="mainScreen"
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={800}
            >
                Home
            </Link>
            <Link activeClass="active"
                  className = "element"
                  to="about"
                  spy={true}
                  smooth={true}
                  offset={-32}
                  duration={800}
            >
                About
            </Link>
            <Link activeClass="active"
                  className = "element"
                  to="projects"
                  spy={true}
                  smooth={true}
                  offset={-20}
                  duration={800}
            >
                Projects
            </Link>
            <Link activeClass="active"
                  className = "element"
                  to="contact"
                  spy={true}
                  smooth={true}
                  offset={-20}
                  duration={800}
            >
                Contact
            </Link>
        </div>
    )
}

export default Navbar