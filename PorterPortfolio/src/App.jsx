import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Home from "./pages/home/Home.jsx"
import "./App.css"
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom"
import LeftBar from './components/leftBar/LeftBar.jsx'
import RightBar from './components/rightBar/RightBar.jsx'
import Skills from './pages/skills/Skills.jsx'
import Projects from './pages/projects/Projects.jsx'
import Experience from './pages/experience/Experience.jsx'
import NavBar from './components/navBar/NavBar.jsx'

function App() {
  
  const Layout = () => {
    return(
      <div>
        <NavBar />
    <div style={{display:'flex'}}>
      <LeftBar />
      <div style={{flex:'6'}}>
        <Outlet />
      </div>
      <RightBar />
    </div>
    </div>
    );
  };

  return (
    <>
    <BrowserRouter>
    <Routes>

      <Route path='/' element={ <Layout /> }>
        <Route index element={ <Home/> } />
        <Route path='/skills' element={ <Skills />} />
        <Route path='/projects' element={ <Projects />} />
        <Route path='/experience' element={ <Experience />} />
        <Route path='/contact' element={ <Skills />} />
      </Route>

    </Routes>
    </BrowserRouter>
    </>
)
}

export default App
