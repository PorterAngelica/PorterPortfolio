import React from 'react'
import "./contact.scss"
import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { MdOutlinePhoneAndroid } from "react-icons/md";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { Link } from 'react-router-dom'

const Contact = () => {
    return (
        <div>
            <div className="main-container-contact">
                <div className="image">
                    <img src="./src/images/Screenshot_13-4-2024_16475_photos.google.com.jpeg" alt="" srcset="" />
                </div> 
                <div className="info">
                    <h3>Angelica Melany Porter</h3>
                    <p className='info-1'> <i> <strong>Full Stack Web Developer</strong></i> </p>
                </div>
                <div className="social">
                    <Link to="https://github.com/PorterAngelica">
                    <div className='social-icon'  >
                        <FaGithub size={37} color='blueviolet' />
                    </div>
                    </Link>

                    <Link to="https://www.linkedin.com/in/melany-porter/">
                    <div className='social-icon' >
                        <FaLinkedin size={37} color='blue' />
                    </div>
                    </Link>

                </div> <br />
                <div className="more-info">
                    <div className="phone">
                        <div className="more-info-icon">
                            <MdOutlinePhoneAndroid size={30} color='pink' />
                            <p><i>Phone</i></p>
                        </div>
                        <div className="detail">
                            <p> +1 770 480 0423</p>
                        </div> 
                    </div> <br />

                    <div className="email">
                        <div className="more-info-icon">
                            <MdEmail size={30} color='cornflowerblue' />
                            <p> <i>Email</i></p>
                        </div> 
                        <div className="detail">
                            <p>angelicamelanyporter@gmail.com </p>
                        </div>
                    </div> <br />

                    <div className="location">
                        <div className="more-info-icon">
                            <FaLocationDot size={30} color='crimson' />
                            <p> <i>Location</i> </p>
                        </div>
                        <p>Orlando, Florida, USA</p>
                    </div>
                </div> <br />

                
            </div>
            </div>
        
    )
}

export default Contact
