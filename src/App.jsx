import React from 'react'
import Header from './components/Header/Header'
import './App.css'
import Hero from './components/Hero/Hero'
import Companies from './components/Companies/Companies'
import Residencies from './components/Residencies/Residencies'
import Value from './components/Value/Value'
import Contact from './components/Contact/Contact'
import GetStarted from './components/GetStarted/GetStarted'
import Footer from './components/Footer/Footer'
const App = () => {
  return (
    <div>
      <Header/>
      <Hero/>
      <Companies/>
      <Residencies/>
      <Value/>
      <Contact/>
      <GetStarted/>
      <Footer/>
    </div>
  )
}

export default App
