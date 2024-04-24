import React from 'react'
import "./experience.scss"
import { MdOutlineWorkOutline } from "react-icons/md";
import { SiMcdonalds } from "react-icons/si";
import Timeline from '../../components/timeline/Timeline';


const Experience = () => {
    return (
        <div className='experience-main'>
            <div className="experience-header">
                <MdOutlineWorkOutline size={37} />  <h1> Work Experience</h1>
            </div>
            <p>I started my work journey at the age of 16, accumulating over 3 years of valuable experience 
                in customer service within the retail sector. Through various retail roles, I have honed essential skills and gained extensive experience necessary for success in the workplace. Collaborating effectively within teams,  I have demonstrated adaptability and a keen ability to learn quickly. A dedicated team player, I thrive under pressure, consistently achieving the goals set forth by the company.</p> <br />


            <Timeline />

        </div>
    )
}

export default Experience
