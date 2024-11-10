import React from 'react'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Bestdev from './components/Bestdev'
import ImageSlider from './components/Imageslider'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Bestdev/>
      <ImageSlider/>
      <Routes>
        <Route />
      </Routes>
    </div>
  )
}

export default App