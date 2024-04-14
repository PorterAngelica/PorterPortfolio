import React from 'react'
import "./rightBar.scss"
import { IoPersonOutline } from "react-icons/io5";
import { AiOutlineProfile } from "react-icons/ai";
import { MdWorkOutline } from "react-icons/md";
import { SiTask } from "react-icons/si";
import { RiContactsLine } from "react-icons/ri";
import { GiSkills } from "react-icons/gi";

const RightBar = () => {
    return (
        <div>
            <div className="main-container-rightBar">
                <div className="about">
                    <div className="rightBar-icon">
                <IoPersonOutline size={30}  />
                    </div>
                <p><i>About</i></p>
                </div>
                <div className="resume">
                    <div className="rightBar-icon">
                <AiOutlineProfile size={33}  />
                <p> <i>Resume</i></p>
                    </div>
                </div>
                <div className="work">
                <MdWorkOutline  size={33} />
                <p><i>Experience</i></p>
                </div>
                <div className="skills">
                <GiSkills size={33}  />
                <p><i>Skills</i></p>
                </div>
                <div className="projects">
                <SiTask size={33}  />
                <p><i>Projects</i></p>
                </div>
                <div className="contact">
                <RiContactsLine  size={33} />
                <p><i>Contact</i></p>
                </div>
            </div>
        </div>
    )
}

export default RightBar
