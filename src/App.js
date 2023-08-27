import React from 'react'
import Header from './Layouts/Header'
import Banner from './Components/Banner';
import Skills from './Components/Skills';
import Project from './Components/Project';
import Gallery from './Components/Gallery';
import Contact from './Components/Contact';
import Footer from './Layouts/Footer';
import './App.css'

function App () {

  return (
    <div className='app'>
    <Header/>
    <Banner/>
    <Skills/>
    <Project/>
    <Gallery/>
    <Contact/>
    <Footer/>
    </div>
  )
}

export default App
