import React from 'react'
import "./navBar.scss"
import BurgerMenu from '../burgerMenu/BurgerMenu'

const NavBar = () => {
    return (
        <div className='navbar-container'>
            <nav>
                <div className="left">
                    <div className="image">
                        <img src="./src/images/Screenshot_13-4-2024_16475_photos.google.com.jpeg" alt="" />
                    </div>
                </div>
                <div className="right">
                    <BurgerMenu  />
                    
                </div>
            </nav>
        </div>
    )
}

export default NavBar
