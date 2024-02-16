import React from 'react'
import '../App.css'
import '../css/cook.css'
import '../css/responsive.css'
import Navbar from "./Navbar"
import Home from './Home'
import Cards from './Cards'
import Benifits from './Benifits'
import Work from './Work'
import Chef from './Chef'
import Blog from './Blog'
import Footer from './Footer'

function Cook() {
  return (
    <div>
        <Navbar/>
        <Home/>
        <Cards/>
        <Benifits/>
        <Work/>
        <Chef/>
        <Blog/>
        <Footer/>
        
    </div>
  )
}

export default Cook