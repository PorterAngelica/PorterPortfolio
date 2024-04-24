import React from 'react'
import "./skills.scss"
import { GiSnakeSpiral } from "react-icons/gi";
import { MdOutlineTerminal } from "react-icons/md";

const Skills = () => {
    return (
        <div className='skills-main-container'>
            <div className="skills-header">
                <h1> <GiSnakeSpiral /> Skills ------</h1>
            </div>

            <h2 className='languajes-header'>Languages</h2>
            <div className="languajes">
                <div className='skills-icon'>
                    <img width="25%" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg" alt="" /> <br />
                    <span>HTML5</span>
                </div>

                <div className="skills-icon">
                    <img width="25%" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg" alt="" /> <br />
                    <span >CSS</span>
                </div>

                <div className="skills-icon">
                    <img width="25%" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original-wordmark.svg" alt="" /> <br />
                    <span >Python</span>
                </div>

                <div className="skills-icon">
                    <img width="25%" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="" /> <br />
                    <span >JavaScript</span>
                </div>

                <div className="skills-icon">
                    <img width="25%" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original-wordmark.svg" alt="" /> <br /><span>Java</span>
                </div>

            </div><br />

            <h2 className='languajes-header'>Frameworks</h2>
            <div className="frameworks">
                <div className="skills-icon">
                    <img width="25%" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain-wordmark.svg" alt="" /><br />
                    <span>Django</span>
                </div>
                <div className="skills-icon">
                    <img width="25%" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original-wordmark.svg" alt="" /><br />
                    <span>Flask</span>
                </div>
                <div className="skills-icon">
                    <img width="25%" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original-wordmark.svg" alt="" /><br />
                    <span>Spring</span>
                </div>
                <div className="skills-icon">
                    <img width="25%" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg" alt="" /><br />
                    <span>Node.js</span>
                </div>
                <div className="skills-icon">
                    <img width="25%" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original-wordmark.svg" alt="" /><br />
                    <span>Express.js</span>
                </div>
                <div className="skills-icon">
                    <img width="25%" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original-wordmark.svg" alt="" /><br />
                    <span>Bootstrap</span>
                </div>
            </div> <br />

            <h2 className='languajes-header'>Database</h2>
            <div className="database">
                <div className="skills-icon">
                    <img width="25%" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original-wordmark.svg" alt="" /><br />
                    <span>MySQL</span>
                </div>
                <div className="skills-icon">
                    <img width="25%" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original-wordmark.svg" alt="" /><br />
                    <span>MongDB</span>
                </div>
            </div> <br />

            <h2 className='languajes-header'>Libraries</h2>
            <div className="libraries">
                <div className="skills-icon">
                    <img width="25%" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg" alt="" /><br />
                    <span>React</span>
                </div>

                <div className="skills-icon">
                    <img width="25%" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jquery/jquery-original-wordmark.svg" alt="" /><br />
                    <span>JQuery</span>
                </div>
                <div className="skills-icon">
                    <img width="25%" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/socketio/socketio-original-wordmark.svg" alt="" /><br />
                    <span>Socket.io</span>
                </div>
            </div><br />

                <h2 className='languajes-header'>Tools</h2>
            <div className="tools">
                <div className="skills-icon">
                    <MdOutlineTerminal size={47} />
                    <br /><span>Terminal</span></div>

                <div className="skills-icon">
                    <img width="25%" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-plain.svg" alt="" />
                    <br /><span>Git</span>
                </div>

                <div className="skills-icon"><img width="25%" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original-wordmark.svg" alt="" /><br />
                    <span>Github</span></div>
                <div className="skills-icon"><img width="25%" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original-wordmark.svg" alt="" /><br />
                    <span>Vs Code</span></div>
            </div> <br />

        </div >
    )
}

export default Skills
