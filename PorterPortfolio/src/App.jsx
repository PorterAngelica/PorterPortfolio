import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Home from "./pages/home/Home.jsx"
import "./App.css"
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom"
import LeftBar from './components/leftBar/LeftBar.jsx'
import RightBar from './components/rightBar/RightBar.jsx'

function App() {
  
  const Layout = () => {
    return(
      <div>
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
      </Route>

    </Routes>
    </BrowserRouter>
    </>
)
}

export default App
