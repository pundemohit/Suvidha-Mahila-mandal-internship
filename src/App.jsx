import React from 'react'
import Nav from './components/navbar/Nav'
import Header from './components/header/Header'
import Program from './components/program/Program'
import About from './components/about/About'
import Events from './components/events/Events'
import Goals from './components/goals/Goals'
import Colab from './components/colab/Colab'
import Footer from './components/footer/Footer'

const App = () => {
  return (
    <>
        <Nav/>
        <Header/>
        <Program/>
        <About/>
        <Events/>
        <Goals/>
        <Colab/>
        <Footer/>
    </>
  )
}

export default App