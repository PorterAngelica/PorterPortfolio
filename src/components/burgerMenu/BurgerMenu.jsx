import React from 'react'
import {slide as Menu} from "react-burger-menu"
import { IoIosMenu } from "react-icons/io";
import "./burgermenu.css"

class BurgerMenu extends React.Component {

    render() {
        return (
            <Menu  right customBurgerIcon={<IoIosMenu  color='white' />}  width={"40%"}>
                <ul>
                    <li><a className='menu-item' href="/">About</a></li>
                    <li><a className='menu-item' href="/skills">Skills</a></li>
                    <li><a className='menu-item' href="/projects">Projects</a></li>
                    <li><a className='menu-item' href="/experience">Experience</a></li>
                    <li><a className='menu-item' href="/contact">Contact</a></li>
                </ul>
            </Menu>
        );
    }
}


export default BurgerMenu;
