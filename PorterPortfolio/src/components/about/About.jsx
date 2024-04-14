import React from 'react'
import "./about.scss"

const About = () => {
    return (
        <div className='about-main-container'>
            <div className="header">
            <h1>About ------</h1>
            <p> Hola! I'm Angelica Porter, I'm from El Salvador sv, currently living in Orlando, Florida USA. I enjoy the concept of building and creating things solely with code and I find it amazing that you can bring your ideas to life just by writing a few lines of code! I found my passion for computers and programming since I was a child, I used to be motivated by the movies I watched as a child about hackers and programmers. I graduate from High School in 2022 and 6 months after my graduation I decided to join a Tech Bootcamp to finally makeof my passion, my career. </p>
            <div className="gift">
            <img src="./src/images/about.gif" alt="" />
            <span>Y recuerda! Si puedes imaginarlo, puedes programarlo y crearlo!</span>
            </div>
            </div>
        </div>
    )
}

export default About
