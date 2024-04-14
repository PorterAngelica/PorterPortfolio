import React from 'react'
import "./projects.scss"
import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";
import { Link } from 'react-router-dom';

const Projects = () => {
    return (
        <div className='projects-main'> <br />
            <div className="projects">
            <h1>Zip Market</h1>
                <div className="project-items">
                <div className="description">
                    <p>Zip Market is web application created for our final Java project. <br /> My teammates and I collaborate to built Zip market, a web application  designed to facilitate the donation <br /> and discovery of items within your local area. <br /> By simply entering your zip code, <br /> users can browse and contribute items that are available for donation.</p>
                </div>
                <div className="image">
                    <img  src="./src/images/zipmarket.png" alt="" />
                </div>
            </div>
                <div className="socials">
                    <Link to="https://github.com/CarolineMoraesOliveira/ZipMarket">
                <FaGithub size={37} color='blueviolet' />
                    </Link>
                <IoLogoYoutube size={37} color='red'/>
                </div>
            </div> <br />
            <hr /> <br />

            <div className="projects">
            <h1>E-buy</h1>
                <div className="project-items">
                <div className="description">
                    <p>eBuy is a full-stack e-commerce application <br /> built using JavaScript, React, Node.js, Express, <br /> MySQL, SCSS, and React Router. This application replicates <br /> the functionality of popular e-commerce platforms <br /> like eBay, allowing users to browse through <br /> various product categories, make purchases, <br /> and even sell their own products.</p>
                    
                </div>
                <div className="image">
                    <img src="./src/images/Screenshot 2024-04-14 135502.png" alt="" />
                </div>
            </div>
                <div className="socials">
                    <Link to="https://github.com/PorterAngelica/e-buy">
                <FaGithub size={37} color='blueviolet' />
                    </Link>
                <IoLogoYoutube size={37} color='red'/>
                </div>
            </div> <br />
            <hr /> <br />

            <div className="projects">
            <h1>Weather-App</h1>
                <div className="project-items">
                <div className="description">
                    <p>The Weather App is a simple web application <br /> built using React and the OpenWeather API to provide users <br /> with real-time weather information for locations worldwide. With intuitive design and easy-to-use interface, <br /> users can quickly check current weather conditions, as well as forecast data for the next nine hours.</p>
                    
                </div>
                <div className="image">
                    <img src="./src/images/image.png" alt="" />
                </div>
            </div>
                <div className="socials">
                <Link to="https://github.com/PorterAngelica/weather_app">
                <FaGithub size={37} color='blueviolet' />
                </Link>
                <IoLogoYoutube size={37} color='red'/>
                </div>
            </div> <br />
            <hr /> <br />

            <div className="projects">
            <h1>Social Media clone</h1>
                <div className="project-items">
                <div className="description">
                    <p>Social Media Clone This project is a full-stack social media clone <br /> built using React, Express.js, Node.js, SCSS, MySQL, and Multer. <br /> It replicates the core functionalities of popular social media platforms, <br /> allowing users to interact with posts, follow other users, <br /> update their profiles, and share content seamlessly.</p>
                    
                </div>
                <div className="image">
                    <img src="./src/images/Screenshot 2024-04-14 160741.png" alt="" />
                </div>
            </div>
                <div className="socials">
                    <Link to="https://github.com/PorterAngelica/Social-Media">
                <FaGithub size={37} color='blueviolet' />
                </Link>
                <IoLogoYoutube size={37} color='red'/>
                </div>
            </div> <br />

            <div className="projects">
                <div className="image"></div>
                <div className="description"></div>
                <div className="socials"></div>
            </div>
        </div>
    )
}

export default Projects
