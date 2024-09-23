import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Feature from './components/Feature'
import AddDesign from './components/AddDesign'
import Connect from './components/Connect'
import SocialMedia from './components/SocialMedia'
import Footer from './components/Footer'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/navbar' element={<Navbar/>} />
        <Route path='/hero' element={<Hero/>} />
        <Route path='/feature' element={<Feature/>} />
        <Route path='/addDesign' element={<AddDesign/>} />
        <Route path='/connect' element={<Connect/>} />
        <Route path='/socialMedia' element={<SocialMedia/>} />
        <Route path='/footer' element={<Footer/>} />
      </Routes>
    </Router>
  )
}

export default App