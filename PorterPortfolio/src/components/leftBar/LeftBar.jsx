import React from 'react'
import "./leftBar.scss"
import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { MdOutlinePhoneAndroid } from "react-icons/md";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";

const LeftBar = () => {
    return (
        <div>
            <div className="main-container-leftBar">
                <div className="image">
                    <img src="./src/images/Screenshot_13-4-2024_16475_photos.google.com.jpeg" alt="" srcset="" />
                </div> 
                <div className="info">
                    <h3>Angelica Melany Porter</h3>
                    <p className='info-1'> <i> <strong>Full Stack Web Developer</strong></i> </p>
                </div>
                <div className="social">
                    <div className='social-icon'  >
                        <FaGithub size={37} color='blueviolet' />
                    </div>
                    <div className='social-icon' >
                        <FaLinkedin size={37} color='blue' />
                    </div>
                </div> <br />
                <div className="more-info">
                    <div className="phone">
                        <div className="more-info-icon">
                            <MdOutlinePhoneAndroid size={30} color='pink' />
                        </div>
                        <div className="detail">
                            <p> <i>Phone</i> <br /> +1 770 480 0423</p>
                            
                        </div> 
                    </div>
                    <div className="email">
                        <div className="more-info-icon">
                            <MdEmail size={30} color='cornflowerblue' />
                        </div>
                        <div className="detail">
                            <p> <i>Email</i> <br /> angelicamelanyporter@gmail.com </p>
                        </div>
                    </div>
                    <div className="location">
                        <div className="more-info-icon">
                            <FaLocationDot size={30} color='crimson' />
                        </div>
                        <p> <i>Location</i> <br />Orlando, Florida, USA</p>
                    </div>
                </div> <br />

                <button>Download Cv</button>
            </div>
            </div>
        // </div>
    )
}

export default LeftBar
