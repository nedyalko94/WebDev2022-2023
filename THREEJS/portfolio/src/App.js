// import React, { Suspense ,useRef } from 'react' 
import { Route, Routes, BrowserRouter } from "react-router-dom"
import Menu from './Components/Navbar';
import Home from './Pages/Home'
import Contact from './Pages/Contact';
import Project from './Pages/Project'
import About from './Pages/About';
// import CanvasComponent from './Components/Canvas';



function App() {

  return (



    <BrowserRouter>
      <Menu />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/About' element={<About />} />
        <Route path='/Contact' element={<Contact />} />
        <Route path='/Project' element={<Project />} />
      </Routes>
    </BrowserRouter>


  )
}

export default App

