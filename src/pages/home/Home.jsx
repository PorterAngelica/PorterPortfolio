import React from 'react'
import LeftBar from '../../components/leftBar/LeftBar'
import RightBar from '../../components/rightBar/RightBar'
import "./home.scss"
import About from '../../components/about/About'

const Home = () => {
    
    return (
        <div className='home-main'>
            <About />
        </div>
    )
}

export default Home
