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

            {/* <div className="work-details">
                <div className="work-details-header">
                    <h3> <SiMcdonalds className='mc' color='yellow' size={25} /> McDonnald's - crew member</h3>
                    <h5> Groveland, FL | 12.23 - 01.24</h5>
                </div>

                <p>Demonstrated proficiency in maintaining cleanliness and hygiene standards in accordance with McDonald's protocols</p>
                <p>Provided exceptional customer service, ensuring satisfaction and repeat business </p>
                <p>Operated various kitchen equipment and machinery efficiently and safely </p>
                <p>Collaborated effectively with team members to achieve operational goals and maintain a positive work environment </p>
                <p>Adhered to food safety guidelines and procedures to guarantee the well-being of customers </p>
            </div> <br /> <hr />

            <div className="work-details">
                <div className="work-details-header">
                    <h3> Lotte Plaza Market - Cashier </h3>
                    <h5> Orlando, FL | 03.22 - 09.22</h5>
                </div>
                <p>Utilized exceptional communication and customer service skills to ensure a seamless checkout experience, addressing customer
                    inquiries and concerns promptly, fostering a positive shopping environment.</p>
            </div><br /> <hr />

            <div className="work-details">
                <div className="work-details-header">
                    <h3>Bravos Supermarket - Cashier</h3>
                    <h5> Clermont, FL | 06.21 - 12.21</h5>
                </div>
                <p>Employed strong teamwork skills to collaborate effectively with colleagues, ensuring accuracy in financial transactions and
                    maintaining accountability in money counting, leveraging numerical proficiency to uphold precise monetary records.</p>
            </div><br /> <hr />

            <div className="work-details">
                <div className="work-details-header">
                    <h3> Rubios Mexican Store</h3>
                    <h5> Mascotte, FL | 12.20 - 05.21</h5>
                </div>

                <p>Employed attention to detail and adherence to culinary instructions to support kitchen operations, contributing to efficient food
                    preparation and maintaining high-quality standards in meal production</p>
            </div> */}

            <Timeline />

        </div>
    )
}

export default Experience
