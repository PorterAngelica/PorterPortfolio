import React from 'react'
import "./rightBar.scss"
import { IoPersonOutline } from "react-icons/io5";
import { AiOutlineProfile } from "react-icons/ai";
import { MdWorkOutline } from "react-icons/md";
import { SiTask } from "react-icons/si";
import { RiContactsLine } from "react-icons/ri";
import { GiSkills } from "react-icons/gi";
import {Link} from "react-router-dom"

const RightBar = () => {
    return (
        <div className='rightbar-div' >
            <div className="main-container-rightBar">
                <Link to="/" style={{textDecoration:"none", color:'inherit'}}>
                <div className="about">
                    <div className="rightBar-icon">
                <IoPersonOutline size={30}  />
                    </div>
                <p><i>About</i></p>
                </div>
                </Link>

                <Link to="/skills" style={{textDecoration:"none", color:'inherit'}}>
                <div className="skills">
                <GiSkills size={33}  />
                <p><i>Skills</i></p>
                </div>
                </Link>
                
                <Link to="/projects" style={{textDecoration:"none", color:'inherit'}}>
                <div className="projects">
                <SiTask size={33}  />
                <p><i>Projects</i></p>
                </div>
                </Link>

                <Link to="/experience" style={{textDecoration:"none", color:'inherit'}}>
                <div className="work">
                <MdWorkOutline  size={33} />
                <p><i>Experience</i></p>
                </div>
                </Link>
            </div>
        </div> 
    )
}

export default RightBar
