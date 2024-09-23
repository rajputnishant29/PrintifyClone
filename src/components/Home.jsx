import React from 'react'
import Hero from './Hero'
import Navbar from './Navbar'
import Feature from './Feature'
import AddDesign from './AddDesign'
import Connect from './Connect'
import SocialMedia from './SocialMedia'
import Footer from './Footer'

const Home = () => {
  return (
    <div>
        <Navbar/>
        <Hero/>
        <Feature/>
        <AddDesign/>
        <Connect/>
        <SocialMedia/>
        <Footer/>
    </div>
  )
}

export default Home