import React from 'react'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Bestdev from './components/Bestdev'
import ImageSlider from './components/Imageslider'
import Littlebox from './components/Littlebox'
import Devstories from './components/Devstories'
import PicsSection from './components/PicsSection'
import Brands from './components/Brands'
import Testimonial from './components/Testimonial'
import Contributer from './components/Contributer'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Bestdev/>
      <ImageSlider/>
      <Littlebox/>
      <Devstories/>
      <PicsSection/>
      <Brands/>
      <Testimonial />
      <Contributer/>
      <Routes>
        <Route />
      </Routes>
    </div>
  )
}

export default App
